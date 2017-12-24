
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
function iterativeExponents(b,n){
    return iterative_E(b,n,1);
}

function iterative_E(b,n,a){
    if(a === 0){
        return a;
    } else if(is_even(n)){
        
       return a
    } else {
       return expt_iter(b, a - 1,b * a)
    }
}

function is_even(n) {
   return n % 2 === 0;
}
////////////////
function expt(b,n) {
   return expt_iter(b,n,1);
}
function expt_iter(b,counter,product) {
   if (counter === 0) 
        return product;
   else return expt_iter(b,
                         counter - 1, 
                         b * product);
}  


///////////
          
function fast_expt(b,n) {
   if (n === 0)
        return 1;
   else if (is_even(n)) 
        return square(fast_expt(b, n / 2));
   else return b * fast_expt(b, n - 1);
}
function is_even(n) {
   return n % 2 === 0;
}





































