const arguments = process.argv.slice(2);
// prime numbers
function primeNumbers(lowNumber, highNumber) {
  for (lowNumber; lowNumber <= highNumber; lowNumber++) {
    var isPrime = true;
    for (i = 2; i <= lowNumber; i++) {
      if (lowNumber % i === 0 && i !== lowNumber) {
        isPrime = false;
      }
    }
    if (isPrime && lowNumber !== 1) {
      console.log(lowNumber);
    }
  }
}

// even numbers
function evenNumbers(arguments) {
  const result = arguments
    .map((argument) => Number(argument))
    .filter((number) => number % 2 === 0);
  console.log(result.map((n) => n));
}

// area of a circle
function areaOfCircle(r) {
  const area = Math.PI * (r * r);
  console.log(
    `The area of a circle with a ${r} radius would be ${area.toFixed(2)}`
  );
}

areaOfCircle(arguments);
