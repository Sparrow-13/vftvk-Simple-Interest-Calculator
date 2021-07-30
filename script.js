 function compute() {
     var p = parseInt(document.getElementById("principal").value);
     if (p < 0) {
         alert("Enter the postive value");
         return;
     }
     var r = parseInt(document.getElementById("rate").value);
     var t = parseInt(document.getElementById("years").value);
     var si = ((p * r * t) / 100) + p;
     t = parseInt(t) + parseInt(2020);
     if (r == NaN) {
         r = parseInt(document.getElementById("rate").value);
     }

     var r = document.getElementById("result");
     r.innerHTML = "if you deposit " + parseInt(p) + "<br/>at an interest of " + parseInt(r) + "<br/> You will recieve an amount of " + parseFloat(si) + "<br/>in the year " + t;

 }

 function r() {
     var x = document.getElementById("myRange").value;
//      document.getElementById("demo").innerHTML = x + "%";
 }
