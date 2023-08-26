!function(){(()=>{let e={openModalBtn:document.querySelector("[data-open-review]"),closeModalBtn:document.querySelector("[data-close-review]"),backdrop3:document.querySelector("[data-backdrop-review]")};// refs.backdrop3.addEventListener('click', logBackdropClick);
function t(){e.backdrop3.classList.toggle("is-hidden-review")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t);// function logBackdropClick() {
//   console.log('Це клік в бекдроп');
// }
})();let e={openModalBtn:document.querySelector("[data-open-thanks]"),closeModalBtn:document.querySelector("[data-close-thanks]"),backdrop5:document.querySelector("[data-backdrop-thanks]")};//! bc5 - thanks
//! bc3 - review-modal
function t(){e.backdrop5.classList.toggle("is-hidden-thanks")}document.getElementById("comment__form").addEventListener("submit",function(n){n.preventDefault(),!0===function(e){function t(e){let t=e.parentNode;t.classList.contains("error")&&t.classList.remove("error")}function n(e,t){let n=e.parentNode;// const errorLabel = document.createElement('label');
// errorLabel.classList.add('error-label');
// errorLabel.textContent = text;
n.classList.add("error"),n.append(errorLabel)}let a=!0,o=e.querySelectorAll("input");for(let e of o)t(e),e.dataset.minLength&&e.value.length<e.dataset.minLength&&(t(e),n(e,`Min. length: ${e.dataset.minLength}`),a=!1),e.dataset.maxLength&&e.value.length>e.dataset.maxLength&&(t(e),n(e,`Max. length: ${e.dataset.maxLength}`),a=!1),"true"==e.dataset.required&&""==e.value&&(t(e),n(e,"Field is empty!"),a=!1);return a}(this)&&(document.getElementById("success"),e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t),document.getElementById("comment__form").addEventListener("submit",function(n){n.preventDefault();let a=`<b>Simply Chocolate Review</b>
`;// message += `<b>Card: </b> ${this.cardnum.value} \n`;
a+=`<b>Name: </b> <i>${this.commentname.value}</i> 
<b>Email: </b> ${this.commentemail.value} 
<b>Phone: </b> ${this.commentphonenum.value} 
<b>Comment: </b> ${this.commentreview.value}`,axios.post("https://api.telegram.org/bot/sendMessage",{chat_id:"-1001917308774",parse_mode:"html",text:a}).then(e=>{this.commentname.value="",// this.surname.value = '';
this.commentemail.value="",this.commentphonenum.value="",// this.cardnum.value = '';
this.commentreview.value="";// success.style.display = 'block';
// success.innerHTML = 'Message Send';
}).catch(e=>{console.warn(e)}).finally(()=>{// console.log('The end');
e.openModalBtn.removeEventListener("click",t),document.querySelector("[data-backdrop-review]").classList.toggle("is-hidden-review")})}))});// (() => {
// const refs = {
//   openModalBtn: document.querySelector('[data-open-thanks]'),
//   closeModalBtn: document.querySelector('[data-close-thanks]'),
//   backdrop5: document.querySelector('[data-backdrop-thanks]'),
// };
// refs.openModalBtn.addEventListener('click', toggleModal);
// refs.closeModalBtn.addEventListener('click', toggleModal);
// refs.backdrop5.addEventListener('click', logBackdropClick);
// function toggleModal() {
//   refs.backdrop5.classList.toggle('is-hidden-thanks');
// }
// })();
}();//# sourceMappingURL=index.0a5d994d.js.map

//# sourceMappingURL=index.0a5d994d.js.map
