
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
var x=getUrlVars()["score"];
var y=getUrlVars()["uid"];
//if(x==0)x=0;
//else x=x-1;
console.log(x);
   var element = document.getElementById("sc");
   element.innerHTML = x;
   document.getElementById("home").onclick=function() {myfunction()};
   document.getElementById("home1").onclick=function() {myfunction1()};

   function myfunction(){
    window.document.location='./index.html'+'?u='+y;
    //window.document.location='https://www.celebrations2020.co/api/game/'+y+'?score='+x;
   }
   function myfunction1(){
    //window.document.location='./index.html'+'?u='+y;
    window.document.location='https://www.celebrations2020.co/api/game/'+y+'?score='+x;
   }