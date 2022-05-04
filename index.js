const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names, gift) {
    let thankYou = [];
  let i = 0; // 
  while (i < names.length) {
    thankYou.push(`Thank you, ${names[i]}, for the wonderful ${gift} gift!`);
    i++; // the iteration moves INSIDE the body of the loop!
  }

  return thankYou;
}
const countDown = ["10", "9", "8","7","6","5","4","3","2","1","0"];
for (let countDown = 0; countDown < 10; countDown++) {
    console.log(`${countDown}`);
    
  }
