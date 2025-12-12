# 🎨 Guide d'Installation des Polices

Ce guide vous explique comment installer et configurer les trois polices utilisées sur le site CITY HOTEL KÉTOU.

## 📋 Polices Utilisées

1. **Back Wild** - Titres principaux (h1)
2. **Petrov Sans** - Titres secondaires (h2, h3)
3. **Montserrat** - Texte général (paragraphes, éléments tertiaires)

## ✅ Montserrat (Déjà Configurée)

La police **Montserrat** est déjà chargée depuis Google Fonts. Aucune action requise.

## 📥 Installation de Back Wild et Petrov Sans

Ces deux polices nécessitent des fichiers locaux car elles ne sont pas disponibles gratuitement sur Google Fonts.

### Étape 1 : Télécharger les Polices

#### Back Wild
- **Source** : [MyFonts - Back Wild](https://www.myfonts.com/collections/back-wild-graffiti-font-sipanji21)
- **Format requis** : `.woff2`, `.woff`, ou `.ttf`
- **Fichiers nécessaires** :
  - `BackWild-Regular.woff2` (recommandé)
  - `BackWild-Regular.woff` (fallback)
  - `BackWild-Regular.ttf` (fallback)

#### Petrov Sans
- **Source** : [MyFonts - Petrov Sans](https://www.myfonts.com/collections/petrov-sans-font-fontfabric)
- **Format requis** : `.woff2`, `.woff`, ou `.ttf`
- **Fichiers nécessaires** :
  - `PetrovSans-Regular.woff2` (recommandé)
  - `PetrovSans-Regular.woff` (fallback)
  - `PetrovSans-Regular.ttf` (fallback)
  - `PetrovSans-Bold.woff2` (pour les titres en gras)
  - `PetrovSans-Bold.woff` (fallback)
  - `PetrovSans-Bold.ttf` (fallback)

### Étape 2 : Placer les Fichiers

1. Créez le dossier `public/fonts/` s'il n'existe pas déjà
2. Placez tous les fichiers de police téléchargés dans ce dossier

Structure attendue :
```
public/
└── fonts/
    ├── BackWild-Regular.woff2
    ├── BackWild-Regular.woff
    ├── BackWild-Regular.ttf
    ├── PetrovSans-Regular.woff2
    ├── PetrovSans-Regular.woff
    ├── PetrovSans-Regular.ttf
    ├── PetrovSans-Bold.woff2
    ├── PetrovSans-Bold.woff
    └── PetrovSans-Bold.ttf
```

### Étape 3 : Vérification

Les polices sont déjà configurées dans `src/index.css`. Une fois les fichiers placés dans `public/fonts/`, elles seront automatiquement chargées.

## 🎯 Utilisation des Polices dans le Code

### Classes TailwindCSS

- `font-primary` → Back Wild (titres principaux)
- `font-secondary` → Petrov Sans (titres secondaires)
- `font-tertiary` → Montserrat (texte général)

### Exemples

```jsx
{/* Titre principal - Back Wild */}
<h1 className="font-primary">CITY HOTEL KÉTOU</h1>

{/* Titre secondaire - Petrov Sans */}
<h2 className="font-secondary">Nos Chambres</h2>

{/* Texte général - Montserrat (défaut) */}
<p>Description du texte...</p>
```

## 🔍 Vérifier que les Polices Fonctionnent

1. Lancez le site : `npm run dev`
2. Ouvrez les outils de développement (F12)
3. Allez dans l'onglet "Network" → Filtrez par "Font"
4. Vérifiez que les fichiers de police se chargent correctement

Si les polices ne se chargent pas :
- Vérifiez que les fichiers sont bien dans `public/fonts/`
- Vérifiez les noms de fichiers (respectez la casse exacte)
- Vérifiez la console du navigateur pour les erreurs

## 📝 Note sur les Licences

Assurez-vous d'avoir les licences appropriées pour l'utilisation commerciale de :
- **Back Wild**
- **Petrov Sans**

Ces polices sont payantes et nécessitent une licence pour un usage commercial.

## 🚀 Alternative Temporaire (Développement)

Si vous n'avez pas encore les fichiers de police, le site utilisera automatiquement des polices de fallback :
- Back Wild → `cursive` (police système)
- Petrov Sans → `sans-serif` (police système)
- Montserrat → Chargée depuis Google Fonts

Cela permet de développer le site même sans les fichiers de police, mais les polices personnalisées ne s'afficheront qu'après l'ajout des fichiers.

## ✅ Checklist

- [ ] Back Wild téléchargé et placé dans `public/fonts/`
- [ ] Petrov Sans téléchargé et placé dans `public/fonts/`
- [ ] Tous les fichiers ont les bons noms (respecter la casse)
- [ ] Licences acquises pour usage commercial
- [ ] Site testé avec les nouvelles polices





