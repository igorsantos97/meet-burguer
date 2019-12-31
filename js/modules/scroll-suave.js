export default function initScrollSmooth() {
    const links = document.querySelectorAll('[data-anime="scroll-smooth"] li a');


    function scrollSmooth(e) {
        e.preventDefault();
        
        const id = this.getAttribute('href');
        const section = document.querySelector(id);


        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }

    links.forEach((link) => {
        link.addEventListener('click', scrollSmooth);
    });

}