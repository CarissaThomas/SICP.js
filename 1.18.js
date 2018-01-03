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
