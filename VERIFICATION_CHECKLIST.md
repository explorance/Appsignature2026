# ✅ Checklist de Vérification - GitHub Actions

## 🎯 Vérification Rapide Locale

Avant de pousser vers GitHub, vérifiez ces points:

### 1. Structure des Workflows

```bash
ls -la .github/workflows/
```

**Devrait afficher:**
```
azure-static-web-apps.yml
deploy-all.yml
deploy.yml
```

✅ Si ces 3 fichiers sont présents → **OK**
❌ Si le dossier n'existe pas → **PROBLÈME**

### 2. Ancien Dossier Supprimé

```bash
ls -la workflows/ 2>/dev/null || echo "Dossier workflows/ n'existe pas (c'est bon!)"
```

✅ Si "Dossier workflows/ n'existe pas" → **OK**
❌ Si le dossier existe encore → **Supprimez-le**

### 3. .gitignore Existe

```bash
cat .gitignore | grep -E "node_modules|dist"
```

**Devrait afficher:**
```
node_modules/
dist/
```

✅ Si ces lignes apparaissent → **OK**
❌ Si rien n'apparaît → **PROBLÈME**

### 4. Variables d'Environnement

```bash
cat .env | grep SUPABASE_ENABLED
```

**Devrait afficher:**
```
VITE_SUPABASE_ENABLED=false
```

✅ Si cette ligne apparaît → **OK**
❌ Si le fichier n'existe pas → **Créez-le**

## 📋 Checklist Complète

Avant de `git push`:

- [ ] ✅ `.github/workflows/` contient 3 fichiers YAML
- [ ] ✅ `/workflows/` n'existe plus (ancien dossier supprimé)
- [ ] ✅ `.gitignore` existe et contient `node_modules/` et `dist/`
- [ ] ✅ `.env` existe avec `VITE_SUPABASE_ENABLED=false`
- [ ] ✅ `.npmrc` existe
- [ ] ✅ `package.json` existe
- [ ] ✅ `src/` contient votre code source
- [ ] ✅ `node_modules/` existe localement mais n'est PAS dans git status

## 🔍 Vérification Git

### Voir ce qui sera committé

```bash
git status
```

**Devrait montrer:**
```
Changes to be committed:
  new file:   .github/workflows/deploy.yml
  new file:   .github/workflows/azure-static-web-apps.yml
  new file:   .github/workflows/deploy-all.yml
  new file:   .gitignore
  new file:   .env
  new file:   .npmrc
  new file:   START_HERE_GITHUB_FIX.md
  new file:   ACTION_IMMEDIATE.md
  new file:   GITHUB_SYNC_GUIDE.md
  new file:   FILES_TO_COMMIT.md
  new file:   CLEANUP_STEPS.md
  new file:   CHANGES_SUMMARY.md
  new file:   VERIFICATION_CHECKLIST.md
  modified:   README.md
  deleted:    workflows/deploy.yml
  deleted:    workflows/azure-static-web-apps.yml
  deleted:    workflows/deploy-all.yml
```

**NE DEVRAIT PAS montrer:**
```
❌ node_modules/
❌ dist/
❌ .env.local
❌ *.log
```

### Vérifier que node_modules n'est pas tracké

```bash
git ls-files | grep node_modules
```

✅ Si rien n'apparaît → **OK** (node_modules n'est pas tracké)
❌ Si des fichiers apparaissent → **PROBLÈME** - Exécutez:
```bash
git rm -r --cached node_modules/
```

### Vérifier que dist n'est pas tracké

```bash
git ls-files | grep "^dist/"
```

✅ Si rien n'apparaît → **OK** (dist n'est pas tracké)
❌ Si des fichiers apparaissent → **PROBLÈME** - Exécutez:
```bash
git rm -r --cached dist/
```

## 🚀 Après Push - Vérification GitHub

### 1. Workflows Apparaissent dans Actions

1. Allez sur GitHub.com
2. Ouvrez votre repository
3. Cliquez sur l'onglet **"Actions"**

✅ Vous devriez voir:
- "Deploy to GitHub Pages"
- "Azure Static Web Apps CI/CD"
- "Deploy to All Platforms"

❌ Si rien n'apparaît:
- Vérifiez que les fichiers sont dans `.github/workflows/`
- Vérifiez Settings → Actions → General
- Activez "Allow all actions and reusable workflows"

### 2. Workflow S'exécute

Après votre push:

✅ Un workflow devrait démarrer automatiquement
✅ Vous devriez voir un badge jaune (running) puis vert (success)

❌ Si rouge (failed):
- Cliquez sur le workflow
- Lisez les logs d'erreur
- Vérifiez que `package.json` est bien dans le repo

### 3. GitHub Pages Est Activé

1. GitHub → Settings → Pages
2. Source devrait être "GitHub Actions"
3. URL devrait être affichée

✅ Si "Your site is live at https://..." → **OK**
❌ Si aucune URL n'apparaît → Attendez que le workflow se termine

## 📏 Taille du Repository

```bash
du -sh . --exclude=node_modules --exclude=.git
```

✅ Devrait être < 10 MB (généralement 2-5 MB)
❌ Si > 100 MB → node_modules ou dist sont probablement trackés

## 🔧 Tests Locaux

Avant de pousser, testez localement:

```bash
# Installer les dépendances
npm ci

# Lancer le dev server
npm run dev

# Dans un autre terminal, builder
npm run build

# Vérifier que dist/ est créé
ls -la dist/
```

✅ Si tout fonctionne localement → **OK pour pusher**
❌ Si erreurs → **Résolvez avant de pusher**

## 📊 Checklist Finale

Avant de dire "C'est bon!":

### Local:
- [ ] `.github/workflows/` existe avec 3 fichiers
- [ ] `/workflows/` n'existe plus
- [ ] `.gitignore` protège node_modules et dist
- [ ] `npm run build` fonctionne
- [ ] `git status` ne montre pas node_modules ou dist
- [ ] Tous les fichiers de doc sont créés

### GitHub:
- [ ] Push réussi sans erreurs
- [ ] Onglet Actions montre les workflows
- [ ] Un workflow s'est exécuté avec succès (✓ vert)
- [ ] Settings → Pages montre une URL
- [ ] L'URL fonctionne et montre votre app

### Documentation:
- [ ] `START_HERE_GITHUB_FIX.md` existe
- [ ] `ACTION_IMMEDIATE.md` existe
- [ ] `GITHUB_SYNC_GUIDE.md` existe
- [ ] `FILES_TO_COMMIT.md` existe
- [ ] `CLEANUP_STEPS.md` existe
- [ ] `CHANGES_SUMMARY.md` existe
- [ ] `VERIFICATION_CHECKLIST.md` existe (ce fichier)
- [ ] `README.md` mis à jour avec liens

## 🎯 Score de Santé

Comptez vos ✅:

- **20+/20** → Parfait! 🎉
- **15-19/20** → Bien, quelques ajustements à faire
- **10-14/20** → Moyen, relisez la documentation
- **<10/20** → Problèmes majeurs, recommencez depuis START_HERE_GITHUB_FIX.md

## 🔄 Si Quelque Chose Ne Va Pas

### Réinitialiser Complètement

Si vous voulez recommencer:

```bash
# Annuler tous les changements non commités
git reset --hard

# Récupérer la dernière version depuis GitHub
git pull origin main

# Relancer la procédure depuis ACTION_IMMEDIATE.md
```

### Obtenir de l'Aide

1. Lisez `START_HERE_GITHUB_FIX.md`
2. Consultez `GITHUB_SYNC_GUIDE.md` section "Support"
3. Vérifiez les logs dans GitHub → Actions
4. Vérifiez que tous les prérequis sont remplis

## 📝 Notes

- Ce fichier sert de checklist de vérification
- Utilisez-le avant chaque push important
- Conservez-le dans votre repo
- Mettez-le à jour si vous ajoutez de nouvelles vérifications

---

**Date de création:** 2026-01-06
**Version:** 1.0
**Statut:** Production-ready
