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
