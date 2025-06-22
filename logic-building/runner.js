import * as p_Js from "./basic-problems.js";

const [, , funcName, ...arg] = process.argv;

if (p_Js[funcName]) {
  console.log(`function: ${funcName} complinmg in js`);
  console.log(p_Js[funcName](...arg));
}
