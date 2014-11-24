window.onload = function() {

 
 
var mybutton = document.getElementById("lookup");
mybutton.onclick = function() {
           new Ajax.Request(
               "world.php",
              {
                  parameters: {term:"booyah"},
                   method: "get",
                   onSuccess: callback //callback is a function that collects 
                                       //the server payload (data)
                }
           
            );
            }  
            function callback(data){
                alert(data.responseText);
                // data.responseText, data.responseXML, data.status
            }
            
function doSomethingWithTheText(data) {
  alert(data.responseText);
}



};
