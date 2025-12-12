# Guide de Personnalisation - CITY HOTEL KÉTOU

Ce guide vous aidera à personnaliser le site web selon vos besoins spécifiques.

## 📞 Informations de Contact à Modifier

### Numéros de Téléphone et WhatsApp

Vous devez remplacer `229XXXXXXXXX` par votre numéro réel dans les fichiers suivants :

1. **src/components/Footer.jsx** (ligne ~40)
   ```jsx
   href="https://wa.me/229XXXXXXXXX"
   href="tel:+229XXXXXXXXX"
   ```

2. **src/pages/Contact.jsx** (lignes ~15-16)
   ```jsx
   const phoneNumber = '+229XXXXXXXXX'
   const whatsappNumber = '229XXXXXXXXX'
   ```

3. **src/pages/Reservation.jsx** (ligne ~12)
   ```jsx
   const whatsappNumber = '229XXXXXXXXX'
   ```

### Email

Modifiez l'adresse email dans **src/pages/Contact.jsx** (ligne ~60) :
```jsx
href="mailto:contact@cityhotelketou.bj"
```

## 🗺️ Google Maps

### Coordonnées GPS

Pour intégrer la carte Google Maps avec vos coordonnées exactes :

1. Allez sur [Google Maps](https://www.google.com/maps)
2. Trouvez l'emplacement de votre hôtel
3. Cliquez droit → "Partager" → "Intégrer une carte"
4. Copiez le code iframe
5. Remplacez les iframes dans :
   - **src/pages/About.jsx** (ligne ~120)
   - **src/pages/Contact.jsx** (ligne ~140)

### Alternative : Utiliser une clé API Google Maps

1. Créez une clé API sur [Google Cloud Console](https://console.cloud.google.com/)
2. Activez l'API "Maps JavaScript API"
3. Ajoutez la clé dans les URLs des iframes

## 🖼️ Images

### Remplacer les Images Placeholder

Les images actuelles utilisent des placeholders d'Unsplash. Pour les remplacer :

1. **Créez un dossier `public/images/`**
2. Ajoutez vos images (formats recommandés : JPG, WebP)
3. Remplacez les URLs dans les fichiers :

**src/pages/Home.jsx** :
- Hero background (ligne ~20)
- Images des chambres (lignes ~30-50)
- Images de la galerie (lignes ~100-110)

**src/pages/Rooms.jsx** :
- Images des chambres (lignes ~10-30)

**src/pages/Gallery.jsx** :
- Toutes les images de la galerie (lignes ~10-50)

**src/pages/About.jsx** :
- Image hero (ligne ~20)

### Exemple de remplacement :
```jsx
// Avant
'https://images.unsplash.com/photo-...'

// Après
'/images/chambre-standard.jpg'
```

## 💰 Prix des Chambres

Modifiez les prix dans :

1. **src/pages/Home.jsx** (lignes ~10-30)
2. **src/pages/Rooms.jsx** (lignes ~10-30)
3. **src/pages/Reservation.jsx** (lignes ~10-15)

## 📝 Contenu Textuel

### Description de l'Hôtel

Modifiez les textes dans :
- **src/pages/About.jsx** - Section "Notre Hôtel", "Notre Histoire", "Mission & Vision"

### Services

Ajoutez ou modifiez les services dans **src/pages/Services.jsx**

### Chambres

Modifiez les descriptions et équipements dans :
- **src/pages/Rooms.jsx**
- **src/pages/Home.jsx** (section chambres)

## 🎨 Couleurs

Les couleurs sont définies dans **tailwind.config.js** :

```js
colors: {
  'hotel-dark': '#0C1B33',    // Bleu foncé
  'hotel-light': '#E0E6ED',   // Gris clair
  'hotel-gold': '#D4AF37',    // Or premium
}
```

Pour changer les couleurs, modifiez ces valeurs hexadécimales.

## 🔍 SEO

### Meta Tags

Modifiez les meta tags dans **index.html** :
- Description
- Keywords
- Open Graph tags

### Titres et Descriptions

Assurez-vous que chaque page a un titre et une description unique pour le SEO.

## 🚀 Déploiement

### Avant le Déploiement

1. ✅ Vérifiez tous les numéros de téléphone
2. ✅ Vérifiez toutes les adresses email
3. ✅ Remplacez les images placeholder
4. ✅ Mettez à jour les coordonnées GPS
5. ✅ Vérifiez tous les prix
6. ✅ Testez le formulaire de réservation WhatsApp

### Variables d'Environnement (Optionnel)

Pour une configuration plus flexible, vous pouvez créer un fichier `.env` :

```env
VITE_HOTEL_PHONE=+229XXXXXXXXX
VITE_WHATSAPP_NUMBER=229XXXXXXXXX
VITE_HOTEL_EMAIL=contact@cityhotelketou.bj
VITE_GOOGLE_MAPS_API_KEY=votre_cle_api
```

Puis utilisez-les dans le code avec `import.meta.env.VITE_HOTEL_PHONE`

## 📱 Test Mobile

Assurez-vous de tester le site sur mobile :
- Menu hamburger fonctionne
- Formulaires sont utilisables
- Images s'affichent correctement
- Boutons WhatsApp fonctionnent

## ✅ Checklist Finale

- [ ] Tous les numéros de téléphone mis à jour
- [ ] Email mis à jour
- [ ] Carte Google Maps configurée
- [ ] Images remplacées
- [ ] Prix mis à jour
- [ ] Textes personnalisés
- [ ] Test sur mobile effectué
- [ ] Formulaire WhatsApp testé
- [ ] SEO optimisé
- [ ] Site déployé et testé en production






