"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@actions/core");
const aws_sdk_1 = require("aws-sdk");
const inputs_1 = require("./inputs");
exports.runMain = async () => {
    const inputs = inputs_1.accumulateInputs();
    await exportAssumedRoleCredentials({
        RoleArn: inputs["aws-role-arn"],
        RoleSessionName: inputs["aws-role-session-name"],
    });
};
const exportAssumedRoleCredentials = async (req) => {
    const sts = new aws_sdk_1.STS({});
    const { Credentials } = await sts.assumeRole(req).promise();
    if (Credentials === undefined) {
        throw new Error("No Credentials got");
    }
    exportSecretValue("AWS_ACCESS_KEY_ID", Credentials.AccessKeyId);
    exportSecretValue("AWS_SECRET_ACCESS_KEY", Credentials.SecretAccessKey);
    exportSecretValue("AWS_SESSION_TOKEN", Credentials.SessionToken);
};
const exportSecretValue = (name, value) => {
    core_1.exportVariable(name, value);
    core_1.setSecret(value);
};
