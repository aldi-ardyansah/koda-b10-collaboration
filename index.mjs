
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

async function temperatureConverter() {
    const rl = readline.createInterface({ input, output });

    try {
        const suhuCelcius = Number(await rl.question(
            "Masukkan suhu celcius: "
        ));

        if (!Number.isFinite(suhuCelcius)) {
            console.log("Input harus berupa angka!");
            return;
        }

        const formula = {
            suhuReamur: 4 / 5 * suhuCelcius,
            suhuFahrenheit: (9 / 5 * suhuCelcius) + 32,
            suhuKelvin: suhuCelcius + 273.15
        };

        const hasil = Object.entries(formula).map(([satuan, nilai]) => {
            return satuan + ": " + Number(nilai.toFixed(2));
        });

        console.log("");
        console.log("Suhu Celcius: " + suhuCelcius);
        console.log(hasil.join("\n"));

        return formula;
    }
    finally {
        rl.close();
    }
}

temperatureConverter();