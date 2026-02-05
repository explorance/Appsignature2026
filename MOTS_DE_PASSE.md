# 🔐 Gestion des Mots de Passe - Version 2.3

**Date:** 5 février 2026  
**Status:** ✅ Configuration à deux niveaux  

---

## 🎯 STRUCTURE DE SÉCURITÉ

L'application utilise **deux mots de passe différents** pour deux niveaux d'accès :

### 📊 Hiérarchie d'Accès

```
┌─────────────────────────────────────────┐
│  Mot de passe: eXplorance               │
│  ┌───────────────────────────────────┐  │
│  │   APPLICATION PRINCIPALE          │  │
│  │   - Générer des signatures        │  │
│  │   - Copier/Télécharger            │  │
│  │   - Voir le preview               │  │
│  │                                   │  │
│  │   Mot de passe: Design2026        │  │
│  │   ┌───────────────────────────┐   │  │
│  │   │   PANNEAU ADMIN           │   │  │
│  │   │   - Gérer les bureaux     │   │  │
│  │   │   - Gérer les bannières   │   │  │
│  │   │   - Modifier disclaimers  │   │  │
│  │   │   - Configurer l'app      │   │  │
│  │   └───────────────────────────┘   │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

---

## 🔑 MOTS DE PASSE

### 1. Accès à l'Application - `eXplorance`

**Mot de passe:** `eXplorance`  
**Niveau:** 👤 Utilisateur standard  
**Utilisation:** Page de connexion principale  

**Accès donné:**
- ✅ Générer des signatures email
- ✅ Sélectionner un bureau
- ✅ Sélectionner une bannière
- ✅ Remplir les informations personnelles
- ✅ Copier la signature dans le presse-papiers
- ✅ Télécharger la signature en HTML
- ✅ Voir le preview en temps réel

**Accès refusé:**
- ❌ Modifier les bureaux
- ❌ Ajouter/supprimer des bannières
- ❌ Modifier les disclaimers
- ❌ Changer le logo de l'entreprise
- ❌ Configurer les champs du formulaire

**Fichier:**
- `/src/app/components/PasswordProtection.tsx` (ligne 8)

---

### 2. Accès Admin - `Design2026`

**Mot de passe:** `Design2026`  
**Niveau:** 👑 Administrateur  
**Utilisation:** Panneau d'administration (onglet "Admin")  

**Prérequis:**
- ⚠️ Vous devez d'abord entrer `eXplorance` pour accéder à l'application
- ⚠️ Ensuite, cliquez sur l'onglet "Admin" et entrez `Design2026`

**Accès donné (en plus de l'accès utilisateur):**
- ✅ Gérer les bureaux (ajouter, modifier, supprimer)
- ✅ Gérer les catégories de bannières
- ✅ Ajouter/supprimer des bannières
- ✅ Modifier le disclaimer anglais
- ✅ Modifier le disclaimer français
- ✅ Changer le logo de l'entreprise
- ✅ Changer l'URL du site web
- ✅ Configurer la visibilité des champs
- ✅ Définir les champs requis vs optionnels
- ✅ Réinitialiser les paramètres par défaut

**Fichiers:**
- `/src/app/components/AdminPanel.tsx` (ligne 12)
- `/src/app/App.tsx` (ligne 140)

---

## 📖 GUIDE D'UTILISATION

### Pour un Utilisateur Standard

**Objectif:** Créer une signature email

```bash
# 1. Ouvrir l'application
http://localhost:5173  (ou votre URL de production)

# 2. Entrer le mot de passe utilisateur
Mot de passe: eXplorance
[Cliquer sur "Access Application"]

# 3. Remplir le formulaire
- Nom complet
- Titre du poste
- Email
- Sélectionner un bureau
- (Optionnel) Téléphone cellulaire
- (Optionnel) LinkedIn
- (Optionnel) Sélectionner une bannière
- (Optionnel) Choisir la langue du disclaimer

# 4. Copier ou télécharger
[Copy Signature] ou [Download HTML]

# 5. Coller dans Outlook/Gmail
✅ Terminé !
```

**Temps estimé:** 2-3 minutes

---

### Pour un Administrateur

**Objectif:** Configurer l'application + Créer une signature

```bash
# 1. Ouvrir l'application
http://localhost:5173  (ou votre URL de production)

# 2. Entrer le mot de passe utilisateur
Mot de passe: eXplorance
[Cliquer sur "Access Application"]

# 3. Aller dans l'onglet Admin
[Cliquer sur "Admin" dans la navigation]

# 4. Entrer le mot de passe admin
Mot de passe: Design2026
[Cliquer sur "Login to Admin"]

# 5. Configurer l'application
- Ajouter/modifier des bureaux
- Ajouter/modifier des bannières
- Modifier les disclaimers
- Configurer les champs du formulaire
- Etc.

# 6. Sauvegarder
[Save Settings]
Confirmer avec le mot de passe: Design2026

# 7. Retourner à "Generator" pour créer une signature
[Cliquer sur "Generator" dans la navigation]

✅ Terminé !
```

**Temps estimé:** 5-10 minutes

---

## 🔒 SÉCURITÉ

### Niveau 1 - Protection de l'Application (`eXplorance`)

**Objectif:** Empêcher l'accès public

- Protège l'application entière
- Stocké dans `localStorage` après première connexion
- Reste actif jusqu'à ce que l'utilisateur efface le cache
- Fichier: `/src/app/components/PasswordProtection.tsx`

**Code:**
```typescript
const CORRECT_PASSWORD = "eXplorance";
const STORAGE_KEY = "app_authenticated";
```

**Déconnexion:**
```javascript
// Dans la console DevTools (F12):
localStorage.removeItem("app_authenticated");
location.reload();
```

---

### Niveau 2 - Protection Admin (`Design2026`)

**Objectif:** Protéger les paramètres critiques

- Protège uniquement le panneau d'administration
- Mot de passe requis à chaque session
- Pas de stockage persistant (sécurité renforcée)
- Mot de passe re-demandé lors de la sauvegarde
- Fichiers: `/src/app/components/AdminPanel.tsx` + `/src/app/App.tsx`

**Code:**
```typescript
// AdminPanel.tsx
const ADMIN_PASSWORD = "Design2026";

// App.tsx
if (password !== "Design2026") {
  return { success: false, error: "Invalid password" };
}
```

**Déconnexion:**
- Automatique quand vous quittez l'onglet Admin
- Ou rechargez la page (F5)

---

## 🎯 CAS D'USAGE

### Cas 1: Employé Standard

**Profil:** Marie, Directrice Marketing  
**Besoin:** Créer sa signature email  
**Mot de passe:** `eXplorance` ✅  
**Accès:** Générateur de signatures seulement  

---

### Cas 2: Assistant IT

**Profil:** Jean, Support technique  
**Besoin:** Aider les employés à créer leurs signatures  
**Mot de passe:** `eXplorance` ✅  
**Accès:** Générateur de signatures seulement  

**Note:** Jean peut aider mais ne peut pas modifier la configuration

---

### Cas 3: Marketing Manager

**Profil:** Sophie, Responsable Marketing  
**Besoin:** Ajouter une nouvelle bannière pour un événement  
**Mots de passe:**
1. `eXplorance` → Accéder à l'app ✅
2. `Design2026` → Accéder à l'admin ✅

**Accès:** Complet (générateur + admin)

---

### Cas 4: IT Administrator

**Profil:** Pierre, Administrateur système  
**Besoin:** Configurer l'application pour toute l'entreprise  
**Mots de passe:**
1. `eXplorance` → Accéder à l'app ✅
2. `Design2026` → Accéder à l'admin ✅

**Accès:** Complet (générateur + admin)

---

## 🔄 CHANGEMENT DES MOTS DE PASSE

### Pour Changer le Mot de Passe Utilisateur

**Fichier:** `/src/app/components/PasswordProtection.tsx`

```typescript
// Ligne 8
const CORRECT_PASSWORD = "VotreNouveauMotDePasse";
```

**Après modification:**
1. Redémarrer l'application
2. Effacer le localStorage (console: `localStorage.clear()`)
3. Informer tous les utilisateurs du nouveau mot de passe

---

### Pour Changer le Mot de Passe Admin

**Fichiers à modifier:**

1. `/src/app/components/AdminPanel.tsx` (ligne 12)
```typescript
const ADMIN_PASSWORD = "VotreNouveauMotDePasseAdmin";
```

2. `/src/app/App.tsx` (ligne 140)
```typescript
if (password !== "VotreNouveauMotDePasseAdmin") {
  return { success: false, error: "Invalid password" };
}
```

**Après modification:**
1. Redémarrer l'application
2. Informer uniquement les administrateurs du nouveau mot de passe

---

## 📊 MATRICE DES PERMISSIONS

| Fonctionnalité | Utilisateur (`eXplorance`) | Admin (`Design2026`) |
|----------------|---------------------------|----------------------|
| **Accès à l'application** | ✅ | ✅ |
| **Générer une signature** | ✅ | ✅ |
| **Copier/Télécharger** | ✅ | ✅ |
| **Sélectionner bureau** | ✅ | ✅ |
| **Sélectionner bannière** | ✅ | ✅ |
| **Voir le preview** | ✅ | ✅ |
| | | |
| **Accès panneau admin** | ❌ | ✅ |
| **Gérer les bureaux** | ❌ | ✅ |
| **Gérer les bannières** | ❌ | ✅ |
| **Modifier disclaimers** | ❌ | ✅ |
| **Modifier logo entreprise** | ❌ | ✅ |
| **Configurer champs** | ❌ | ✅ |
| **Réinitialiser paramètres** | ❌ | ✅ |

---

## ⚠️ AVERTISSEMENTS

### 1. Ne Partagez PAS le Mot de Passe Admin Publiquement

- ❌ Ne l'écrivez pas dans des emails non sécurisés
- ❌ Ne le mettez pas dans un document partagé publiquement
- ✅ Utilisez un gestionnaire de mots de passe d'entreprise
- ✅ Partagez-le uniquement avec les personnes autorisées

### 2. Le Mot de Passe Utilisateur Est Moins Sensible

- Le mot de passe `eXplorance` peut être partagé avec tous les employés
- Il donne accès uniquement à la création de signatures
- Aucun risque de modification des paramètres de l'application

### 3. Sécurité Frontend Only

⚠️ **IMPORTANT:** Cette application est 100% frontend (pas de backend).

**Implications:**
- Les mots de passe sont visibles dans le code source
- Ils servent à **limiter l'accès**, pas à protéger des données sensibles
- Convient pour un usage interne (intranet, VPN d'entreprise)
- **Ne convient PAS** pour des données hautement confidentielles

**Recommandations:**
- Déployez sur un domaine interne ou derrière un VPN
- Utilisez l'authentification SSO de votre entreprise si possible
- Pour une sécurité renforcée, ajoutez un backend avec authentification

---

## 🔐 RÉSUMÉ RAPIDE

| Question | Réponse |
|----------|---------|
| **Mot de passe pour utiliser l'app ?** | `eXplorance` |
| **Mot de passe pour l'admin ?** | `Design2026` |
| **Dois-je entrer les deux ?** | Oui, d'abord `eXplorance`, puis `Design2026` pour l'admin |
| **Qui a besoin du mot de passe admin ?** | Seulement les personnes qui gèrent la configuration |
| **Le mot de passe utilisateur peut être partagé ?** | Oui, avec tous les employés |
| **Le mot de passe admin peut être partagé ?** | Non, uniquement avec les administrateurs autorisés |
| **Où changer les mots de passe ?** | Voir section "Changement des mots de passe" ci-dessus |

---

## 📞 QUESTIONS FRÉQUENTES

### Q: J'ai oublié le mot de passe, que faire ?

**R:** Contactez votre administrateur système ou développeur. Les mots de passe sont dans le code source :
- Utilisateur: `/src/app/components/PasswordProtection.tsx` (ligne 8)
- Admin: `/src/app/components/AdminPanel.tsx` (ligne 12)

---

### Q: Puis-je avoir plus de deux niveaux d'accès ?

**R:** Oui, mais cela nécessite une modification du code. Contactez votre équipe de développement pour implémenter un système de rôles plus complexe.

---

### Q: Le mot de passe est-il crypté ?

**R:** Non, les mots de passe sont en clair dans le code source car c'est une application frontend pure. Pour une vraie sécurité, utilisez un backend avec authentification.

---

### Q: Puis-je me déconnecter ?

**R:**
- **Application:** Effacez le localStorage (voir section "Déconnexion")
- **Admin:** Rechargez simplement la page ou changez d'onglet

---

### Q: Que se passe-t-il si quelqu'un trouve le mot de passe ?

**R:**
- **Utilisateur (`eXplorance`):** Peut créer des signatures, pas de risque majeur
- **Admin (`Design2026`):** Peut modifier la configuration, changez le mot de passe immédiatement

---

**Version:** 2.3  
**Mot de passe utilisateur:** `eXplorance` ✅  
**Mot de passe admin:** `Design2026` ✅  
**Dernière mise à jour:** 5 février 2026  
