const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Sisestage oma vanus: `, vanus => {
    rl.question(`Sisestage oma sugu (M, m või N, n): `, sugu => {
        rl.question(`Sisestage treeningu tüüp (1- tervisetreening, 2- põhivastupidavuse treening, 3- intensiivne aeroobne treening)): `, tüüp => {
    let Mpulss = 220 - vanus
    let Npulss = 206 - ((vanus * 88) / 100)
    if (sugu == "m" || sugu == "M") {
        if (tüüp == 1) {
            let minpulss = ((50 * Mpulss) / 100)
            let maxpulss = ((70 * Mpulss) / 100)
            console.log(`vahim pulss ${Math.round(minpulss)}, suurim pulss ${Math.round(maxpulss)}`);
        
        } else if (tüüp == 2) {
            let minpulss = ((70 * Mpulss) / 100)
            let maxpulss = ((80 * Mpulss) / 100)
            console.log(`vahim pulss ${Math.round(minpulss)}, suurim pulss ${Math.round(maxpulss)}`);
        } else if (tüüp == 3) {   
            let minpulss = ((80 * Mpulss) / 100)
            let maxpulss = ((87 * Mpulss) / 100)
            console.log(`vahim pulss ${Math.round(minpulss)}, suurim pulss ${Math.round(maxpulss)}`);
        } rl.close();

        } else if (sugu == "n" || sugu == "N") {
            if (tüüp == 1) {
                    let minpulss = ((50 * Npulss) / 100)
                    let maxpulss = ((70 * Npulss) / 100)
                    console.log(`vahim pulss ${Math.round(minpulss)}, suurim pulss ${Math.round(maxpulss)}`);
           } else if (tüüp == 2) {
                    let minpulss = ((70 * Npulss) / 100)
                    let maxpulss = ((80 * Npulss) / 100)
                    console.log(`vahim pulss ${Math.round(minpulss)}, suurim pulss ${Math.round(maxpulss)}`);
           } else if (tüüp == 3) {   
                    let minpulss = ((80 * Npulss) / 100)
                    let maxpulss = ((87 * Npulss) / 100)
                    console.log(`vahim pulss ${Math.round(minpulss)}, suurim pulss ${Math.round(maxpulss)}`);
                   } rl.close();
                } 
    }) 
       })
   });
