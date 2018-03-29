//counter code
var button=document.getElementById('counter');
var counter=0;
button.onclick= function(){
  // Create a   request to counter end point
  var request =new XMLHttpRequest();
 
  //capture the response and store it in a variable
  request.onreadystatechange=function(){
      if(request.readystate==XMLHttpRequest.Done){
          //take some action
          if(request.status===200){
              var counter=request.responseText;
              counter=counter+1;
             var span=document.getElementById('count');
              span.innerHTML=counter.toString();
          }
          //not done yet
      }
      
  };
            
   //Make a request
   request.open('GET','http://guptashourya7.imad.hasura-app.io/counter',true);
   request.send(null);
    }; //not done yet
      