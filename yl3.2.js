const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let i = 0
let porgandid = 0

rl.question(`Sisestage ringide arv: `, ringideArv => {
    while (i < parseInt(ringideArv)) {
        i++ 
        if (parseInt(i)%2 === 0) {
            porgandid += parseInt(i)  
        }
    }
    console.log(porgandid)
    rl.close();
    }) 