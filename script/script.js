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