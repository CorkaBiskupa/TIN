'use strict';

var counters = createCounters(1000);
      
function createCounters(a) 
{
	var arr = [];
	var i;
	
	for (i=0; i<=a; i++)
	{
		arr[i] = (function(i) {
						return function() { 
							return i;
							}
						})(i);
	}
	return arr;
}
	      
      
console.log(counters[0]());
console.log(counters[10]());
