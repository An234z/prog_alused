const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Sisestage mitu korda aratada: `, aratus => {
    for (let i = 0; i < aratus; i++) {
  console.log("Touse ja sara!")
  rl.close();
}})
