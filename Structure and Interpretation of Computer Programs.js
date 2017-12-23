
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










































