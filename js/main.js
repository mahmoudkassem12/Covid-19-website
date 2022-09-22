const accoritems = document.querySelectorAll(".accordion-icon")
const accContents = document.querySelectorAll(".accordion-body")
let btnOvlay = document.getElementById('navbar-toggler')
let ovlay = document.getElementById('olay')
btnOvlay.addEventListener('click', () => {
    ovlay.classList.toggle('show')
    console.log(1)
})
accoritems.forEach(accoritem => {
    accoritem.addEventListener('click', (e) => {
        // const panel=accoritem.nextElementSibling;
        // panel.classList.toggle('active')
        accoritem.classList.toggle('active')
    })
})

const accordion = document.getElementsByClassName('contentBx')
for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active')
    })
}