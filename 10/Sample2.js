var k = 0;
var t = null;

function start(){
    if(t == null){
        t = window.setInterval("tick()", 3000);
    }
}

function stop(){
    window.clearInterval(t);
    t = null;
}

function tick(){
    k++;
    if(k >= 3){
        k = 0;
    }
    var e = document.getElementById("bigimage");
    e.setAttribute("src", "pic" + k + ".jpg");
}