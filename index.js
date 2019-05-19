function values(){
	var a = document.getElementById('a').value.split('');
	a[0] = a[0].toUpperCase();
    var s = +a[0].charCodeAt(0);//A - 65, H - 72
    var mass = [];
    if(s < 65 || s > 72 || a[1] < 1 || a[1] > 8)
    {
    	mass.push('Error');
    }
    else
    {
    	if(s > 65)
    	{
    		if(a[1] > 2)
    		{
    			mass.push(String.fromCharCode(s-1) + (+a[1]-2));
    		}
    		if(a[1] < 7)
    		{
    			mass.push(String.fromCharCode(s-1) + (+a[1]+2));
    		}
    	}
    	if(s > 66)
    	{
    		if(a[1] > 1)
    		{
    			mass.push(String.fromCharCode(s-2) + (+a[1]-1));
    		}
    		if(a[1] < 8)
    		{
    			mass.push(String.fromCharCode(s-2) + (+a[1]+1));
    		}
    	}
    	if(s < 72)
    	{
    		if(a[1] > 2)
    		{
    			mass.push(String.fromCharCode(s+1) + (+a[1]-2));
    		}
    		if(a[1] < 7)
    		{
    			mass.push(String.fromCharCode(s+1) + (+a[1]+2));
    		}
    	}
    	if(s < 71)
    	{
    		if(a[1] > 1)
    		{
    			mass.push(String.fromCharCode(s+2) + (+a[1]-1));
    		}
    		if(a[1] < 8)
    		{
    			mass.push(String.fromCharCode(s+2) + (+a[1]+1));
    		}
    	}
    	
    }

    console.log(mass);
    var out = mass.join(' ');
    alert(`Возможные варианты хода: \n${out}`);
}