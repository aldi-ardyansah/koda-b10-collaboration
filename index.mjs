import { getInputWithSimpleValidation } from "./lib/interactive.js";

async function main() {
  while (true) {
    const answer = await getInputWithSimpleValidation("\nMasukkan derajat celsius:\n");

    if (answer instanceof Error) {
      console.log(answer.message);
      continue;
    }

    // TODO: apply conversions
    const fahrenheit = 0;
    const kelvin = 0;
    const reamur = 0;

    console.log("Fahrenheit: ", fahrenheit);
    console.log("Kelvin: ", kelvin);
    console.log("Réamur: ", reamur);
  }
}

main()
  .catch(() => {
    console.log("\nWhoops, ada kesalahan");
    console.log("Keluar dari program...");
  });
