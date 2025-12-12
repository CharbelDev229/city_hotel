# 📁 Structure du Projet CITY HOTEL KÉTOU

## Structure des Fichiers

```
City Hotèle/
│
├── public/                 # Fichiers statiques
│   └── vite.svg           # Logo Vite
│
├── src/                    # Code source
│   ├── components/         # Composants réutilisables
│   │   ├── Footer.jsx     # Pied de page
│   │   ├── Header.jsx     # En-tête avec navigation
│   │   └── Layout.jsx     # Layout principal
│   │
│   ├── pages/              # Pages du site
│   │   ├── About.jsx      # Page À propos
│   │   ├── Contact.jsx    # Page Contact
│   │   ├── Gallery.jsx    # Page Galerie
│   │   ├── Home.jsx       # Page d'accueil
│   │   ├── Reservation.jsx # Page Réservation
│   │   ├── Rooms.jsx      # Page Chambres
│   │   └── Services.jsx   # Page Services
│   │
│   ├── App.jsx            # Composant principal avec routes
│   ├── main.jsx           # Point d'entrée React
│   └── index.css          # Styles globaux TailwindCSS
│
├── index.html             # HTML principal
├── package.json           # Dépendances npm
├── vite.config.js         # Configuration Vite
├── tailwind.config.js     # Configuration TailwindCSS
├── postcss.config.js      # Configuration PostCSS
├── netlify.toml           # Configuration Netlify
├── vercel.json            # Configuration Vercel
├── .gitignore             # Fichiers à ignorer par Git
│
├── README.md              # Documentation principale
├── QUICK_START.md         # Guide de démarrage rapide
├── GUIDE_PERSONNALISATION.md # Guide de personnalisation
└── STRUCTURE_PROJET.md    # Ce fichier

```

## 📄 Description des Fichiers Principaux

### Configuration

- **package.json** : Liste toutes les dépendances du projet
- **vite.config.js** : Configuration du build tool Vite
- **tailwind.config.js** : Configuration TailwindCSS avec couleurs personnalisées
- **postcss.config.js** : Configuration PostCSS pour TailwindCSS

### Pages

1. **Home.jsx** : Page d'accueil avec :
   - Hero section
   - Section chambres (3 cartes)
   - Section "Pourquoi nous choisir"
   - Section avis clients
   - Section galerie aperçu

2. **Rooms.jsx** : Page détaillée des chambres avec :
   - Liste complète des chambres
   - Photos, descriptions, prix, équipements
   - Boutons de réservation

3. **Services.jsx** : Présentation des services :
   - Restaurant
   - Salle de conférence
   - Blanchisserie
   - Parking
   - Réception 24/7
   - Petit déjeuner

4. **Gallery.jsx** : Galerie photo avec :
   - Filtres par catégorie
   - Grid responsive
   - Modal pour voir les images en grand

5. **About.jsx** : Page À propos avec :
   - Présentation de l'hôtel
   - Histoire
   - Mission & Vision
   - Valeurs
   - Carte Google Maps

6. **Contact.jsx** : Page contact avec :
   - Formulaire de contact
   - Informations de contact
   - Carte Google Maps
   - Bouton WhatsApp

7. **Reservation.jsx** : Formulaire de réservation avec :
   - Champs de réservation
   - Intégration WhatsApp
   - Message prérempli

### Composants

- **Header.jsx** : Navigation fixe avec menu mobile
- **Footer.jsx** : Pied de page avec liens et informations
- **Layout.jsx** : Wrapper pour toutes les pages

## 🎨 Styles

Les styles utilisent TailwindCSS avec des couleurs personnalisées :
- `hotel-dark` : #0C1B33 (bleu foncé)
- `hotel-light` : #E0E6ED (gris clair)
- `hotel-gold` : #D4AF37 (or premium)

## 🔗 Routes

- `/` - Accueil
- `/chambres` - Chambres
- `/services` - Services
- `/galerie` - Galerie
- `/a-propos` - À propos
- `/contact` - Contact
- `/reservation` - Réservation

## 📦 Dépendances Principales

- **react** : Bibliothèque UI
- **react-dom** : Rendu React
- **react-router-dom** : Navigation
- **tailwindcss** : Framework CSS
- **vite** : Build tool

## 🚀 Scripts Disponibles

- `npm run dev` : Démarre le serveur de développement
- `npm run build` : Crée la version de production
- `npm run preview` : Prévisualise la version de production

## 📝 Notes Importantes

1. **Numéros de téléphone** : À remplacer dans Footer, Contact et Reservation
2. **Images** : Actuellement des placeholders Unsplash, à remplacer
3. **Google Maps** : Coordonnées à mettre à jour dans About et Contact
4. **Email** : À configurer dans Contact.jsx

Pour plus de détails, consultez GUIDE_PERSONNALISATION.md






