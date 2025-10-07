const x = document.getElementsByClassName("intro");
document.getElementById("intro").innerHTML =
  "The text in first paragraph (index 0) is:" + x[0].innerHTML;
const y= document.querySelectorAll("p.try");
document.getElementById("try").innerHTML=
"the first paragraph (index 0) is: " + y[0].innerHTML;
