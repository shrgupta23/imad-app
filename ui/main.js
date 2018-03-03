//counter code
var button=document.getElementById('counter');
var counter=0;
button.onclick= function(){
  // Create a   request to counter end point
  var request=new XMLHttpRequest();
  
  //capture the response and store it in a variable
  request.onreadystatechanged=function(){
    if(request.readyState === XMLHttpRequest.DONE){
        //take some action
        if(request.status===200){//200 indicates that request has been completed
            var counter=request.responseText;
            counter=counter+1;
             var span=document.getElementById('count');
              pan.innerHTML=counter.toString();
        }
    }  //not done yet
      
  };
  request.open('GET','',true);
  
  
};