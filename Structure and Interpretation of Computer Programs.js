
//Section 1.2.2
//fibonacci as recurisve problem 
function fibonacciRecursion(n) {
    if (n = 0) {
        n = 1;
        fibonacciRecursion(n)
    } else {
        var fibParam1 = n - 1;
        var fib2Parm2 = n - 2;
        var fib1 = fibonacciRecursion(fibParam1) + fibonacciRecursion(fibParam2);
        console.log(fib1);
    }
}

//fibonacci as iterative problem
var count = 0;

function fibonacciIteration(a, b, count) {
    if (a = 0) {
        count++;
        return b;
    } else {
        var fib1 = a + b;
        a = count - 1;
        count++;
        console.log(a, fib1, count);
        fibonacciIteration(a, fib1, count);
    }
}

//1.16 
function expt(b,n) {
   return expt_iter(b,n,1);
}
function expt_iter(b,counter,product) {
   if (counter === 0) 
        return product;
   if else(is_even(n)){
     return expt_iter(square(b), n/2, counter);
   } else {
     return expt_iter(b, counter - 1, b * product);
   } 
} 
function square(x){
    return x * x;
}

function is_even(n) {
   return n % 2 === 0;
}

//1.17
function times(a,b) {
   if (b === 0){
        return 0;
   } if else(is_even(b)){
      return double(a) * halve(b); 
   }
   else{
     return a + a * (b - 1);
   } 
}

function double(x){
    x * 2;
}

function halve(x){
    if(x % 2 === 0){
        return x/2;
    }
}

function is_even(n) {
   return n % 2 === 0;
}

//1.18 (create an interative process with double/halve)

function multi(b,n) {//3, 4(12)
   return mult_iter(b,n,1);
}
function mult_iter(b,counter,product) {
   if (counter === 0) 
        return product;
   if else(is_even(n)){
     return mult_iter(double(b), halve(n), counter);
   } else {
     return mult_iter(b, counter - 1, b * product);
   } 
} 
(iter (+ accumulator a) a (- b 1))))) 

function double(x){
    x * 2;
}

function halve(x){
    if(x % 2 === 0){
        return x/2;
    }
}

function is_even(n) {
   return n % 2 === 0;
}

//1.19

//1.22
function is_prime(n) {
   return n === smallest_divisor(n);
}

function smallest_divisor(n) {
   return find_divisor(n,2);
}
function find_divisor(n,test_divisor) {
   if (square(test_divisor) > n) 
        return n;
   else if (divides(test_divisor,n))
        return test_divisor;
   else return find_divisor(n, test_divisor + 1);
}
function divides(a,b) {
   return b % a === 0;
}

//1.23
function square(x){
    return x * x;
}

function smallest_divisor(n){
    find_divisor(n, 2);
}

function find_divisor(n,test_divisor) {
   if (square(test_divisor) > n) 
        return n;
   else if (divides(test_divisor,n))
        return test_divisor;
   else return find_divisor(n, test_divisor + 1);
}

function divides(a,b) {
   return b % a === 0;
}

function timed_prime_test(n) {
   start_prime_test(n);
}

function start_prime_test(n,start_time) {
   if (is_prime(n))
      return report_prime(n);
}

function is_prime(n){
    if(n === smallest-divisor(n)){
        console.log(n, ' is a prime number');
    } else {
        first++;
        search-for-primes(first, last);
    }
}

function report_prime(n) {
		console.log('The prime', n);
}

function even(x){
    return x % 2 === 0;
}

function search-for-primes(first, last){
    search-iter(first);
    if(first <= last){
        timed_prime_test(first)//if current value is less than last, pass it in for testing    
    } else {
        console.log('You have reached the end of range');
    }
}

function search-iter(first){
    if(even(first)){
        first = first + 1;
    }
}

search-for-primes(1000, 1500);

//1.24

