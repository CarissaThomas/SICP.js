//the same as sum but with multiplication as its function
function product(term,a,next,b){
   if (a > b)
        return 1;
   else return term(a) * 
               product(term, next(a),next,b);
}

//these are defined to compute pi
function next(x) {
   return x + 1;
}

function pi-term(n){
  if(even(n)){
    return ((n + 2) / (n + 1))
  } else {
    return ((n + 1) / (n + 2))
  }
}

function even(n) {
   return n % 2 === 0;
}

function multiply_products(a,b) {
   return product(pi-term,a,next,b) * 4;//calls main function with params and selected functions
}

multiply_products(6,7);


//Iterative Version 
function product(term,a,next,b){
  function iter(a, result){//result is our counter 
    if (a > b){//a acts as our counter 
       return result;
    } else {
      return iter(next(a), (term(a) * result));//next adds one to number (iterator), term(a) * result is our  
    }                                         //previously calculated pi to be mulitplied by our newly returned result 
  }
  return iter(a,1);//result starts at 1
}
