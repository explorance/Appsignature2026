# 🚀 Guide de Test Rapide - Dark Mode + Mot de Passe

**Version:** 2.3  
**Date:** 5 février 2026  

---

## ⚡ TEST EN 5 MINUTES

### 1️⃣ Nouveau Mot de Passe (30 secondes)

```bash
# Démarrer l'app
npm run dev

# Ouvrir: http://localhost:5173
```

**Tester:**
- Mot de passe page principale: `Design2026` ✅
- Mot de passe admin panel: `Design2026` ✅

**❌ Ancien mot de passe ne fonctionne plus:** `eXplorance`

---

### 2️⃣ Mode Light - Test Basique (1 minute)

1. **Générer une signature** avec:
   - Nom: Jean Dupont
   - Titre: Directeur Marketing
   - Email: jean.dupont@explorance.com
   - Bureau: Montréal
   - Téléphone: +1.514.123.4567

2. **Copier la signature**

3. **Coller dans Outlook/Gmail (mode light)**

**✅ Vérifier:**
- Texte noir visible
- Liens bleus cliquables
- Logo Explorance visible
- Disclaimer gris visible

---

### 3️⃣ Mode Dark - Test Rapide (2 minutes)

#### Gmail Dark Mode

1. **Activer dark mode:**
   - Gmail → ⚙️ Settings → Theme → **Dark**

2. **Nouveau message**

3. **Coller la même signature**

**✅ Vérifier:**
- ✅ Texte **BLANC** (pas noir !) - lisible
- ✅ Liens **BLEU CLAIR** - visibles
- ✅ Logo visible
- ✅ Tout est lisible sur fond sombre

#### Outlook Dark Mode (Si disponible)

1. **Activer dark mode:**
   - Outlook → File → Options → General → Office Theme → **Black**

2. **Nouveau message**

3. **Coller la signature**

**✅ Vérifier:** Même chose que Gmail

---

### 4️⃣ Test de Basculement (1 minute)

1. **Laissez un email ouvert avec votre signature**

2. **Basculez entre Light et Dark mode**

**✅ Résultat attendu:**
- Les couleurs changent automatiquement
- Toujours lisible
- Pas de clignotement

---

## 🎯 RÉSULTAT ATTENDU

### Mode Light (Clair)

```
Jean Dupont                    ← Texte NOIR
Directeur Marketing            ← Texte NOIR
[Logo Explorance]              ← Image visible
Montréal, QC...                ← Texte NOIR
Tel: +1.514...                 ← Texte NOIR
jean.dupont@explorance.com     ← Lien BLEU
───────────────────────────    ← Bordure gris clair
Disclaimer text...             ← Texte GRIS
```

### Mode Dark (Sombre)

```
Jean Dupont                    ← Texte BLANC ✅
Directeur Marketing            ← Texte BLANC ✅
[Logo Explorance]              ← Image visible
Montréal, QC...                ← Texte BLANC ✅
Tel: +1.514...                 ← Texte BLANC ✅
jean.dupont@explorance.com     ← Lien BLEU CLAIR ✅
───────────────────────────    ← Bordure gris foncé
Disclaimer text...             ← Texte GRIS CLAIR ✅
```

---

## ❌ PROBLÈMES POSSIBLES

### Problème 1: Texte noir en mode dark (illisible)

**Cause:** Le navigateur/client email a mis en cache l'ancienne version

**Solution:**
```bash
# 1. Effacer le cache du navigateur (Ctrl+Shift+Del)
# 2. Recharger l'app (Ctrl+Shift+R)
# 3. Régénérer la signature
# 4. Retester
```

### Problème 2: Mot de passe "Design2026" refusé

**Cause:** localStorage contient encore l'ancienne authentification

**Solution:**
```javascript
// Dans la console DevTools (F12):
localStorage.clear();
location.reload();

// Puis réessayer avec "Design2026"
```

### Problème 3: Les couleurs ne changent pas

**Cause:** Client email ne supporte pas le dark mode

**Solution:**
- C'est normal ! Le client affiche en mode light
- Testez avec un client moderne (Gmail web, Outlook 2019+)
- La signature reste fonctionnelle et lisible

---

## 📧 CLIENTS EMAIL À TESTER (Par priorité)

### Priorité 1 - Essentiels ⭐⭐⭐

- [ ] **Gmail Web** (Mode dark: ⚙️ → Theme → Dark)
- [ ] **Outlook Windows 2019+** (Mode dark: File → Options → Black)
- [ ] **Outlook Mac** (Mode dark: Preferences → Appearance → Dark)

### Priorité 2 - Importants ⭐⭐

- [ ] **Outlook Web** (Mode dark: ⚙️ → Dark mode)
- [ ] **Apple Mail macOS** (Suit le système: System Prefs → Dark)
- [ ] **Apple Mail iOS** (Suit le système: Settings → Dark)

### Priorité 3 - Optionnels ⭐

- [ ] Gmail App (iOS/Android)
- [ ] Thunderbird
- [ ] Autres clients

---

## 🎨 COULEURS DE RÉFÉRENCE

### Light Mode (Défaut)

| Élément | Hex | Apparence |
|---------|-----|-----------|
| Texte | `#000000` | Noir pur |
| Liens | `#0077b5` | Bleu LinkedIn |
| Disclaimer | `#666666` | Gris moyen |
| Bordure | `#e0e0e0` | Gris très clair |

### Dark Mode (Automatique)

| Élément | Hex | Apparence |
|---------|-----|-----------|
| Texte | `#ffffff` | Blanc pur |
| Liens | `#6bb6ff` | Bleu clair |
| Disclaimer | `#cccccc` | Gris clair |
| Bordure | `#444444` | Gris foncé |

---

## ✅ CHECKLIST COMPLÈTE

### Mot de Passe

- [ ] Page principale accepte `Design2026`
- [ ] Admin panel accepte `Design2026`
- [ ] Ancien mot de passe `eXplorance` est rejeté

### Mode Light

- [ ] Texte noir (#000000)
- [ ] Liens bleus (#0077b5)
- [ ] Logo visible
- [ ] Bannière visible (si sélectionnée)
- [ ] Disclaimer gris (#666666)
- [ ] Tout est lisible

### Mode Dark

- [ ] Texte blanc (#ffffff)
- [ ] Liens bleu clair (#6bb6ff)
- [ ] Logo visible
- [ ] Bannière visible (si sélectionnée)
- [ ] Disclaimer gris clair (#cccccc)
- [ ] Tout est lisible sur fond sombre

### Fonctionnalités

- [ ] Copier signature fonctionne
- [ ] Télécharger HTML fonctionne
- [ ] Preview se met à jour en temps réel
- [ ] Sélection de bannière fonctionne
- [ ] Sélection de bureau fonctionne
- [ ] Choix de langue disclaimer fonctionne

---

## 🐛 RAPPORTER UN PROBLÈME

Si vous trouvez un problème :

1. **Notez:**
   - Client email utilisé (ex: Outlook 2019 Windows)
   - Mode (Light ou Dark)
   - Qu'est-ce qui ne fonctionne pas ?
   - Capture d'écran si possible

2. **Vérifiez d'abord:**
   - [ ] Vous utilisez le nouveau mot de passe `Design2026`
   - [ ] Vous avez rechargé l'app (Ctrl+Shift+R)
   - [ ] Le client email est à jour
   - [ ] Le dark mode est bien activé dans le client

3. **Testez la solution:**
   - Effacer le cache
   - Régénérer la signature
   - Tester dans un autre client email

---

## 💡 ASTUCES

### Pour Développeurs

```bash
# Voir les couleurs appliquées en temps réel
# Dans DevTools (F12) → Elements → Inspecter la signature

# Vérifier les media queries
# DevTools → Console:
window.matchMedia('(prefers-color-scheme: dark)').matches
// true = dark mode actif
// false = light mode actif
```

### Pour Utilisateurs

- **Gmail:** Basculez avec l'icône ⚙️
- **Outlook:** Préférences → Apparence
- **Apple Mail:** Suit automatiquement le système

---

## 📊 TEMPS ESTIMÉS

| Tâche | Durée | Difficulté |
|-------|-------|------------|
| Test mot de passe | 30s | ⭐ Facile |
| Test mode light | 1 min | ⭐ Facile |
| Test mode dark (Gmail) | 2 min | ⭐ Facile |
| Test mode dark (Outlook) | 2 min | ⭐⭐ Moyen |
| Test complet (tous clients) | 15 min | ⭐⭐⭐ Avancé |

---

**Status:** ✅ PRÊT À TESTER  
**Durée totale:** ~5-15 minutes  
**Mot de passe:** `Design2026`  
