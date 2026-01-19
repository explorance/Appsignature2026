# 🔄 Banner Data Refresh - Instructions

**Status**: ✅ Data refreshed to version 2.2

---

## ✅ What Was Done

The application has been updated to **version 2.2** with:
- **All 9 banners** with new Azure Blob Storage URLs
- **4 categories**: BlueX, Explorance World 2026, MLY, Responsible AI
- **Automatic refresh** on next page load

---

## 🚀 How to See the Banners

### Option 1: Refresh Your Browser (Recommended)

Simply **refresh the page** (F5 or Ctrl/Cmd + R) and the new banners will load automatically.

The app will detect the version change and:
1. Clear old data from localStorage
2. Load the new banner data
3. Show a success notification: "Banners updated! New categories and images are now available."

### Option 2: Hard Refresh (If Option 1 Doesn't Work)

If a simple refresh doesn't work, do a **hard refresh**:
- **Windows/Linux**: `Ctrl + Shift + R` or `Ctrl + F5`
- **Mac**: `Cmd + Shift + R`

### Option 3: Manually Clear localStorage (Last Resort)

If you still don't see the banners:

1. Open **Developer Console** (F12)
2. Go to **Console** tab
3. Type this command and press Enter:
   ```javascript
   localStorage.clear();
   ```
4. Refresh the page (F5)

---

## ✅ Verify Banners Are Working

After refreshing, verify the banners:

1. Go to **"Generate Signature"** tab
2. Scroll to **"Email Banner (Optional)"** section
3. Click the dropdown - you should see:
   - ✅ No banner
   - ✅ BlueX (2 banners available)
   - ✅ Explorance World 2026 (4 banners available)
   - ✅ MLY (1 banner available)
   - ✅ Responsible AI (2 banners available)

4. Select any category
5. You should see banner thumbnails displayed in a grid

---

## 📊 Complete Banner List

### BlueX (2 banners)
- Powerful Survey
- Feedback Creator

### Explorance World 2026 (4 banners)
- EN (1)
- EN (2)
- FR (1)
- FR (2)

### MLY (1 banner)
- AI-Powered

### Responsible AI (2 banners)
- Version 1
- Version 2

---

## 🐛 Troubleshooting

### Problem: "I still don't see the banners"

**Solution 1**: Check browser console (F12) for errors
- Look for red error messages
- Check Network tab for failed image requests

**Solution 2**: Verify banner URLs are accessible
- Open one of the URLs directly in a new tab:
  ```
  https://stmarketingwebprod01.blob.core.windows.net/web/assets/Blue_X_Webinar_powerful_Survey_d6a9d8f25c.png
  ```
- If the image doesn't load, there may be a CORS or access issue

**Solution 3**: Check your network/firewall
- Some corporate firewalls block Azure Blob Storage
- Try on a different network or disable VPN

### Problem: "I see old banner names/categories"

This means localStorage still has old data.

**Solution**: Manually clear localStorage:
1. Press F12
2. Go to Application tab (Chrome) or Storage tab (Firefox)
3. Click "Local Storage" → your domain
4. Right-click → "Clear"
5. Refresh page (F5)

### Problem: "Images show as broken"

This could be:
- **CORS issue**: Azure Blob Storage not configured for cross-origin requests
- **Access issue**: URLs are not publicly accessible
- **Network issue**: Firewall blocking Azure Blob Storage

**Solution**: 
- Test URLs directly in browser
- Check Azure Blob Storage settings
- Contact IT if behind corporate firewall

---

## 📋 Version History

| Version | Date | Changes |
|---------|------|---------|
| 2.0 | Jan 2026 | Initial frontend-only version |
| 2.1 | Jan 19, 2026 | First banner update |
| 2.2 | Jan 19, 2026 | **Current** - All banners refreshed |

---

## 🎯 Quick Test

**30-second verification**:

1. Refresh page (F5)
2. See success message: "Banners updated!"
3. Go to "Generate Signature"
4. Select "Explorance World 2026"
5. See 4 banners: EN (1), EN (2), FR (1), FR (2)
6. ✅ Done!

---

## 📞 Still Having Issues?

If you've tried all the above and still can't see banners:

1. **Check console logs** (F12 → Console)
2. **Check network requests** (F12 → Network)
3. **Clear all browser data** for this site
4. **Try incognito/private browsing mode**
5. **Try a different browser**

The banners are definitely in the code at version 2.2! 🎉

---

**Last Updated**: January 19, 2026  
**Current Version**: 2.2  
**Status**: ✅ Ready
