var useinp=document.querySelector("#userinput"); 
var subbtn=document.querySelector("#submit");
var formm=document.querySelector("#formm");
var result=document.querySelector("#result")

function reqListener(){
    var stuff = JSON.parse(this.responseText);



for (var i=0; i<stuff.data.length; i++){

console.log(stuff.data[i]);
var img=document.createElement("img");   
img.src=stuff.data[i].images.original.url;
result.appendChild(img);

}
};





formm.addEventListener("submit", function(event){
event.preventDefault();
console.log("hesaidit= " + useinp.value)
var hesaidit=useinp.value;


var oReq= new XMLHttpRequest();
   oReq.addEventListener("load", reqListener)
   var url="http://api.giphy.com/v1/gifs/search?q=" + hesaidit  +"&api_key=0p2Ql693PCpiDSqLcJHdZKlWMEdAJkla&limit=5"
   oReq.open("GET", url);
   oReq.send();


});





  














