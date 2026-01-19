# ⚡ Déploiement en 3 Commandes

## Pour les Pressés

```bash
# 1. Pousser vers GitHub
git init && git add . && git commit -m "Initial commit" && git remote add origin https://github.com/VOTRE_USERNAME/VOTRE_REPO.git && git push -u origin main

# 2. Aller sur vercel.com et importer le repo

# 3. Cliquer sur "Deploy"

# C'est fait ! 🎉
```

---

## Mode Détaillé (10 minutes)

### Étape 1 : Préparer le Code (2 min)

```bash
# Vérifier que tout fonctionne
npm install
npm run dev
# Tester dans le navigateur
# Fermer avec Ctrl+C
```

### Étape 2 : GitHub (3 min)

```bash
# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "feat: email signature generator"

# Créer le repo sur github.com/new
# Puis connecter :
git remote add origin https://github.com/VOTRE_USERNAME/VOTRE_REPO.git

# Pousser
git push -u origin main
```

### Étape 3 : Vercel (5 min)

1. Aller sur **vercel.com/login**
2. Se connecter avec GitHub
3. Cliquer sur **"Add New Project"**
4. Sélectionner votre repository
5. Garder les paramètres par défaut
6. Cliquer sur **"Deploy"**
7. Attendre ~1 minute ⏳
8. **C'est en ligne ! 🚀**

---

## Accéder à l'Application

### URL de Production
Votre app sera disponible à :
```
https://votre-app-nom.vercel.app
```

### Tester l'Admin
1. Aller sur votre URL
2. Cliquer sur l'onglet "Admin Settings"
3. Mot de passe : `eXplorance`

---

## Faire des Changements

### Workflow Simple

```bash
# 1. Modifier les fichiers
# 2. Sauvegarder
# 3. Commiter et pousser

git add .
git commit -m "feat: ma nouvelle fonctionnalité"
git push

# Vercel déploie automatiquement !
# Attendre 1-2 minutes
# Rafraîchir votre URL de production
```

---

## Commandes Utiles

### Voir les Déploiements
```bash
# Installer Vercel CLI
npm i -g vercel

# Lister les déploiements
vercel ls

# Ouvrir dans le navigateur
vercel open
```

### Vérifier le Build Localement
```bash
# Construire
npm run build

# Vérifier le dossier dist
ls dist

# Prévisualiser
npm run preview
```

---

## Dépannage Express

### ❌ Build Failed
```bash
# Tester localement
npm run build

# Si ça marche, le problème est sur Vercel
# Aller dans le dashboard Vercel → Voir les logs
```

### ❌ Can't Push to GitHub
```bash
# Vérifier l'URL du remote
git remote -v

# Si l'URL est fausse, corriger
git remote set-url origin https://github.com/VOTRE_USERNAME/VOTRE_REPO.git

# Réessayer
git push
```

### ❌ Vercel N'a Pas Détecté le Projet
1. Aller dans Vercel Dashboard
2. Settings → General
3. Framework Preset : Sélectionner "Vite"
4. Redéployer

---

## Checklist Rapide

Avant de déployer :
- [ ] `npm install` fonctionne
- [ ] `npm run dev` fonctionne
- [ ] App fonctionne dans le navigateur
- [ ] Code poussé sur GitHub

Après déploiement :
- [ ] URL de production accessible
- [ ] Génération de signatures fonctionne
- [ ] Copier vers presse-papiers fonctionne
- [ ] Panneau admin accessible (mot de passe : `eXplorance`)

---

## Résumé Visuel

```
┌─────────────────┐
│  Développement  │
│   npm run dev   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Git Commit    │
│   git push      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│     GitHub      │
│  Repository     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│     Vercel      │
│  Auto-Deploy    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   🌍 Production  │
│   votre-app     │
│   .vercel.app   │
└─────────────────┘
```

---

## C'est Tout !

Vous avez maintenant :
- ✅ App en production
- ✅ Déploiements automatiques
- ✅ URL HTTPS
- ✅ CDN global
- ✅ Preview pour chaque branche

**Coût : 0 $ avec le tier gratuit de Vercel**

---

## Besoin d'Aide ?

📖 Guide complet : [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md)  
📖 Workflow Git : [GITHUB_VERCEL_WORKFLOW.md](./GITHUB_VERCEL_WORKFLOW.md)  
📖 Documentation : [NETTOYAGE_INFRASTRUCTURE_FR.md](./NETTOYAGE_INFRASTRUCTURE_FR.md)

---

**Temps Total : ~10 minutes**  
**Niveau : Débutant**  
**Coût : Gratuit**

🚀 **Bon déploiement !**
