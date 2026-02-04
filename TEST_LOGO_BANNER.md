# 🧪 Test du Logo et des Bannières

**Date:** 4 février 2026  
**Objectif:** Vérifier que le logo Azure CDN (155px) et les bannières (650px) fonctionnent correctement  

---

## ⚡ TEST RAPIDE (2 minutes)

### Étape 1: Démarrer l'Application

```bash
npm run dev
```

Ouvrez votre navigateur à : `http://localhost:5173`

### Étape 2: Vérifier le Logo dans le Preview

1. Allez dans l'onglet "Generate Signature"
2. Remplissez au minimum :
   - **Full Name:** Votre nom
   - **Job Title:** Votre titre
   - **Email:** Votre email
   - **Office Location:** Sélectionnez un bureau

3. **Regardez le preview à droite :**
   - ✅ Le logo Explorance devrait apparaître
   - ✅ Il devrait avoir une largeur d'environ 155px
   - ✅ Il devrait être cliquable

### Étape 3: Vérifier les Bannières

1. Dans le formulaire, descendez jusqu'à "Banner"
2. Sélectionnez une catégorie de bannière
3. Sélectionnez une bannière spécifique

4. **Regardez le preview à droite :**
   - ✅ La bannière devrait apparaître
   - ✅ Elle devrait avoir une largeur d'environ 650px
   - ✅ Les coins devraient être arrondis

### Étape 4: Tester la Copie

1. Cliquez sur "Copy Signature"
2. Ouvrez un éditeur de texte ou email
3. Collez (Ctrl+V ou Cmd+V)

**Vérifications :**
- ✅ Le logo apparaît
- ✅ La bannière apparaît (si sélectionnée)
- ✅ Les dimensions semblent correctes

---

## 🔍 TEST DÉTAILLÉ

### Test 1: URL du Logo Azure CDN

#### Vérifier dans le Code

```bash
# Chercher dans le code source
grep -r "fdendpoint-marketing-explorance" src/
```

**Résultat attendu :**
```
src/app/App.tsx:  companyLogoUrl: "https://fdendpoint-marketing-explorance-prod-01-ebh8gbhmaudgf5gd.a03.azurefd.net/web/assets/Logo_explorance_x4_944ab67640.png"
```

#### Vérifier dans le Navigateur

1. Ouvrez DevTools (F12)
2. Console → Tapez :
```javascript
const settings = JSON.parse(localStorage.getItem('emailSignatureSettings') || '{}');
console.log(settings.companyLogoUrl);
```

**Résultat attendu :**
```
https://fdendpoint-marketing-explorance-prod-01-ebh8gbhmaudgf5gd.a03.azurefd.net/web/assets/Logo_explorance_x4_944ab67640.png
```

#### Vérifier l'URL Directement

Ouvrez cette URL dans un navigateur :
```
https://fdendpoint-marketing-explorance-prod-01-ebh8gbhmaudgf5gd.a03.azurefd.net/web/assets/Logo_explorance_x4_944ab67640.png
```

**Résultat attendu :** Le logo Explorance devrait s'afficher

---

### Test 2: Dimensions du Logo (155px)

#### Dans le Preview React

1. Ouvrez DevTools (F12)
2. Onglet "Elements" ou "Inspecteur"
3. Trouvez l'élément `<img alt="Company Logo">`
4. Regardez les styles appliqués

**Résultat attendu :**
```css
max-width: 155px;
height: auto;
display: block;
border: 0;
```

#### Dans le HTML Généré

1. Générez une signature
2. Cliquez sur "Download HTML"
3. Ouvrez le fichier téléchargé dans un éditeur de texte
4. Cherchez la balise `<img` du logo

**Résultat attendu :**
```html
<img src="https://fdendpoint-marketing-explorance-prod-01-ebh8gbhmaudgf5gd.a03.azurefd.net/web/assets/Logo_explorance_x4_944ab67640.png" 
     alt="Company Logo" 
     width="155" 
     style="max-width: 155px; height: auto; display: block; border: 0;" />
```

**Vérifications :**
- ✅ Attribut HTML `width="155"`
- ✅ Style CSS `max-width: 155px`
- ✅ URL Azure CDN complète

---

### Test 3: Dimensions des Bannières (650px)

#### Dans le Preview React

1. Sélectionnez une bannière
2. Ouvrez DevTools (F12)
3. Onglet "Elements" ou "Inspecteur"
4. Trouvez l'élément `<img>` de la bannière
5. Regardez les styles appliqués

**Résultat attendu :**
```css
max-width: 650px;
height: auto;
display: block;
border: 0;
border-radius: 4px;
```

#### Dans le HTML Généré

1. Sélectionnez une bannière
2. Cliquez sur "Download HTML"
3. Ouvrez le fichier téléchargé
4. Cherchez la balise `<img` de la bannière

**Résultat attendu :**
```html
<img src="[URL_BANNIERE]" 
     alt="[NOM_BANNIERE]" 
     width="650" 
     style="max-width: 650px; height: auto; display: block; border: 0; border-radius: 4px;" />
```

**Vérifications :**
- ✅ Attribut HTML `width="650"`
- ✅ Style CSS `max-width: 650px`
- ✅ Border-radius: 4px

---

### Test 4: Compatibilité Outlook

#### Outlook Windows

1. Générez une signature complète (avec logo et bannière)
2. Cliquez sur "Copy Signature"
3. Ouvrez Outlook sur Windows
4. Nouveau message → Collez (Ctrl+V)

**Vérifications :**
- ✅ Logo s'affiche
- ✅ Logo a une largeur d'environ 155px
- ✅ Bannière s'affiche
- ✅ Bannière a une largeur d'environ 650px
- ✅ Les images ne sont pas déformées
- ✅ Les ratios d'aspect sont préservés

#### Outlook Mac

1. Même procédure que Windows
2. Nouveau message → Collez (Cmd+V)

**Vérifications :**
- ✅ Logo s'affiche
- ✅ Logo a une largeur d'environ 155px
- ✅ Bannière s'affiche
- ✅ Bannière a une largeur d'environ 650px
- ✅ Les images ne sont pas déformées
- ✅ Les ratios d'aspect sont préservés

---

### Test 5: Compatibilité Gmail

1. Générez une signature
2. Copiez-la
3. Ouvrez Gmail
4. Settings → See all settings → Signature
5. Collez dans l'éditeur de signature

**Vérifications :**
- ✅ Logo s'affiche
- ✅ Bannière s'affiche
- ✅ Les dimensions sont respectées

---

## 📊 CHECKLIST COMPLÈTE

### Logo Explorance

- [ ] URL Azure CDN est dans `/src/app/App.tsx`
- [ ] URL Azure CDN fonctionne (image s'affiche dans le navigateur)
- [ ] Logo s'affiche dans le preview
- [ ] Logo a `width="155"` dans le HTML généré
- [ ] Logo a `max-width: 155px` dans les styles
- [ ] Logo est cliquable (lien vers explorance.com)
- [ ] Logo se copie correctement dans Outlook Windows
- [ ] Logo se copie correctement dans Outlook Mac
- [ ] Ratio d'aspect est préservé

### Bannières

- [ ] Bannière s'affiche dans le preview quand sélectionnée
- [ ] Bannière a `width="650"` dans le HTML généré
- [ ] Bannière a `max-width: 650px` dans les styles
- [ ] Bannière a `border-radius: 4px`
- [ ] Bannière est cliquable si un lien est configuré
- [ ] Bannière se copie correctement dans Outlook Windows
- [ ] Bannière se copie correctement dans Outlook Mac
- [ ] Ratio d'aspect est préservé

### Signature Complète

- [ ] Tous les champs requis sont visibles
- [ ] Le preview met à jour en temps réel
- [ ] Le bouton "Copy Signature" fonctionne
- [ ] Le bouton "Download HTML" fonctionne
- [ ] Le HTML téléchargé est correct
- [ ] La signature copiée fonctionne dans Outlook
- [ ] La signature copiée fonctionne dans Gmail

---

## 🐛 DÉPANNAGE

### Le logo ne s'affiche pas

**Problème:** Le logo n'apparaît pas dans le preview

**Solutions :**

1. **Vérifier l'URL Azure CDN**
   ```
   https://fdendpoint-marketing-explorance-prod-01-ebh8gbhmaudgf5gd.a03.azurefd.net/web/assets/Logo_explorance_x4_944ab67640.png
   ```
   Ouvrez cette URL dans un navigateur. Si elle ne fonctionne pas, l'URL est incorrecte ou le CDN est down.

2. **Réinitialiser localStorage**
   ```javascript
   // Dans la console DevTools
   localStorage.clear();
   location.reload();
   ```

3. **Vérifier les paramètres admin**
   - Allez dans "Admin Settings"
   - Mot de passe : `eXplorance`
   - Vérifiez "Company Logo URL"
   - Si l'URL est différente, cliquez "Reset to Defaults"

### Les bannières sont trop petites (400px au lieu de 650px)

**Problème:** Les bannières s'affichent à 400px

**Solution :**

1. **Vérifiez que vous avez le dernier code**
   ```bash
   git pull origin main
   npm install
   npm run dev
   ```

2. **Vérifiez le fichier corrigé**
   ```bash
   grep "650px" src/app/utils/signatureGenerator.ts
   grep "650px" src/app/components/SignatureGenerator.tsx
   ```

3. **Hard refresh du navigateur**
   - Chrome/Edge : Ctrl+Shift+R (Windows) ou Cmd+Shift+R (Mac)
   - Firefox : Ctrl+F5 (Windows) ou Cmd+Shift+R (Mac)

### La signature ne se copie pas dans Outlook

**Problème:** Le bouton "Copy Signature" ne fonctionne pas

**Solution :**

1. **Utilisez "Download HTML" à la place**
   - Téléchargez le fichier HTML
   - Ouvrez-le dans un navigateur
   - Ctrl+A pour tout sélectionner
   - Ctrl+C pour copier
   - Collez dans Outlook

2. **Vérifiez les permissions du navigateur**
   - Le navigateur peut bloquer l'accès au presse-papiers
   - Autorisez l'accès quand demandé

---

## ✅ RÉSULTATS ATTENDUS

### Après Tous les Tests

Si tous les tests passent, vous devriez avoir :

```
✅ Logo Explorance
   - URL Azure CDN fonctionne
   - Largeur 155px (HTML et CSS)
   - S'affiche dans preview et Outlook
   - Cliquable (lien explorance.com)
   - Ratio préservé

✅ Bannières
   - Largeur 650px (HTML et CSS)
   - S'affichent dans preview et Outlook
   - Coins arrondis (4px)
   - Cliquables si lien configuré
   - Ratio préservé

✅ Signature Complète
   - Tous les éléments visibles
   - Copie fonctionne
   - Téléchargement fonctionne
   - Compatible Outlook/Gmail
```

---

## 🚀 COMMANDE RAPIDE DE TEST

```bash
# 1. Démarrer l'app
npm run dev

# 2. Ouvrir dans le navigateur
# http://localhost:5173

# 3. Tester manuellement selon la checklist ci-dessus
```

---

**Status:** ✅ PRÊT POUR LES TESTS  
**Logo:** ✅ Azure CDN - 155px  
**Bannières:** ✅ 650px  
**Documentation:** ✅ Complète  
