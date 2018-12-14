/*
 * SOLUTION: Hello.
 */

function hello() {
  let result = "Hello, AP Computer Science Principles!"; //sets result equal to a string
  document.getElementById("output1").innerHTML = result; //applies the value of result to the HTML of 'output1'

  check("hello");
}

/*
 * SOLUTION: Hello, Again.
 */

function helloAgain() {
  let name = prompt("What is your name?"); //prompts the user for a value and declares name as equal to the value

  let result = "Hello, " + name + "!"; //sets result eqaul to Hello, [the value of name]!
  document.getElementById("output2").innerHTML = result; //applies the value of result to the HTML of 'output1'

  check("helloAgain", name);
}

/*
 * SOLUTION: Celsius.
 */

function celsius() {
  let cels = Number(((Math.random() * 1001) - 100).toFixed(2)); //sets a random value to cels between -100 and 901 to two decimal places

  let fahr = cels * 9 / 5 + 32; //declares fahr and sets it equal to cels converted by the farenheit conversion
  let result = cels + " degrees Celsius equals " + fahr.toFixed(2) + " degrees Fahrenheit."; //creates a result variable that displays text alongside the fahr and cels values
  document.getElementById("output3").innerHTML = result; //applies the value of result to the HTML of 'output3'


  check("celsius", cels);
}

/*
 * SOLUTION: Fahrenheit.
 */

function fahrenheit() {
  let fahr = Number(((Math.random() * 1001) - 100).toFixed(2)); //sets fahr equal to a random number bettween -100 and 901 to two decimal places

  let cels = (fahr - 32) * 5 / 9; //declares cels as a numer equal to the conversion factor of celsius
  let result = fahr + " degrees Fahrenheit equals " +  cels.toFixed(2) + " degrees Celsius."; //creates a result variable equal to the fahr value and cels value
  document.getElementById("output4").innerHTML = result; //applies the value of result to the HTML of 'output1'

  check("fahrenheit", fahr);
}

/*
 * SOLUTION: Inches.
 */

function inches() {
  const MILE = 63360; //creates a variable of value 63360 that can't be changed
  const YARD = 36; //creates a variable of value 36 that can't be changed
  const FOOT = 12; //creates a variable of value 12 that can't be changed

  let input = -1; //sets input equal to -1
  while (input < 0) { //runs the nested code as long as input is less than 0
    input = Number(prompt("Enter a non-negative integer.")); //lets the user enter a number value to input

    if (input === null) { //runs code if input it type null and value null
      break; //breaks loop
    } else if (Number.isNaN(input)) { //if no previous ifs are true runs code if input is not a number
      input = -1; //sets input equal to -1
    } else if (!Number.isInteger(input)) { //if no previous ifs are true runs code if input is not an integer
      input = -1; //sets input equal to -1
    }
  }

  if (input !== null) { //runs code if input is not type null or value null
    let inches = input; //sets inches equal to input
    let miles = Math.floor(inches / MILE); //sets miles eqaul to inches divided by MILE rounded down
    inches = inches % MILE; //sets inches eqaul to inches modulo MILE
    let yards = Math.floor(inches / YARD); //sets yards eqaul to inches divided by YARD rounded down
    inches = inches % YARD; //sets inches eqaul to inches modulo YARD
    let feet = Math.floor(inches / FOOT); //sets feet eqaul to inches divided by FOOT rounded down
    inches = inches % FOOT; //sets inches eqaul to inches modulo FOOT

    let result = "Miles: " + miles + "<br/>" + //sets result eqaul to the formating of the answer a long with the values for miles, yards, feet and inches
                 "Yards: " + yards + "<br/>" +
                 "Feet: " + feet + "<br/>" +
                 "Inches: " + inches;
    document.getElementById("output5").innerHTML = result; //sets the inner HTML of output 5 to the value of result
  } else { //if the above if statment is false run the following code
    document.getElementById("output5").innerHTML = ""; //sets the inner HTML of output 5 to a blank space
  }

  check("inches", input);
}

/*
 * SOLUTION: Centimeters.
 */

function centimeters() {
  const KILOMETER = 100000; //declares a constant KILOMETER with value 100000
  const METER = 100; //declares a constant Metter with value 100

  let input = -1; //sets input equal to -1
  while (input < 0) { //runs the nested code as long as input is less than 0
    input = Number(prompt("Enter a non-negative integer.")); //lets the user enter a number value to input


    if (input === null) { //runs code if input it type null and value null
      break; //breaks loop
    } else if (Number.isNaN(input)) { //if no previous ifs are true runs code if input is not a number
      input = -1; //sets input equal to -1
    } else if (!Number.isInteger(input)) { //if no previous ifs are true runs code if input is not an integer
      input = -1; //sets input equal to -1
    }
  }

  if (input !== null) { //runs nested code while type and value of input don't equal null
    let centimeters = input; // sets centimeters eqaul to input
    let kilometers = Math.floor(centimeters / KILOMETER); //sets kilometers equal to centimeters divided by KILOMETER rounded down
    centimeters = centimeters % KILOMETER; //sets centimeters eqaul to centimeters modulo KILOMETER
    let meters = Math.floor(centimeters / METER); //sets meters equal to centimeters divided by METER rounded down
    centimeters = centimeters % METER; //sets centimeters eqaul to centimeters modulo METER

    let result = "Kilometers: " + kilometers + "<br/>" + //sets result eqaul to the formating of the answer a long with the values for kilometers, meters and centimeters
                 "Meters: " + meters + "<br/>" +
                 "Centimeters: " + centimeters;
    document.getElementById("output6").innerHTML = result; //sets the inner HTML of output 6 to the value of result
  } else { //runs code if no pervious if statements returned true
    document.getElementById("output6").innerHTML = ""; //sets the inner HTML of output 6 to a blank space
  }

  check("centimeters", input);
}

/*
 * SOLUTION: Fluid Ounces.
 */

function fluidOunces() {
  const GALLON = 128; //declares a constant GALLON with value 128
  const QUART = 32; //declares a constant QUART with value 32
  const PINT = 16; //declares a constant PINT with value 16
  const CUP = 8; //declares a constant CUP with value 8

  let input = -1; //sets input equal to -1
  while (input < 0) { //runs the nested code as long as input is less than 0
    input = Number(prompt("Enter a non-negative integer.")); //lets the user enter a number value to input

    if (input === null) { //runs code if input it type null and value null
      break; //breaks loop
    } else if (Number.isNaN(input)) { //if no previous ifs are true runs code if input is not a number
      input = -1; //sets input equal to -1
    } else if (!Number.isInteger(input)) { //if no previous ifs are true runs code if input is not an integer
      input = -1; //sets input equal to -1
    }
  }

  if (input !== null) { //runs nested code while type and value of input don't equal null
    let fluidOunces = input; //sets fluid oucnes equal to input
    let gallons = Math.floor(fluidOunces / GALLON); //sets gallons equal to fluidOunces divided by GALLON rounded down
    fluidOunces = fluidOunces % GALLON; //sets fluidOunces eqaul to fluidOunces modulo GALLON
    let quarts = Math.floor(fluidOunces / QUART); //sets quarts equal to fluidOunces divided by QUART rounded down
    fluidOunces = fluidOunces % QUART; //sets fluidOunces eqaul to fluidOunces modulo QUART
    let pints = Math.floor(fluidOunces / PINT); //sets pints equal to fluidOunces divided by pint rounded down
    fluidOunces = fluidOunces % PINT; //sets fluidOunces eqaul to fluidOunces modulo PINT
    let cups = Math.floor(fluidOunces / CUP); //sets cups equal to fluidOunces divided by CUP rounded down
    fluidOunces = fluidOunces % CUP; //sets fluidOunces eqaul to fluidOunces modulo CUP

    let result = "Gallons: " + gallons + "<br/>" + //sets result eqaul to the formating of the answer a long with the values for gallons, quarts, pints and cups
                 "Quarts: " + quarts + "<br/>" +
                 "Pints: " + pints + "<br/>" +
                 "Cups: " + cups + "<br/>" +
                 "Fluid Ounces: " + fluidOunces;
    document.getElementById("output7").innerHTML = result; //sets the inner HTML of output 7 to the value of result
  } else { //runs nested code if no above if statements returned true
    document.getElementById("output7").innerHTML = ""; //sets the inner HTML of output 7 to a blank space
  }

  check("fluidOunces", input);
}

/*
 * SOLUTION: Ounces.
 */

function ounces() {
  const TON = 32000; //declares constant TON with value 32000
  const POUND = 16; //declares constant POUND with value 16

  let input = -1; //sets input equal to -1
  while (input < 0) { //runs the nested code as long as input is less than 0
    input = Number(prompt("Enter a non-negative integer.")); //lets the user enter a number value to input
    
    if (input === null) { //runs code if input it type null and value null
      break; //breaks loop
    } else if (Number.isNaN(input)) { //if no previous ifs are true runs code if input is not a number
      input = -1; //sets input equal to -1
    } else if (!Number.isInteger(input)) { //if no previous ifs are true runs code if input is not an integer
      input = -1; //sets input equal to -1
    }
  }

  if (input !== null) { //runs nested code if type and value of input don't equal null
    let ounces = input; //sets ounces equal to input
    let tons = Math.floor(ounces / TON); //sets tons equal to ounces divided by TON rounded down
    ounces = ounces % TON; //sets ounces eqaul to ounces modulo TON
    let pounds = Math.floor(ounces / POUND); //sets pounds equal to ounces divided by POUND rounded down
    ounces = ounces % POUND; //sets ounces eqaul to ounces modulo POUND

    let result = "Tons: " + tons + "<br/>" + //sets result eqaul to the formating of the answer a long with the values for tons, pounds and ounces
                 "Pounds: " + pounds + "<br/>" +
                 "Ounces: " + ounces;
    document.getElementById("output8").innerHTML = result; //sets the inner HTML of output 8 equal to the value of result
  } else { //runs nested code if no above if statments returned true
    document.getElementById("output8").innerHTML = ""; //sets the inner HTML of output 8 equal to a blank space
  }

  check("ounces", input);
}

/*
 * SOLUTION: Money.
 */

function money() {
  const DOLLAR = 100; //declares constant DOLLAR with value 100
  const QUARTER = 25; //declares constant QUARTER with value 25
  const DIME = 10; //declares constant DIME with value 10
  const NICKEL = 5; //declares constant NICKEL with value 5

  let input = -1; //sets input equal to -1
  while (input < 0) { //runs the nested code as long as input is less than 0
    input = Number(prompt("Enter a non-negative integer.")); //lets the user enter a number value to input
    
    if (input === null) { //runs code if input it type null and value null
      break; //breaks loop
    } else if (Number.isNaN(input)) { //if no previous ifs are true runs code if input is not a number
      input = -1; //sets input equal to -1
    } else if (!Number.isInteger(input)) { //if no previous ifs are true runs code if input is not an integer
      input = -1; //sets input equal to -1
    }
  }

  if (input !== null) { //runs nested code if type and value of input do not equal null
    let pennies = input; //sets pennies equal to input
    let dollars = Math.floor(pennies / DOLLAR); //sets dollars equal to pennies divided by DOLLAR rounded down
    pennies = pennies % DOLLAR; //sets pennies eqaul to pennies modulo DOLLAR
    let quarters = Math.floor(pennies / QUARTER); //sets quarters equal to pennies divided by QUARTER rounded down
    pennies = pennies % QUARTER; //sets pennies eqaul to pennies modulo QUARTER
    let dimes = Math.floor(pennies / DIME); //sets dimes equal to pennies divided by DIME rounded down
    pennies = pennies % DIME; //sets pennies eqaul to pennies modulo DIME
    let nickels = Math.floor(pennies / NICKEL); //sets nickels equal to pennies divided by NICKEL rounded down
    pennies = pennies % NICKEL; //sets pennies eqaul to pennies modulo NICKEL

    let result = "Dollars: " + dollars + "<br/>" + //sets result eqaul to the formating of the answer a long with the values for dollars, quarters, dimes, nickels and pennies
                 "Quarters: " + quarters + "<br/>" +
                 "Dimes: " + dimes + "<br/>" +
                 "Nickels: " + nickels + "<br/>" +
                 "Pennies: " + pennies;
    document.getElementById("output9").innerHTML = result; //sets the inner HTML of output 9 eqaul to the value of result
  } else { //rus the nested code if the above if statement returned false
    document.getElementById("output9").innerHTML = ""; //sets the inner HTML of output 9 eqaul to a blank space

  check("money", input);
}

/*
 * SOLUTION: Change.
 */

function change() {
  const QUARTER = 25; //declares constant QUARTER with value 25
  const DIME = 10; //declares constant DIME with value 10
  const NICKEL = 5; //declares constant NICKEL with value 5

  let input = -1; //sets input equal to -1
  while (input < 0 || input >= 1) { //runs nested code while input is less than 0 or greater than or equal to 1
    input = Number(prompt("Enter a non-negative number less than 1.00.")); //prompts the user for a value between 0 and 1 and sets it equal to input

    if (input === null) { //runs nested code if type and value of input eqaul null
      break; //breaks loop
    } else if (Number.isNaN(input)) { //runs nested code if the previous if statment did not return true and if input it not a number
      input = -1; //sets input equal to -1
    }
  }

  if (input !== null) { //runs nested code if type and value of input do not equal null
    let pennies = input; //sets pennies eqaul to input
    pennies = Number((pennies * 100.00).toFixed(0)); //multiplies pennies by 100, rounds the value to the 1s place and converts it to a number
    let quarters = Math.floor(pennies / QUARTER); //sets quarters equal to pennies divided by QUARTER rounded down
    pennies = pennies % QUARTER; //sets pennies eqaul to pennies modulo QUARTER
    let dimes = Math.floor(pennies / DIME); //sets dimes equal to pennies divided by DIME rounded down
    pennies = pennies % DIME; //sets pennies eqaul to pennies modulo DIME
    let nickels = Math.floor(pennies / NICKEL); //sets nickels equal to pennies divided by NICKEL rounded down
    pennies = pennies % NICKEL; //sets pennies eqaul to pennies modulo NICKEL

    let coins = quarters + dimes + nickels + pennies; //declares number coins and sets it eqaul to the sum of quarters, dimes, nickels and pennies
    document.getElementById("output10").innerHTML = coins + (coins === 1 ? " coin." : " coins."); //sets the inner HTML of output 10 to the value of coins plus the string "coins." or "coin." if the value is 1 
  } else { //runs nested code if the above if statment returned false
    document.getElementById("output10").innerHTML = ""; //sets the inner HTML of output 10 equal to a blank space.
  }

  check("change", input);
}
