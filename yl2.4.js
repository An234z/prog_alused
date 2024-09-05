const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Kas soovite istekohta valida ise ("ise") või loosida ("loos")? `, vastus => {
    if (vastus == "ise") {
        rl.question(`Kas te soovite istuda akna ääres("aken") või mitte ("muu")? `, istekoht => {
            console.log(`Teie koht: ${istekoht} `);
        })

          } else if (vastus == "loos"){
                let loosinumber = Math.floor(Math.random() * 3) + 1;
                console.log(loosinumber);

                if (loosinumber == 1) {
                    console.log("Teile loositi istekoht akna ääres")
                } else {
                    console.log('Teile loositi istekoht: muu')
               } rl.close();               
            }

})

