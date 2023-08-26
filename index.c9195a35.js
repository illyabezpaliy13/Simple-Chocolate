!function(){let e=document.querySelectorAll("[data-select-btn]");e.forEach(e=>{e.addEventListener("click",()=>e.parentNode.classList.toggle("buy-selected__card"))});//? Submenu Func
let t=document.querySelectorAll("[data-heart-btn]"),c=Math.round(1099*Math.random()+1);t.forEach(e=>{e.addEventListener("click",()=>(e.firstElementChild.classList.contains("submenu-selected__icon")?c-=1:c+=1,e.firstElementChild.classList.toggle("submenu-selected__icon")))});let l=document.querySelectorAll("[data-burger-navElem]");// console.log(burgerLinks);
l.forEach(e=>{e.addEventListener("click",()=>{l.forEach(e=>e.classList.remove("burger-active__page")),e.classList.toggle("burger-active__page")})})}();//# sourceMappingURL=index.c9195a35.js.map

//# sourceMappingURL=index.c9195a35.js.map
