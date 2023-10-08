const prompt = require("prompt-sync")({ sigint: true });

const value = prompt("Input Value: ");

if (value < 0) {
  return console.error("Tidak bisa input bilangan negatif");
} else if (value % 2 !== 0) {
  return console.error("Tidak bisa input bilangan ganjil");
} else {
  return console.log(Math.sqrt(value));
}
