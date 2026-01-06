# ⚡ Quick Start - 3 Commandes

## 🎯 Fix Rapide (30 secondes)

```bash
# 1. Créer le bon dossier
mkdir -p .github/workflows

# 2. Copier vos workflows (choisissez UNE option)
cp workflow/*.yml .github/workflows/        # Si édités dans /workflow/
# OU
cp workflows/*.yml .github/workflows/       # Si édités dans /workflows/

# 3. Supprimer les anciens (APRÈS vérification)
rm -rf workflow/ workflows/
```

---

## ✅ Vérification Rapide

```bash
# Vérifier les workflows
ls .github/workflows/

# Tester le build
npm run build          # ou pnpm run build

# Commit et push
git add .github/workflows/
git add -u
git commit -m "fix: consolidate workflows"
git push origin main
```

---

## 📚 Documentation Complète

- **`ACTION_REQUIRED.md`** - Guide complet avec checklist
- **`WORKFLOW_CONSOLIDATION_GUIDE.md`** - Guide détaillé
- **`SUPABASE_ERROR_FIX.md`** - Explication de l'erreur 403

---

## 🎯 Points Clés

1. ✅ **Erreur Supabase** → Ignorez-la (votre app n'en a pas besoin)
2. ⚠️ **Workflows** → Doivent être dans `.github/workflows/`
3. 🚀 **Déploiement** → Fonctionnera après consolidation

---

**Temps requis** : ⏰ 30 secondes à 2 minutes  
**Lisez ACTION_REQUIRED.md pour les détails complets**
