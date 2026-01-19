# 🧪 Test Image Sizes - Quick Guide

**What to test**: Logo (100px max) + Banner (400px max)

---

## ⚡ Quick Test (2 minutes)

### 1. Test in App Preview

```
✅ Steps:
1. Refresh browser (F5)
2. Fill in name: "Test User"
3. Check logo in preview
   → Should be max 100px wide
4. Select any banner
5. Check banner in preview
   → Should be max 400px wide
```

**Expected Result**: Both images look proportional, no distortion ✅

---

### 2. Test Copy to Outlook

```
✅ Steps:
1. Fill complete signature form
2. Click "Copy Signature"
3. Open Outlook
4. Paste (Ctrl+V)
5. Inspect logo size
   → Should be max 100px wide
6. Inspect banner size
   → Should be max 400px wide
```

**Expected Result**: Sizes maintained in Outlook ✅

---

## 🔍 Detailed Verification

### Logo Size Check

**Method 1: Visual Inspection**
- Logo should look reasonably sized
- Not too large (was sometimes stretched before)
- Not distorted

**Method 2: Browser Inspect**
1. Right-click on logo → Inspect
2. Check computed width
3. Should be ≤ 100px ✅

**Method 3: Measure in Outlook**
1. After pasting in Outlook
2. Click on logo
3. Check size handles
4. Width should be ≤ 100px ✅

### Banner Size Check

**Method 1: Visual Inspection**
- Banner should be compact (not full-width)
- Approximately 400px wide
- Maintains 3:1 aspect ratio (roughly)

**Method 2: Browser Inspect**
1. Right-click on banner → Inspect
2. Check computed width
3. Should be ≤ 400px ✅

**Method 3: Measure in Outlook**
1. After pasting in Outlook
2. Click on banner
3. Check size handles
4. Width should be ≤ 400px ✅

---

## 📋 Test Checklist

### Preview Test
- [ ] Logo max 100px wide
- [ ] Logo maintains proportions
- [ ] Banner max 400px wide
- [ ] Banner maintains proportions
- [ ] No image distortion
- [ ] Images load correctly

### Copy Test (Outlook)
- [ ] Logo copied at correct size
- [ ] Banner copied at correct size
- [ ] No layout breaking
- [ ] Images are clickable
- [ ] Logo links to explorance.com
- [ ] Banner links work (if configured)

### Download Test
- [ ] Downloaded HTML has correct sizes
- [ ] Logo: max-width: 100px
- [ ] Banner: max-width: 400px
- [ ] Both have height: auto
- [ ] Images display correctly in browser

---

## 🎯 Edge Cases to Test

### Small Images
**Scenario**: Image smaller than max-width

**Test**:
- Logo that's 60px wide
- Should display at 60px (natural size) ✅

**Test**:
- Banner that's 300px wide
- Should display at 300px (natural size) ✅

### Large Images
**Scenario**: Image larger than max-width

**Test**:
- Logo that's 200px wide
- Should scale down to 100px ✅

**Test**:
- Banner that's 800px wide
- Should scale down to 400px ✅

### Different Aspect Ratios
**Scenario**: Various width/height proportions

**Test**:
- Wide logo (200×50) → Should be 100×25 ✅
- Square logo (100×100) → Should be 100×100 ✅
- Tall logo (50×100) → Should be 50×100 ✅

**Test**:
- Wide banner (900×300) → Should be 400×133 ✅
- Less wide banner (600×300) → Should be 400×200 ✅

---

## 🖥️ Email Client Tests

Test in these email clients:

### Outlook for Windows
- [ ] Logo ≤ 100px
- [ ] Banner ≤ 400px
- [ ] No distortion
- [ ] Links work

### Outlook for Mac
- [ ] Logo ≤ 100px
- [ ] Banner ≤ 400px
- [ ] No distortion
- [ ] Links work

### Outlook Web App
- [ ] Logo ≤ 100px
- [ ] Banner ≤ 400px
- [ ] No distortion
- [ ] Links work

### Gmail
- [ ] Logo ≤ 100px
- [ ] Banner ≤ 400px
- [ ] No distortion
- [ ] Links work

### Apple Mail
- [ ] Logo ≤ 100px
- [ ] Banner ≤ 400px
- [ ] No distortion
- [ ] Links work

---

## 🐛 Common Issues

### Issue: Images appear distorted

**Check**:
1. Browser cache cleared?
2. Using latest code (v2.2)?
3. Email client overriding styles?

**Solution**:
- Refresh browser (F5)
- Clear localStorage
- Try Download HTML method

### Issue: Logo too small

**This is normal if**:
- Original logo is smaller than 100px
- Logo displays at natural size ✅

**Not an issue unless**:
- Logo is larger than 100px but still displays small
- Then check browser/email client CSS

### Issue: Banner too small

**This is normal if**:
- Original banner is smaller than 400px
- Banner displays at natural size ✅

**Not an issue unless**:
- Banner is larger than 400px but still displays small
- Then check browser/email client CSS

---

## ✅ Acceptance Criteria

All of these must be TRUE:

**Logo**:
- ✅ Max-width is 100px
- ✅ Height adjusts automatically
- ✅ Maintains aspect ratio
- ✅ No distortion
- ✅ Works in all tested email clients

**Banner**:
- ✅ Max-width is 400px
- ✅ Height adjusts automatically
- ✅ Maintains aspect ratio
- ✅ No distortion
- ✅ Works in all tested email clients

**General**:
- ✅ Preview matches final output
- ✅ Copy to clipboard works
- ✅ Download HTML works
- ✅ No layout breaking
- ✅ Professional appearance

---

## 📊 Test Results Template

```
Date: __________
Tester: __________
Browser: __________

PREVIEW TEST
[ ] Logo max 100px wide
[ ] Banner max 400px wide
[ ] No distortion
Result: PASS / FAIL

OUTLOOK TEST
[ ] Logo correct size
[ ] Banner correct size
[ ] Links work
Result: PASS / FAIL

DOWNLOAD TEST
[ ] HTML has correct CSS
[ ] Images display correctly
Result: PASS / FAIL

OVERALL: PASS / FAIL

Notes:
_________________________________
_________________________________
```

---

## 🎉 Quick Verification

**30-Second Check**:

1. Refresh browser ✅
2. Fill in name ✅
3. Logo looks ~100px ✅
4. Select banner ✅
5. Banner looks ~400px ✅
6. Copy to Outlook ✅
7. Paste and verify ✅
8. Done! ✅

---

**Status**: Ready for testing  
**Version**: 2.2  
**Estimated Test Time**: 5-10 minutes for full test

**Start testing now!** 🚀
