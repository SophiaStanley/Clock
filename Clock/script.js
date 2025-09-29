
// currently, most of this code, including the html and css, are taken from Colm's code. Thank you Colm
// https://gitlab.com/colmoneill/creative-studio-code-samples/-/tree/main/01_JS-clock?ref_type=heads

function currentTime() {
    var date = new Date(); /* creating object of Date class */
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    document.getElementById("main").innerHTML = hour + " : " + min + " : " + sec;
    var t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */
}

currentTime()

