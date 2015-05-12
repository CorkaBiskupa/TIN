'use strict'; 
 var n = 2;

function cached(cache, fun)
{
	var recur = function helpFunction(n) {
 	var ret = cache[n] !== undefined ? cache[n] : null;
        if (ret !== null) {
            return ret;
        }
        cache[n] = fun(helpFunction, n);
        return cache[n];
    }
    return recur;
}

var fibonacci = cached([0, 1], function (recur, n) {
    return recur(n - 1) + recur(n - 2);
});

var factorial = cached([1], function (recur, n) {
    return recur(n - 1) *n;
});

console.log(fibonacci(n) + " " + factorial(n));