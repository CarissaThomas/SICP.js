function smallest_divisor(n){
    find_divisor(n, 2);
}

function find_divisor(n,test_divisor) {
   if (square(test_divisor) > n) 
        return n;
   else if (divides(test_divisor,n))
        return test_divisor;
   else return find_divisor(n, next(test_divisor));
}

function next(test_divisor) {
	if(test_divisor === 2){
		return 3;
	} else {
		return test_divisor + 2;
	}
}

function divides(a,b) {
   return b % a === 0;
}
