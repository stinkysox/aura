# AURA Clinic — Image Management Guide

## Overview

All site images are now centralized in **`src/content/site.ts`** and **`src/content/gallery.ts`**. This makes it incredibly easy to update or swap images site-wide without touching component code.

## Current Image Setup

### 1. **Treatment Images**

**File**: `src/content/site.ts` (lines: `assets.treatments`)

Currently using Unsplash placeholder images for each treatment:

- Clinical Dermatology
- Hair Treatments
- Hair Transplantation
- Cosmetology
- Skin Surgeries
- Pediatric Dermatology
- Systemic Dermatology
- Genital Dermatology

**Used in**:

- `/treatments/{slug}` detail pages (hero image)
- `/treatments` index page (related treatments cards)

---

### 2. **Doctor Images**

**File**: `src/content/site.ts` (lines: `assets.doctors`)

- Dr. Nidheesh Agarwal: Currently using professional headshot from Unsplash

**Used in**:

- `/doctors` page (full profile)
- Home page (profile thumbnail in specialists section)

---

### 3. **Blog Images**

**File**: `src/content/site.ts` (lines: `assets.blog`)
**Also updated in**: `src/content/blog.ts`

Currently has placeholder images for:

- Dermatologist in Udaipur article
- Acne Treatment article
- Hair Fall & PRP article

**Used in**:

- `/journal/{slug}` blog post pages (hero image)

---

### 4. **Gallery Before/After Images**

**File**: `src/content/gallery.ts` (references: `assets.gallery`)

9 before/after image sets with hover effect:

- Users hover over images to see the "after" result
- Each labeled with treatment names (Luminance, Clinic Lift, etc.)

**Used in**:

- `/gallery` page

---

## How to Update Images

### **Option A: Keep Using Unsplash (Quick)**

This is the fastest way to add real images temporarily while you gather patient results:

1. Go to [unsplash.com](https://unsplash.com)
2. Search for relevant images (e.g., "dermatology", "hair treatment", "skincare")
3. Copy the download URL
4. Replace the URL in `src/content/site.ts`

Example:

```typescript
"clinical-dermatology": "https://images.unsplash.com/photo-XXXXX?w=1000&q=80"
```

---

### **Option B: Upload Local Images (Recommended for Production)**

This is the proper way to use real images:

#### **Step 1: Upload Images**

```
public/
├── images/
│   ├── treatments/
│   │   ├── clinical-dermatology.jpg
│   │   ├── hair-treatments.jpg
│   │   ├── hair-transplantation.jpg
│   │   ├── cosmetology.jpg
│   │   ├── skin-surgeries.jpg
│   │   ├── pediatric-dermatology.jpg
│   │   ├── systemic-dermatology.jpg
│   │   └── genital-dermatology.jpg
│   ├── doctors/
│   │   └── dr-nidheesh-agarwal.jpg
│   ├── blog/
│   │   ├── dermatologist-in-udaipur.jpg
│   │   ├── acne-treatment.jpg
│   │   └── hair-fall-treatment.jpg
│   └── gallery/
│       ├── item-1-before.jpg
│       ├── item-1-after.jpg
│       ├── item-2-before.jpg
│       ├── item-2-after.jpg
│       └── ... (9 pairs total)
```

#### **Step 2: Update Image References**

In `src/content/site.ts`, replace Unsplash URLs:

```typescript
export const assets = {
  doctors: {
    "nidheesh-agarwal": "/images/doctors/dr-nidheesh-agarwal.jpg",
  },
  treatments: {
    "clinical-dermatology": "/images/treatments/clinical-dermatology.jpg",
    "hair-treatments": "/images/treatments/hair-treatments.jpg",
    // ... update all treatments
  },
  blog: {
    "dermatologist-in-udaipur": "/images/blog/dermatologist-in-udaipur.jpg",
    "acne-treatment": "/images/blog/acne-treatment.jpg",
    "hair-fall-treatment": "/images/blog/hair-fall-treatment.jpg",
  },
  gallery: {
    1: {
      before: "/images/gallery/item-1-before.jpg",
      after: "/images/gallery/item-1-after.jpg",
      label: "Luminance",
    },
    2: {
      before: "/images/gallery/item-2-before.jpg",
      after: "/images/gallery/item-2-after.jpg",
      label: "Clinic Lift",
    },
    // ... 9 total
  },
};
```

---

## Before/After Gallery (Special)

The gallery on `/gallery` has a **hover effect** that reveals the "after" image:

- **Default state**: Shows "before" image
- **On hover**: Fades to "after" image
- This works automatically — just update the URLs in `assets.gallery`

### Gallery Item Structure

```typescript
{
  id: 1,
  before: "/images/gallery/item-1-before.jpg",
  after: "/images/gallery/item-1-after.jpg",
  label: "Luminance",
  tone: "bone" // fallback if images don't load
}
```

---

## Quick Reference: What Gets Updated Where?

| Component                 | Data Location                   | Image Field          |
| ------------------------- | ------------------------------- | -------------------- |
| Treatment detail pages    | `site.ts` → `treatments[]`      | `.image`             |
| Treatment cards (related) | `site.ts` → `treatments[]`      | `.image`             |
| Doctor profile page       | `site.ts` → `doctors[]`         | `.image`             |
| Home page specialist list | `site.ts` → `doctors[]`         | `.image`             |
| Blog post hero            | `blog.ts` → `blogPosts[]`       | `.heroImage`         |
| Gallery before/after      | `gallery.ts` → `galleryItems[]` | `.before` / `.after` |

---

## Important Notes

### **Image Optimization**

- Recommended sizes:
  - **Treatment images**: 1000px wide (used at full width)
  - **Doctor images**: 400px wide (used at small size on homepage)
  - **Blog hero**: 1200px wide
  - **Gallery items**: 800px wide
- Use **JPG** for photos (smaller file size)
- Use **PNG** for graphics/diagrams
- Compress images before uploading: [tinypng.com](https://tinypng.com)

### **Patient Privacy & Gallery**

- ✅ ONLY use patient before/after images with **explicit written consent**
- ✅ Store consent documentation safely
- ✅ Never use images for advertising or outside the gallery
- ✅ Can use Unsplash as placeholder until patient content is available

### **Fallback System**

If an image URL fails to load:

1. Treatment detail pages use `assets.treatments.placeholder`
2. Gallery items show fallback tone gradients
3. Doctor/blog images have no fallback (file not found errors visible in console)

---

## Example: Updating a Single Treatment Image

**Current (Unsplash)**:

```typescript
"clinical-dermatology": "https://images.unsplash.com/photo-1576091160550-112405c3e149?w=1000&q=80"
```

**After uploading to local**:

```typescript
"clinical-dermatology": "/images/treatments/clinical-dermatology.jpg"
```

That's it! The change is automatically reflected on:

- `/treatments/clinical-dermatology` detail page
- `/treatments` index (related treatments section)
- `/gallery` (nowhere — this treatment doesn't use gallery)

---

## Troubleshooting

### **Images not showing?**

1. Check browser console for 404 errors
2. Verify file paths in `site.ts` or `gallery.ts`
3. Ensure image files exist in `public/images/`
4. Clear browser cache (Ctrl+Shift+Del)

### **Image looks wrong size?**

- CSS handles responsive sizing automatically
- If image appears stretched: source image aspect ratio may not match layout
- Test with images at recommended widths above

### **Want to add more treatments later?**

1. Add new treatment object in `site.ts` → `treatments[]`
2. Add corresponding image key in `assets.treatments`
3. Image automatically shows on detail page and related cards

---

## Support

For questions about image management, refer back to:

- `src/content/site.ts` — Main asset configuration
- `src/content/gallery.ts` — Gallery setup
- `src/content/blog.ts` — Blog post images
