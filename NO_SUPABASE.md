# ⚠️ Cette Application N'Utilise PAS Supabase

## 🎯 Type d'Application

Cette application est une **application frontend pure** qui génère des signatures email.

## 💾 Stockage de Données

**Méthode utilisée** : `localStorage` (navigateur)

```typescript
// Voir /src/app/utils/dataManager.ts
export const saveSettings = (settings: AdminSettings) => {
  localStorage.setItem('signatureAppSettings', JSON.stringify(settings));
};

export const loadSettings = (): AdminSettings => {
  const stored = localStorage.getItem('signatureAppSettings');
  return stored ? JSON.parse(stored) : DEFAULT_SETTINGS;
};
```

## ❌ Pas de Backend Requis

- ❌ Pas de Supabase
- ❌ Pas de base de données externe
- ❌ Pas d'API backend
- ❌ Pas d'authentification serveur

## ✅ Fonctionnement

1. L'utilisateur saisit ses informations
2. L'application génère une signature HTML
3. Les paramètres admin sont sauvegardés dans le localStorage du navigateur
4. L'utilisateur copie ou télécharge la signature

## 🚀 Déploiement

Cette application peut être déployée sur n'importe quelle plateforme d'hébergement statique :

- GitHub Pages ✅
- Azure Static Web Apps ✅
- Netlify ✅
- Vercel ✅
- Cloudflare Pages ✅

## 🔧 Erreur 403 Supabase

Si vous voyez cette erreur :
```
Error: XHR for "/api/integrations/supabase/.../deploy" failed with status 403
```

**Ignorez-la** - c'est une erreur du système Figma Make qui tente de déployer des edge functions Supabase inexistantes. Votre application fonctionne parfaitement sans Supabase.

## 📦 Build

```bash
# Installer les dépendances
npm install

# Build de production
npm run build

# Le dossier dist/ contient votre app prête pour le déploiement
```

## ✅ Vérification

Pour confirmer qu'aucune référence Supabase n'existe dans le code :

```bash
# Chercher des imports Supabase dans le code source
grep -r "supabase" src/

# Résultat attendu : aucune correspondance trouvée
```

## 📁 Fichiers Supabase Ignorés

Les fichiers suivants existent mais ne sont **PAS utilisés** :
- `/supabase/functions/server/index.tsx` (système Figma Make)
- `/supabase/functions/server/kv_store.tsx` (système Figma Make)
- `/utils/supabase/info.tsx` (système Figma Make)

Ces fichiers sont protégés et ne peuvent pas être supprimés, mais ils n'affectent pas votre application.

## 🎯 Configuration

Fichiers créés pour désactiver Supabase :
- ✅ `.env` - Variables d'environnement
- ✅ `.gitignore` - Ignore les dossiers Supabase
- ✅ `figma-make.config.json` - Configuration de déploiement

---

**Conclusion** : Cette application est 100% frontend et ne nécessite aucun backend. L'erreur Supabase peut être ignorée en toute sécurité.
