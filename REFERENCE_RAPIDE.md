# ⚡ Référence Rapide - Aide-Mémoire

**Créé** : 19 janvier 2026  
**Version** : 2.1 (100% Frontend - Vercel Ready)

---

## 🎯 L'Essentiel en 30 Secondes

### Problème
3 fichiers résiduels Supabase/Azure présents dans le projet.

### Solution
`.vercelignore` créé → Fichiers exclus du déploiement.

### Action
```bash
rm -rf supabase/ utils/
npm run build
git push origin main
```

**TERMINÉ !** ✅

---

## 📚 Navigation Express

| Si vous voulez... | Lisez... | Temps |
|-------------------|----------|-------|
| Déployer vite | `START_HERE.md` | 2 min |
| Comprendre | `LISEZ_MOI_MAINTENANT.md` | 5 min |
| Détails techniques | `ETAT_INFRASTRUCTURE.md` | 10 min |
| Diagrammes | `DIAGNOSTIC_VISUEL.md` | 10 min |
| Naviguer | `INDEX_GUIDES.md` | 3 min |

---

## 🚨 Commandes Critiques

### Nettoyage Complet (1 ligne)

```bash
rm -rf supabase/ utils/ && npm run build && git add . && git commit -m "🧹 Clean" && git push
```

### Nettoyage Étape par Étape

```bash
# 1. Supprimer fichiers résiduels
rm -rf supabase/ utils/

# 2. Vérifier le build
npm run build

# 3. Commiter
git add .
git commit -m "🧹 Nettoyage infrastructure"

# 4. Pousser
git push origin main
```

---

## 📁 Fichiers à Supprimer

```
❌ /supabase/functions/server/index.tsx
❌ /supabase/functions/server/kv_store.tsx
❌ /utils/supabase/info.tsx
```

**Commande** : `rm -rf supabase/ utils/`

---

## ⚠️ URLs Azure à Migrer (Optionnel)

### Localisation : `/src/app/App.tsx`

**Ligne 59** - Logo :
```
https://fdendpoint-marketing-explorance-prod-01-ebh8gbhmaudgf5gd.a03.azurefd.net/...
```

**Lignes 48-50** - Bannières (3x) :
```
https://stonlinehelpprod01.blob.core.windows.net/web/assets/...
```

**Guide** : `ETAT_INFRASTRUCTURE.md` section "Recommandations"

---

## ✅ Checklist Rapide

- [ ] Lire `START_HERE.md`
- [ ] Exécuter `rm -rf supabase/ utils/`
- [ ] Vérifier `npm run build`
- [ ] Pousser `git push origin main`
- [ ] Vérifier déploiement Vercel

---

## 🛠️ Dépannage Express

### Build échoue ?

```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Images ne se chargent pas ?

1. Vérifier console navigateur (F12)
2. Vérifier URLs Azure accessibles
3. Voir `ETAT_INFRASTRUCTURE.md` pour migration

---

## 📊 État du Projet

```
✅ Code : Prêt
✅ Config Vercel : Prêt
✅ .vercelignore : Créé
⚠️ Fichiers résiduels : À supprimer
⚠️ URLs Azure : Fonctionnent (migration optionnelle)
```

**Verdict** : 🟢 **PRÊT POUR DÉPLOIEMENT**

---

## 🎯 Guides Créés (9 fichiers)

1. `START_HERE.md` ← Commencez ici
2. `ACTION_IMMEDIATE.md`
3. `LISEZ_MOI_MAINTENANT.md`
4. `SOLUTION_COMPLETE.md`
5. `NETTOYAGE_FINAL_REQUIS.md` (FR)
6. `CLEANUP_INSTRUCTIONS_EN.md` (EN)
7. `ETAT_INFRASTRUCTURE.md`
8. `DIAGNOSTIC_VISUEL.md`
9. `INDEX_GUIDES.md`

**+ Ce fichier** : `REFERENCE_RAPIDE.md`

---

## 🚀 Déploiement Vercel

### Automatique (Recommandé)

```bash
git push origin main
```

Vercel détecte et déploie automatiquement.

### Manuel

```bash
npm i -g vercel
vercel --prod
```

---

## 📞 Support Rapide

| Problème | Solution |
|----------|----------|
| Build échoue | Réinstaller : `rm -rf node_modules && npm install` |
| Images Azure KO | Migrer : voir `ETAT_INFRASTRUCTURE.md` |
| localStorage KO | Vérifier mode navigation privée désactivé |

---

## 🔑 Points Clés

1. ✅ **`.vercelignore` créé** → Fichiers résiduels exclus
2. ⚠️ **Action manuelle requise** → Supprimer `supabase/` et `utils/`
3. ✅ **Documentation complète** → 9 guides disponibles
4. ⚠️ **URLs Azure** → Fonctionnent mais migration recommandée
5. ✅ **Déployable immédiatement** → Après suppression manuelle

---

## ⏱️ Temps Estimés

- **Nettoyage** : 2 minutes
- **Build + Test** : 1 minute
- **Git Push** : 30 secondes
- **Déploiement Vercel** : 2 minutes

**TOTAL** : ~5 minutes

---

## 🎉 Commande Magique (Tout-en-Un)

```bash
rm -rf supabase/ utils/ && \
npm run build && \
git add . && \
git commit -m "🧹 Nettoyage final infrastructure Supabase/Azure" && \
git push origin main && \
echo "✅ Terminé ! Vérifiez Vercel pour le déploiement."
```

**Copiez-collez et c'est fini !** 🚀

---

**Document de référence rapide**  
**Pour détails** : Voir guides listés ci-dessus  
**Statut** : ✅ TOUT EST PRÊT
