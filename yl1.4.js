const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Mis on teie nimi? `, nimi => {
    rl.question(`Lubatud kiirus (km/h): `, lkiirus => {
        rl.question(`Tegelik kiirus (km/h): `, tkiirus => {
        let trahv = (tkiirus - lkiirus) * 3
        if (trahv > 190) {
  console.log(`${nimi} kiiruse ületamise eest on teie trahv 190 eurot`); 
    }  else { 
      console.log(`${nimi} kiiruse ületamise eest on teie trahv ${trahv} eurot`);
    }  
  rl.close();
})
})
});