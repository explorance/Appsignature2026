# Étapes de Nettoyage - Actions Immédiates

## ✅ CE QUI A ÉTÉ FAIT

1. ✅ Création de `.gitignore` pour protéger les fichiers importants
2. ✅ Migration des workflows vers `.github/workflows/`:
   - `.github/workflows/deploy.yml`
   - `.github/workflows/azure-static-web-apps.yml`
   - `.github/workflows/deploy-all.yml`
3. ✅ Création de la documentation:
   - `GITHUB_SYNC_GUIDE.md`
   - `FILES_TO_COMMIT.md`
   - `CLEANUP_STEPS.md`

## 🧹 PROCHAINES ÉTAPES - À FAIRE MAINTENANT

### Étape 1: Supprimer les Anciens Workflows

Les workflows dans `/workflows/` (sans `.github/`) sont maintenant obsolètes.

**Commandes à exécuter dans votre terminal:**

```bash
# Supprimer le répertoire workflows obsolète
rm -rf workflows/

# Ou si vous préférez les supprimer manuellement:
# - Supprimez le dossier /workflows/ de votre projet
```

### Étape 2: Vérifier les Fichiers

```bash
# Voir tous les fichiers qui seront commitées
git status

# Devrait montrer:
# - new file: .gitignore
# - new file: .github/workflows/deploy.yml
# - new file: .github/workflows/azure-static-web-apps.yml
# - new file: .github/workflows/deploy-all.yml
# - new file: GITHUB_SYNC_GUIDE.md
# - new file: FILES_TO_COMMIT.md
# - new file: CLEANUP_STEPS.md
# - deleted: workflows/ (si vous l'avez supprimé)
```

### Étape 3: Commiter et Pusher

```bash
# Ajouter tous les changements
git add .

# Commiter avec un message descriptif
git commit -m "fix: Réorganisation des workflows GitHub Actions dans .github/workflows/ et ajout de .gitignore"

# Pusher vers GitHub
git push origin main
```

### Étape 4: Vérifier sur GitHub

1. Allez sur votre repo GitHub
2. Cliquez sur l'onglet **"Actions"**
3. Vous devriez voir vos workflows apparaître et s'exécuter
4. Vérifiez que le build réussit (✓ vert)

## 📋 Checklist Complète

- [ ] Supprimer `/workflows/` (anciens fichiers)
- [ ] Vérifier que `.github/workflows/` contient les 3 fichiers YAML
- [ ] Vérifier `.gitignore` existe
- [ ] Exécuter `git add .`
- [ ] Exécuter `git commit -m "fix: Réorganisation workflows et ajout .gitignore"`
- [ ] Exécuter `git push origin main`
- [ ] Vérifier sur GitHub → onglet Actions que les workflows s'exécutent
- [ ] Vérifier que le déploiement réussit

## 🔧 Si vous avez des Erreurs

### Erreur: "node_modules/ trop volumineux"

```bash
# Le .gitignore devrait empêcher cela, mais si ça arrive:
git rm -r --cached node_modules/
git commit -m "Remove node_modules from repo"
git push origin main
```

### Erreur: "dist/ déjà commité"

```bash
# Supprimer dist/ du repo
git rm -r --cached dist/
git commit -m "Remove dist from repo (will be built by CI/CD)"
git push origin main
```

### Les Workflows ne s'exécutent pas

1. Vérifiez que les fichiers sont dans `.github/workflows/` (pas juste `workflows/`)
2. Allez sur GitHub → Settings → Actions → General
3. Vérifiez que "Allow all actions and reusable workflows" est coché
4. Vérifiez que "Read and write permissions" est activé pour GITHUB_TOKEN

### Besoin de secrets Azure

Si vous utilisez Azure Static Web Apps:

1. Allez sur GitHub → Settings → Secrets and variables → Actions
2. Ajoutez `AZURE_STATIC_WEB_APPS_API_TOKEN` avec votre token Azure
3. Le workflow `.github/workflows/azure-static-web-apps.yml` l'utilisera automatiquement

## 📝 Notes Importantes

- Les workflows dans `.github/workflows/` sont automatiquement détectés par GitHub
- Les workflows dans `/workflows/` (sans `.github/`) ne sont PAS détectés
- Après ce cleanup, chaque push déclenchera automatiquement le build et déploiement
- Le `.gitignore` empêchera `node_modules/` et `dist/` d'être pushés

## 🎯 Résultat Attendu

Après ces étapes:
1. ✅ GitHub Actions détectera et exécutera vos workflows
2. ✅ Chaque push déclenchera automatiquement le build
3. ✅ L'application sera déployée sur GitHub Pages (et Azure si configuré)
4. ✅ Plus de problèmes d'écrasement de fichiers
5. ✅ Le repo GitHub ne contiendra que le code source (pas node_modules/ ni dist/)

## 💡 Astuce

Pour vérifier que tout fonctionne, faites un petit changement de test:

```bash
# Modifiez un fichier (ex: README.md)
echo "Test de déploiement automatique" >> README.md

# Commitez et pushez
git add README.md
git commit -m "test: Vérification du déploiement automatique"
git push origin main

# Allez sur GitHub → Actions et regardez le workflow s'exécuter!
```
