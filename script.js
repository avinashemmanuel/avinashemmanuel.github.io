window.addEventListener('scroll', function() {
    const about = document.querySelector('.about-section');
    const rect = about.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
        about.style.transition = 'opacity 1s';
        about.style.opacity = 1;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var nameEl = document.querySelector('.name');
    if (nameEl) {
        var text = nameEl.getAttribute('data-text') || nameEl.textContent.trim();
        nameEl.textContent = '';
        var i = 0;
        function type() {
            if (i < text.length) {
                nameEl.textContent += text.charAt(i);
                i++;
                setTimeout(type, 100);
            }
        }
        if (document.fonts && document.fonts.load) {
            document.fonts.load('1em "Press Start 2P"').then(function() {
                setTimeout(type, 100);
            });
        } else {
            type();
        }
    }
});

const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});
backToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.querySelectorAll('.project-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('highlight');
    });
    item.addEventListener('mouseleave', () => {
        item.classList.remove('highlight');
    });
});

function revealProjectOnScroll() {
    document.querySelectorAll('.project-item').forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            item.style.opacity = 1;
            item.style.transform = 'translateY(0)';
        }
    });
}
window.addEventListener('scroll', revealProjectOnScroll);
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.project-item').forEach(item => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(40px)';
        item.style.transition = 'opacity 0.7s, transform 0.7s';
    });
    revealProjectOnScroll();
});
window.addEventListener('scroll', function() {
    const projects = this.document.querySelector('.projects-section');
    if (projects) {
        const rect = projects.getBoundingClientRect();
        if (rect.top < this.window.innerHeight - 100) {
            projects.style.opacity = 1;
        }
    }
});

document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mousemaster', () => {
        link.classList.add('pulse');
    });
    link.addEventListener('mouseleave', () => {
        link.classList.remove('pulse');
    });
});
window.addEventListener('scroll', function() {
    const socials = this.document.querySelector('.socials-section');
    if (socials) {
        const rect = socials.getBoundingClientRect();
        if (rect.top < this.window.innerHeight - 100) {
            socials.style.transition = 'opacity 1s';
            socials.style.opacity = 1;
        }
    }
});

function fadeSectionOnScroll(selector) {
    var section = document.querySelector(selector);
    if (section) {
        var rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            section.style.transition = 'opacity 1s';
            section.style.opacity = 1;
        } else {
            section.style.transition = 'opacity 1s';
            section.style.opacity = 0;
        }
    }
}

window.addEventListener('scroll', function() {
    fadeSectionOnScroll('.about-section');
    fadeSectionOnScroll('.projects-section');
    fadeSectionOnScroll('.socials-section');
    fadeSectionOnScroll('.footer-section');
});

window.addEventListener('DOMContentLoaded', function() {
    fadeSectionOnScroll('.about-section');
    fadeSectionOnScroll('.projects-section');
    fadeSectionOnScroll('.socials-section');
    fadeSectionOnScroll('.footer-section');
});

const footerMail = document.querySelector('.footer-mail');
if (footerMail) {
    footerMail.addEventListener('click', function(e) {
        e.preventDefault();
        navigator.clipboard.writeText(footerMail.textContent.trim());
        let tooltip = document.createElement('span');
        tooltip.textContent = "Copied!";
        tooltip.style.marginLeft = "8px";
        tooltip.style.color = "#ffb300";
        tooltip.style.fontSize = "0.95em";
        tooltip.className = "footer-tooltip";
        footerMail.parentNode.appendChild(tooltip);
        setTimeout(() => {
            tooltip.remove();
        }, 1200);
    });
}

window.addEventListener('scroll', function() {
    const footer = this.document.querySelector('.footer-section');
    if (footer) {
        const rect = footer.getBoundingClientRect();
        if (rect.top < this.window.innerHeight - 50) {
            footer.style.transition = 'opacity 1s';
            footer.style.opacity = 1;
        } else {
            footer.style.transition = 'opacity 1s';
            footer.style.opacity = 0;
        }
    }
});
window.addEventListener('DOMContentLoaded', function() {
    const footer = this.document.querySelector('.footer-section');
    if (footer) {
        footer.style.opacity = 0;
    }
});

var menuBtn = document.getElementById('menuBtn');
var mobileMenu = document.getElementById('mobileMenu');
var closeMenuBtn = document.getElementById('closeMenuBtn');

if (menuBtn && mobileMenu && closeMenuBtn) {
    menuBtn.addEventListener('click', function() {
        mobileMenu.classList.add('open');
        menuBtn.classList.add('hide'); // Hide menu button
        document.body.style.overflow = 'hidden';
    });
    closeMenuBtn.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        menuBtn.classList.remove('hide'); // Show menu button
        document.body.style.overflow = '';
    });
    var mobileLinks = mobileMenu.querySelectorAll('a');
    for (var i = 0; i < mobileLinks.length; i++) {
        mobileLinks[i].addEventListener('click', function() {
            mobileMenu.classList.remove('open');
            menuBtn.classList.remove('hide'); // Show menu button
            document.body.style.overflow = '';
        });
    }
}