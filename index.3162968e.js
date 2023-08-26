const e=document.querySelectorAll("[data-select-btn]");e.forEach(e=>{e.addEventListener("click",()=>e.parentNode.classList.toggle("buy-selected__card"))});//? Submenu Func
const t=document.querySelectorAll("[data-heart-btn]");// const likesText = document.querySelectorAll('[data-likes-text]');
// console.log(likesText.textContent.value);
let c=Math.round(1099*Math.random()+1);t.forEach(e=>{e.addEventListener("click",()=>(e.firstElementChild.classList.contains("submenu-selected__icon")?c-=1:c+=1,e.firstElementChild.classList.toggle("submenu-selected__icon")))});const a=document.querySelectorAll("[data-burger-navElem]");// console.log(burgerLinks);
a.forEach(e=>{e.addEventListener("click",()=>{a.forEach(e=>e.classList.remove("burger-active__page")),e.classList.toggle("burger-active__page")})});//# sourceMappingURL=index.3162968e.js.map

//# sourceMappingURL=index.3162968e.js.map
