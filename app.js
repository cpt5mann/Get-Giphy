var useinp=document.querySelector("#userinput"); 
var subbtn=document.querySelector("#submit");
var formm=document.querySelector("#formm");

formm.addEventListener("submit", function(event){
event.preventDefault();
});

function reqListener(){
    var data = JSON.parse(this.responseText);
    console.log(data);
   };

   var oReq= new XMLHttpRequest();
   oReq.addEventListener("load", reqListener)
   var half="http://api.giphy.com/v1/gifs/search?q=&api_key=0p2Ql693PCpiDSqLcJHdZKlWMEdAJkla"
   oReq.open("GET", half);
   oReq.send();

// I cant figure out how to change the url with the user input.












