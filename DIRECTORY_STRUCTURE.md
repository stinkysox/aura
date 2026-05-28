# 📂 Image Directory Structure

## Ready-to-Use Directory Layout

Copy this structure when you're ready to move from Unsplash to local images:

```
🌍 PUBLIC FOLDER (for local images)
public/
├── images/
│   ├── treatments/
│   │   ├── clinical-dermatology.jpg          # 1000x667 recommended
│   │   ├── hair-treatments.jpg
│   │   ├── hair-transplantation.jpg
│   │   ├── cosmetology.jpg
│   │   ├── skin-surgeries.jpg
│   │   ├── pediatric-dermatology.jpg
│   │   ├── systemic-dermatology.jpg
│   │   └── genital-dermatology.jpg
│   │
│   ├── doctors/
│   │   └── dr-nidheesh-agarwal.jpg          # 400x400 recommended
│   │
│   ├── blog/
│   │   ├── dermatologist-in-udaipur.jpg     # 1200x600 recommended
│   │   ├── acne-treatment.jpg
│   │   └── hair-fall-treatment.jpg
│   │
│   └── gallery/
│       ├── item-1-before.jpg                # Before/after pairs
│       ├── item-1-after.jpg
│       ├── item-2-before.jpg
│       ├── item-2-after.jpg
│       ├── item-3-before.jpg
│       ├── item-3-after.jpg
│       ├── item-4-before.jpg
│       ├── item-4-after.jpg
│       ├── item-5-before.jpg
│       ├── item-5-after.jpg
│       ├── item-6-before.jpg
│       ├── item-6-after.jpg
│       ├── item-7-before.jpg
│       ├── item-7-after.jpg
│       ├── item-8-before.jpg
│       ├── item-8-after.jpg
│       ├── item-9-before.jpg
│       └── item-9-after.jpg
│
├── robots.txt (existing)
├── site.webmanifest (existing)
└── ... (other existing public files)
```

---

## Image Specifications

### Treatment Images

- **Dimensions**: 1000px wide × 667px tall (3:2 aspect ratio)
- **Format**: JPG (smaller file size)
- **Quality**: 85-90% compression
- **File size target**: 150-250 KB per image
- **Total**: ~1.5 MB for all 8

### Doctor Images

- **Dimensions**: 400px wide × 400px tall (1:1 square)
- **Format**: JPG
- **Quality**: 85-90% compression
- **File size target**: 30-50 KB
- **Total**: ~40 KB for 1

### Blog Hero Images

- **Dimensions**: 1200px wide × 600px tall (2:1 aspect ratio)
- **Format**: JPG
- **Quality**: 85-90% compression
- **File size target**: 200-300 KB per image
- **Total**: ~900 KB for 3

### Gallery Images (Before/After)

- **Dimensions**: Vary (see gallery layout notes below)
- **Format**: JPG
- **Quality**: 80% compression (before/afters can be slightly lower quality)
- **File size target**: 100-200 KB per image
- **Total**: ~3 MB for 18 images (9 pairs)

---

## Gallery Layout (Responsive Aspect Ratios)

Gallery uses different aspect ratios for visual interest. Each item's aspect ratio:

| Item | Desktop Width      | Aspect Ratio   | Size       |
| ---- | ------------------ | -------------- | ---------- |
| 1    | 7 cols (58% width) | 3:4 (portrait) | 800×1067px |
| 2    | 5 cols (42% width) | 4:5 (portrait) | 800×1000px |
| 3    | 4 cols (33% width) | 4:5 (portrait) | 800×1000px |
| 4    | 4 cols (33% width) | 4:5 (portrait) | 800×1000px |
| 5    | 4 cols (33% width) | 4:5 (portrait) | 800×1000px |
| 6    | 4 cols (33% width) | 4:5 (portrait) | 800×1000px |
| 7    | 4 cols (33% width) | 4:5 (portrait) | 800×1000px |
| 8    | 4 cols (33% width) | 4:5 (portrait) | 800×1000px |
| 9    | 4 cols (33% width) | 4:5 (portrait) | 800×1000px |

**Tip**: Use mostly portrait (4:5 or 3:4) images for gallery. One or two landscape images for visual variety.

---

## Image Optimization Steps

### Before uploading:

1. **Crop to correct aspect ratio**
   - Use Photoshop, Figma, or free tools like Pixlr

2. **Resize to recommended dimensions**
   - Don't upload huge files; resize first

3. **Compress for web**
   - Use [TinyPNG](https://tinypng.com) → 60-70% file size reduction
   - Or use [Squoosh](https://squoosh.app) for fine control

4. **Export as JPG**
   - Quality: 80-90%
   - Optimize for web

5. **Name file consistently**
   - Use format: `clinical-dermatology.jpg`
   - No spaces, lowercase, hyphens not underscores

---

## Migration Checklist

When ready to move from Unsplash to local:

### Phase 1: Prepare

- [ ] Collect/create treatment images (8 images)
- [ ] Get professional doctor photo (1 image)
- [ ] Find blog hero images (3 images)
- [ ] Gather patient before/afters (18 images, 9 pairs)
- [ ] Optimize all images for web

### Phase 2: Upload

- [ ] Create directory structure in `public/images/`
- [ ] Upload all images to correct folders
- [ ] Verify all files present

### Phase 3: Update Code

- [ ] Update `src/content/site.ts` → `assets.treatments`
- [ ] Update `src/content/site.ts` → `assets.doctors`
- [ ] Update `src/content/site.ts` → `assets.blog`
- [ ] Update `src/content/site.ts` → `assets.gallery`
- [ ] Test each page loads correctly
- [ ] Clear browser cache
- [ ] Run `npm run build`

### Phase 4: Verify

- [ ] All images load correctly
- [ ] Responsive on mobile/tablet/desktop
- [ ] Gallery hover works
- [ ] No console errors
- [ ] Performance acceptable

---

## File Naming Convention

### Treatments

```
clinical-dermatology.jpg
hair-treatments.jpg
hair-transplantation.jpg
cosmetology.jpg
skin-surgeries.jpg
pediatric-dermatology.jpg
systemic-dermatology.jpg
genital-dermatology.jpg
```

### Doctors

```
dr-nidheesh-agarwal.jpg
```

### Blog

```
dermatologist-in-udaipur.jpg
acne-treatment.jpg
hair-fall-treatment.jpg
```

### Gallery (Before/After pairs)

```
item-1-before.jpg    ←→ item-1-after.jpg
item-2-before.jpg    ←→ item-2-after.jpg
item-3-before.jpg    ←→ item-3-after.jpg
item-4-before.jpg    ←→ item-4-after.jpg
item-5-before.jpg    ←→ item-5-after.jpg
item-6-before.jpg    ←→ item-6-after.jpg
item-7-before.jpg    ←→ item-7-after.jpg
item-8-before.jpg    ←→ item-8-after.jpg
item-9-before.jpg    ←→ item-9-after.jpg
```

---

## Storage Totals

**Estimated total storage when fully populated with local images:**

- Treatments: ~1.5 MB (8 images)
- Doctors: ~40 KB (1 image)
- Blog: ~900 KB (3 images)
- Gallery: ~3 MB (18 images)
- **Total: ~5.5 MB**

_(This is very reasonable for a clinic website)_

---

## Quick Setup Commands

When files are ready, create directories:

```bash
# In: project root
mkdir -p public/images/{treatments,doctors,blog,gallery}

# Then copy your images into each folder
# Windows File Explorer: Drag and drop files
# Terminal: cp path/to/images public/images/category/
```

---

## Reference Back

Once setup, just update URLs in `src/content/site.ts`:

```typescript
// Instead of:
"clinical-dermatology": "https://images.unsplash.com/...",

// Use:
"clinical-dermatology": "/images/treatments/clinical-dermatology.jpg"
```

Done! 🎉

---

**Note**: Current setup uses Unsplash URLs. You don't need to create this directory structure until you have local images to upload.
