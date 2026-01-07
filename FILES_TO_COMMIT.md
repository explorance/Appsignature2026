# Liste des Fichiers Essentiels à Commiter

## ✅ TOUJOURS Commiter Ces Fichiers

### Configuration GitHub Actions
- `.github/workflows/deploy.yml`
- `.github/workflows/azure-static-web-apps.yml`
- `.github/workflows/deploy-all.yml`

### Configuration du Projet
- `package.json` - Liste des dépendances
- `package-lock.json` - Versions exactes
- `vite.config.ts` - Configuration Vite
- `postcss.config.mjs` - Configuration PostCSS
- `tsconfig.json` - Configuration TypeScript
- `figma-make.config.json` - Désactive Supabase
- `staticwebapp.config.json` - Config Azure
- `.gitignore` - Protection des fichiers
- `.env` - Variables d'environnement (sans secrets!)
- `.npmrc` - Config npm

### Code Source
- `index.html`
- `src/main.tsx`
- `src/app/App.tsx`
- `src/app/components/` - Tous les composants
- `src/app/types.ts`
- `src/app/utils/` - Tous les utilitaires
- `src/styles/` - Tous les styles
- `src/imports/` - Composants importés

### Documentation
- `README.md`
- `GITHUB_SYNC_GUIDE.md`
- `FILES_TO_COMMIT.md`
- Tous les autres fichiers `.md` de documentation

### Assets
- `public/` - Tous les fichiers publics

## ❌ NE JAMAIS Commiter Ces Fichiers

### Dépendances (générées automatiquement)
- `node_modules/` - ❌ Trop volumineux
- `.pnpm/` - ❌ Cache pnpm
- `.vite/` - ❌ Cache Vite
- `.vite-temp/` - ❌ Fichiers temporaires

### Build
- `dist/` - ❌ Reconstruit par CI/CD
- `build/` - ❌ Reconstruit par CI/CD

### Fichiers Locaux
- `.env.local` - ❌ Secrets locaux
- `.env.development.local` - ❌ Config locale
- `.env.production.local` - ❌ Config locale
- `*.log` - ❌ Fichiers de log

### Fichiers Système
- `.DS_Store` - ❌ macOS
- `Thumbs.db` - ❌ Windows
- `.vscode/` (sauf extensions.json et settings.json)

## 🔍 Vérification Rapide Avant Commit

```bash
# Voir ce qui sera commité
git status

# Vérifier qu'il n'y a PAS:
# - node_modules/
# - dist/
# - .env.local
# - fichiers .log

# Vérifier qu'il y a BIEN:
# - .github/workflows/*.yml
# - package.json
# - src/**/*
# - tous vos fichiers de code source
```

## 📝 Commande Git Recommandée

```bash
# Cette commande est SÛRE grâce au .gitignore
git add .
git commit -m "Votre message de commit"
git push origin main
```

Le `.gitignore` protège automatiquement contre l'ajout de fichiers indésirables!

## ⚠️ Fichiers à Supprimer de Git (si déjà commitées)

Si ces fichiers sont déjà dans votre repo GitHub, supprimez-les:

```bash
# Supprimer node_modules du repo (mais pas localement)
git rm -r --cached node_modules/
git commit -m "Remove node_modules from repo"

# Supprimer dist du repo
git rm -r --cached dist/
git commit -m "Remove dist from repo"

# Supprimer les anciens workflows
git rm -r workflows/
git commit -m "Remove old workflows (now in .github/workflows/)"

git push origin main
```

## 🔄 Après Clone ou Pull

Après avoir cloné ou pullé depuis GitHub:

```bash
# Installer les dépendances (reconstruit node_modules/)
npm ci

# Lancer le dev server
npm run dev

# Ou builder pour production
npm run build
```

## 📊 Taille du Repo

Avec cette configuration:
- ✅ Repo GitHub: ~2-5 MB (seulement le code source)
- ❌ Sans .gitignore: ~500+ MB (avec node_modules)

## 🎯 Résumé

**À RETENIR:**
1. `.gitignore` protège automatiquement
2. Utilisez `git add .` en toute confiance
3. Ne commitez JAMAIS `node_modules/` ou `dist/`
4. Les workflows doivent être dans `.github/workflows/`
5. Après clone/pull: toujours faire `npm ci`
