// import { exampleExport } from "../utils/example.js"; // error
import { exampleExport } from "#src/utils/example.js"; // also error

export function doubleUtilExample() {
  const utilExampleValue = exampleExport();
  return utilExampleValue * 2;
}
