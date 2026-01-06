# Testing Guide - Email Signature Generator

Complete testing guide to verify all functionality works correctly before and after deployment.

---

## 🧪 Local Testing (Before Deployment)

### Prerequisites
```bash
# Verify versions
node --version   # Should be v20.x or higher
npm --version    # Should be 10.x or higher
```

### Step 1: Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Expected output:
```
VITE v6.3.5  ready in XXX ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

### Step 2: Basic Functionality Tests

#### Test 2.1: App Loads ✅
1. Open http://localhost:5173
2. **Expected:** App loads without errors
3. **Expected:** Explorance logo visible in header
4. **Expected:** Two tabs: "Generate Signature" and "Admin Settings"
5. **Check console:** No errors (F12 → Console)

#### Test 2.2: Signature Generator Tab ✅
1. Click "Generate Signature" tab
2. **Expected:** Form with fields:
   - Full Name
   - Job Title
   - Email Address
   - Office Location (dropdown)
   - Cell Phone Number
   - LinkedIn Profile URL
   - Company Website
   - Disclaimer Language (English/French/Both)
   - Email Banner (optional)
3. **Expected:** Live preview on right side

#### Test 2.3: Form Validation ✅
1. Leave required fields empty
2. Try to copy signature
3. **Expected:** Validation errors for required fields
4. Fill in required fields
5. **Expected:** Errors disappear

#### Test 2.4: Live Preview ✅
1. Type in "Full Name" field
2. **Expected:** Name appears immediately in preview
3. Type in "Job Title" field
4. **Expected:** Title appears below name
5. Select an office
6. **Expected:** Address and phone appear
7. Type in email
8. **Expected:** Email appears as link
9. Type in LinkedIn URL
10. **Expected:** LinkedIn link appears

#### Test 2.5: Disclaimer Language ✅
1. Select "English only"
2. **Expected:** English disclaimer in preview
3. Select "French only"
4. **Expected:** French disclaimer in preview
5. Select "Both"
6. **Expected:** Both disclaimers in preview

#### Test 2.6: Banner Selection ✅
1. Expand "Explorance World 2026" category
2. Select a banner (e.g., "FR (1)")
3. **Expected:** Banner image appears in preview
4. Select different banner
5. **Expected:** Preview updates
6. Deselect banner
7. **Expected:** Banner disappears from preview

#### Test 2.7: Copy to Clipboard ✅
1. Fill out all required fields
2. Click "Copy to Clipboard" button
3. **Expected:** Success message appears
4. Open any text editor
5. Paste (Ctrl+V / Cmd+V)
6. **Expected:** HTML signature pasted
7. **Verify:** All entered data present

#### Test 2.8: Download HTML ✅
1. Fill out all required fields
2. Click "Download HTML" button
3. **Expected:** File downloads (signature.html)
4. Open downloaded file in browser
5. **Expected:** Signature displays correctly
6. **Verify:** All data present and formatted

### Step 3: Admin Panel Tests

#### Test 3.1: Password Protection ✅
1. Click "Admin Settings" tab
2. **Expected:** Password dialog appears
3. Enter wrong password (e.g., "test")
4. Click "Access Admin"
5. **Expected:** Error message "Invalid password"
6. Enter correct password: `eXplorance`
7. Click "Access Admin"
8. **Expected:** Admin panel opens

#### Test 3.2: Office Management ✅
1. Access admin panel
2. **Expected:** List of offices (Montréal, New York)
3. Click "Add Office" button
4. Fill in:
   - Name: "Toronto"
   - Address: "123 Test St, Toronto, ON"
   - Phone: "+1.416.555.1234"
5. Click "Add Office"
6. **Expected:** Toronto appears in list
7. Click edit on Toronto
8. Change phone to "+1.416.555.9999"
9. Click save
10. **Expected:** Phone updated
11. Click delete on Toronto
12. **Expected:** Toronto removed from list

#### Test 3.3: Banner Category Management ✅
1. In admin panel, find banner section
2. Click "Add Category"
3. Enter event name: "Test Event 2026"
4. Click "Add Category"
5. **Expected:** New category appears
6. **Expected:** Can add banners to this category

#### Test 3.4: Banner Management ✅
1. Select "Test Event 2026" category
2. Click "Add Banner"
3. Fill in:
   - Name: "Test Banner"
   - Image URL: "https://via.placeholder.com/600x200"
4. Click "Add Banner"
5. **Expected:** Banner appears in list
6. Click delete on banner
7. **Expected:** Banner removed
8. Delete "Test Event 2026" category
9. **Expected:** Category removed

#### Test 3.5: Settings Persistence ✅
1. Make changes in admin panel (add office, etc.)
2. Click "Save Settings"
3. **Expected:** Success message
4. Click "Generate Signature" tab
5. **Expected:** New office appears in dropdown
6. **Refresh the page** (F5)
7. Go back to Admin Settings
8. Enter password: `eXplorance`
9. **Expected:** Your changes are still there

#### Test 3.6: Company Logo & Website ✅
1. In admin panel, scroll to "Company Settings"
2. Change logo URL to: "https://via.placeholder.com/150x40"
3. Change website to: "https://example.com"
4. Click "Save Settings"
5. Go to "Generate Signature" tab
6. **Expected:** New logo in preview
7. **Expected:** New website appears if filled

#### Test 3.7: Disclaimer Text ✅
1. In admin panel, find "Disclaimer Settings"
2. Change English disclaimer to: "Test English Disclaimer"
3. Change French disclaimer to: "Test French Disclaimer"
4. Click "Save Settings"
5. Go to "Generate Signature" tab
6. Select "English only"
7. **Expected:** "Test English Disclaimer" in preview
8. Select "French only"
9. **Expected:** "Test French Disclaimer" in preview

#### Test 3.8: Field Visibility ✅
1. In admin panel, find "Form Fields"
2. Toggle off "Cell Phone Number"
3. Click "Save Settings"
4. Go to "Generate Signature" tab
5. **Expected:** Cell phone field hidden
6. Go back to Admin
7. Toggle on "Cell Phone Number"
8. Click "Save Settings"
9. **Expected:** Cell phone field visible again

### Step 4: LocalStorage Tests

#### Test 4.1: Data Persistence ✅
1. Fill out signature form completely
2. Refresh page (F5)
3. **Expected:** All data cleared (form is empty)
   - ℹ️ Form data is NOT persisted, only admin settings

#### Test 4.2: Admin Settings Persistence ✅
1. Go to Admin Settings
2. Add a new office
3. Save settings
4. Close browser completely
5. Open browser again
6. Go to app URL
7. Open Admin Settings
8. **Expected:** New office still there

#### Test 4.3: Default Settings Fallback ✅
1. Open browser DevTools (F12)
2. Go to Application → Local Storage
3. Delete "emailSignatureSettings" key
4. Refresh page
5. **Expected:** App loads with default settings
6. **Expected:** Montréal and New York offices present

### Step 5: Browser Compatibility Tests

Test in multiple browsers:

#### Chrome ✅
1. Open in Chrome
2. Test all features
3. Check console for errors
4. **Expected:** Everything works

#### Firefox ✅
1. Open in Firefox
2. Test all features
3. Check console for errors
4. **Expected:** Everything works

#### Safari ✅ (if available)
1. Open in Safari
2. Test all features
3. Check console for errors
4. **Expected:** Everything works

#### Edge ✅
1. Open in Edge
2. Test all features
3. Check console for errors
4. **Expected:** Everything works

### Step 6: Responsive Design Tests

#### Desktop (1920x1080) ✅
1. Full screen on large monitor
2. **Expected:** Form and preview side-by-side
3. **Expected:** All elements properly spaced

#### Tablet (768x1024) ✅
1. Resize browser to 768px width
2. **Expected:** Responsive layout
3. **Expected:** All features accessible

#### Mobile (375x667) ✅
1. Resize browser to 375px width
2. **Expected:** Stacked layout (form above preview)
3. **Expected:** Buttons accessible
4. **Expected:** Forms usable

### Step 7: Production Build Test

```bash
# Build for production
npm run build
```

Expected output:
```
✓ XXX modules transformed.
dist/index.html                   X.XX kB
dist/assets/index-XXXXXXXX.css    X.XX kB
dist/assets/index-XXXXXXXX.js     XXX.XX kB
✓ built in XXXms
```

```bash
# Preview production build
npm run preview
```

1. Open http://localhost:4173
2. Test all features again
3. Check for any errors
4. **Expected:** Everything works identically to dev

---

## 🌐 Post-Deployment Testing

After deploying to GitHub Pages, test the live site:

### Test 1: URL Access ✅
1. Visit: `https://YOUR-USERNAME.github.io/YOUR-REPO/`
2. **Expected:** App loads
3. **Expected:** No 404 errors

### Test 2: Static Assets ✅
1. Open DevTools → Network tab
2. Refresh page
3. **Expected:** All assets load (200 status)
4. **Expected:** No 404 errors
5. **Expected:** Logo displays
6. **Expected:** Favicon displays

### Test 3: Full Functionality ✅
Repeat all tests from local testing:
1. Signature generation
2. Live preview
3. Copy/Download
4. Admin panel
5. Settings persistence
6. All features

### Test 4: Cross-Device Testing ✅

#### Mobile Device ✅
1. Open on actual phone
2. Test touch interactions
3. Test form inputs
4. Test copy functionality
5. **Expected:** All works smoothly

#### Tablet Device ✅
1. Open on actual tablet
2. Test all features
3. **Expected:** Responsive layout

#### Desktop ✅
1. Open on desktop
2. Test all features
3. **Expected:** Full functionality

### Test 5: Email Client Testing ✅

Generate a signature and test in email clients:

#### Outlook Desktop ✅
1. Generate signature
2. Download HTML
3. Open Outlook
4. File → Options → Mail → Signatures
5. Paste signature HTML
6. **Expected:** Signature displays correctly
7. Send test email to yourself
8. **Expected:** Signature looks good

#### Outlook Web ✅
1. Generate signature
2. Copy to clipboard
3. Open Outlook.com
4. Settings → View all → Compose and reply
5. Paste signature
6. **Expected:** Signature displays correctly

#### Gmail ✅
1. Generate signature
2. Copy to clipboard
3. Open Gmail
4. Settings → See all settings → General
5. Scroll to "Signature"
6. Paste signature
7. **Expected:** Signature displays correctly

#### Apple Mail ✅
1. Generate signature
2. Copy to clipboard
3. Open Mail
4. Preferences → Signatures
5. Create new signature
6. Paste HTML
7. **Expected:** Signature displays correctly

### Test 6: Performance Testing ✅

Use Lighthouse (Chrome DevTools):

1. Open DevTools (F12)
2. Go to "Lighthouse" tab
3. Select "Desktop"
4. Click "Analyze page load"
5. **Expected Results:**
   - Performance: > 90
   - Accessibility: > 90
   - Best Practices: > 90
   - SEO: > 80

### Test 7: Security Testing ✅

1. Check HTTPS: URL starts with `https://`
2. Check console: No mixed content warnings
3. Check headers: Secure headers present
4. **Expected:** All green, no security warnings

---

## 📊 Test Results Template

Use this to track your testing:

```
## Test Results - [Date]

### Environment
- [ ] Local (http://localhost:5173)
- [ ] Production (https://username.github.io/repo)

### Browser Tests
- [ ] Chrome (version: ___)
- [ ] Firefox (version: ___)
- [ ] Safari (version: ___)
- [ ] Edge (version: ___)

### Feature Tests
- [ ] Signature generation
- [ ] Live preview
- [ ] Copy to clipboard
- [ ] Download HTML
- [ ] Admin panel access
- [ ] Office management
- [ ] Banner management
- [ ] Settings persistence

### Device Tests
- [ ] Desktop (1920x1080)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667)
- [ ] Actual phone
- [ ] Actual tablet

### Email Client Tests
- [ ] Outlook Desktop
- [ ] Outlook Web
- [ ] Gmail
- [ ] Apple Mail
- [ ] Thunderbird

### Performance
- [ ] Lighthouse Score: ___ / 100
- [ ] Load Time: ___ seconds
- [ ] No console errors
- [ ] No console warnings

### Issues Found
1. ___________________
2. ___________________
3. ___________________

### Notes
___________________
___________________
___________________

Tested by: ___________
Date: _______________
Status: ✅ PASS / ❌ FAIL
```

---

## 🐛 Common Issues & Solutions

### Issue: Blank page after deployment
**Solution:** Check vite.config.ts `base` path matches repo structure

### Issue: 404 for assets
**Solution:** Verify base path, check build output in dist/

### Issue: Settings don't persist
**Solution:** Check localStorage enabled, try incognito mode

### Issue: Copy to clipboard doesn't work
**Solution:** Ensure HTTPS (required for clipboard API)

### Issue: Admin password doesn't work
**Solution:** Verify password is "eXplorance" (case-sensitive)

---

## ✅ Sign-Off Checklist

Before marking complete:
- [ ] All local tests passed
- [ ] Production build successful
- [ ] Deployed to GitHub Pages
- [ ] All post-deployment tests passed
- [ ] Tested in 3+ browsers
- [ ] Tested on mobile device
- [ ] Tested in 2+ email clients
- [ ] Lighthouse score > 90
- [ ] No console errors
- [ ] Documentation reviewed

**Tester:** _______________  
**Date:** _______________  
**Status:** ✅ APPROVED FOR PRODUCTION

---

## 📝 Feedback & Improvements

After testing, document:
1. What worked well
2. What could be improved
3. Bugs found
4. Feature requests
5. User experience notes

---

**Happy Testing! 🧪**
