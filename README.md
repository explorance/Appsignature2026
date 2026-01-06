# 📧 Email Signature Generator - eXplorance

Application web de génération de signatures email professionnelles avec panneau d'administration complet.

## 🌟 Fonctionnalités

### Interface Utilisateur
- ✅ **Formulaire interactif** pour saisir les informations personnelles
- ✅ **Aperçu en temps réel** de la signature générée
- ✅ **Multi-langues** : Support français et anglais pour les disclaimers
- ✅ **Sélection de bureaux** avec adresses et téléphones
- ✅ **Bannières d'événements** organisées par catégories
- ✅ **Logo cliquable** redirigeant vers le site de l'entreprise
- ✅ **Bannières cliquables** avec liens optionnels configurables

### Panneau d'Administration
- 🔒 **Protégé par mot de passe** (`eXplorance`)
- 🏢 **Gestion des bureaux** (nom, adresse, téléphone)
- 🎨 **Gestion des bannières** par catégories d'événements
- 📋 **Configuration des champs** de formulaire (visible/masqué, requis/optionnel)
- ⚙️ **Valeurs par défaut** :
  - URL du logo de l'entreprise
  - Site web de l'entreprise
  - Disclaimers (français et anglais séparés)

### Génération de Signature
- 📋 **Copie vers le presse-papiers** en un clic
- 💾 **Téléchargement en fichier HTML**
- 🎨 **HTML compatible** avec tous les clients email (Outlook, Gmail, etc.)
- 🔗 **Liens cliquables** sur le logo et les bannières

### Persistance des Données
- 💾 **localStorage** pour sauvegarder toutes les configurations
- 🔄 **Système de backup automatique** avant chaque modification
- ✅ **Validation des données** avant sauvegarde
- 🔐 **Restauration automatique** en cas d'erreur
- 📤 **Export/Import JSON** pour backups manuels

## 🚀 Démarrage Rapide

### Prérequis
- Node.js 18.x ou 20.x
- pnpm 8.x

### Installation

```bash
# Cloner le repository
git clone <repository-url>
cd email-signature-generator

# Installer les dépendances
pnpm install

# Lancer le serveur de développement
pnpm run dev
```

L'application sera accessible sur `http://localhost:5173`

### Build pour la production

```bash
# Build l'application
pnpm run build

# Preview du build
pnpm run preview
```

## 📁 Structure du Projet

```
/
├── .github/workflows/          # Workflows GitHub Actions
│   ├── ci.yml                 # CI Build & Test
│   ├── deploy-github-pages.yml # Déploiement GitHub Pages
│   └── deploy-azure.yml       # Déploiement Azure
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Dialog.tsx           # Dialog moderne (design Figma)
│   │   │   ├── Toast.tsx            # Notifications toast
│   │   │   ├── ToastContainer.tsx   # Gestionnaire de toasts
│   │   │   ├── SignatureGenerator.tsx  # Interface principale
│   │   │   └── AdminPanel.tsx       # Panneau d'administration
│   │   ├── utils/
│   │   │   └── dataManager.ts       # Gestion localStorage
│   │   ├── types.ts                 # Types TypeScript
│   │   └── App.tsx                  # Composant principal
│   ├── imports/                     # Assets Figma importés
│   ├── styles/
│   │   ├── fonts.css               # Imports de polices
│   │   ├── tailwind.css            # Tailwind CSS
│   │   └── theme.css               # Thème personnalisé
│   └── main.tsx                    # Point d'entrée
├── package.json
├── vite.config.ts
├── tsconfig.json
├── DEPLOYMENT.md              # Guide de déploiement
└── README.md                  # Ce fichier
```

## 🎨 Technologies Utilisées

- **React 18.3** - Framework UI
- **TypeScript** - Typage statique
- **Vite** - Build tool et dev server
- **Tailwind CSS v4** - Styling
- **Lucide React** - Icônes
- **localStorage** - Persistance des données

## 🔧 Commandes Disponibles

```bash
# Développement
pnpm run dev          # Lancer le serveur de développement

# Production
pnpm run build        # Build l'application
pnpm run preview      # Preview du build de production

# Qualité du code
pnpm run type-check   # Vérifier les types TypeScript
```

## 🌐 Déploiement

L'application est prête pour le déploiement sur :
- ✅ **GitHub Pages** (workflow configuré)
- ✅ **Azure Static Web Apps** (workflow configuré)

Voir [DEPLOYMENT.md](./DEPLOYMENT.md) pour les instructions détaillées de configuration et déploiement.

## 🔒 Sécurité et Données

### Mot de passe Admin
- Le panneau d'administration est protégé par le mot de passe : **`eXplorance`**
- Le mot de passe est vérifié côté client uniquement

### Stockage des Données
- Toutes les données sont stockées dans **localStorage** du navigateur
- Aucune donnée n'est envoyée à un serveur externe
- L'application fonctionne 100% côté client
- Les données persistent entre les sessions

### Backup et Restauration
- **Backup automatique** avant chaque modification
- **Validation** des données avant sauvegarde
- **Restauration automatique** en cas d'erreur
- **Export/Import JSON** pour backups manuels

## 📋 Utilisation

### Pour les Utilisateurs

1. Remplissez le formulaire avec vos informations personnelles
2. Sélectionnez votre bureau dans la liste déroulante
3. Choisissez une bannière d'événement (optionnel)
4. Sélectionnez la langue du disclaimer (français, anglais, ou les deux)
5. Prévisualisez votre signature en temps réel
6. Cliquez sur "Copy to Clipboard" pour copier la signature
7. Collez la signature dans votre client email (Outlook, Gmail, etc.)

### Pour les Administrateurs

1. Cliquez sur l'onglet "Admin Panel"
2. Entrez le mot de passe : `eXplorance`
3. Configurez :
   - **Office Locations** : Ajoutez/modifiez les bureaux
   - **Email Banners** : Gérez les catégories et bannières
   - **Form Fields** : Contrôlez la visibilité des champs
   - **Default Values** : Configurez le logo et les disclaimers
4. Cliquez sur "Save Settings" pour sauvegarder
5. Confirmez la sauvegarde dans le dialog

## 🎯 Roadmap / Améliorations Futures

- [ ] Support de templates de signatures multiples
- [ ] Mode sombre
- [ ] Export en multiple formats (HTML, TXT, RTF)
- [ ] Historique des signatures générées
- [ ] Import de données depuis CSV
- [ ] Prévisualisation dans différents clients email

## 🐛 Dépannage

### L'application ne démarre pas
- Vérifiez que Node.js 18+ est installé : `node -v`
- Supprimez `node_modules` et réinstallez : `pnpm install`

### Les données ne sont pas sauvegardées
- Vérifiez que localStorage n'est pas désactivé dans votre navigateur
- Ouvrez la console et recherchez des erreurs
- Essayez de vider le cache : `localStorage.clear()`

### Le build échoue
- Vérifiez les erreurs TypeScript : `pnpm run type-check`
- Assurez-vous que toutes les dépendances sont installées

## 📄 License

Ce projet est privé et propriétaire d'**eXplorance**.

---

**Développé avec ❤️ pour eXplorance**
