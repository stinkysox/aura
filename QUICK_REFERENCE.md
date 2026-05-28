# 🚀 Quick Reference — Image Updates

## Update an Image in 30 Seconds

### Option 1: Replace Unsplash URL

```typescript
// File: src/content/site.ts

// Find this:
"clinical-dermatology": "https://images.unsplash.com/photo-OLD-ID?w=1000&q=80"

// Replace with new Unsplash URL:
"clinical-dermatology": "https://images.unsplash.com/photo-NEW-ID?w=1000&q=80"

// Save. Done! ✨
```

### Option 2: Use Local Image

```typescript
// File: src/content/site.ts

// Replace with local path:
"clinical-dermatology": "/images/treatments/clinical-dermatology.jpg"

// Then upload image to: public/images/treatments/clinical-dermatology.jpg
// Done! ✨
```

---

## Where to Find Each Image

| What           | File                  | Search For              |
| -------------- | --------------------- | ----------------------- |
| Treatments (8) | `src/content/site.ts` | `assets.treatments = {` |
| Doctor         | `src/content/site.ts` | `assets.doctors = {`    |
| Blog (3)       | `src/content/site.ts` | `assets.blog = {`       |
| Gallery (9)    | `src/content/site.ts` | `assets.gallery = {`    |

---

## Gallery Before/After Update

```typescript
// File: src/content/site.ts
// Inside: assets.gallery

1: {
  before: "/images/gallery/item-1-before.jpg",  // ← Patient before photo
  after: "/images/gallery/item-1-after.jpg",    // ← Patient after photo
  label: "Luminance"
},
```

Upload images to: `public/images/gallery/item-1-before.jpg` etc.

---

## File Locations

```
📁 Workspace Root
├── 📄 IMAGE_MANAGEMENT.md ← Full guide (read first!)
├── 📄 IMAGE_SETUP_SUMMARY.md ← Architecture overview
├── 📄 CODE_CHANGES.md ← What changed
├── src/
│   ├── content/
│   │   ├── site.ts ← Main image config (assets object)
│   │   ├── gallery.ts ← Gallery setup
│   │   └── blog.ts ← Blog image references
│   └── pages/
│       ├── TreatmentsSlugPage.tsx ← Uses treatment.image
│       ├── GalleryPage.tsx ← Before/after gallery
│       └── ...
└── public/
    └── images/ ← Upload local images here
        ├── treatments/
        ├── doctors/
        ├── blog/
        └── gallery/
```

---

## Import Paths Cheat Sheet

### Add new treatment image:

```typescript
// In: src/content/site.ts
// In: assets.treatments object
"new-treatment-slug": "https://images.unsplash.com/... OR /images/treatments/new.jpg"
```

### Add to treatment object:

```typescript
// In: src/content/site.ts
// In: treatments[] array, add to object:
image: assets.treatments["new-treatment-slug"];
```

### Update blog post image:

```typescript
// In: src/content/blog.ts
// In: blogPosts[] array, change:
heroImage: assets.blog["blog-slug-key"];
```

### Update gallery:

```typescript
// In: src/content/site.ts
// In: assets.gallery object
1: { before: "...", after: "...", label: "Luminance" }
```

---

## Common Image URLs (Unsplash)

Ready-to-use treatment categories:

```
Dermatology/Clinical:
https://images.unsplash.com/photo-1576091160550-112405c3e149?w=1000&q=80

Hair Care:
https://images.unsplash.com/photo-1599599810694-b5ac4dd57aaf?w=1000&q=80

Medical/Procedure:
https://images.unsplash.com/photo-1576091160641-112413b5e1d5?w=1000&q=80

Professional Headshot:
https://images.unsplash.com/photo-1612349317150-e88f86ff8e12?w=800&q=80

Skincare/Beauty:
https://images.unsplash.com/photo-1576091160500-112405c3e149?w=1000&q=80
```

Search more at: **unsplash.com**

---

## Troubleshooting

| Problem              | Solution                                          |
| -------------------- | ------------------------------------------------- |
| Image not showing    | Clear browser cache (Ctrl+Shift+Del)              |
| Wrong aspect ratio   | Check image dimensions match layout               |
| 404 error in console | Verify file path in `site.ts` matches actual file |
| Broken Unsplash link | Find new Unsplash URL and replace                 |

---

## Remember

✅ Change URL in `site.ts`  
✅ NO component code changes needed  
✅ Changes apply EVERYWHERE automatically  
✅ Keep fallback placeholders for now  
✅ Upload patient images with written consent

---

**Questions?** See `IMAGE_MANAGEMENT.md` for complete documentation.
