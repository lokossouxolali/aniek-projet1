// Configuration du site ANIEK & AYO
// Modifiez ces valeurs pour personnaliser votre site

const SITE_CONFIG = {
    // Informations de l'entreprise
    entreprise: {
        nom: "ANIEK & AYO",
        titre: "Bienvenue chez ANIEK & AYO",
        sousTitre: "Excellence et innovation dans le département Achats",
        description: "Nous sommes spécialisés dans la gestion des achats stratégiques, offrant des solutions innovantes et des partenariats durables pour optimiser votre chaîne d'approvisionnement.",
        vision: "Devenir le partenaire de référence dans la gestion des achats, en créant des synergies durables entre nos clients et nos fournisseurs. Nous nous engageons à promouvoir l'excellence opérationnelle, l'innovation et la responsabilité sociale dans toutes nos relations commerciales."
    },

    // Couleurs du site (peuvent être modifiées dans styles.css)
    couleurs: {
        primaire: "#2563eb",
        secondaire: "#7c3aed",
        accent: "#667eea",
        texte: "#1f2937",
        fond: "#ffffff",
        fondAlt: "#f8fafc"
    },

    // Services proposés
    services: [
        {
            icone: "🛒",
            titre: "Gestion des Achats",
            description: "Optimisation des processus d'achat et négociation stratégique avec nos partenaires."
        },
        {
            icone: "🤝",
            titre: "Partenariats Stratégiques",
            description: "Développement de relations durables avec des fournisseurs de qualité."
        },
        {
            icone: "📊",
            titre: "Analyse des Marchés",
            description: "Études de marché et veille concurrentielle pour des décisions éclairées."
        },
        {
            icone: "⚡",
            titre: "Innovation Continue",
            description: "Adoption des meilleures pratiques et technologies modernes."
        }
    ],

    // Partenaires actuels (exemples)
    partenaires: [
        {
            nom: "Partenaire 1",
            description: "Fournisseur de solutions technologiques",
            logo: "https://via.placeholder.com/200x100/2563eb/ffffff?text=Partenaire+1",
            site: "https://www.example-partner1.com"
        },
        {
            nom: "Partenaire 2",
            description: "Expert en logistique et transport",
            logo: "https://via.placeholder.com/200x100/dc2626/ffffff?text=Partenaire+2",
            site: "https://www.example-partner2.com"
        },
        {
            nom: "Partenaire 3",
            description: "Spécialiste en matières premières",
            logo: "https://via.placeholder.com/200x100/059669/ffffff?text=Partenaire+3",
            site: "https://www.example-partner3.com"
        },
        {
            nom: "Partenaire 4",
            description: "Consultant en achats stratégiques",
            logo: "https://via.placeholder.com/200x100/7c3aed/ffffff?text=Partenaire+4",
            site: "https://www.example-partner4.com"
        },
        {
            nom: "Partenaire 5",
            description: "Fournisseur d'équipements industriels",
            logo: "https://via.placeholder.com/200x100/ea580c/ffffff?text=Partenaire+5",
            site: "https://www.example-partner5.com"
        },
        {
            nom: "Partenaire 6",
            description: "Expert en services financiers",
            logo: "https://via.placeholder.com/200x100/be185d/ffffff?text=Partenaire+6",
            site: "https://www.example-partner6.com"
        }
    ],

    // Paramètres techniques
    technique: {
        animation: true,
        parallax: true,
        lazyLoading: true,
        smoothScroll: true
    },

    // Métadonnées SEO
    seo: {
        titre: "ANIEK & AYO - Département Achats",
        description: "Bienvenue chez ANIEK & AYO. Découvrez nos services, produits et partenaires dans le département Achats.",
        motsCles: "achats, fournisseurs, partenaires, logistique, approvisionnement, ANIEK, AYO",
        auteur: "Département Achats ANIEK & AYO"
    }
};

// Fonction pour ajouter un nouveau partenaire via la configuration
function ajouterPartenaireViaConfig(nom, description, logo, site) {
    const nouveauPartenaire = {
        nom: nom,
        description: description,
        logo: logo,
        site: site
    };
    
    SITE_CONFIG.partenaires.push(nouveauPartenaire);
    console.log(`Partenaire "${nom}" ajouté à la configuration`);
    
    // Optionnel : mettre à jour l'affichage
    if (typeof ajouterPartenaire === 'function') {
        ajouterPartenaire(nom, description, logo, site);
    }
}

// Fonction pour supprimer un partenaire
function supprimerPartenaire(nom) {
    const index = SITE_CONFIG.partenaires.findIndex(p => p.nom === nom);
    if (index > -1) {
        SITE_CONFIG.partenaires.splice(index, 1);
        console.log(`Partenaire "${nom}" supprimé de la configuration`);
        return true;
    }
    return false;
}

// Fonction pour modifier un partenaire existant
function modifierPartenaire(nom, nouvellesDonnees) {
    const partenaire = SITE_CONFIG.partenaires.find(p => p.nom === nom);
    if (partenaire) {
        Object.assign(partenaire, nouvellesDonnees);
        console.log(`Partenaire "${nom}" modifié`);
        return true;
    }
    return false;
}

// Exemple d'utilisation des fonctions de configuration
// ajouterPartenaireViaConfig(
//     "Nouveau Partenaire",
//     "Description du nouveau partenaire",
//     "https://via.placeholder.com/200x100/000000/ffffff?text=Nouveau",
//     "https://www.nouveau-partenaire.com"
// );

// Export pour utilisation dans d'autres fichiers (si nécessaire)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SITE_CONFIG;
}
