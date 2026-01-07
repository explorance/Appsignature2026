# Guide de Synchronisation GitHub

## Problème Résolu
Les workflows GitHub Actions sont maintenant correctement placés dans `.github/workflows/` au lieu de `/workflows/`.

## Structure des Fichiers Importants

### Fichiers à TOUJOURS conserver dans Git:

```
.github/workflows/          # Workflows GitHub Actions
├── deploy.yml             # Déploiement GitHub Pages
├── azure-static-web-apps.yml  # Déploiement Azure
└── deploy-all.yml         # Déploiement sur toutes les plateformes

Configuration:
├── package.json           # Dépendances npm
├── package-lock.json      # Versions exactes des dépendances
├── vite.config.ts         # Configuration Vite
├── postcss.config.mjs     # Configuration PostCSS
├── tsconfig.json          # Configuration TypeScript
├── figma-make.config.json # Config Figma Make (désactive Supabase)
├── staticwebapp.config.json  # Config Azure Static Web Apps
├── .gitignore             # Fichiers à ignorer
├── .env                   # Variables d'environnement (désactive Supabase)
└── .npmrc                 # Config npm (désactive Supabase)

Code source:
├── src/                   # Tout le code source
├── public/                # Assets statiques
└── index.html             # Point d'entrée HTML
```

### Fichiers à IGNORER (déjà dans .gitignore):

```
node_modules/              # Dépendances (à réinstaller avec npm ci)
dist/                      # Build de production
.vite/                     # Cache Vite
.env.local                 # Variables locales
*.log                      # Fichiers de log
```

## Commandes Git Recommandées

### Avant chaque Push:

```bash
# 1. Vérifier le statut
git status

# 2. Ajouter seulement les fichiers nécessaires
git add .github/workflows/
git add src/
git add package.json package-lock.json
git add vite.config.ts postcss.config.mjs tsconfig.json
git add figma-make.config.json staticwebapp.config.json
git add .env .npmrc .gitignore
git add index.html

# 3. Ou simplement tout ajouter (le .gitignore protège automatiquement)
git add .

# 4. Commit avec un message descriptif
git commit -m "Description de vos changements"

# 5. Push vers GitHub
git push origin main
```

### Après un Clone ou Pull:

```bash
# Installer les dépendances
npm ci

# Lancer le serveur de développement
npm run dev

# Build pour production
npm run build
```

## Protection Automatique

Le fichier `.gitignore` protège automatiquement:
- ✅ `node_modules/` n'est jamais poussé
- ✅ `dist/` est ignoré (reconstruit par CI/CD)
- ✅ Les fichiers de cache sont ignorés
- ✅ Les fichiers de configuration SONT inclus

## Workflows GitHub Actions

### 1. `deploy.yml` - GitHub Pages uniquement
- Se déclenche à chaque push sur `main`
- Build l'application
- Déploie sur GitHub Pages

### 2. `azure-static-web-apps.yml` - Azure uniquement
- Se déclenche à chaque push sur `main`
- Build l'application
- Déploie sur Azure Static Web Apps

### 3. `deploy-all.yml` - Tous les déploiements
- Build une seule fois
- Déploie simultanément sur GitHub Pages et Azure
- Plus efficace si vous utilisez les deux plateformes

## Récupérer les Fichiers depuis GitHub

Si vous devez récupérer la version actuelle depuis GitHub:

```bash
# Sauvegarder vos changements locaux
git stash

# Récupérer la dernière version
git pull origin main

# Restaurer vos changements si besoin
git stash pop

# Ou annuler complètement et récupérer depuis GitHub
git fetch origin
git reset --hard origin/main
```

## Résolution de Conflits

Si vous avez des conflits entre local et GitHub:

```bash
# Voir les différences
git diff

# Récupérer la version de GitHub (écrase local)
git checkout origin/main -- chemin/vers/fichier

# Ou garder la version locale
git add chemin/vers/fichier
git commit -m "Conserver version locale"
```

## Vérification des Workflows

Après avoir poussé vos changements:

1. Allez sur GitHub → votre repo → onglet "Actions"
2. Vous devriez voir vos workflows s'exécuter
3. Vérifiez qu'ils se terminent avec succès (✓ vert)

## Anciens Fichiers à Supprimer

Les fichiers dans `/workflows/` (sans `.github/`) peuvent maintenant être supprimés:

```bash
rm -rf workflows/
git add workflows/
git commit -m "Suppression des anciens workflows (maintenant dans .github/workflows/)"
git push
```

## Notes Importantes

- ⚠️ **Ne jamais** commiter `node_modules/`
- ⚠️ **Ne jamais** commiter les fichiers `.env.local` avec des secrets
- ✅ **Toujours** commiter `package.json` et `package-lock.json`
- ✅ **Toujours** vérifier `.gitignore` avant le premier commit
- ✅ Les workflows doivent être dans `.github/workflows/` pour fonctionner

## Support

Si les workflows ne s'exécutent pas:
1. Vérifiez que les fichiers sont dans `.github/workflows/`
2. Vérifiez les permissions GitHub Actions (Settings → Actions → General)
3. Vérifiez les secrets GitHub (Settings → Secrets and variables → Actions)
