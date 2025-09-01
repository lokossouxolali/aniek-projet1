// Navigation mobile
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle du menu mobile
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Fermer le menu mobile lors du clic sur un lien
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Fermer le menu mobile lors du clic en dehors
    document.addEventListener('click', function(event) {
        if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Animation du hamburger
    hamburger.addEventListener('click', function() {
        const bars = hamburger.querySelectorAll('.bar');
        bars.forEach((bar, index) => {
            if (hamburger.classList.contains('active')) {
                if (index === 0) {
                    bar.style.transform = 'rotate(45deg) translate(5px, 5px)';
                } else if (index === 1) {
                    bar.style.opacity = '0';
                } else if (index === 2) {
                    bar.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                }
            } else {
                bar.style.transform = 'none';
                bar.style.opacity = '1';
            }
        });
    });

    // Navigation smooth scroll
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Ajustement pour la navbar fixe
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Effet de parallaxe subtil sur le hero
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
    });

    // Animation des cartes au scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observer les cartes de services et partenaires
    const cards = document.querySelectorAll('.service-card, .partner-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Effet de hover amélioré pour les cartes partenaires
    const partnerCards = document.querySelectorAll('.partner-card');
    partnerCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Ajout d'un indicateur de scroll
    const scrollIndicator = document.createElement('div');
    scrollIndicator.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #2563eb, #7c3aed);
        z-index: 1001;
        transition: width 0.3s ease;
    `;
    document.body.appendChild(scrollIndicator);

    // Mise à jour de l'indicateur de scroll
    window.addEventListener('scroll', function() {
        const scrolled = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        scrollIndicator.style.width = scrolled + '%';
    });

    // Amélioration de l'accessibilité
    // Ajout de la navigation au clavier
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Focus management pour la navigation mobile
    if (hamburger.classList.contains('active')) {
        navMenu.setAttribute('aria-hidden', 'false');
    } else {
        navMenu.setAttribute('aria-hidden', 'true');
    }
});

// Fonction pour ajouter un nouveau partenaire (exemple d'utilisation)
function ajouterPartenaire(nom, description, logoUrl, siteUrl) {
    const partnersGrid = document.querySelector('.partners-grid');
    
    const newPartner = document.createElement('div');
    newPartner.className = 'partner-card';
    newPartner.innerHTML = `
        <a href="${siteUrl}" target="_blank" rel="noopener noreferrer">
            <div class="partner-logo">
                <img src="${logoUrl}" alt="Logo ${nom}" loading="lazy">
            </div>
            <h3>${nom}</h3>
            <p>${description}</p>
        </a>
    `;
    
    partnersGrid.appendChild(newPartner);
    
    // Réinitialiser l'animation
    newPartner.style.opacity = '0';
    newPartner.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
        newPartner.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        newPartner.style.opacity = '1';
        newPartner.style.transform = 'translateY(0)';
    }, 100);
}

// Exemple d'utilisation (à décommenter si nécessaire)
// ajouterPartenaire(
//     "Nouveau Partenaire",
//     "Description du nouveau partenaire",
//     "https://via.placeholder.com/200x100/000000/ffffff?text=Nouveau",
//     "https://www.nouveau-partenaire.com"
// );
