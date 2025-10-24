# 📖 Content Editing Guide for Arevalo Dental Clinic Website

## 🚀 How to View Your Website

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Open your browser and visit:**
   ```
   http://localhost:5000
   ```

3. **To stop the server:**
   - Press `Ctrl + C` in the terminal

---

## 📸 Adding Before/After Images

### Step 1: Prepare Your Images
1. Create the folder: `/public/images/before-after/`
2. Name your images clearly:
   - `smile-1-before.jpg` and `smile-1-after.jpg`
   - `teeth-2-before.jpg` and `teeth-2-after.jpg`
   - etc.

### Step 2: Edit the Gallery
Open: `/client/src/components/BeforeAfterGallery.tsx`

Find the `defaultCases` array (around line 15) and edit it:

```typescript
const defaultCases: CaseStudy[] = [
  {
    id: '1',
    beforeImage: '/images/before-after/smile-1-before.jpg',  // ← Your image path
    afterImage: '/images/before-after/smile-1-after.jpg',    // ← Your image path
    title: 'Complete Smile Makeover',                         // ← Change this
    description: 'Porcelain veneers and teeth whitening transformation',  // ← Change this
    category: 'Cosmetic Dentistry',                           // ← Change this
    caseStudyLink: '/case-studies/smile-makeover-1'          // ← Optional: link to full case study
  },
  // Add more cases here...
];
```

---

## 🎥 Adding Video Testimonials

### Step 1: Prepare Your Videos
1. Create folders:
   - `/public/videos/testimonials/` (for video files)
   - `/public/images/testimonials/` (for thumbnail images)

2. Add your files:
   - Video: `ahmed-testimonial.mp4`
   - Thumbnail: `ahmed-thumb.jpg`

### Step 2: Edit Testimonials
Open: `/client/src/components/EnhancedTestimonials.tsx`

Find the `defaultTestimonials` array (around line 27) and add your testimonial:

```typescript
{
  type: 'video',  // ← 'video' or 'photo'
  id: 'v1',
  name: 'Ahmed Al-Rashid',                                    // ← English name
  nameAr: 'أحمد الراشد',                                       // ← Arabic name (optional)
  location: 'Riyadh, Saudi Arabia',                           // ← English location
  locationAr: 'الرياض، المملكة العربية السعودية',             // ← Arabic location
  procedure: 'Complete Smile Makeover',                       // ← English procedure
  procedureAr: 'تجميل الابتسامة الكامل',                      // ← Arabic procedure
  rating: 5,                                                   // ← 1 to 5 stars
  videoUrl: '/videos/testimonials/ahmed-testimonial.mp4',    // ← Your video path
  thumbnailUrl: '/images/testimonials/ahmed-thumb.jpg',      // ← Your thumbnail path
  quote: 'The team at Arevalo made my dream smile a reality...', // ← English quote
  quoteAr: 'فريق عيادة أريفالو جعل حلم ابتسامتي حقيقة...',     // ← Arabic quote
  language: 'ar'  // ← 'ar' for Arabic, 'en' for English
}
```

---

## 📷 Adding Photo Testimonials

Same as video testimonials, but use `type: 'photo'` and add `imageUrl` instead of `videoUrl`:

```typescript
{
  type: 'photo',  // ← Type is 'photo'
  id: 'p1',
  name: 'Mohammed Al-Qahtani',
  nameAr: 'محمد القحطاني',
  location: 'Dammam, Saudi Arabia',
  locationAr: 'الدمام، المملكة العربية السعودية',
  procedure: 'Invisalign Treatment',
  procedureAr: 'علاج الإنفزلاين',
  rating: 5,
  imageUrl: '/images/testimonials/mohammed.jpg',  // ← Patient photo
  quote: 'Outstanding service from consultation to final results...',
  quoteAr: 'خدمة متميزة من الاستشارة إلى النتائج النهائية...',
  language: 'ar'
}
```

---

## 🗺️ Adding Tourist Areas

### Step 1: Prepare Images
Create folder: `/public/images/tourist-areas/`

Add images:
- `intramuros.jpg`
- `manila-bay.jpg`
- etc.

### Step 2: Edit Tourist Areas
Open: `/client/src/components/PopularTouristAreas.tsx`

Find the `defaultAreas` array (around line 20) and edit:

```typescript
{
  id: '1',
  name: 'Intramuros',                                         // ← English name
  nameAr: 'إنتراموروس',                                       // ← Arabic name
  description: 'Historic walled city with Spanish colonial architecture...', // ← English
  descriptionAr: 'مدينة تاريخية محاطة بأسوار...',             // ← Arabic
  imageUrl: '/images/tourist-areas/intramuros.jpg',          // ← Your image
  icon: Building2,  // ← Icon (options: Building2, Waves, Palmtree, Mountain, Camera)
  category: 'Historical',                                     // ← English category
  categoryAr: 'تاريخي',                                       // ← Arabic category
  distance: '5 km from clinic',                              // ← English distance
  distanceAr: '5 كم من العيادة'                              // ← Arabic distance
}
```

### Available Icons:
- `Building2` - For buildings/malls
- `Waves` - For beaches/waterfront
- `Palmtree` - For parks/nature
- `Mountain` - For mountains/highlands
- `Camera` - For museums/attractions

---

## ✏️ Quick Editing Tips

### 1. **Change Text Content**
All text is in translation files:
- English: `/client/src/locales/en/translation.json`
- Arabic: `/client/src/locales/ar/translation.json`

### 2. **Add More Items**
Just copy an existing item in the array and modify the values:

```typescript
const myArray = [
  { id: '1', name: 'First Item' },
  { id: '2', name: 'Second Item' },
  // Copy the line above and change values:
  { id: '3', name: 'Third Item' },  // ← New item!
];
```

### 3. **Remove Items**
Delete the entire block (from `{` to `},`):

```typescript
// DELETE THIS WHOLE BLOCK to remove an item:
{
  id: '2',
  name: 'Item to Remove',
  description: 'This will be deleted'
},  // ← Don't forget to delete the comma too!
```

---

## 🔍 Finding What to Edit

### To change...
| Content Type | File Location |
|--------------|---------------|
| Before/After images | `/client/src/components/BeforeAfterGallery.tsx` |
| Video testimonials | `/client/src/components/EnhancedTestimonials.tsx` |
| Photo testimonials | `/client/src/components/EnhancedTestimonials.tsx` |
| Tourist areas | `/client/src/components/PopularTouristAreas.tsx` |
| General text | `/client/src/locales/en/translation.json` (English)<br>`/client/src/locales/ar/translation.json` (Arabic) |
| Doctor info | `/client/src/locales/en/translation.json` |
| Services | `/client/src/locales/en/translation.json` |

---

## 📁 Folder Structure for Media Files

```
/public/
├── images/
│   ├── before-after/          ← Before/after dental photos
│   │   ├── smile-1-before.jpg
│   │   ├── smile-1-after.jpg
│   │   └── ...
│   ├── testimonials/          ← Patient photos & video thumbnails
│   │   ├── ahmed.jpg
│   │   ├── ahmed-thumb.jpg
│   │   └── ...
│   └── tourist-areas/         ← Tourist destination photos
│       ├── intramuros.jpg
│       ├── manila-bay.jpg
│       └── ...
└── videos/
    └── testimonials/          ← Video testimonial files
        ├── ahmed-testimonial.mp4
        ├── fatima-testimonial.mp4
        └── ...
```

---

## ⚠️ Important Notes

1. **Image Formats:** Use `.jpg`, `.png`, or `.webp`
2. **Video Formats:** Use `.mp4` (best compatibility)
3. **Image Sizes:**
   - Before/After: 1200x900px recommended
   - Testimonial photos: 800x800px recommended
   - Tourist areas: 1200x800px recommended
4. **File Naming:** Use lowercase, no spaces (use `-` instead)
   - Good: `smile-makeover-before.jpg`
   - Bad: `Smile Makeover BEFORE.JPG`

5. **After editing:** The website will automatically reload (hot reload)

---

## 🐛 Troubleshooting

**Problem:** Images don't show up
- ✅ Check file path is correct
- ✅ Check file is in `/public/` folder
- ✅ Check spelling matches exactly (case-sensitive!)
- ✅ Refresh browser (Ctrl+F5 or Cmd+Shift+R)

**Problem:** Website won't load
- ✅ Check for syntax errors (missing comma, brackets)
- ✅ Look at terminal for error messages
- ✅ Stop server (Ctrl+C) and restart (`npm run dev`)

**Problem:** Changes don't appear
- ✅ Save the file (Ctrl+S or Cmd+S)
- ✅ Wait 2-3 seconds for hot reload
- ✅ Hard refresh browser (Ctrl+F5)

---

## 💡 Pro Tips

1. **Test one change at a time** - easier to find problems
2. **Keep backups** of working code before major changes
3. **Use consistent naming** for files and IDs
4. **Optimize images** before uploading (compress them)
5. **Test in Arabic mode** if you have Arabic content

---

## 📞 Need Help?

If you're stuck, check:
1. Terminal error messages (they tell you what's wrong!)
2. Browser console (F12 → Console tab)
3. This guide

Happy editing! 🎉
