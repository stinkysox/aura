/**
 * GALLERY — Before & After Images
 *
 * IMPORTANT: These are placeholder images from Unsplash for demo purposes.
 *
 * To replace with real patient results:
 * 1. Ensure you have explicit patient consent for before/after publication
 * 2. Replace Unsplash URLs with local image paths: /images/gallery/item-{number}-before.jpg
 * 3. Upload images to: public/images/gallery/
 * 4. Test with different aspect ratios to ensure layout remains responsive
 *
 * Image naming convention:
 * - item-1-before.jpg / item-1-after.jpg
 * - item-2-before.jpg / item-2-after.jpg
 * - etc.
 */

import { assets } from "@/content/site";

export type GalleryItem = {
  id: number;
  before: string;
  after: string;
  label: string;
  tone?: "bone" | "stone" | "skin" | "graphite"; // Optional: fallback tone if image doesn't load
};

/**
 * Gallery items - 9 treatment result examples
 * Each item shows before/after with a descriptive label
 */
export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    before: assets.gallery[1].before,
    after: assets.gallery[1].after,
    label: "Luminance",
    tone: "bone",
  },
  {
    id: 2,
    before: assets.gallery[2].before,
    after: assets.gallery[2].after,
    label: "Clinic Lift",
    tone: "stone",
  },
  {
    id: 3,
    before: assets.gallery[3].before,
    after: assets.gallery[3].after,
    label: "Obsidian",
    tone: "graphite",
  },
  {
    id: 4,
    before: assets.gallery[4].before,
    after: assets.gallery[4].after,
    label: "Veil",
    tone: "bone",
  },
  {
    id: 5,
    before: assets.gallery[5].before,
    after: assets.gallery[5].after,
    label: "Ember",
    tone: "skin",
  },
  {
    id: 6,
    before: assets.gallery[6].before,
    after: assets.gallery[6].after,
    label: "Horizon",
    tone: "stone",
  },
  {
    id: 7,
    before: assets.gallery[7].before,
    after: assets.gallery[7].after,
    label: "Refine",
    tone: "bone",
  },
  {
    id: 8,
    before: assets.gallery[8].before,
    after: assets.gallery[8].after,
    label: "Radiance",
    tone: "skin",
  },
  {
    id: 9,
    before: assets.gallery[9].before,
    after: assets.gallery[9].after,
    label: "Clarity",
    tone: "stone",
  },
];
