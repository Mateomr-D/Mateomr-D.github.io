let fixed = document.getElementById("fixed");
let submit = document.getElementById("submit");
let tex = document.getElementById("tex");
let vos = document.getElementById("vos");

fixed.onclick=()=> {
    submit.classList.remove("view");
    window.setTimeout(function(){
        submit.classList.add("view");
    },4000);
    fixed.classList.add("view");
    window.setTimeout(function(){
        fixed.classList.remove("view");
    },4000);
    tex.classList.remove("view");
    window.setTimeout(function(){
        tex.classList.add("view");
    },4000);
    vos.classList.remove("spin");
    window.setTimeout(function(){
        vos.classList.add("spin");
    },4000);
};