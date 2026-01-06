# 🎯 Guide de Consolidation des Workflows - Action Requise

## 📋 Situation Actuelle

Vous avez édité des workflows dans **deux emplacements différents** :

### Workflows Édités Manuellement

D'après vos modifications, vous avez édité :

1. **Dans `/workflows/` (racine - MAUVAIS emplacement)** :
   - `/workflows/azure-static-web-apps.yml`
   - `/workflows/deploy.yml`
   - `/workflows/deploy-github-pages.yml` (peut-être, à vérifier)
   - `/workflows/deploy-azure.yml` (peut-être, à vérifier)
   - `/workflows/ci.yml` (peut-être, à vérifier)

2. **Dans `/workflow/` (racine - MAUVAIS emplacement)** :
   - `/workflow/ci.yml`
   - `/workflow/deploy-github-pages.yml`
   - `/workflow/deploy-azure.yml`
   - `/workflow/azure-static-web-apps.yml`
   - `/workflow/deploy-all.yml`
   - `/workflow/deploy.yml`

### ✅ Emplacement Correct (Convention GitHub)

Tous les workflows doivent être dans :
```
.github/workflows/
```

C'est le **SEUL** emplacement reconnu par GitHub Actions.

---

## 🚀 Action Requise : Consolidation Manuelle

### Étape 1 : Créer le Dossier Standard

Dans votre terminal, créez le dossier correct :

```bash
mkdir -p .github/workflows
```

### Étape 2 : Copier VOS Workflows Édités

Vous devez décider quelle version de chaque workflow garder (celui de `/workflow/` ou celui de `/workflows/`).

**Recommandation** : Si vous avez édité les fichiers dans `/workflow/` en dernier, utilisez ceux-là.

```bash
# Copier tous les workflows de /workflow/ vers .github/workflows/
cp workflow/*.yml .github/workflows/

# OU si vous préférez ceux de /workflows/
cp workflows/*.yml .github/workflows/

# OU copier les deux et fusionner manuellement
```

### Étape 3 : Vérifier les Workflows Copiés

```bash
ls -la .github/workflows/
```

Vous devriez avoir **6 fichiers** :
- `ci.yml`
- `deploy-github-pages.yml`
- `deploy-azure.yml`
- `azure-static-web-apps.yml`
- `deploy-all.yml`
- `deploy.yml`

### Étape 4 : Supprimer les Anciens Dossiers

Une fois que vous avez **CONFIRMÉ** que tous vos workflows sont dans `.github/workflows/` :

```bash
# Supprimer les anciens dossiers
rm -rf workflow/
rm -rf workflows/
```

### Étape 5 : Commit et Push

```bash
# Voir les changements
git status

# Ajouter le nouveau dossier
git add .github/workflows/

# Enregistrer les suppressions
git add -u

# Commit
git commit -m "fix: consolidate all workflows in .github/workflows/

- Move all workflows to standard .github/workflows/ directory
- Remove /workflow/ and /workflows/ folders
- Use GitHub Actions convention"

# Push
git push origin main
```

---

## 📊 Comparaison des Fichiers

### Si Vous Avez des Doublons

Si vous avez édité des fichiers dans **les deux** dossiers (`/workflow/` ET `/workflows/`), vous devez fusionner manuellement.

**Pour chaque fichier** :

1. **Comparer les versions** :
   ```bash
   diff workflow/ci.yml workflows/ci.yml
   # ou depuis Figma Make via votre éditeur
   ```

2. **Choisir la meilleure version** ou **fusionner les modifications**

3. **Copier dans `.github/workflows/`**

---

## 🔧 Workflows que Vous Devriez Avoir

### Liste Complète des Workflows

| Fichier | Gestionnaire | But Principal |
|---------|--------------|---------------|
| `ci.yml` | pnpm | Build et tests multi-version |
| `deploy-github-pages.yml` | pnpm | Déploiement GitHub Pages |
| `deploy-azure.yml` | pnpm | Déploiement Azure SWA |
| `azure-static-web-apps.yml` | npm | Azure CI/CD complet |
| `deploy-all.yml` | npm | Déploiement multi-plateforme |
| `deploy.yml` | npm | GitHub Pages simple |

### Workflow Recommandé pour Commencer

Si vous ne savez pas lequel choisir, utilisez **`deploy-github-pages.yml`** :

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install pnpm
        uses: pnpm/action-setup@v3
        with:
          version: 8
      
      - name: Install dependencies
        run: pnpm install --frozen-lockfile
      
      - name: Build application
        run: pnpm run build
        env:
          NODE_ENV: production
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## ⚠️ Important : Problèmes Potentiels

### 1. Workflows en Double

Si vous gardez `/workflow/` et `/workflows/` :
- ❌ GitHub ne les verra **PAS**
- ❌ Seuls les workflows dans `.github/workflows/` fonctionneront
- ❌ Confusion et maintenance difficile

### 2. Perte de Modifications

Si vous supprimez les mauvais fichiers :
- ⚠️ Vous perdrez vos modifications
- ⚠️ **VÉRIFIEZ** que vos workflows sont bien copiés dans `.github/workflows/` **AVANT** de supprimer

### 3. Erreur 403 Supabase

Comme expliqué dans `SUPABASE_ERROR_FIX.md` :
- ✅ Cette erreur peut être **ignorée**
- ✅ Votre app n'utilise **PAS** Supabase
- ✅ Le déploiement fonctionnera quand même

---

## ✅ Checklist de Consolidation

### Avant de Commencer
- [ ] Sauvegarder vos fichiers localement (par précaution)
- [ ] Identifier quels workflows vous avez édités
- [ ] Comprendre la différence entre vos versions

### Pendant la Consolidation
- [ ] Créer `.github/workflows/`
- [ ] Copier VOS workflows édités dans `.github/workflows/`
- [ ] Vérifier que tous les 6 fichiers sont présents
- [ ] Comparer les doublons si nécessaire
- [ ] Fusionner les modifications si besoin

### Après la Consolidation
- [ ] Tester localement : `npm run build` ou `pnpm run build`
- [ ] Vérifier que le dossier `dist/` est créé
- [ ] Supprimer les anciens dossiers (`workflow/` et `workflows/`)
- [ ] Commit les changements
- [ ] Push vers GitHub
- [ ] Vérifier l'onglet "Actions" sur GitHub

---

## 🎯 Structure Finale Attendue

```
votre-projet/
├── .github/
│   └── workflows/              ✅ SEUL DOSSIER DE WORKFLOWS
│       ├── ci.yml
│       ├── deploy-github-pages.yml
│       ├── deploy-azure.yml
│       ├── azure-static-web-apps.yml
│       ├── deploy-all.yml
│       └── deploy.yml
├── src/
│   └── app/
│       └── ...
├── public/
├── package.json
└── vite.config.ts

❌ PAS de /workflow/
❌ PAS de /workflows/
```

---

## 🚨 Si Vous Êtes Bloqué

### Option 1 : Tout Recommencer

Si vous n'êtes pas sûr :

```bash
# 1. Créer le dossier standard
mkdir -p .github/workflows

# 2. Copier UN SEUL ensemble de workflows
# Choisissez celui que vous avez édité en dernier
cp workflow/*.yml .github/workflows/

# 3. Vérifier
ls .github/workflows/

# 4. Si OK, supprimer les anciens
rm -rf workflow/ workflows/
```

### Option 2 : Demander de l'Aide

Si vous avez des modifications importantes dans les deux dossiers :

1. Créez un backup : `cp -r workflow workflow_backup`
2. Créez un backup : `cp -r workflows workflows_backup`
3. Procédez à la consolidation
4. Comparez manuellement les fichiers si nécessaire

---

## 📚 Ressources

### Documentation Créée

- ✅ `SUPABASE_ERROR_FIX.md` - Explication de l'erreur 403
- ✅ `WORKFLOW_CONSOLIDATION_GUIDE.md` - **CE DOCUMENT**
- ✅ `WORKFLOWS_CLEANUP_VERIFIED.md` - Guide précédent

### Documentation GitHub

- [GitHub Actions Quickstart](https://docs.github.com/en/actions/quickstart)
- [Workflow syntax](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)

---

## 🎉 Après la Consolidation

Une fois terminé, vous aurez :

- ✅ Un seul dossier de workflows (`.github/workflows/`)
- ✅ Structure conforme aux standards GitHub
- ✅ Workflows fonctionnels
- ✅ Prêt pour le déploiement
- ✅ L'erreur Supabase peut être ignorée (votre app n'en a pas besoin)

---

**Créé le** : 2026-01-06  
**Action Requise** : Consolidation manuelle des workflows  
**Priorité** : Haute (pour que GitHub Actions fonctionne)  
**Difficulté** : Facile (5-10 minutes)
