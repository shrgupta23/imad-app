//counter code
var button=document.getElementById('counter');
var counter=0;
button.onclick= function(){
  // Create a   request to counter end point

  //capture the response and store it in a variable
            //render the variable
            counter=counter+1;
             var span=document.getElementById('count');
              span.innerHTML=counter.toString();
        
    }; //not done yet
      
  
  