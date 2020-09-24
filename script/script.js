console.log('siema eniu')


// smooth scroll

const navMenu = document.querySelector('nav ul');
const navbarLinks = document.querySelectorAll('nav ul a');
// const navbarLinksArr = [...navbarLinks];


const smoothScroll = (e)=>{
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    window.scrollTo({
        top: document.querySelector(targetId).offsetTop,
        behavior: 'smooth'
    })
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


// checkProduct
const checkProduct = document.querySelector(' .top h1 a'); 

checkProduct.addEventListener('click', ()=>{
    window.scrollTo({
        top: document.querySelector(`#kolczyki`).offsetTop,
        behavior: 'smooth'
    })
});