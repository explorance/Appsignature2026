# 📚 Documentation Index

Bienvenue dans le projet Email Signature Generator d'eXplorance!

## 🚀 Démarrage Rapide

**Nouveaux développeurs, commencez ici :**

1. 📖 **[README.md](./README.md)** - Vue d'ensemble du projet
2. 🛠️ **[CONTRIBUTING.md](./CONTRIBUTING.md)** - Guide de contribution
3. 🚀 **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Guide de déploiement complet

## 📁 Documentation Organisée

### 🎯 Pour les Utilisateurs

| Document | Description |
|----------|-------------|
| [README.md](./README.md) | Introduction et fonctionnalités principales |

### 👨‍💻 Pour les Développeurs

| Document | Description |
|----------|-------------|
| [CONTRIBUTING.md](./CONTRIBUTING.md) | Standards de code et workflow Git |
| [CHANGELOG.md](./CHANGELOG.md) | Historique des versions |
| [ARCHITECTURE.md](./ARCHITECTURE.md) | Architecture technique du projet |

### 🚀 Déploiement

| Document | Description |
|----------|-------------|
| [DEPLOYMENT.md](./DEPLOYMENT.md) | **Guide principal** - GitHub Pages & Azure |
| [AZURE_CONFIG.md](./AZURE_CONFIG.md) | Configuration avancée Azure |
| [GIT_PUSH_GUIDE.md](./GIT_PUSH_GUIDE.md) | Guide push vers Git |
| [staticwebapp.config.json](./staticwebapp.config.json) | Configuration Azure SWA |

### 🔧 Workflows CI/CD

| Fichier | Description |
|---------|-------------|
| [.github/workflows/ci.yml](./.github/workflows/ci.yml) | Build & Test automatique |
| [.github/workflows/deploy-github-pages.yml](./.github/workflows/deploy-github-pages.yml) | Déploiement GitHub Pages |
| [.github/workflows/deploy-azure.yml](./.github/workflows/deploy-azure.yml) | Déploiement Azure Static Web Apps |

### 📝 Configuration

| Fichier | Description |
|---------|-------------|
| [vite.config.ts](./vite.config.ts) | Configuration Vite |
| [package.json](./package.json) | Dépendances et scripts |
| [tsconfig.json](./tsconfig.json) | Configuration TypeScript |
| [.vscode/settings.json](./.vscode/settings.json) | Configuration VS Code |

## 🗂️ Structure du Projet

```
email-signature-generator/
│
├── 📁 .github/workflows/          # CI/CD GitHub Actions
│   ├── ci.yml                    # Build & Test
│   ├── deploy-github-pages.yml   # Déploiement GitHub Pages
│   └── deploy-azure.yml          # Déploiement Azure
│
├── 📁 src/                       # Code source
│   ├── 📁 app/
│   │   ├── 📁 components/        # Composants React
│   │   ├── 📁 utils/            # Utilitaires
│   │   ├── types.ts             # Types TypeScript
│   │   └── App.tsx              # Composant principal
│   ├── 📁 imports/              # Assets Figma
│   ├── 📁 styles/               # Styles CSS
│   └── main.tsx                 # Point d'entrée
│
├── 📁 public/                    # Assets statiques
├── 📁 .vscode/                   # Configuration VS Code
│
├── 📄 README.md                  # Documentation principale
├── 📄 CONTRIBUTING.md            # Guide de contribution
├── 📄 DEPLOYMENT.md              # Guide de déploiement
├── 📄 CHANGELOG.md               # Historique des versions
├── 📄 package.json               # Dépendances NPM
├── 📄 vite.config.ts             # Configuration Vite
└── 📄 staticwebapp.config.json   # Configuration Azure
```

## 🔗 Liens Rapides

### Documentation Principale
- 📖 [Vue d'ensemble du projet](./README.md)
- 🤝 [Comment contribuer](./CONTRIBUTING.md)
- 🚀 [Déployer l'application](./DEPLOYMENT.md)
- 📋 [Historique des changements](./CHANGELOG.md)

### Guides Techniques
- 🏗️ [Architecture](./ARCHITECTURE.md) (si disponible)
- ☁️ [Configuration Azure](./AZURE_CONFIG.md)
- 🔧 [Guide Git Push](./GIT_PUSH_GUIDE.md) (si disponible)

### Configuration
- ⚙️ [Workflows GitHub Actions](./.github/workflows/)
- 🎨 [Extensions VS Code recommandées](./.vscode/extensions.json)

## 🎯 Chemins d'Apprentissage

### Je veux démarrer le projet localement
1. Lire [README.md](./README.md) - Section "Démarrage Rapide"
2. Installer les dépendances : `pnpm install`
3. Lancer : `pnpm run dev`

### Je veux contribuer au code
1. Lire [CONTRIBUTING.md](./CONTRIBUTING.md) - Tous les standards
2. Créer une branche feature
3. Faire vos modifications
4. Soumettre une Pull Request

### Je veux déployer l'application
1. Lire [DEPLOYMENT.md](./DEPLOYMENT.md) - Guide complet
2. Choisir la plateforme (GitHub Pages ou Azure)
3. Configurer les secrets GitHub
4. Push sur la branche main

### Je veux comprendre l'architecture
1. Lire [ARCHITECTURE.md](./ARCHITECTURE.md) (si disponible)
2. Explorer [src/app/components/](./src/app/components/)
3. Examiner [src/app/utils/dataManager.ts](./src/app/utils/dataManager.ts)

## 🆘 Besoin d'Aide?

### Pour les questions de code
- Consulter [CONTRIBUTING.md](./CONTRIBUTING.md)
- Ouvrir une issue GitHub
- Contacter l'équipe de développement

### Pour les problèmes de déploiement
- Consulter [DEPLOYMENT.md](./DEPLOYMENT.md)
- Vérifier les logs GitHub Actions
- Consulter [AZURE_CONFIG.md](./AZURE_CONFIG.md) pour Azure

### Pour les bugs
- Vérifier [CHANGELOG.md](./CHANGELOG.md) - Known Issues
- Ouvrir une issue avec le template bug_report

## 📊 Statut du Projet

- ✅ **Version** : 1.0.0
- ✅ **Statut** : Production Ready
- ✅ **CI/CD** : Configuré (GitHub Actions)
- ✅ **Déploiement** : GitHub Pages + Azure Ready
- ✅ **Tests** : Build & Type Check automatiques

## 🔄 Mises à Jour

Ce document est maintenu à jour à chaque version majeure. 

Dernière mise à jour : **2026-01-06**

---

**Développé avec ❤️ par l'équipe eXplorance**
