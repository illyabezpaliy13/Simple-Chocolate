document.querySelectorAll("[data-select-btn]").forEach((e=>{e.addEventListener("click",(()=>e.parentNode.classList.toggle("buy-selected__card")))}));const e=document.querySelectorAll("[data-heart-btn]");let t=Math.round(1099*Math.random()+1);e.forEach((e=>{e.addEventListener("click",(()=>(e.firstElementChild.classList.contains("submenu-selected__icon")?(t-=1,console.log(t)):(t+=1,console.log(t)),e.firstElementChild.classList.toggle("submenu-selected__icon"))))}));const c=document.querySelectorAll("[data-burger-navElem]");c.forEach((e=>{e.addEventListener("click",(()=>{c.forEach((e=>e.classList.remove("burger-active__page"))),e.classList.toggle("burger-active__page")}))}));
//# sourceMappingURL=index.1048eea6.js.map
