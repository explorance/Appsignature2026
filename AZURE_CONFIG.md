# 🚀 Configuration Azure Static Web Apps

Ce fichier contient des notes et configurations supplémentaires pour Azure Static Web Apps.

## 📝 Configuration Requise

### 1. Créer la ressource Azure

```bash
# Via Azure CLI
az login
az staticwebapp create \
  --name email-signature-generator \
  --resource-group explorance-rg \
  --source https://github.com/<org>/<repo> \
  --location "Central US" \
  --branch main \
  --app-location "/" \
  --output-location "dist" \
  --login-with-github
```

### 2. Configuration du workflow

Le workflow `.github/workflows/deploy-azure.yml` est déjà configuré avec les paramètres suivants :

```yaml
app_location: "/"         # Racine du projet
api_location: ""          # Pas d'API backend
output_location: "dist"   # Dossier de build Vite
skip_app_build: true      # On build nous-mêmes avant
```

### 3. Variables d'environnement

Aucune variable d'environnement n'est requise pour le runtime car l'application est 100% côté client avec localStorage.

Si vous avez besoin de configurer le base path :

```yaml
# Dans le workflow GitHub Actions
env:
  VITE_BASE_PATH: '/'
```

## 🔧 Paramètres Avancés

### Custom Domain

Pour configurer un domaine personnalisé :

1. Allez dans Azure Portal → votre Static Web App
2. Settings → Custom domains
3. Ajoutez votre domaine
4. Configurez les enregistrements DNS :
   - Type: CNAME
   - Name: www (ou votre sous-domaine)
   - Value: <your-static-app>.azurestaticapps.net

### Headers HTTP Personnalisés

Créez un fichier `staticwebapp.config.json` à la racine :

```json
{
  "globalHeaders": {
    "X-Frame-Options": "DENY",
    "X-Content-Type-Options": "nosniff",
    "X-XSS-Protection": "1; mode=block"
  },
  "routes": [
    {
      "route": "/*",
      "headers": {
        "Cache-Control": "public, max-age=31536000, immutable"
      }
    },
    {
      "route": "/index.html",
      "headers": {
        "Cache-Control": "no-cache"
      }
    }
  ],
  "navigationFallback": {
    "rewrite": "/index.html",
    "exclude": ["/assets/*"]
  }
}
```

### Environnements de Preview

Azure Static Web Apps crée automatiquement des environnements de preview pour chaque PR.

URL format : `https://<unique-id>.<location>.azurestaticapps.net`

## 📊 Monitoring

### Logs

```bash
# Voir les logs de déploiement
az staticwebapp logs show --name email-signature-generator --resource-group explorance-rg

# Streamer les logs en temps réel
az staticwebapp logs stream --name email-signature-generator --resource-group explorance-rg
```

### Métriques

Dans Azure Portal :
- Monitoring → Metrics
- Métriques disponibles :
  - Requests
  - Data In/Out
  - Response Time
  - Status Codes

## 🔒 Sécurité

### Access Control

Par défaut, l'application est publique. Pour restreindre l'accès :

```json
// Dans staticwebapp.config.json
{
  "routes": [
    {
      "route": "/admin",
      "allowedRoles": ["authenticated"]
    }
  ]
}
```

Note : L'authentification actuelle utilise localStorage côté client.

### HTTPS

- ✅ HTTPS est activé automatiquement
- ✅ Certificat SSL gratuit inclus
- ✅ Redirection HTTP → HTTPS automatique

## 💰 Coûts

### Free Tier Inclut

- ✅ 100 GB de bande passante/mois
- ✅ 0.5 GB de stockage
- ✅ Certificats SSL gratuits
- ✅ Environnements de staging illimités

### Si dépassement

- Bande passante supplémentaire : ~$0.20/GB
- Stockage supplémentaire : ~$0.20/GB/mois

## 🔄 Mises à Jour

### Déploiement Manuel

```bash
# Via Azure CLI
az staticwebapp build deploy \
  --name email-signature-generator \
  --resource-group explorance-rg \
  --source-path ./dist
```

### Rollback

```bash
# Lister les déploiements
az staticwebapp deployment list \
  --name email-signature-generator \
  --resource-group explorance-rg

# Rollback vers un déploiement spécifique
az staticwebapp deployment show \
  --name email-signature-generator \
  --resource-group explorance-rg \
  --deployment-id <deployment-id>
```

## 🧪 Testing

### Test local avant déploiement

```bash
# Build
pnpm run build

# Test avec Azure Static Web Apps CLI (optionnel)
npm install -g @azure/static-web-apps-cli
swa start dist
```

### Validation de l'environnement

```bash
# Vérifier la configuration
az staticwebapp show \
  --name email-signature-generator \
  --resource-group explorance-rg
```

## 📞 Support

### Problèmes Communs

**Le déploiement échoue**
1. Vérifier que le token Azure est valide
2. S'assurer que le build réussit localement
3. Vérifier les logs dans GitHub Actions

**L'application ne se charge pas**
1. Vérifier le dossier output (`dist`)
2. S'assurer que `index.html` existe dans dist/
3. Vérifier la console du navigateur pour les erreurs

**Les assets ne se chargent pas**
1. Vérifier le `base` path dans `vite.config.ts`
2. S'assurer que les chemins sont relatifs
3. Vérifier la configuration de routing

### Ressources

- [Azure Static Web Apps Docs](https://docs.microsoft.com/azure/static-web-apps/)
- [Pricing Calculator](https://azure.microsoft.com/pricing/calculator/)
- [Support Azure](https://azure.microsoft.com/support/)

---

**Note** : Ce fichier est pour référence uniquement et n'affecte pas le déploiement.
