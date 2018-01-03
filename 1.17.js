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
