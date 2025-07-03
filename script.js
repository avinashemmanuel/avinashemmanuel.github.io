window.addEventListener('scroll', function() {
    const about = document.querySelector('.about-section');
    const rect = about.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
        about.style.transition = 'opacity 1s';
        about.style.opacity = 1;
    }
});

const nameEl = document.querySelector('.name');
if (nameEl) {
    const text = nameEl.textContent;
    nameEl.textContent = '';
    let i = 0;
    function type() {
        if (i < text.length) {
            nameEl.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }
    type();
}

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