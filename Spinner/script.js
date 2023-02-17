var myVar;
var delBlur;

var element = document.getElementsByClassName("background-blur")[0];

function myFunction() {

element.style.display = "block";
myVar = setTimeout(showPage, 4000);
delBlur = setTimeout(DelBlur, 4000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

function DelBlur() {
  element.style.display = "none"
}