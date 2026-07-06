Images folder — drop your photos here
======================================

This folder is currently empty. The site now loads real <img> tags
pointing at the exact filenames below — just add files with these
names and they'll appear on the site automatically (no code changes
needed).

Required files:
- hero-performance.jpg   (large performance photo, shown on the Home page hero)
- photo-1.jpg            (Media page photo gallery, 1st photo)
- photo-2.jpg            (Media page photo gallery, 2nd photo)
- photo-3.jpg            (Media page photo gallery, 3rd photo)

Recommended sizes:
- hero-performance.jpg: at least 1600x2000px (portrait orientation), optimized/compressed for web
- photo-1/2/3.jpg: at least 1200x900px (landscape orientation), optimized/compressed for web

Notes:
- Each image is cropped to fill its box (aspect-ratio + object-fit: cover in styles.css),
  so exact dimensions don't need to match perfectly — just keep the orientation above.
- Want more or fewer photos in the Media gallery? Add/remove <img> tags in media.html's
  "Photos" gallery-grid, using additional filenames like photo-4.jpg, photo-5.jpg, etc.
