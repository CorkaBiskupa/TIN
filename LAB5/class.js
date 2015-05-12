var obj = {
            className: 'first bordered'
         };
function addClassName (obj, text)
{
  var i =0;
	var names = obj.className;
	var ret = false;
	var arr = names.split(' ');
	
	for (i=0; i<=arr.length; i++) 
	{
		if (arr[i]==text)
		{
			ret=true;
			break;
		}
	}		
	if (ret == false)
	{	
	arr[arr.length+1] = text;
	}
	names=arr.join(' ');
	obj.className = names;
}    
      
addClassName(obj, 'visible');
console.log(obj.className);
addClassName(obj, 'Kasiek');
console.log(obj.className);
addClassName(obj, 'visible');
console.log(obj.className);
