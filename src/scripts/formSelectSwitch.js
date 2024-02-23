const selectInput = document.getElementById('serviceTypeInput')
function changeSelectOption(value) {
    selectInput.value = value
}

const pwaLinks = document.querySelectorAll('a.pwa__service')
const ecommerceLinks = document.querySelectorAll('a.ecommerce__service')
const landingLinks = document.querySelectorAll('a.landing__service')
const advisoryLinks = document.querySelectorAll('.advisory__service')

//create array with Results

pwaLinks.forEach((link) => {
    link.addEventListener('click', () => changeSelectOption('pwa'))
})

ecommerceLinks.forEach((link) => {
    link.addEventListener('click', () => changeSelectOption('tienda virtual'))
})

landingLinks.forEach((link) => {
    link.addEventListener('click', () => changeSelectOption('landing Page'))
})

advisoryLinks.forEach((link) => {
    link.addEventListener('click', () => {
        if (link.tagName == 'BUTTON') {
            window.location.href = '#contacto'
        }
        changeSelectOption('asesoria')
    })
})
