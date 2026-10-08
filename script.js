if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 800,
        once: true,
        easing: 'ease-out-cubic',
        offset: 60
    });
}

const header = document.getElementById('site-header');
const progressBar = document.getElementById('progressBar');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = (scrollTop / docHeight * 100) + '%';

    header.classList.toggle('scrolled', scrollTop > 20);
    backToTop.classList.toggle('show', scrollTop > 500);
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const burger = document.getElementById('burger');
const navList = document.querySelector('nav ul');
burger.addEventListener('click', () => {
    navList.classList.toggle('open');
    burger.classList.toggle('active');
});
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => navList.classList.remove('open'));
});

if (typeof gsap !== 'undefined') {
    gsap.from('.hero-eyebrow', { opacity: 0, y: -20, duration: .8, delay: .1 });
    gsap.from('.hero h1', { opacity: 0, y: 30, duration: 1, delay: .2, ease: 'power3.out' });
    gsap.from('.hero p', { opacity: 0, y: 20, duration: 1, delay: .4, ease: 'power3.out' });
    gsap.from('.hero-buttons', { opacity: 0, y: 20, duration: 1, delay: .6, ease: 'power3.out' });
}
[data-aos] {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
}