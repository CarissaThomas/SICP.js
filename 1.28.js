function is_even(n) {
   return n % 2 === 0;
}
          
function square(x) { return x * x; }
                
function expmod(base,exp,m) {//base is now not a random number but between 1 and n-1
   if (exp === 0) 
        return 1;
   else if (is_even(exp))//is it even 
        return square(expmod(base,exp/2,m)) % m;
   else return (base * expmod(base,exp - 1,m)) % m;
}

function fermat_test(n, a){//change the vbase 
   function try_it(a) {//try the random number in expmod'
     if(a < n - 1){
	 return expmod(a,n,n) === a;
     } else {
     	console.log('The entire range has been tested');
     }
   }
   return try_it(1 + a);//generate a as a random number
}


fermat_test(91,1)
