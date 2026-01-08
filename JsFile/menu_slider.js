let close_btn=document.getElementById("close_btn");
let menu_btn=document.getElementById("menu_btn");
let nav_bar=document.querySelector('.nav_bar');

menu_btn.addEventListener('click',function(){
    nav_bar.style.left="0";
})

close_btn.addEventListener('click',function(){
    nav_bar.style.left="-100%";
})