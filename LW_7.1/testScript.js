function isPrimeNumber(input) {
  let isPrime;  
  if (typeof input == 'number') {
    digit(input);
  } else {
  	  if (typeof input == 'object') {
  	    array(input);  
  	  } else {
  	    console.log(n + ' is an invalid data type'); 	
	    }
    }	    

  function digit(input) {
    if (input < 2) {
  	  console.log(input + ' is prime number');
    } else {
   	    let temp = input;
        isItPrime(temp);
      }
    output(isPrime, temp); 
  }           
    	

  function isItPrime(temp) {
    for (j = 2; j < temp; j++) {    
      if (temp % j == 0) {     
        isPrime = false;
        break;
      }
    }    
  }

  function array(input) {	
    if (input.length == 0) {
      console.log('array empty');
    } else {  	
        for (let i = 0; i < input.length; i++) {
          let temp = input[i]	
          isPrime = true;
          isItPrime(temp);
        }
      }
    output(isPrime, temp);
  }    	
    

  function output(temp) {
    if (isPrime) {
      console.log(temp + ' is prime number');
    } else {
        console.log(temp + 'is not prime number');
      }      	
  }
}     