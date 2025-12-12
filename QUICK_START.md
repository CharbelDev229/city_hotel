# 🚀 Guide de Démarrage Rapide

## Installation et Lancement

### 1. Installer les dépendances
```bash
npm install
```

### 2. Lancer le serveur de développement
```bash
npm run dev
```

Le site sera accessible à : **http://localhost:5173**

### 3. Build pour production
```bash
npm run build
```

Les fichiers optimisés seront dans le dossier `dist/`

## ⚡ Commandes Disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Crée une version optimisée pour la production
- `npm run preview` - Prévisualise la version de production localement

## 📋 Avant de Commencer

1. **Modifiez les numéros de contact** dans :
   - `src/components/Footer.jsx`
   - `src/pages/Contact.jsx`
   - `src/pages/Reservation.jsx`

2. **Configurez Google Maps** dans :
   - `src/pages/About.jsx`
   - `src/pages/Contact.jsx`

3. **Remplacez les images** (voir GUIDE_PERSONNALISATION.md)

## 🌐 Déploiement Rapide

### Netlify (Recommandé)
1. Créez un compte sur [Netlify](https://netlify.com)
2. Connectez votre dépôt Git
3. Netlify détectera automatiquement les paramètres
4. Cliquez sur "Deploy"

### Vercel
1. Créez un compte sur [Vercel](https://vercel.com)
2. Importez votre projet
3. Vercel détectera automatiquement les paramètres
4. Cliquez sur "Deploy"

Les fichiers `netlify.toml` et `vercel.json` sont déjà configurés !

## 🆘 Problèmes Courants

### Erreur "Cannot find module"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port déjà utilisé
Changez le port dans `vite.config.js` ou arrêtez le processus qui utilise le port 5173

### Images ne s'affichent pas
Vérifiez que les URLs des images sont correctes et que les fichiers existent dans `public/`

## 📚 Documentation

- [Guide de Personnalisation](./GUIDE_PERSONNALISATION.md) - Personnaliser le site
- [README.md](./README.md) - Documentation complète






