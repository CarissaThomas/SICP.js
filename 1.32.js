//the same as sum but with multiplication as its function
function product(term,a,next,b){
   if (a > b)
        return 1;
   else return term(a) * 
               multiplication(term, next(a),next,b);
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
   return product(pi-term 1 next 6) * 4;//calls main function with params and selected functions
}

multiply_products(6,7);


//Iterative Version 
function product(term,a,next,b){
  function iter(a, result){//is our counter 
    if (a > b){
       return 1;
    } else {
      return term(a) * multiplication(term, next(a),next,b);
    }
  }
  return iter(a,0);//counter starts at 0
}


function sum(term,a,next,b){
  function iter(a,result){
    if(a > b){//if we are out of our range, function is complete, return the result 
      console.log('The result:', result);
      return result;
    } else {//increment a update the point in the range, add our previous result to the cube of our previous number 
      return iter(next(a),result + term(a));//next = inc, term = cube
    }
  }
  return iter(a, 0);//result starts as 0
}


