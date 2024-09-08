const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let x = 0;
õunad = 14;

rl.question(`Mitu pöialpoissi soovib õunu? (0-7) `, õunadeArv => {
    for (let i = 0; i < õunadeArv; i++) {
        const random = Math.floor(Math.random() * 2)+ 1;
        console.log(random)
        x += random
    } 
    console.log(`Lumivalgukesele jäi ${õunad - x} õuna ` )
    
    
    rl.close();
    }) 