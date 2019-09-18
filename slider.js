function slide_growup() {
    var element = document.getElementById("link_2");
    element.classList.remove("grow_up1");
    var element = document.getElementById("link_3");
    element.classList.remove("grow_up1");
    var element = document.getElementById("link_1");
    element.classList.add("grow_up1"); 
    document.getElementById("link_1").style.opacity="1";
    document.getElementById("link_2").style.opacity="0.5";
    document.getElementById("link_3").style.opacity="0.5";

}

function slide_growup2() {
    var element = document.getElementById("link_1");
    element.classList.remove("grow_up1");
    var element = document.getElementById("link_3");
    element.classList.remove("grow_up1");
    var element = document.getElementById("link_2");
    element.classList.add("grow_up1");
    document.getElementById("link_2").style.opacity="1";
    document.getElementById("link_1").style.opacity="0.5";
    document.getElementById("link_3").style.opacity="0.5";
}

function slide_growup3() {
    var element = document.getElementById("link_1");
    element.classList.remove("grow_up1");
    var element = document.getElementById("link_2");
    element.classList.remove("grow_up1");
    var element = document.getElementById("link_3");
    element.classList.add("grow_up1");
    document.getElementById("link_2").style.opacity="0.5";
    document.getElementById("link_1").style.opacity="0.5";
    document.getElementById("link_3").style.opacity="1";
}

