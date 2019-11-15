import { setFailed } from "@actions/core";
import { runMain } from "./main";

const run = async () => {
  try {
    await runMain();
  } catch (e) {
    setFailed(e + "");
  }
};

run();
