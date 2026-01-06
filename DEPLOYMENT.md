# Email Signature Generator - Deployment Guide

## 📦 Workflows GitHub Actions

Ce projet contient trois workflows GitHub Actions pour l'intégration continue et le déploiement :

### 1. **CI - Build and Test** (`ci.yml`)
- ✅ S'exécute sur les branches `main` et `develop`
- ✅ Teste la construction sur Node.js 18.x et 20.x
- ✅ Vérifie les types TypeScript
- ✅ S'assure que le build fonctionne correctement

### 2. **Deploy to GitHub Pages** (`deploy-github-pages.yml`)
- 🚀 Déploiement automatique sur GitHub Pages
- 📦 Build et upload de l'artifact
- 🌐 Accessible via `https://<username>.github.io/<repo-name>/`

### 3. **Deploy to Azure Static Web Apps** (`deploy-azure.yml`)
- ☁️ Déploiement sur Azure Static Web Apps
- 🔒 Nécessite un token Azure (voir configuration ci-dessous)
- 🔄 Support des Pull Requests avec environnements de preview

---

## 🚀 Configuration GitHub Pages

### Étape 1 : Activer GitHub Pages

1. Allez dans **Settings** → **Pages** de votre repository
2. Sous **Source**, sélectionnez **GitHub Actions**
3. Le workflow se déclenchera automatiquement au prochain push sur `main`

### Étape 2 : Configurer le Base Path (si nécessaire)

Si votre app est déployée sur un sous-chemin (par exemple `username.github.io/repo-name`), vous devrez peut-être configurer la base URL dans votre build.

Vérifiez votre fichier `vite.config.ts` :

```typescript
export default defineConfig({
  base: '/repo-name/', // Remplacez par le nom de votre repo
  // ... autres configurations
});
```

### Étape 3 : Vérifier le déploiement

Après le premier push sur `main`, le workflow va :
- ✅ Installer les dépendances avec pnpm
- ✅ Builder l'application
- ✅ Déployer sur GitHub Pages
- 🌐 Votre app sera disponible à `https://<username>.github.io/<repo-name>/`

---

## ☁️ Configuration Azure Static Web Apps

### Étape 1 : Créer une ressource Azure Static Web App

1. Connectez-vous au [portail Azure](https://portal.azure.com)
2. Créez une nouvelle ressource **Static Web App**
3. Configurez les paramètres :
   - **Resource group** : Créez ou sélectionnez un groupe
   - **Name** : Nom de votre application
   - **Region** : Choisissez la région la plus proche
   - **Deployment source** : GitHub
   - **Build Presets** : Custom
   - **App location** : `/`
   - **Output location** : `dist`

### Étape 2 : Obtenir le token de déploiement

1. Une fois la ressource créée, allez dans **Overview**
2. Cliquez sur **Manage deployment token**
3. Copiez le token

### Étape 3 : Configurer le secret GitHub

1. Allez dans **Settings** → **Secrets and variables** → **Actions**
2. Cliquez sur **New repository secret**
3. Nom : `AZURE_STATIC_WEB_APPS_API_TOKEN`
4. Valeur : Collez le token copié
5. Cliquez sur **Add secret**

### Étape 4 : Vérifier le déploiement

Le workflow se déclenchera automatiquement au prochain push sur `main` et déploiera votre app sur Azure.

---

## 🔧 Commandes de développement

```bash
# Installer les dépendances
pnpm install

# Lancer le serveur de développement
pnpm run dev

# Builder pour la production
pnpm run build

# Preview du build de production
pnpm run preview

# Vérification des types TypeScript
pnpm run type-check
```

---

## 📝 Variables d'environnement

Cette application utilise `localStorage` pour la persistance des données et ne nécessite pas de variables d'environnement backend.

Toutes les configurations (bureaux, bannières, disclaimers) sont stockées localement dans le navigateur de l'utilisateur.

---

## 🔒 Sécurité

- ⚠️ Le panneau d'administration est protégé par mot de passe : `eXplorance`
- 💾 Toutes les données sont stockées dans `localStorage` du navigateur
- 🔐 Aucune donnée n'est envoyée à un serveur externe
- ⚡ L'application fonctionne 100% côté client

---

## 📦 Structure du projet

```
/
├── .github/
│   └── workflows/
│       ├── ci.yml                    # CI Build & Test
│       ├── deploy-github-pages.yml   # Déploiement GitHub Pages
│       └── deploy-azure.yml          # Déploiement Azure
├── src/
│   ├── app/
│   │   ├── components/               # Composants React
│   │   ├── utils/                    # Utilitaires (dataManager)
│   │   ├── types.ts                  # Types TypeScript
│   │   └── App.tsx                   # Composant principal
│   ├── imports/                      # Assets importés depuis Figma
│   ├── styles/                       # Styles CSS
│   └── main.tsx                      # Point d'entrée
├── package.json
├── vite.config.ts
└── README.md
```

---

## 🆘 Dépannage

### Le déploiement GitHub Pages échoue

1. Vérifiez que **GitHub Pages** est activé dans Settings → Pages
2. Assurez-vous que le workflow a les bonnes permissions
3. Vérifiez que la branche `main` existe

### Le déploiement Azure échoue

1. Vérifiez que le secret `AZURE_STATIC_WEB_APPS_API_TOKEN` est correctement configuré
2. Assurez-vous que le token n'a pas expiré
3. Vérifiez les logs du workflow dans l'onglet Actions

### Le build échoue

1. Vérifiez que toutes les dépendances sont installées : `pnpm install`
2. Testez le build localement : `pnpm run build`
3. Vérifiez les erreurs TypeScript : `pnpm run type-check`

---

## 📄 License

Ce projet est privé et propriétaire d'eXplorance.
