let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector("header").style.top = "0";
    } else {
        document.querySelector("header").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
}

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const overlay = document.getElementById('navOverlay');
    const overlayLinks = document.querySelectorAll('.overlay-content a');

    const toggleOverlay = () => {
        const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
        hamburger.setAttribute('aria-expanded', !expanded);
        overlay.classList.toggle('show');
    };

    hamburger.addEventListener('click', toggleOverlay);

    overlayLinks.forEach(link => {
        link.addEventListener('click', toggleOverlay);
    });
});