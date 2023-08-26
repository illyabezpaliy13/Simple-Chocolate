document.addEventListener("click",function(e){let t=e.target;if(t.closest("[data-ripple]")){// Константи
let l=t.closest("[data-ripple]"),i=document.createElement("span"),p=Math.max(l.clientWidth,l.clientHeight),n=p/2;// Формування елементу
i.style.width=i.style.height=`${p}px`,i.style.left=`${e.pageX-(l.getBoundingClientRect().left+scrollX)-n}px`,i.style.top=`${e.pageY-(l.getBoundingClientRect().top+scrollY)-n}px`,i.classList.add("ripple"),// Видалення існуючого елмкнту (опціонально)
"once"===l.dataset.ripple&&l.querySelector(".ripple")&&l.querySelector(".ripple").remove(),// Додавання елементу
l.appendChild(i);// Отримання часу дії анімації
let a=this.getAnimationDuration(i);// Видалення елементу
setTimeout(()=>{i&&i.remove()},a)}});//# sourceMappingURL=index.e3381b76.js.map

//# sourceMappingURL=index.e3381b76.js.map
