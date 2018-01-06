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

function sum(term,a,next,b) {
   if (a > b)
        return 0;
   else return term(a) + 
               sum(term,next(a),next,b);
}

//the same as sum but with multiplication as its function
function multiplication(term,a,next,b){
   if (a > b)
        return 0;
   else return term(a) * 
               multiplication(term,next(a),next,b);
}
//these are defined to compute pi
function inc(n) {
   return n + 1;
}

function times(x) {
   return x * x * x;
}

function (a,b) {
   return multiplication(times,a,inc,b);//calls main function with params and selected functions
}

multiply_products();
