// Navigation scroll effect
const guitarNav = document.getElementById('guitarNav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        guitarNav.classList.add('scrolled');
    } else {
        guitarNav.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth scroll for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 100;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Video background setup
const heroVideo = document.getElementById('heroVideo');
if (heroVideo) {
    // Cuando agregues el video, simplemente actualiza el src en el HTML
    // El video se reproducirá automáticamente en loop
    heroVideo.addEventListener('loadeddata', () => {
        console.log('Video cargado correctamente');
    });
}

// Animate elements on scroll
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('.section, .integrante-card, .fecha-item, .video-card, .presentacion-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
});

// Guitar pickups interaction with sound effect simulation
document.querySelectorAll('.pickup').forEach((pickup, index) => {
    pickup.addEventListener('click', () => {
        // Visual feedback
        pickup.style.transform = 'scale(1.2)';
        setTimeout(() => {
            pickup.style.transform = 'scale(1)';
        }, 200);
        
        // Vibrate strings
        document.querySelectorAll('.string').forEach((string, stringIndex) => {
            if (stringIndex === index || index === 2) {
                string.style.animation = 'none';
                setTimeout(() => {
                    string.style.animation = 'stringVibrate 0.3s ease-in-out 3';
                }, 10);
            }
        });
        
        console.log(`Pickup ${index + 1} activado`);
    });
});

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = document.querySelector('.newsletter-input');
    const email = emailInput.value;
    
    if (email) {
        // Simulate form submission with animation
        const button = document.querySelector('.newsletter-button');
        button.textContent = '¡Suscrito!';
        button.style.background = 'var(--primary-gold)';
        button.style.color = 'var(--black)';
        
        setTimeout(() => {
            button.textContent = 'Suscribirse';
            button.style.background = 'var(--black)';
            button.style.color = 'var(--gold-light)';
            emailInput.value = '';
        }, 2000);
    }
});

// Videos are now embedded YouTube iframes - no click handler needed

// Gira button click handler -> Fecha button
document.querySelectorAll('.fecha-button').forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        
        // Add ripple effect
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.background = 'var(--primary-gold)';
        ripple.style.borderRadius = '50%';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s ease-out';
        
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
        
        console.log('Reservar entrada');
    });
});

// Parallax effect for hero section (removed - no content to parallax)
// Video plays automatically in loop

// Stats counter animation
const animateCounter = (element, target) => {
    let current = 0;
    const increment = target / 60;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 25);
};

// Observe stats for counter animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            const targetValue = parseInt(statNumber.textContent);
            animateCounter(statNumber, targetValue);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat').forEach(stat => {
    statsObserver.observe(stat);
});

// Smoke effect enhancement
const createAdditionalSmoke = () => {
    const smokeContainer = document.querySelector('.smoke-container');
    if (!smokeContainer) return;
    
    setInterval(() => {
        const smoke = document.createElement('div');
        smoke.className = 'smoke';
        smoke.style.left = Math.random() * 100 + '%';
        smoke.style.bottom = '-150px';
        smoke.style.animationDuration = (15 + Math.random() * 10) + 's';
        smoke.style.animationDelay = '0s';
        
        smokeContainer.appendChild(smoke);
        
        setTimeout(() => {
            smoke.remove();
        }, 25000);
    }, 8000);
};

// Nav link hover effect with string vibration
document.querySelectorAll('.nav-link').forEach((link, index) => {
    link.addEventListener('mouseenter', () => {
        const strings = document.querySelectorAll('.string');
        const targetString = strings[index % strings.length];
        
        if (targetString) {
            targetString.style.animation = 'none';
            setTimeout(() => {
                targetString.style.animation = 'stringVibrate 0.5s ease-in-out 2';
            }, 10);
        }
    });
});

// Add ripple animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(20);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('Ztimson website loaded - Black & Gold Edition');
    createAdditionalSmoke();
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Cursor trail effect (optional - gold particles)
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Add golden glow to cursor on interactive elements
document.querySelectorAll('a, button, .integrante-card, .video-card, .fecha-item, .presentacion-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
        document.body.style.cursor = 'pointer';
    });
    
    el.addEventListener('mouseleave', () => {
        document.body.style.cursor = 'default';
    });
});
