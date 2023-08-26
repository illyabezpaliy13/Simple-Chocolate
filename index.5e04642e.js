!function(){let e=document.querySelectorAll("[data-select-btn]");e.forEach(e=>{e.addEventListener("click",()=>e.parentNode.classList.toggle("buy-selected__card"))});//? Submenu Func
let t=document.querySelectorAll("[data-heart-btn]"),l=Math.round(1099*Math.random()+1);t.forEach(e=>{e.addEventListener("click",()=>(e.firstElementChild.classList.contains("submenu-selected__icon")?// likesText.textContent = likesCounter.value;
    console.log(l-=1):// likesText.textContent = likesCounter.value;
    // likesText = likesCounter.textContent;
    console.log(l+=1),e.firstElementChild.classList.toggle("submenu-selected__icon")))});let c=document.querySelectorAll("[data-burger-navElem]");// console.log(burgerLinks);
c.forEach(e=>{e.addEventListener("click",()=>{c.forEach(e=>e.classList.remove("burger-active__page")),e.classList.toggle("burger-active__page")})})}();//# sourceMappingURL=index.5e04642e.js.map

//# sourceMappingURL=index.5e04642e.js.map
