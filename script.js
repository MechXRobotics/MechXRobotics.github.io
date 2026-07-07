const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if (!burger || !nav) {
        return;
    }

    const closeNav = () => {
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
        burger.setAttribute('aria-expanded', 'false');
        navLinks.forEach((link) => {
            link.style.animation = '';
        });
    };

    burger.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle', isOpen);
        burger.setAttribute('aria-expanded', String(isOpen));

        navLinks.forEach((link, index) => {
            link.style.animation = isOpen
                ? `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`
                : '';
        });
    });

    nav.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener('click', closeNav);
    });
};

const smoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (event) {
            const target = document.querySelector(this.getAttribute('href'));

            if (!target) {
                return;
            }

            event.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
};

navSlide();
smoothScroll();
