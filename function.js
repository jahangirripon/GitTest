// set one
//var foo = 2+3;
//foo = foo +1;
//foo = foo * 8;

// set two
//var bar = 3+3;
//bar = bar + 1;
//bar = bar * 8;

// set three
//var fog = 4+3;
//fog = fog + 1;
//fog = fog * 8;


var foo = doSomething(2, 5);
var bar = doSomething(3, 5);
var fog = doSomething(4, 6);


function doSomething(paramOne, paramTwo) {
	paramOne = paramOne + 3;
	paramOne = paramOne + 1;
	paramOne = paramOne * 8;

	return paramOne * paramTwo;

}

alert(foo);

alert(bar);

alert(fog);