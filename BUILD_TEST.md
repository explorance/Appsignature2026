# 🧪 Test de Build - Vérification Finale

## Commandes de Test

```bash
# 1. Nettoyer les anciennes installations
rm -rf node_modules dist

# 2. Installer les dépendances
npm install

# 3. Tester le build
npm run build

# 4. Vérifier les fichiers générés
ls -la dist/

# 5. Tester en local
npm run preview
# Ouvrir http://localhost:4173
```

## ✅ Checklist de Vérification

### Build
- [ ] `npm install` s'exécute sans erreur
- [ ] `npm run build` s'exécute sans erreur
- [ ] Le dossier `dist/` est créé
- [ ] Le fichier `dist/index.html` existe
- [ ] Les assets sont dans `dist/assets/`

### Application
- [ ] L'application se charge sans erreur
- [ ] Le logo Azure CDN s'affiche dans l'aperçu
- [ ] Les champs de formulaire fonctionnent
- [ ] La sélection de bureau fonctionne
- [ ] La sélection de bannière fonctionne
- [ ] La sélection de langue de disclaimer fonctionne

### Signature
- [ ] Le bouton "Copy Signature" fonctionne
- [ ] Le bouton "Download HTML" fonctionne
- [ ] La signature copiée contient le logo Azure CDN
- [ ] La signature téléchargée contient le logo Azure CDN

### Admin Panel
- [ ] Le mot de passe "eXplorance" fonctionne
- [ ] Les bureaux peuvent être ajoutés/modifiés/supprimés
- [ ] Les bannières peuvent être ajoutées/modifiées/supprimées
- [ ] Les champs de formulaire peuvent être configurés
- [ ] Le logo Azure CDN peut être modifié
- [ ] Le bouton "Save" enregistre les modifications

### Logo Azure CDN
- [ ] Le logo s'affiche dans l'aperçu de la signature
- [ ] Le logo s'affiche dans le panneau admin
- [ ] Le logo est dans la signature HTML générée
- [ ] L'URL du logo est correcte partout

## 🔍 Vérification du Logo dans le HTML Généré

1. Remplir le formulaire
2. Cliquer sur "Download HTML"
3. Ouvrir le fichier HTML téléchargé dans un éditeur de texte
4. Vérifier que l'URL du logo est :
   ```
   https://fdendpoint-marketing-explorance-prod-01-ebh8gbhmaudgf5gd.a03.azurefd.net/web/assets/Logo_explorance_x4_944ab67640.png
   ```
5. Vérifier que la balise img a :
   ```html
   <img 
     src="https://fdendpoint-marketing-explorance-prod-01-ebh8gbhmaudgf5gd.a03.azurefd.net/web/assets/Logo_explorance_x4_944ab67640.png" 
     alt="Company Logo" 
     width="155" 
     style="max-width: 155px; height: auto; display: block; border: 0;" 
   />
   ```

## 🐛 Dépannage

### Erreur : Module not found

```bash
# Supprimer node_modules et réinstaller
rm -rf node_modules package-lock.json
npm install
```

### Erreur : Build failed

```bash
# Vérifier les dépendances
npm audit
npm audit fix

# Nettoyer le cache
npm cache clean --force
```

### Le logo ne s'affiche pas

1. Vérifier que l'URL Azure CDN est accessible :
   ```bash
   curl -I https://fdendpoint-marketing-explorance-prod-01-ebh8gbhmaudgf5gd.a03.azurefd.net/web/assets/Logo_explorance_x4_944ab67640.png
   ```
   
2. Ouvrir l'URL dans un navigateur pour voir si l'image s'affiche

3. Vérifier les DevTools du navigateur pour voir s'il y a des erreurs CORS

## 📊 Taille du Build

Le build devrait être relativement léger :

```bash
# Voir la taille des fichiers générés
du -sh dist/
du -sh dist/assets/*
```

Build attendu :
- **Total** : ~500KB - 1MB (gzipped)
- **JavaScript** : ~200-400KB
- **CSS** : ~50-100KB
- **HTML** : ~2-5KB

## 🚀 Prêt pour le Déploiement

Si tous les tests passent, l'application est prête pour :

1. **Git Push**
   ```bash
   git add .
   git commit -m "fix: Configure Azure CDN logo and fix deployment issues"
   git push origin main
   ```

2. **Déploiement Vercel**
   - Vercel détectera automatiquement le push
   - Le build sera lancé automatiquement
   - Le déploiement sera disponible en quelques minutes

## 📝 Notes Importantes

1. **Logo Azure CDN** : Le logo est hébergé sur Azure CDN, pas sur GitHub. C'est normal et c'est ce que nous voulons.

2. **Pas de Supabase** : Les fichiers Supabase sont exclus du build. L'application utilise uniquement localStorage.

3. **Frontend-Only** : Aucune fonction serverless n'est déployée. L'application est 100% frontend.

4. **Outlook Compatibility** : Le logo utilise un attribut HTML `width="155"` pour un rendu identique sur tous les clients email.

---

**Status** : ✅ Prêt pour les tests !
