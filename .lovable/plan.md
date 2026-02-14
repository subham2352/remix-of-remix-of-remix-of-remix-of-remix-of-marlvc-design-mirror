

# Download All Real Images from marlvc.com

## Overview
Replace all placeholder/generic photos with the actual images from marlvc.com across the following sections:
- Founders community carousel (3 rows, ~34 founders)
- Testimonials section (add real profile photos)
- About page team section (download team photos from the homepage or use available data)

## Step 1: Download All Founder Photos from marlvc.com

Download real founder images from the original site using their direct URLs:

**Row 1 (12 founders)** - from `marlvc.com/wp-content/uploads/2024/12/`:
- 1.jpg (Max Montrey), 2.jpg (Srinivas K. Pai), 3.jpg (Matthew Gill), 4.jpg (Vinitha Thiyagarajan), 5.jpg (Victor Martin), 6.jpg (Shay Williams), 7.jpg (Abhra Banerjee), 8.jpg (David Hojah), 9.jpg (Ali Salem), 10.jpg (Soner Matt), 11.jpg (Adam Beal), 12.jpg (Noam Heimann)

**Row 2 (10 founders)** - from `marlvc.com/wp-content/uploads/2025/01/`:
- 8.png (Ashutosh Srivastava), 9.png (Ricardo Ortiz Sordo), 10.png (Ewelina Robaczek), 11.png (Michael Du), 12.png (Bart Slowik), 7.png (Valentin Prijilevschi), 6.png (Fatima Awan), 5.png (Samir Hassan), 1.png (Nathalie Taquet), 4.png (Michael Bingham)

**Row 3 (12 founders)** - from `marlvc.com/wp-content/uploads/2025/01/`:
- Untitled-design-49-1.png (Michael Gurevich), 50-1.png (Volker Dahm), 51-1.png (Tara Robinson), 52-1.png (B Bhushan Mishra), 53-1.png (Havish Sreenath), 54-1.png (Steve Scully), 55-1.png (Nida Sahar), 56-1.png (Lalit Gautam), 57-1.png (Mithun Adith), 58-1.png (Aparna Pujar), 59-1.png (Rohit Sharma), 60-2.png (Navin Jethani)

All saved to `src/assets/founders/` with descriptive filenames.

## Step 2: Update FoundersSection.tsx

- Update the founders array to include all 34 founders across 3 rows
- Replace the static grid with a 3-row auto-scrolling carousel matching marlvc.com (Row 1 scrolls left, Row 2 scrolls right, Row 3 scrolls left)
- Each row uses CSS animation for infinite smooth scrolling
- Import all downloaded images

## Step 3: Add Testimonial Photos

Download profile photos for the testimonial authors from marlvc.com (extracted from the testimonial section HTML) and save to `src/assets/founders/`:
- Max Montrey (already have), Pratik Budhdev, Hans Hansen, Vinitha Thiyagarajan (already have), Abhra Banerjee (already have), Lalit Gautam, Samantha Tenus, Vladimir Rigenco

Update `TestimonialsSection.tsx` to display the real photos instead of initial-letter circles.

## Step 4: Update About Page Team Photos

The team page on marlvc.com returns 404, so team member photos (Amir Khan, Prakash Goswami, Daniela Lugo, Jeffrey Bekiares) are not available from the site. Update `About.tsx` to use professional placeholder avatars with proper styling matching the marlvc.com aesthetic.

## Files to Create/Edit
- ~30 new image files in `src/assets/founders/`
- `src/components/home/FoundersSection.tsx` - complete rewrite with 3-row carousel
- `src/components/home/TestimonialsSection.tsx` - add photo imports and display
- `src/pages/About.tsx` - minor styling updates

