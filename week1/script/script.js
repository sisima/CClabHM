document.addEventListener("DOMContentLoaded", function(){
   
   var startDegree = 0;
   var degreeIncrement = 0.1;
   var timerWaitTime = 10;
   var parentDiv = document.getElementsByClassName("parent");
   var div1 = document.getElementById("div1");
   var div2 = document.getElementById("div2");
   var div3 = document.getElementById("div3");



   div2.style.backgroundColor = "lavender";

   var rotateDiv = function(){
   	parentDiv[0].style.transform = "rotate(" + startDegree + "deg)";
   	startDegree += degreeIncrement;


   }


   window.setInterval(rotateDiv, timerWaitTime);

});


document.addEventListener("DOMContentLoaded", function(){
   
   var startDegree = 0;
   var degreeIncrement = 0.1;
   var timerWaitTime = 10;
   var parentDiv = document.getElementsByClassName("box");
   var div1 = document.getElementById("div4");
   var div2 = document.getElementById("div5");
   var div3 = document.getElementById("div6");




   var rotateDiv = function(){
      parentDiv[0].style.transform = "rotate(" + startDegree + "deg)";
      startDegree += degreeIncrement;


   }


   window.setInterval(rotateDiv, timerWaitTime);

});