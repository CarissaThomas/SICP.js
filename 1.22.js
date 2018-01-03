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
