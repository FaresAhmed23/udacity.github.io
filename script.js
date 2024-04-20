const inputEmail = document.getElementById('email')
const inputPass = document.getElementById('password')
const error = document.getElementById('error')
const btn = document.getElementById('btn')
const login = document.getElementById('form')
const about = document.getElementById('about')
const href = 'calc.html'
const credentials = {
    email: 'Riyad@gmail.com',
    pass: 'Riyada2323'
}
btn.addEventListener('click', () => {
    if (inputEmail.value === credentials.email && inputPass.value === credentials.pass){
        window.location.href = href
    } else if (inputEmail.value !== credentials.email || inputPass.value !== credentials.pass) {
        error.style.display = 'block'
    }
})
login.addEventListener('submit', event => event.preventDefault())
about.addEventListener('click', () => {
    window.location.href = 'about.html'
})