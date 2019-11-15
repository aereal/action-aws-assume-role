import { exportVariable } from "@actions/core";
import { STS } from "aws-sdk";
import { accumulateInputs } from "./inputs";

export const runMain = async () => {
  const inputs = accumulateInputs();
  await exportAssumedRoleCredentials({
    RoleArn: inputs["aws-role-arn"],
    RoleSessionName: inputs["aws-role-session-name"],
  });
};

const exportAssumedRoleCredentials = async (req: STS.AssumeRoleRequest) => {
  const sts = new STS({});
  const { Credentials } = await sts.assumeRole(req).promise();
  if (Credentials === undefined) {
    throw new Error("No Credentials got");
  }
  exportVariable("AWS_ACCESS_KEY_ID", Credentials.AccessKeyId);
  exportVariable("AWS_SECRET_ACCESS_KEY", Credentials.SecretAccessKey);
  exportVariable("AWS_SESSION_TOKEN", Credentials.SessionToken);
};
