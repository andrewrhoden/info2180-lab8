window.onload = function()
{
  returnSearch();  
};

function returnSearch()
{
 
    $("lookup").observe('click',function()
	{
		
		
	//variable signments
		var click = $("all");
        var term = $("term").getValue();
        var select = click.checked === true;
        var nselect = click.checked === false;
        
	//conditionals for lookup if checkbox selected return all.
	if (select)
        {
           term = null;
           new Ajax.Request("world.php",
		{method:'get', 
		parameters:{lookup:term},
		onSuccess:function(transport)
		{ 
			var response = transport.responseText || "no response text";
			alert(response);
			$('result').update(response);
			
		},onFailure: function(){alert('Did not receive a response...');}
	
        });
           
        }
        // if checkbox selected and term entered return all.
		else if (select && term)
        {
           term = null;
           new Ajax.Request("world.php",
		{method:'get', 
		parameters:{lookup:term},
		onSuccess:function(transport)
		{ 
			var response = transport.responseText || "no response text";
			alert(response);
			$('result').update(response);
			
		},onFailure: function(){alert('Did not receive a response...');}
	
        });
           
        }
        //if checkbox selected and no term entered return all.
        else if (select && (term === null))
        {
            term = null;
            new Ajax.Request("world.php",
		{method:'get', 
		parameters:{lookup:term},
		onSuccess:function(transport)
		{ 
			var response = transport.responseText || "no response text";
			alert(response);
			$('result').update(response);
			
		},onFailure: function(){alert('Did not receive a response...');}
	
        });
            
        }
        // if checkbox not selected and term entered return term result.
        else if (nselect && term)
        {
            new Ajax.Request("world.php",
		{method:'get', 
		parameters:{lookup:term},
		onSuccess:function(transport)
		{ 
			var response = transport.responseText || "no response text"; 
			alert(response);
			$('result').update(response);
			
		},onFailure: function(){alert('Did not receive a response...');}
	
        });
           
        }
        // no term entry or checkbox not selected return "no country entered".
		else
		{
		$('result').update("no country entered");
		}
		
		
		
	});


}



/*onCreate: function(response)
		{var t = response.transport;
		t.setRequestHeader = t.setRequestHeader.wrap(function(original, k, v)
		{
		if (/^(accept|accept-language|content-language)$/i.test(k))
		return original(k, v);
		if (/^content-type$/i.test(k) &&
		/^(application\/x-www-form-urlencoded|multipart\/form-data|text\/plain)(;.+)?$/i.test(v))
		return original(k, v);
		return;
		});
        },*/


