import { createInterface } from "node:readline/promises";

export async function getInputWithSimpleValidation(ques){

  const inter = createInterface({
    inout: process.stdin,
    output: process.stdout
  });

  const input = Number(await inter.question(ques));
  inter.close();


  if(Number.isNaN(input)) {
    return new Error("Input yang dimasukan tidak valid");
  }

  return input;

}