# 🌐 ANIEK & AYO - Page Web Département Achats

## 📋 Description du Projet

Site web moderne et responsive pour le département Achats d'ANIEK & AYO, présentant l'entreprise, ses services et ses partenaires/fournisseurs.

## ✨ Fonctionnalités

- **Page d'accueil** : Présentation de l'entreprise, services et vision
- **Section Partenaires** : Grille interactive des logos partenaires cliquables
- **Design responsive** : Optimisé pour PC, tablette et mobile
- **Navigation fluide** : Menu hamburger mobile et navigation smooth scroll
- **Effets visuels** : Animations subtiles et interactions au survol

## 🚀 Installation et Utilisation

### Prérequis
- Navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Serveur web local (optionnel pour le développement)

### Démarrage rapide
1. Téléchargez tous les fichiers du projet
2. Ouvrez `index.html` dans votre navigateur
3. Le site est prêt à l'emploi !

### Déploiement
- Uploadez tous les fichiers sur votre serveur web
- Assurez-vous que `index.html` est à la racine
- Le site fonctionne immédiatement sans configuration

## 📁 Structure des Fichiers

```
projet-aniek-ayo/
├── index.html          # Page principale HTML
├── styles.css          # Styles CSS et responsive design
├── script.js           # JavaScript pour interactions
└── README.md           # Documentation (ce fichier)
```

## 🎨 Personnalisation

### Modifier le contenu
- **Entreprise** : Modifiez le texte dans `index.html` (sections hero, services, vision)
- **Couleurs** : Ajustez les variables CSS dans `styles.css`
- **Logos** : Remplacez les URLs placeholder par vos vrais logos

### Ajouter un nouveau partenaire

#### Méthode 1 : Modification directe du HTML
```html
<div class="partner-card">
    <a href="https://www.votre-partenaire.com" target="_blank" rel="noopener noreferrer">
        <div class="partner-logo">
            <img src="chemin/vers/logo.png" alt="Logo Votre Partenaire" loading="lazy">
        </div>
        <h3>Nom du Partenaire</h3>
        <p>Description du partenaire</p>
    </a>
</div>
```

#### Méthode 2 : Utilisation de JavaScript
```javascript
// Dans la console du navigateur ou dans script.js
ajouterPartenaire(
    "Nom du Partenaire",
    "Description du partenaire",
    "chemin/vers/logo.png",
    "https://www.votre-partenaire.com"
);
```

### Remplacer les logos placeholder
1. Préparez vos logos (format PNG/JPG recommandé, taille 200x100px)
2. Uploadez-les sur votre serveur
3. Remplacez les URLs `https://via.placeholder.com/...` par vos vrais chemins
4. Ajustez les attributs `alt` pour l'accessibilité

## 🎯 Fonctionnalités Techniques

### Responsive Design
- **Desktop** : Grille 3-4 colonnes
- **Tablette** : Grille 2 colonnes
- **Mobile** : Grille 1 colonne avec menu hamburger

### Accessibilité
- Navigation au clavier (Tab, Escape)
- Textes alternatifs pour images
- Contraste optimisé
- Support des lecteurs d'écran

### Performance
- Images en lazy loading
- CSS et JS optimisés
- Animations fluides avec `prefers-reduced-motion`

## 🔧 Maintenance

### Mise à jour des partenaires
1. **Ajouter** : Utilisez la fonction `ajouterPartenaire()` ou modifiez le HTML
2. **Modifier** : Changez le contenu des cartes partenaires
3. **Supprimer** : Supprimez les `<div class="partner-card">` correspondants

### Mise à jour du contenu
- **Services** : Modifiez les cartes dans la section `.services`
- **Vision** : Ajustez le texte dans la section `.vision`
- **Navigation** : Modifiez les liens dans `.nav-menu`

### Personnalisation avancée
- **Couleurs** : Modifiez les variables CSS (dégradés, couleurs principales)
- **Typographie** : Changez la police Google Fonts dans le `<head>`
- **Animations** : Ajustez les durées et effets dans `script.js`

## 🌐 Compatibilité

### Navigateurs supportés
- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

### Appareils
- ✅ Ordinateurs de bureau
- ✅ Tablettes
- ✅ Smartphones
- ✅ Écrans haute résolution

## 📱 Test et Validation

### Test local
1. Ouvrez `index.html` dans votre navigateur
2. Testez la navigation mobile (redimensionnez la fenêtre)
3. Vérifiez les liens partenaires
4. Testez l'accessibilité au clavier

### Validation
- HTML5 valide
- CSS3 compatible
- JavaScript ES6+
- Responsive design testé

## 🚨 Dépannage

### Problèmes courants
- **Images non visibles** : Vérifiez les chemins des logos
- **Menu mobile bloqué** : Vérifiez que `script.js` est bien chargé
- **Styles non appliqués** : Vérifiez que `styles.css` est bien lié

### Solutions
- Videz le cache du navigateur
- Vérifiez la console pour les erreurs JavaScript
- Testez sur différents navigateurs

## 📞 Support

Pour toute question ou problème :
- Vérifiez d'abord cette documentation
- Testez sur différents appareils
- Consultez la console du navigateur pour les erreurs

## 📄 Licence

© Département Achats – ANIEK & AYO. Tous droits réservés.

---

**Version** : 1.0  
**Dernière mise à jour** : 2024  
**Auteur** : Département Achats ANIEK & AYO
