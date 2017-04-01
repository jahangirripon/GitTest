var globalVar = "This is a global variable";

var globalFunction = function() {
	alert(globalVar);
	globalVar = "value has been modified";
};

globalFunction();

alert(globalVar);