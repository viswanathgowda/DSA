import * as p_Js from "./array.js";

const [, , funcName, ...arg] = process.argv;

if (p_Js[funcName]) {
  const parsedArg = arg.map((a) => {
    try {
      return JSON.parse(a);
    } catch {
      return a;
    }
  });
  console.log(`function: ${funcName} complinmg in js`);
  console.log(p_Js[funcName](...parsedArg));
}
