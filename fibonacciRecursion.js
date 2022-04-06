//Date: 4/5/22
//Filename: fibonacciRecursion.js
// Fibonacci recursion
const fibonacci = (num, array=[0,1]) => {
	if(num <= 2) return array;
const [nextToLast, last]=array.slice(-2);
return fibonacci(num - 1, [...array, nextToLast + last]);
}
fibonacci(12);//insert any int term within fibonacci(n) to return sequence