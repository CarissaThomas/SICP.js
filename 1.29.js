//The Miller-Rabin Test
//Pick a random number a < n, raise a to the (n - 1) modulo n using the expmod function
//square step in expmod, check for non trivial square root of 1 modulo n
//non trivial square root of 1 modulo n: a number not equal to 1 or n - 1 whose square is equal to 1 modulo n
//For odd numbers: atleast had the numbers a < n, computing a to the power of n - 1 will gibe you the non trivial square root of 1 modulo n

                
function is_even(n) {
   return n % 2 === 0;
}
          
function square(x) { return x * x; }
                
function expmod(base,exp,m) {//base is our random number, others are our potential prime number 
   if (exp === 0) 
        return 1;
   else if (is_even(exp))//if the number is even use successive squaring 
        return nontrivial_square_check(base,exp/2,m) % m;//recursive, random number smaller than n compute remaider of a to power of n modulo n
   else return (base * expmod(base,exp - 1,m)) % m;
}

function nontrivial_square_check(a,n){
  if((a !== 1 || a !== n - 1) && square(a) === 1){
    console.log('This number is not prime');
    return 0;//should we return here?
  } else {
    return expmod(a, n - 1, n);
  }
}

function random(n) {
   return Math.floor(Math.random() * n);
}

function check_it(x){
  if(x !== 0 || x !== 1){
    return x;
  } 
}
 
function mr_test(n) {
   function try_it(a) {//try the random number in expmod
      return check_it(expmod(a,n - 1,n))
   }
   return try_it(1 + random(n - 1));//generate a as a random number
}
          
function fast_is_prime(n,times) {//times determines number of checks to run 
   if (times === 0)
        return true;
   else if (mr_test(n))
        return fast_is_prime(n, times - 1);
   else return false;
}

fast_is_prime(91,3);
