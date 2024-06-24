var content = document.querySelector(".content");
var BiggerFont = document.querySelector(".bigger");
var SmallerFont = document.querySelector(".smaller");

function Biggerfont(){
    content.classList.add("font");
}

function Smallerfont(){
    content.classList.remove("font");
}
BiggerFont.onclick = Biggerfont;
SmallerFont.onclick = Smallerfont;