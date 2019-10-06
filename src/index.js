module.exports = function zeros(expression) {
  let array = expression.split('*');
  let counter = 0;
  let fives = 0;
  let twos = 0;
  
  for (let i = 0; i < array.length; i++) {
    
    if (array[i][array[i].length - 1] == "!" &&
        array[i][array[i].length - 2] == "!") {
          
        let num = Number(array[i].slice(0, array[i].length - 2));
        
        for (let j = num; j > 0; j -= 2) {
          let k = j;

          while (k % 5 == 0) {
            k /= 5;
            fives++;
          }

          while (k % 2 == 0) {
            k /= 2;
            twos++;
          }
        }
    } else {

      let num = Number(array[i].slice(0, array[i].length - 1));

      for (let j = 1; j <= num; j++) {
        let k = j;

        while (k % 5 == 0) {
          k /= 5;
          fives++;
        }

        while (k % 2 == 0) {
          k /= 2;
          twos++;
        }

      }

    }

  }
    return (twos < fives) ? twos : fives;
}
