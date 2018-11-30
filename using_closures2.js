var countdownGenerator = function (x) {
var statements = [
  "T-minus",
  "Blast Off!",
  "Rockets already gone, bub!"
]

counter = x

  return function(){


    if (counter === 0){
      console.log(statements[1])
      counter -= 1
    }

    else  if (counter <= -1){
        console.log(statements[2])
      }

      else {
        console.log(statements[0] + " " + counter + "...")
    counter -= 1

      }

  }

};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!


