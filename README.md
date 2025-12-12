# CITY HOTEL KÉTOU - Site Web

Site web moderne et professionnel pour CITY HOTEL KÉTOU, situé à Kétou au Bénin.

## 🚀 Technologies utilisées

- **React 18** - Bibliothèque JavaScript pour l'interface utilisateur
- **React Router** - Navigation entre les pages
- **TailwindCSS** - Framework CSS utilitaire
- **Vite** - Outil de build rapide et moderne

## 📋 Prérequis

- Node.js (version 16 ou supérieure)
- npm ou yarn

## 🛠️ Installation

1. **Installer les dépendances :**
   ```bash
   npm install
   ```

2. **Lancer le serveur de développement :**
   ```bash
   npm run dev
   ```

3. **Ouvrir dans le navigateur :**
   Le site sera accessible à l'adresse : `http://localhost:5173`

## 📦 Build pour production

Pour créer une version optimisée pour la production :

```bash
npm run build
```

Les fichiers seront générés dans le dossier `dist/`.

## 🌐 Déploiement

### Déploiement sur Netlify

1. **Via Netlify CLI :**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify deploy --prod
   ```

2. **Via l'interface Netlify :**
   - Connectez votre dépôt GitHub/GitLab
   - Configurez les paramètres de build :
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Déployez !

### Déploiement sur Vercel

1. **Via Vercel CLI :**
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Via l'interface Vercel :**
   - Importez votre projet
   - Vercel détectera automatiquement les paramètres
   - Cliquez sur "Deploy"

## 📱 Pages du site

- **Accueil** (`/`) - Page d'accueil avec hero, chambres, services, avis et galerie
- **Chambres** (`/chambres`) - Liste détaillée de toutes les chambres
- **Services** (`/services`) - Présentation des services de l'hôtel
- **Galerie** (`/galerie`) - Galerie photo avec filtres par catégorie
- **À propos** (`/a-propos`) - Histoire, mission, vision et localisation
- **Contact** (`/contact`) - Formulaire de contact et informations
- **Réservation** (`/reservation`) - Formulaire de réservation avec intégration WhatsApp

## 🎨 Personnalisation

### Couleurs

Les couleurs principales sont définies dans `tailwind.config.js` :
- `hotel-dark`: #0C1B33 (bleu foncé)
- `hotel-light`: #E0E6ED (gris clair)
- `hotel-gold`: #D4AF37 (or premium)

### Images

Les images utilisent des placeholders d'Unsplash. Pour les remplacer :
1. Ajoutez vos images dans le dossier `public/`
2. Remplacez les URLs dans les fichiers des pages

### Informations de contact

Modifiez les numéros de téléphone et WhatsApp dans :
- `src/components/Footer.jsx`
- `src/pages/Contact.jsx`
- `src/pages/Reservation.jsx`

Remplacez `229XXXXXXXXX` par votre numéro réel.

## 📝 SEO

Le site est optimisé pour le SEO avec :
- Meta tags dans `index.html`
- Structure sémantique HTML
- Titres et descriptions optimisés
- Mots-clés : "Hôtel à Kétou", "Meilleur hôtel Kétou", "City Hotel Kétou réservation"

## 🔧 Configuration Google Maps

Pour intégrer votre propre carte Google Maps :
1. Obtenez une clé API Google Maps
2. Remplacez l'URL de l'iframe dans `src/pages/About.jsx` et `src/pages/Contact.jsx`
3. Utilisez les coordonnées GPS de votre hôtel

## 📞 Support

Pour toute question ou assistance, contactez l'équipe de développement.

## 📄 Licence

© 2024 CITY HOTEL KÉTOU. Tous droits réservés.






