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
