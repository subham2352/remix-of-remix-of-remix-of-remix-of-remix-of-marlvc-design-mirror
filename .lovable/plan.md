

# Scrape and Use All Real Images and Links from marlvc.com

## Overview
After scraping the full HTML from marlvc.com, I've extracted every image URL, founder name, company name, and link. This plan updates all sections to use the real data from the source site.

## What Was Found

### Team Photos (from /our-team/ page)
4 team members with real photo URLs:
- Amir Khan: `https://marlvc.com/wp-content/uploads/2024/12/tm_1.avif`
- Prakash Goswami: `https://marlvc.com/wp-content/uploads/2024/12/tm_2.avif`
- Daniela Lugo: `https://marlvc.com/wp-content/uploads/2024/12/2312342.jpg`
- Jeffrey Bekiares: `https://marlvc.com/wp-content/uploads/2024/12/tm_4.avif`

### Founder Photos (3 carousel rows - already downloaded locally)
All 34 founders already exist in `src/assets/founders/`. The company names need correcting based on scraped data.

### Corrected Company Names (from HTML)
Several company names were placeholder/guessed. Real names from site:
- Valentin Prijilevschi -> **TechSelf** (not "TechFlow")
- Samir Hassan -> **Knowtified** (not "DataBridge")
- Nathalie Taquet -> **eBottli Inc** (not "GreenPath")
- Michael Bingham -> **Xiris Corp.** (not "CloudSync")
- Michael Gurevich -> **TecTransit** (not "TechVenture")
- Volker Dahm -> **SafeDeploy** (not "AutoDrive")
- Tara Robinson -> **Tracksracks** (not "HealthAI")
- B Bhushan Mishra -> **Fleksa** (not "SmartGrid")
- Havish Sreenath -> **Infliction Labs** (not "RoboFlow")
- Steve Scully -> **Thaddeus Medical System** (not "NetSecure")
- Nida Sahar -> **Nife Labs** (not "EduTech")
- Mithun Adith -> **SpotKwik** (not "AeroTech")
- Aparna Pujar -> **Zeemple** (not "MedConnect")
- Rohit Sharma -> **AiTS** (not "FinFlow")
- Navin Jethani -> **DisplayRide** (not "DataLens")
- Fatima Awan -> **Finiite Technologies Inc** (not just "Finiite Technologies")

### Testimonial Profile Images
From scraped HTML, testimonial photos are the same founder images already downloaded. For missing ones (Pratik Budhdev, Hans Hansen, Samantha Tenus, Vladimir Rigenco) - no photos exist on marlvc.com; they use text initials on the original site too.

## Implementation Steps

### Step 1: Download Team Photos
Download the 4 team member photos from marlvc.com and save to `src/assets/team/`:
- `amir-khan.avif` (or convert to jpg/png)
- `prakash-goswami.avif`
- `daniela-lugo.jpg`
- `jeffrey-bekiares.avif`

### Step 2: Update FoundersSection.tsx - Fix Company Names
Update all incorrect company names in the founders arrays to match the real data scraped from marlvc.com (listed above).

### Step 3: Update About.tsx - Add Real Team Photos
- Import the 4 downloaded team photos
- Replace the gradient circle placeholders with actual `<img>` elements showing real team photos
- Keep the existing layout and LinkedIn links

### Step 4: Update TestimonialsSection.tsx - Verify Data
- Company names in testimonials already match the source site
- The 4 testimonials without photos (Pratik, Hans, Samantha, Vladimir) don't have photos on marlvc.com either, so keep the initial-letter fallback - this matches the original site behavior

## Files to Create/Edit
- 4 new image files in `src/assets/team/`
- `src/components/home/FoundersSection.tsx` - fix ~16 company names
- `src/pages/About.tsx` - add real team photos
- `src/components/home/TestimonialsSection.tsx` - no changes needed (already correct)

## Technical Details

Team photo source URLs:
```
https://marlvc.com/wp-content/uploads/2024/12/tm_1.avif  (Amir Khan)
https://marlvc.com/wp-content/uploads/2024/12/tm_2.avif  (Prakash Goswami)
https://marlvc.com/wp-content/uploads/2024/12/2312342.jpg (Daniela Lugo)
https://marlvc.com/wp-content/uploads/2024/12/tm_4.avif  (Jeffrey Bekiares)
```

Company name corrections in FoundersSection.tsx (row2 and row3 arrays):
```
row2: Valentin -> TechSelf, Samir -> Knowtified, Nathalie -> eBottli Inc, Michael Bingham -> Xiris Corp.
row3: Gurevich -> TecTransit, Volker -> SafeDeploy, Tara -> Tracksracks, Bhushan -> Fleksa, 
      Havish -> Infliction Labs, Steve -> Thaddeus Medical System, Nida -> Nife Labs, 
      Mithun -> SpotKwik, Aparna -> Zeemple, Rohit -> AiTS, Navin -> DisplayRide
```
