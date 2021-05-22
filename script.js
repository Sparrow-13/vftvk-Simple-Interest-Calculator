function compute()
{  
   alert("please wait");
   var p = document.getElementById("principal").value;
   var r = document.getElementById("rate").value;
   var t = documnet.getElementById("years").value;
    var si = (p*r*t)/100;
    interest = document.getElementById("result").innerHTML="If you deposit : " + parsefloat(p)+;
    interest.innerHTML="at an interest of "+ parsefloat(r)+"%";
    interest.ineerHTML ="You will recieve an amount of "+ parsefloat(si);
    interest.innerHTML = "in the year "+parseint(t+2020);
   
}
var slider = document.getElementById("rate");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}     
