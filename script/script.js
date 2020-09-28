


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