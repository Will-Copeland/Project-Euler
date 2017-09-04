function problemOne() {
	var count = 0;

	for (i = 1; i < 1000; i++) {
  	if (i % 3 === 0 || i % 5 === 0){
  	 count = count + i;
   
  	}
	}
console.log(count + " is the sum of all multiples of 3 and 5 under 1000");
}

function problemTwo() {
var a = 0;
var b = 1;
var sum = 0;
var tot = 0;
for(i = 0; sum < 4000000; i++)  {
  sum = a + b;
  a = b;
  b = sum;
  if(sum % 2 === 0){
    tot = tot + sum;
  }
  }
console.log(tot)
}

problemTwo();
