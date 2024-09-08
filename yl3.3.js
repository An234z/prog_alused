const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Sisestage täringute arv: `,täringud => {
        for (let i = 0; i < täringud; i++) {
            let random = Math.floor(Math.random() * 6)+ 1;
            console.log(random)
        }
        rl.close();
        }) 