function timed_prime_test(n) {
   start_prime_test(n);
}

function fast_is_prime(n,start_time) {
   if (is_prime(n))
      return report_prime(n);
}


function fast_is_prime(n,times) {
   if (times === 0)
        return true;
   else if (fermat_test(n))
        return fast_is_prime(n, times - 1);
   else return false;
}
