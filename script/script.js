


// smooth scroll

const navMenu = document.querySelector('nav ul');
const navbarLinks = document.querySelectorAll('nav ul a');
// const navbarLinksArr = [...navbarLinks];
const burger = document.querySelector('.toggle')


const smoothScroll = (e)=>{
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    window.scrollTo({
        top: document.querySelector(targetId).offsetTop,
        behavior: 'smooth'
    })

    
    burger.click()
}


navbarLinks.forEach(elem => elem.addEventListener('click', smoothScroll));


//shrink navbar


const logo = document.querySelector('nav div');
const nav = document.querySelector('nav');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    // if(document.documentElement.scrollTop > 80){
    //     nav.style.top = '-100px'
    // }
    document.documentElement.scrollTop > 80 ? nav.style.top = '-100px' : nav.style.top = '0px'
}


// arrow Down
const arrowDown = document.querySelector('.top a'); 

arrowDown.addEventListener('click', ()=>{
    window.scrollTo({
        top: document.querySelector(`#kolczyki`).offsetTop,
        behavior: 'smooth'
    })
});





const navbarMenu = document.querySelector('nav ul');

// const navbarLinks = document.querySelectorAll('nav ul a');
const navbarLinksArr = [...navbarLinks];

const start = document.querySelector('.top');
const kolczyki = document.querySelector('.kolczyki');
const branzoletki = document.querySelector('.branzoletki');
const kartki = document.querySelector('.kartki');
const kontakt = document.querySelector('.contact');




//nav follow offsetTop

const followNav = ()=> {
    
    const scrollPosition = Math.ceil(document.documentElement.scrollTop)+1;
    navbarLinksArr.forEach(elem => elem.classList.remove('active'))

    if((scrollPosition>=kolczyki.offsetTop)&&(scrollPosition<branzoletki.offsetTop)){
        navbarLinksArr[1].classList.add('active');
        console.log('osiem')
    }
    else if((scrollPosition>=branzoletki.offsetTop)&&(scrollPosition<kartki.offsetTop)){
        navbarLinksArr[2].classList.add('active');
    }
    else if((scrollPosition>=kartki.offsetTop)&&(scrollPosition<kontakt.offsetTop)){
        navbarLinksArr[3].classList.add('active');
    }
    else if((scrollPosition>=kontakt.offsetTop)){
        navbarLinksArr[4].classList.add('active');
    }
    else{
        navbarLinksArr[0].classList.add('active');
    }
    
    document.documentElement.scrollTop > 20 ? arrowDown.style.display = "none" : arrowDown.style.display = "block"
};

window.addEventListener('scroll', followNav)




//form validation

const form = document.getElementById('form');
const imie = document.getElementById('imie');

const email = document.getElementById('email');
const telefon = document.getElementById('telefon');
const wiadomosc = document.getElementById('wiadomosc');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    checkInputs();
})

function checkInputs() {

    const imieValue = imie.value.trim();
    const emailValue = email.value.trim();
    const telefonValue = telefon.value.trim();
    const wiadomoscValue = wiadomosc.value.trim();


    if(imieValue === ""){
        setErrorFor(imie, 'Podaj imie')
    }else{
        setSuccesFor(imie)
    }

    if(emailValue === ''){
        setErrorFor(email, 'Podaj email')
    }else if(!isEmail(emailValue)){
        setErrorFor(email, "email jest niepoprawny")
    }
    else{
        setSuccesFor(email)
    }
    if(telefonValue === ''){
        setErrorFor(telefon, 'Podaj numer tel')
    }else if(!isTelefon(telefonValue)){
        setErrorFor(telefon, "telefon jest niepoprawny")
    }else{
        setSuccesFor(telefon)
    }
    if(wiadomoscValue === ''){
        setErrorFor(wiadomosc, 'Napisz wiadomosc')
    }else if(wiadomoscValue.length < 25){
        setErrorFor(wiadomosc, "Za mało znaków")
    }else{
        setSuccesFor(wiadomosc)
    }



    }


function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error'
}

function setSuccesFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)

}

function isTelefon(telefon){
    if(telefon.length <=9){

        return /\d{9}/.test(telefon)
    }
    else{
        return false
    }
}

