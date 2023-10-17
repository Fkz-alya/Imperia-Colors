// ================= form popup ================
const formBtnOpen = document.querySelector('#form-popup-open');
const formBtnClose = document.querySelector('#form-popup-close');
const form = document.querySelector('#form-popup');

formBtnOpen.addEventListener('click', () => form.classList.add('open'))

formBtnClose.addEventListener('click', () => form.classList.remove('open'))
window.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') {
        form.classList.remove('open');
    }
})
 
document.querySelector('#form-popup .popup__wrapper').addEventListener('click', event => {
    event._isClickWithInModal = true;
})

form.addEventListener('click', event => {
    if(event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open')
})

//================= policy popup ================
const policyBtnOpen = document.querySelector('#policy-popup-open');
const policyBtnClose = document.querySelector('#policy-popup-close');
const policy = document.querySelector('#policy-popup');

policyBtnOpen.addEventListener('click', () => policy.classList.add('open'))

policyBtnClose.addEventListener('click', () => policy.classList.remove('open'))
window.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') {
        policy.classList.remove('open');
    }
})


document.querySelector('#policy-popup .popup__wrapper').addEventListener('click', event => {
    event._isClickWithInModal = true;
})

policy.addEventListener('click', event => {
    if(event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open')
})
