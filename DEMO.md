# 🚀 Démonstration - ANIEK & AYO

## 🎯 Test du Site

### 1. Ouverture du Site
1. Double-cliquez sur `index.html`
2. Le site s'ouvre dans votre navigateur par défaut
3. Vous devriez voir la page d'accueil avec le message "Bienvenue chez ANIEK & AYO"

### 2. Navigation
- **Desktop** : Utilisez les liens "Accueil" et "Partenaires" dans la barre de navigation
- **Mobile** : Cliquez sur l'icône hamburger (☰) pour ouvrir le menu mobile
- **Scroll** : Faites défiler la page pour voir toutes les sections

### 3. Test des Fonctionnalités
- ✅ **Page d'accueil** : Présentation de l'entreprise
- ✅ **Services** : 4 cartes de services avec icônes
- ✅ **Vision** : Section dédiée à la vision de l'entreprise
- ✅ **Partenaires** : Grille de 6 logos partenaires cliquables
- ✅ **Responsive** : Redimensionnez la fenêtre pour tester

## 🔧 Personnalisation en Temps Réel

### Ajouter un Nouveau Partenaire
Ouvrez la console du navigateur (F12) et tapez :

```javascript
ajouterPartenaire(
    "Microsoft",
    "Leader en solutions technologiques",
    "https://via.placeholder.com/200x100/00a4ef/ffffff?text=Microsoft",
    "https://www.microsoft.com"
);
```

### Modifier la Configuration
Dans la console, vous pouvez aussi :

```javascript
// Voir la configuration actuelle
console.log(SITE_CONFIG);

// Modifier le nom de l'entreprise
SITE_CONFIG.entreprise.nom = "ANIEK & AYO - Excellence";

// Ajouter un partenaire via la configuration
ajouterPartenaireViaConfig(
    "Amazon",
    "E-commerce et logistique",
    "https://via.placeholder.com/200x100/ff9900/ffffff?text=Amazon",
    "https://www.amazon.com"
);
```

## 📱 Test Responsive

### Test sur Mobile
1. Redimensionnez la fenêtre du navigateur
2. Ou utilisez les outils de développement (F12 → icône mobile)
3. Testez différentes tailles d'écran

### Comportements Attendus
- **> 1200px** : Grille 3-4 colonnes
- **768px - 1200px** : Grille 2 colonnes
- **< 768px** : Grille 1 colonne + menu hamburger

## 🎨 Personnalisation Visuelle

### Modifier les Couleurs
Dans `styles.css`, recherchez et modifiez :

```css
/* Couleur primaire */
.nav-logo h2 {
    color: #2563eb; /* Changez cette couleur */
}

/* Dégradé du hero */
.hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    /* Modifiez ces couleurs */
}
```

### Modifier les Textes
Dans `index.html`, recherchez et modifiez :

```html
<h1 class="hero-title">Bienvenue chez ANIEK & AYO</h1>
<!-- Changez ce titre -->

<p class="hero-subtitle">Excellence et innovation dans le département Achats</p>
<!-- Changez ce sous-titre -->
```

## 🔗 Test des Liens Partenaires

### Liens Actuels
- Tous les liens partenaires ouvrent dans un nouvel onglet
- Les URLs sont des exemples (placeholder.com)
- Remplacez-les par vos vrais liens

### Ajouter un Vrai Partenaire
```html
<!-- Remplacez ceci dans index.html -->
<div class="partner-card">
    <a href="https://www.votre-vrai-partenaire.com" target="_blank" rel="noopener noreferrer">
        <div class="partner-logo">
            <img src="images/logo-partenaire.png" alt="Logo Votre Partenaire" loading="lazy">
        </div>
        <h3>Nom Réel du Partenaire</h3>
        <p>Description réelle du partenaire</p>
    </a>
</div>
```

## 📊 Fonctionnalités Avancées

### Indicateur de Scroll
- Une barre bleue apparaît en haut de la page
- Elle indique votre progression dans la page
- Fonctionne automatiquement

### Animations
- Les cartes apparaissent avec un effet de fondu
- Effet de survol sur les cartes partenaires
- Parallaxe subtil sur la section hero

### Accessibilité
- Navigation au clavier (Tab, Escape)
- Textes alternatifs pour images
- Contraste optimisé

## 🚨 Dépannage

### Problèmes Courants

**Images non visibles :**
- Vérifiez que les URLs des logos sont correctes
- Utilisez des images de taille 200x100px pour un rendu optimal

**Menu mobile bloqué :**
- Vérifiez que `script.js` est bien chargé
- Videz le cache du navigateur

**Styles non appliqués :**
- Vérifiez que `styles.css` est bien lié
- Vérifiez la console pour les erreurs

### Solutions
```javascript
// Dans la console du navigateur
// Vérifier que les fichiers sont chargés
console.log('CSS chargé:', document.styleSheets.length > 0);
console.log('JS chargé:', typeof ajouterPartenaire === 'function');

// Recharger la page
location.reload();
```

## 🎉 Félicitations !

Votre site ANIEK & AYO est maintenant fonctionnel et personnalisable !

### Prochaines Étapes
1. **Remplacez les logos placeholder** par vos vrais logos
2. **Modifiez les textes** selon vos besoins
3. **Ajoutez vos vrais partenaires** via la console ou en modifiant le HTML
4. **Personnalisez les couleurs** dans le CSS
5. **Testez sur différents appareils**

### Support
- Consultez le `README.md` pour la documentation complète
- Utilisez `config.js` pour une personnalisation avancée
- Testez régulièrement sur différents navigateurs

---

**Site créé avec ❤️ pour ANIEK & AYO**
