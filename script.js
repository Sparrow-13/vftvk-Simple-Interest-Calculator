function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    t = documnet.getElementById("years").value;
    var si = (p*r*t)/100;
    interest = document.getElementById("result").innerHTML="If you deposit : ";
    interest.appendChild(p);
    interest.innerHTML = "at an interest of : ";
    interest.appendChild(r);
    interest.innerHTML = "you will recieve  Amount of :  ";
    interest.appendChild(si);
    interest.innerHTML = "in year : ";
    interest.appendChild(t);
    
}
var slider = document.getElementById("rate");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}     
