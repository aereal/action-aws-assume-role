import { getInput } from "@actions/core";
import action from "../action.json";

type ActionInput = keyof typeof action["inputs"];

export const accumulateInputs = (): Record<ActionInput, string> => {
  const accum: Partial<Record<ActionInput, string>> = {};
  for (const [name, options] of Object.entries(action.inputs)) {
    accum[name as ActionInput] = getInput(name, options);
  }
  return accum as any;
};
