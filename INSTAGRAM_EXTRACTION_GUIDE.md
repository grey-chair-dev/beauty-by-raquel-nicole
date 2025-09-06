# Instagram Image Extraction Guide

## 📱 How to Extract Images from Instagram

### Method 1: Manual Download (Recommended)
1. **Open Instagram** in your browser
2. **Go to** [@beauty_by_raquel_nicole](https://www.instagram.com/beauty_by_raquel_nicole/)
3. **Right-click** on any image
4. **Select "Save image as..."**
5. **Save to** the appropriate service folder

### Method 2: Browser Developer Tools
1. **Open Instagram** in Chrome/Firefox
2. **Right-click** on image → **Inspect**
3. **Find** the image URL in the HTML
4. **Copy** the URL and download

### Method 3: Mobile Screenshots
1. **Take screenshots** of before/after images
2. **Crop** to focus on the hair transformation
3. **Save** with descriptive names

## 📁 Folder Structure
```
public/gallery/
├── money-piece-foils/
│   ├── before-1.jpg
│   ├── after-1.jpg
│   └── README.md
├── all-over-color/
│   ├── before-1.jpg
│   ├── after-1.jpg
│   └── README.md
└── ... (other service folders)
```

## 📋 Naming Convention
- **Before images**: `before-1.jpg`, `before-2.jpg`, etc.
- **After images**: `after-1.jpg`, `after-2.jpg`, etc.
- **Or use client names**: `client-name-before.jpg`

## 🎯 Service Categories
- **All Over Color and Haircut** (`all-over-color/`) - Keywords: all over color, full color, color transformation, all over, full transformation
- **Bang Trim** (`bang-trim/`) - Keywords: bang trim, bangs, fringe trim, bang cut
- **Blowout** (`blowout/`) - Keywords: blowout, blow dry, wash and style, blow dry style
- **Extension Consultation** (`extension-consultation/`) - Keywords: extension consultation, consultation, extension consult
- **Hand Tied Extension Move-up** (`extension-moveup/`) - Keywords: extension move-up, extension maintenance, move-up, extension move up
- **Formal Event Style/Updo** (`formal-styling/`) - Keywords: updo, formal, special occasion, event styling, prom, wedding, formal style
- **The Full and Haircut** (`full-haircut/`) - Keywords: full blonding, full transformation, full highlight, full foil, full color
- **Hair Tinsel** (`hair-tinsel/`) - Keywords: hair tinsel, tinsel, temporary color, hair tinsel
- **The Half and Haircut** (`half-haircut/`) - Keywords: half highlight, partial highlight, maintenance, half foil, partial foil
- **Hand Tied Extension Install** (`hand-tied-extensions/`) - Keywords: hand tied extensions, extension install, extensions, hand tied, extension installation
- **Kids Cut** (`kids-cut/`) - Keywords: kids cut, children haircut, child cut, kid cut
- **Men's Cut** (`mens-cut/`) - Keywords: men's cut, men haircut, guy cut, male cut
- **Money Piece/Face Frame Foils** (`money-piece-foils/`) - Keywords: money piece, face frame, face-framing, balayage, face framing, money piece foils
- **Root Retouch and Haircut** (`root-retouch/`) - Keywords: root retouch, grey coverage, root touch-up, root touch up, grey retouch
- **Women's Short Pixie** (`short-pixie/`) - Keywords: pixie cut, short pixie, short cut, pixie
- **Teen Girls Cut** (`teen-girls-cut/`) - Keywords: teen cut, teen girls, ages 13-17, teen haircut
- **Toner/Gloss & Blowout (No Haircut)** (`toner-blowout/`) - Keywords: toner, gloss, blowout no haircut, toner blowout
- **Toner/Gloss and Haircut** (`toner-gloss/`) - Keywords: toner, gloss, color enhancement, toner gloss
- **Women's Haircut** (`womens-haircut/`) - Keywords: women's haircut, women cut, ladies cut, women haircut

## 📸 Image Requirements
- **Format**: JPG, PNG, or WebP
- **Size**: 800x600px minimum
- **Quality**: High resolution
- **Aspect Ratio**: Square (1:1) or 4:3 recommended

## 🔍 Finding the Right Posts
Look for posts with these keywords in captions:
- **All Over Color and Haircut**: all over color, full color, color transformation, all over, full transformation
- **Bang Trim**: bang trim, bangs, fringe trim, bang cut
- **Blowout**: blowout, blow dry, wash and style, blow dry style
- **Extension Consultation**: extension consultation, consultation, extension consult
- **Hand Tied Extension Move-up**: extension move-up, extension maintenance, move-up, extension move up
- **Formal Event Style/Updo**: updo, formal, special occasion, event styling, prom, wedding, formal style
- **The Full and Haircut**: full blonding, full transformation, full highlight, full foil, full color
- **Hair Tinsel**: hair tinsel, tinsel, temporary color, hair tinsel
- **The Half and Haircut**: half highlight, partial highlight, maintenance, half foil, partial foil
- **Hand Tied Extension Install**: hand tied extensions, extension install, extensions, hand tied, extension installation
- **Kids Cut**: kids cut, children haircut, child cut, kid cut
- **Men's Cut**: men's cut, men haircut, guy cut, male cut
- **Money Piece/Face Frame Foils**: money piece, face frame, face-framing, balayage, face framing, money piece foils
- **Root Retouch and Haircut**: root retouch, grey coverage, root touch-up, root touch up, grey retouch
- **Women's Short Pixie**: pixie cut, short pixie, short cut, pixie
- **Teen Girls Cut**: teen cut, teen girls, ages 13-17, teen haircut
- **Toner/Gloss & Blowout (No Haircut)**: toner, gloss, blowout no haircut, toner blowout
- **Toner/Gloss and Haircut**: toner, gloss, color enhancement, toner gloss
- **Women's Haircut**: women's haircut, women cut, ladies cut, women haircut

## 📝 Next Steps
1. **Run**: `npm run instagram:template` to create captions.txt
2. **Add captions** from Instagram posts to captions.txt
3. **Run**: `npm run instagram:analyze` to match services
4. **Download images** and place in correct folders
5. **Run**: `npm run gallery:validate` to check progress
6. **Run**: `npm run gallery:generate` to create website data
