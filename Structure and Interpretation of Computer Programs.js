
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

















