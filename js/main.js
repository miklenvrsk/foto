const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const close = document.getElementById('close');
const search = document.getElementById('search');
const search_input = document.getElementById('search-input');
const search_active =document.getElementById('search-active');
const close_search = document.getElementById('close-search');
let tl = gsap.timeline({paused: true})

tl.to("#search-active",{opacity: 1, duration: 0.8});
if(document.documentElement.clientWidth >768){
  tl.to("#search-input",{width: 342, duration: 0.8},"<");
}else {
  tl.to("#search-input",{width: 248, duration: 0.8},"<");
}


tl.to("#search", {opacity: 0, duration:0.8},"<");

burger.addEventListener("click",()=>menu.classList.add("header__showMenu"));
close.addEventListener("click",()=>menu.classList.remove("header__showMenu"));
search.addEventListener('click', ()=>{
    search_active.classList.remove("none");
    tl.restart();
    search.classList.add("none");

});
close_search.addEventListener('click',()=>{
    tl.reverse();
    search.classList.remove("none");
});




