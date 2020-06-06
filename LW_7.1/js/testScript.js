function isPrimeNumber(num) {
  let isPrime
  if (num < 2) {
    console.log(num + ' is not prime number');
  } else if (typeof num == 'number') {
    isItPrime(num);
    } else if (Array.isArray(num)) {
        for (let i = 0; i <= num.length; i++) {
        isItPrime(num[i]);
        } 
      } else {
        console.log(' incorrect data');
        }
}  

function isItPrime(num) {
  isPrime = true
    for (let j = 2; j < num; j++) {
        if (num % j == 0) {
            isPrime = false
            break
        }
    }
  primeOutput(isPrime, num);    
}

function primeOutput(isPrime, num) {
  if (isPrime) {
    console.log(num + ' is prime number');
  } else {
    console.log(num + ' is not prime number');
  }
}
