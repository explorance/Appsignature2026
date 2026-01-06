# 🤝 Guide de Contribution

Merci de contribuer au projet Email Signature Generator d'eXplorance!

## 📋 Prérequis

- Node.js 18.x ou 20.x
- pnpm 8.x
- Git
- Un éditeur de code (VS Code recommandé)

## 🚀 Setup Développement

### 1. Fork et Clone

```bash
# Cloner le repository
git clone <repository-url>
cd email-signature-generator

# Installer pnpm si nécessaire
npm install -g pnpm@8

# Installer les dépendances
pnpm install
```

### 2. Configuration VS Code

Si vous utilisez VS Code, les extensions recommandées seront suggérées automatiquement :
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- ES7+ React/Redux/React-Native snippets
- TypeScript Nightly

### 3. Démarrer le serveur de développement

```bash
pnpm run dev
```

L'application sera disponible sur `http://localhost:5173`

## 🏗️ Architecture du Projet

### Structure des Dossiers

```
src/
├── app/
│   ├── components/        # Composants React
│   │   ├── Dialog.tsx           # Dialogs modernes
│   │   ├── Toast.tsx            # Notifications
│   │   ├── SignatureGenerator.tsx
│   │   └── AdminPanel.tsx
│   ├── utils/            # Utilitaires
│   │   └── dataManager.ts      # Gestion localStorage
│   ├── types.ts          # Types TypeScript centralisés
│   └── App.tsx           # Composant racine
├── imports/              # Assets Figma
├── styles/               # Styles globaux
└── main.tsx             # Point d'entrée
```

### Principes de Base

1. **TypeScript First** - Tout le code doit être typé
2. **Composants Fonctionnels** - Utiliser hooks React
3. **Tailwind CSS** - Utiliser les classes Tailwind v4
4. **localStorage** - Persistance côté client uniquement
5. **Validation** - Valider toutes les entrées utilisateur

## 📝 Standards de Code

### TypeScript

```typescript
// ✅ Bon - Types explicites
interface UserData {
  name: string;
  email: string;
}

function updateUser(data: UserData): void {
  // ...
}

// ❌ Éviter - any types
function updateUser(data: any) {
  // ...
}
```

### Composants React

```tsx
// ✅ Bon - Composant fonctionnel avec props typées
interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export default function Button({ label, onClick, disabled = false }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="px-4 py-2 bg-blue-600 text-white rounded-lg"
    >
      {label}
    </button>
  );
}
```

### Tailwind CSS

```tsx
// ✅ Bon - Classes Tailwind inline
<div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-sm">
  {/* ... */}
</div>

// ❌ Éviter - Styles inline
<div style={{ display: 'flex', padding: '24px' }}>
  {/* ... */}
</div>
```

### Gestion d'État

```tsx
// ✅ Bon - useState avec type explicite
const [count, setCount] = useState<number>(0);
const [user, setUser] = useState<UserData | null>(null);

// ✅ Bon - useEffect avec dépendances
useEffect(() => {
  loadData();
}, [dependency]);
```

## 🔄 Workflow Git

### Branches

- `main` - Branch principale (production)
- `develop` - Branch de développement
- `feature/*` - Nouvelles fonctionnalités
- `fix/*` - Corrections de bugs
- `hotfix/*` - Corrections urgentes

### Commits

Suivre la convention Conventional Commits :

```bash
# Features
git commit -m "feat: add banner link functionality"

# Bug fixes
git commit -m "fix: resolve localStorage validation issue"

# Documentation
git commit -m "docs: update deployment guide"

# Refactoring
git commit -m "refactor: improve dataManager error handling"

# Styling
git commit -m "style: adjust dialog component spacing"

# Tests
git commit -m "test: add validation tests"
```

### Pull Requests

1. Créer une branche depuis `develop`
2. Faire vos modifications
3. Tester localement (`pnpm run build`)
4. Pousser votre branche
5. Créer une Pull Request vers `develop`
6. Attendre la review et le merge

## 🧪 Tests

### Avant de Soumettre

```bash
# Vérifier les types
pnpm run type-check

# Build l'application
pnpm run build

# Tester le build
pnpm run preview
```

### Checklist de Test Manuel

- [ ] L'application démarre sans erreurs
- [ ] Le formulaire fonctionne correctement
- [ ] Les données sont sauvegardées dans localStorage
- [ ] Le panneau admin fonctionne (mot de passe: `eXplorance`)
- [ ] La copie vers le presse-papiers fonctionne
- [ ] Le téléchargement HTML fonctionne
- [ ] Les toasts s'affichent correctement
- [ ] Les dialogs s'ouvrent et se ferment
- [ ] L'application est responsive

## 📦 Ajout de Dépendances

```bash
# Toujours utiliser pnpm
pnpm add <package-name>

# Pour les dépendances de développement
pnpm add -D <package-name>
```

⚠️ **Important** : Documenter pourquoi vous ajoutez une dépendance dans votre PR.

## 🎨 Design System

### Couleurs Principales

```css
/* Bleu principal */
bg-blue-600 (#0050c1)
hover:bg-blue-700

/* Gris */
bg-gray-50
bg-gray-100
border-gray-200
text-gray-500
text-gray-900

/* États */
bg-green-50 (success)
bg-red-50 (error)
bg-yellow-50 (warning)
```

### Espacement

```css
gap-2    /* 8px */
gap-3    /* 12px */
gap-4    /* 16px */
p-4      /* 16px */
p-6      /* 24px */
```

### Arrondis

```css
rounded-lg     /* 8px - Cartes */
rounded-xl     /* 12px - Dialogs */
rounded-2xl    /* 16px - Panneaux */
rounded-[36px] /* Boutons */
```

## 🐛 Debugging

### Console Logs

```typescript
// ✅ Bon - Logs informatifs
console.log("Loading settings:", settings);
console.error("Failed to save:", error);

// ❌ Éviter - Logs en production
console.log("test"); // À supprimer avant commit
```

### DevTools

1. **React DevTools** - Inspecter les composants
2. **Console** - Vérifier les erreurs
3. **Application → Local Storage** - Vérifier les données
4. **Network** - Vérifier les requêtes (si applicable)

## 📚 Ressources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS v4 Docs](https://tailwindcss.com)
- [Vite Documentation](https://vitejs.dev)
- [Lucide Icons](https://lucide.dev)

## ❓ Besoin d'Aide?

- Ouvrir une issue sur GitHub
- Contacter l'équipe de développement
- Consulter la documentation existante

## ✅ Checklist PR

Avant de soumettre une Pull Request :

- [ ] Le code compile sans erreurs (`pnpm run build`)
- [ ] Les types TypeScript sont corrects (`pnpm run type-check`)
- [ ] Le code suit les standards du projet
- [ ] Les nouveaux composants sont documentés
- [ ] Les tests manuels sont passés
- [ ] Les commits suivent la convention
- [ ] La PR a une description claire
- [ ] Les screenshots sont ajoutés (si changements UI)

---

**Merci de contribuer! 🎉**
