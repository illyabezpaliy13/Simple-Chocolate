(()=>{let e={openModalBtn:document.querySelector("[data-open-mailing]"),closeModalBtn:document.querySelector("[data-close-mailing]"),backdropMailing:document.querySelector("[data-backdrop-mailing]")};// refs.backdropMailing.addEventListener('click', logBackdropClick);
function t(){e.backdropMailing.classList.toggle("is-hidden-mailing")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})(),// const refsThanks = {
//   openModalBtn: document.querySelector('[data-open-thanks]'),
//   closeModalBtn: document.querySelector('[data-close-thanks]'),
//   backdrop5: document.querySelector('[data-backdrop-thanks]'),
//   // discountContainer: document.querySelector('.discount-container'),
// };
//! bc5 - thanks
//! bc3 - review-modal
// function toggleModalThanks() {
//   refsThanks.backdrop5.classList.toggle('is-hidden-thanks');
// }
document.getElementById("mailing-form").addEventListener("submit",function(e){e.preventDefault(),!0===function(e){function t(e){let t=e.parentNode;t.classList.contains("error")&&t.classList.remove("error")}function a(e,t){let a=e.parentNode,n=document.createElement("label");n.classList.add("error-label-mailing"),n.textContent=t,a.classList.add("error"),a.append(n)}let n=!0,l=e.querySelectorAll("input");for(let e of l)t(e),e.dataset.minLength&&e.value.length<e.dataset.minLength&&(t(e),a(e,`Min. length: ${e.dataset.minLength}`),n=!1),e.dataset.maxLength&&e.value.length>e.dataset.maxLength&&(t(e),a(e,`Max. length: ${e.dataset.maxLength}`),n=!1),"true"==e.dataset.required&&""==e.value&&(t(e),a(e,"Field is empty!"),n=!1);return n}(this)&&(document.getElementById("success"),// refsThanks.openModalBtn.addEventListener('click', toggleModalThanks);
// refsThanks.closeModalBtn.addEventListener('click', toggleModalThanks);
document.getElementById("mailing-form").addEventListener("submit",function(e){e.preventDefault();let t=`<b>Simply Chocolate Mailing</b>
`;// message += `<b>Name: </b> <i>${this.commentname.value}</i> \n`;
// message += `<b>Surname: </b> <i>${this.surname.value}</i> \n`;
t+=`<b>Email: </b> ${this.mailingmodalemail.value}`,// message += `<b>Phone: </b> ${this.commentphonenum.value} \n`;
// message += `<b>Card: </b> ${this.cardnum.value} \n`;
// message += `<b>Comment: </b> ${this.commentreview.value}`;
axios.post("https://api.telegram.org/bot/sendMessage",{chat_id:"-1001917308774",parse_mode:"html",text:t}).then(e=>{// this.commentname.value = '';
// this.surname.value = '';
this.mailingmodalemail.value="";// this.commentphonenum.value = '';
// this.cardnum.value = '';
// this.commentreview.value = '';
// success.style.display = 'block';
// success.innerHTML = 'Message Send';
}).catch(e=>{console.warn(e)}).finally(()=>{document.querySelector("[data-backdrop-mailing]").classList.toggle("is-hidden-mailing");// console.log('The end');
// refsThanks.openModalBtn.removeEventListener(
//   'click',
//   toggleModalThanks
// );
// document
//   .querySelector('[data-backdrop-review]')
//   .classList.toggle('is-hidden-review');
})}))});// (() => {
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
//# sourceMappingURL=index.4cf86393.js.map

//# sourceMappingURL=index.4cf86393.js.map
