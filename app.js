console.log("hello");

var useinp=document.querySelector("#userinput");
var subbtn=document.querySelector("#submit");
var formm=document.querySelector("#formm");

formm.addEventListener("submit", function(event){

event.preventDefault();
console.log(useinp.value);
});
function reqListener(){
    var data =JSON.parse(this.responseText);
    console.log(data);

};

var oReq= new XMLHttpRequest();
oReq.addEventListener("load", reqListener)
oReq.open("GET", "http://api.giphy.com/v1/gifs/search?q=" + useinp + "&api_key=0p2Ql693PCpiDSqLcJHdZKlWMEdAJkla")
oReq.send();



















