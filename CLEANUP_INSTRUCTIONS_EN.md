# 🧹 Final Cleanup Required - Manual Action

## ⚠️ FILES TO DELETE MANUALLY

The following files are **remnants of the old infrastructure** and must be deleted manually as they cannot be automatically removed:

### 📁 Supabase files to delete:

```bash
# Delete the entire folder
rm -rf supabase/
```

**Content to remove:**
- `/supabase/functions/server/index.tsx` - Inactive Supabase Edge function (placeholder)
- `/supabase/functions/server/kv_store.tsx` - Old Supabase storage system

### 📁 Utils files to delete:

```bash
# Delete the entire folder
rm -rf utils/
```

**Content to remove:**
- `/utils/supabase/info.tsx` - Supabase information (placeholder)

---

## ✅ Temporary Solution Applied

Pending manual deletion, I've created a **`.vercelignore`** file that **excludes these files from Vercel deployment**.

This means:
- ✅ Vercel will **NOT include** these files during deployment
- ✅ Your application will work correctly on Vercel
- ⚠️ These files will remain in your Git repository until manually deleted

---

## 📋 Cleanup Commands

### Option 1: Quick deletion (recommended)

```bash
# In terminal, at project root
rm -rf supabase/ utils/
```

### Option 2: Via your IDE

1. Open your project in VS Code / your editor
2. Locate the following folders:
   - `supabase/`
   - `utils/`
3. Right-click → **Delete**

---

## ⚠️ Remaining Azure Dependencies

Although you've migrated to a 100% frontend stack, your code still contains **Azure Blob Storage URLs**:

### 📍 Location: `/src/app/App.tsx`

**Lines 48-50** - Event banners:
```typescript
{ id: "1-1", name: "FR (1)", imageUrl: "https://stonlinehelpprod01.blob.core.windows.net/web/assets/FR_ew_Explorance_MAIL-1.png" }
{ id: "1-2", name: "FR (2)", imageUrl: "https://stonlinehelpprod01.blob.core.windows.net/web/assets/FR_ew_Explorance_MAIL.png" }
{ id: "1-3", name: "EN", imageUrl: "https://stonlinehelpprod01.blob.core.windows.net/web/assets/EN_ew_Explorance_MAIL-1.png" }
```

**Line 59** - Company logo:
```typescript
companyLogoUrl: "https://fdendpoint-marketing-explorance-prod-01-ebh8gbhmaudgf5gd.a03.azurefd.net/web/assets/Logo_explorance_2026_d6e2f94610.png"
```

### 🔧 Impact:

- ✅ These URLs will continue to work as long as Azure resources remain active
- ⚠️ If Azure Front Door or Blob Storage are deactivated, images won't load
- 💡 **Recommendation**: Migrate these assets to a public CDN (Cloudinary, imgix) or host them in `/public/assets/`

---

## 📊 Current Project Status

### ✅ What's ready:

- ✅ 100% frontend stack (localStorage only)
- ✅ Optimal Vercel configuration (`vercel.json`)
- ✅ Residual files excluded via `.vercelignore`
- ✅ Functional and deployable application

### ⚠️ Action required:

- ⚠️ Manually delete `supabase/` and `utils/` folders
- 💡 (Optional) Migrate Azure assets to a more sustainable solution

---

## 🚀 Next Steps

### 1. Clean up residual files

```bash
rm -rf supabase/ utils/
```

### 2. Verify everything works locally

```bash
npm run dev
```

### 3. Commit and push to GitHub

```bash
git add .
git commit -m "🧹 Final cleanup: remove residual Supabase/Azure infrastructure"
git push origin main
```

### 4. Deploy to Vercel

Vercel will automatically detect changes and deploy your application.

---

## 📞 Support

If you encounter issues after this cleanup, check:

1. **Local build**: `npm run build` should succeed without errors
2. **Browser console**: No 404 errors for Azure images
3. **localStorage**: Data is properly persisted locally

---

**Created**: January 19, 2026  
**App Version**: 2.1 (100% Frontend - Vercel Ready)
