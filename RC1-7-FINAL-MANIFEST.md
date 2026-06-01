# NAILINTHEHEAD — RC1.7 FINAL
## Production Deployment Package · Release Manifest

---

**Version:** RC1.7 FINAL
**Date sealed:** 2026-06-01
**Parent:** RC1.7
**Status:** READY FOR PRODUCTION DEPLOYMENT
**Platform:** Cloudflare Pages
**Domain:** nailinthehead.org
**Repository:** github.com/ionutcm402-beep/nailinthehead
**Stack:** Pure HTML5 · CSS3 · Vanilla JS · Zero build step · Zero dependencies

---

## DEPLOYMENT INSTRUCTIONS

### Option A — Cloudflare Pages via GitHub (standard)

```
Step 1.  Unzip nailinthehead-rc1-7-final.zip
Step 2.  Copy all 13 .html files into your local GitHub repo folder
         (overwrite existing — do not delete anything else in the repo)
Step 3.  git add -A
Step 4.  git commit -m "Deploy RC1.7 FINAL — nailinthehead.org"
Step 5.  git push origin main
Step 6.  Cloudflare Pages detects the push and deploys automatically
Step 7.  Deployment completes in approximately 30 seconds
Step 8.  Verify at https://nailinthehead.org
```

### Option B — Cloudflare Pages direct upload

```
Step 1.  Unzip nailinthehead-rc1-7-final.zip
Step 2.  Log in to Cloudflare dashboard → Pages → your site
Step 3.  Deployments tab → Create new deployment → Upload assets
Step 4.  Upload the contents of nailinthehead-rc1-7-final/
Step 5.  Cloudflare deploys within ~30 seconds
```

### Post-deployment verification checklist

Paste each URL into your browser and confirm it loads:

```
https://nailinthehead.org                 → Homepage
https://nailinthehead.org/niith_homepage  → Homepage (direct file)
https://nailinthehead.org/learn-faster    → Room 1
https://nailinthehead.org/work-smarter    → Room 2
https://nailinthehead.org/earn-more       → Room 3
https://nailinthehead.org/create-more     → Room 4
https://nailinthehead.org/think-better    → Room 5
https://nailinthehead.org/future-you      → Room 6
https://nailinthehead.org/daily-upgrade   → Daily Upgrade Tool
https://nailinthehead.org/journal         → The Journal
https://nailinthehead.org/about           → About
https://nailinthehead.org/contact         → Contact
https://nailinthehead.org/disclaimer      → Disclaimer
```

On a mobile device, additionally confirm:

```
□ Burger menu (☰) visible on every page
□ Drawer slides in from the right
□ Drawer close button (✕) works
□ ESC key closes drawer
□ About / Contact / Disclaimer accessible from every page
□ No horizontal scroll on any page
□ Daily Upgrade tool: category cards load and prompts appear
□ Daily Upgrade tool: text input accepts typing (no iOS zoom)
□ Journal: filter tabs work, articles open, ESC closes article
□ Journal: newsletter input accepts typing (no iOS zoom)
```

---

## RECOVERY INSTRUCTIONS

### Roll back to RC1.7 FINAL (this release)

```
1. Extract this zip
2. Copy all .html to repo → git push → auto-deploys
```

### Roll back to any prior release

All prior archives are preserved in prior-releases/ inside this zip.

| Archive | RC | What changed |
|---------|----|--------------|
| nailinthehead-rc1-7.zip | RC1.7 | Legal links in DU+journal, og:image all pages, input labels, canonical all rooms, viewport-fit all pages |
| nailinthehead-rc1-6.zip | RC1.6 | Mobile drawer on all 6 room pages, iOS input zoom fixed, prefers-reduced-motion on 8 pages |
| nailinthehead-rc1-5.zip | RC1.5 | JS syntax repair — daily-upgrade (orphaned })(); + 3 apostrophe bugs) |
| nailinthehead-rc1-4.zip | RC1.4 | New pages: about.html, contact.html, disclaimer.html |
| nailinthehead-rc1-3.zip | RC1.3 | Phase 1 humanization — We→I, founder section, resource reframing |
| nailinthehead-rc1-2.zip | RC1.2 | JS syntax repair — 6 room pages (orphaned })();) |
| nailinthehead-rc1-1.zip | RC1.1 | ZONE 01–06 labels replaced with room names |
| nailinthehead-rc1.zip   | RC1   | Baseline — 10 pages sealed |

To roll back: unzip the target archive → copy its .html files → push → deployed.

---

## COMPLETE FILE REGISTRY

### Primary HTML pages (12 — the live site)

**niith_homepage.html** — Homepage
  Bytes:  75,477
  MD5:    df1f3f64cd491f52ae7821d194575064
  SHA1:   058ab852e5bebddcac9f9d4c903019eacc635037
  SHA256: c40a922e2a9de1a01c0bc08f08c32d00c4eb920ec875d7f27a08162d03beeea2

**learn-faster.html** — Room 1 — Learn Faster
  Bytes:  41,125
  MD5:    9159dff404058511ba650368a8123959
  SHA1:   742b092820c82eac1cdb514b0d6a56ff93c60f10
  SHA256: 8a69d98f72f46c3dd1e15e0cd10c150cf9ef8c13e9d32036c8313e43fb673eda

**work-smarter.html** — Room 2 — Work Smarter
  Bytes:  41,633
  MD5:    14d1f2897773325038ad5e904859a83c
  SHA1:   f4c7131ff393f5ac011b1219df51ff05a59de7c8
  SHA256: c034603c6a104655257a86330fb49f84feefcbc39ddbf6d1c189a63b5427a0a9

**earn-more.html** — Room 3 — Earn More
  Bytes:  39,164
  MD5:    9016bc12b90a459c10057adfb620da6f
  SHA1:   08fc5c5114c0e75af96fb2b9fc36bb6c196c8c18
  SHA256: f622b4c242bdaaf0f29cc8544dba40dd4b6569bfbd87a3c71db7d119382f4a73

**create-more.html** — Room 4 — Create More
  Bytes:  39,108
  MD5:    badffe6f9e230b059cece8353bb0e8af
  SHA1:   3e2e79284876e7ba2337f8b3b7636b41e1e17b78
  SHA256: 77ebba9e514b1e26f205753c6ae9aae0954259ca93d2ee7e2b03bd91b327577c

**think-better.html** — Room 5 — Think Better
  Bytes:  39,336
  MD5:    341a060e043c49de593a0244a6c92857
  SHA1:   75099a991ae239e94cf2b70ca9e2bf0394cb795f
  SHA256: 2cfaaa166e0d6b23ef01a8539fdb9d7317e4eac88022bf2b088c1eb7fb94f6fa

**future-you.html** — Room 6 — Future You
  Bytes:  40,048
  MD5:    146d49070b6583bd00f9c1260d2881f8
  SHA1:   d10addc3a14022abc92de8adf47dfd5b8ca66eb5
  SHA256: 6d94caf723d67128045410cf491a75e83a570e80232b1dacf06ac5d93c11c7b9

**daily-upgrade.html** — Daily Upgrade Tool
  Bytes:  100,103
  MD5:    285f034f89c5b7ad9046aacf42904d0f
  SHA1:   091c25ee8e3a7f05edeb1bc06aa9b516ba3111bd
  SHA256: f1fb022f6a67bc2f1df5290e3a9a20483f0cd34d463b2a0a3ecb0bc968a24674

**journal.html** — The Daily Upgrade Journal
  Bytes:  97,676
  MD5:    a1bfdb29700f2e7d98102814847d2584
  SHA1:   fd2c137850a7f111c9a9cb45d07f6ef341ecc6c6
  SHA256: ff9a6c47f824842b3f3e5c484960e66f0a48ee341f87cd70ca212a731cbb10f3

**about.html** — About
  Bytes:  38,353
  MD5:    2f667aa253e037ec95aeaa71199a8dad
  SHA1:   7c0c2f6c881006061934ab56ae4c444e2cba56ec
  SHA256: f87421f7c9d2dc8521b82c1fa2a16a804a6c8805d7834fa8cecec4a2ec29ac49

**contact.html** — Contact
  Bytes:  28,515
  MD5:    cb4fdb2b7f5a00537ace1b959fbb474f
  SHA1:   a85f456f9df9a8c02790904d762f1a2beb4c9677
  SHA256: 18d2326c5a085900b15a927b8af68b8902b6410ccce73a8702042a3ce29571b7

**disclaimer.html** — Disclaimer
  Bytes:  29,106
  MD5:    da31ef97d2b846856a9e560eb42f296b
  SHA1:   9d485e66c92265c5bf67c95b28234479a4faa4ad
  SHA256: ace385a70a86a3075028fe6bc1bb9143fea496ccc863d4eee5eb62ce63288475

**Primary pages total: 609,644 bytes (595 KB)**

### Legacy SPA (unchanged since RC1)

**index.html** — Inner pages SPA (prompts library, course, book)
  Bytes:  371,101
  MD5:    7d302c13c4b056570032570858e0b8f3
  SHA1:   f08859f52df270818574da1bd5a87bbb1b476fcb
  SHA256: 83abe66184762bf4651f5e830f996a98c5f30d85c4782aec6b701887813b5b1a

**Grand total HTML: 980,745 bytes (957 KB)**

---

## VALIDATION RECORD — RC1.7 FINAL

### JavaScript syntax (node --check)

| Page | Blocks | Result |
|------|--------|--------|
| niith_homepage.html | 2 | PASS |
| learn-faster.html | 1 | PASS |
| work-smarter.html | 1 | PASS |
| earn-more.html | 1 | PASS |
| create-more.html | 1 | PASS |
| think-better.html | 1 | PASS |
| future-you.html | 1 | PASS |
| daily-upgrade.html | 1 | PASS |
| journal.html | 1 | PASS |
| about.html | 1 | PASS |
| contact.html | 1 | PASS |
| disclaimer.html | 1 | PASS |

**12 / 12 PASS**

### Mobile navigation

| Page | Burger | Drawer | Open | Close | ESC | aria-expanded |
|------|--------|--------|------|-------|-----|---------------|
| Homepage | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Learn Faster | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Work Smarter | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Earn More | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Create More | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Think Better | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Future You | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Daily Upgrade | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Journal | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| About | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Contact | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Disclaimer | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

### SEO

| Feature | Coverage |
|---------|----------|
| `<title>` | 12 / 12 |
| `meta description` | 12 / 12 |
| `rel="canonical"` | 12 / 12 |
| `og:title` | 12 / 12 |
| `og:image` | 12 / 12 |
| `twitter:card` | 12 / 12 |
| `viewport-fit=cover` | 12 / 12 |

### Accessibility

| Feature | Coverage |
|---------|----------|
| `prefers-reduced-motion` | 12 / 12 |
| `aria-expanded` on drawers | 12 / 12 |
| ESC closes every drawer | 12 / 12 |
| `focus-visible` styles | 12 / 12 |
| Input labels + aria-label | Daily Upgrade + Journal |
| Skip navigation | Homepage, About, Contact, Disclaimer |

### Internal links — zero broken links on all 12 primary pages

### Legal pages reachable — About / Contact / Disclaimer linked from all 12 pages

---

## KNOWN ACCEPTED CONDITIONS

**index.html duplicate IDs** — The legacy SPA (`index.html`, unchanged since RC1, md5 `7d302c13c4b056570032570858e0b8f3`) contains duplicate element IDs (`promptModal`, `modalCat`, `modalTitle`). This is structural to the original SPA and has no impact on any of the 12 primary pages. No code has been modified per release instructions.

**og:image file not yet created** — All 12 pages reference `https://nailinthehead.org/og-image.jpg`. This 1200×630px social share card does not yet exist as a file. Social link previews will show no thumbnail until it is created and uploaded. Site functionality is not affected.

---

## ARCHITECTURE REFERENCE

```
Stack:        HTML5 + CSS3 + Vanilla JS
Dependencies: Google Fonts CDN (Bebas Neue, Playfair Display, DM Sans)
              Google Analytics G-KQSV3HCTLG (homepage only)
Build step:   None
Server:       None required (pure static files)
Deploy:       Copy files → Cloudflare Pages → live in ~30 seconds

Fonts:   Bebas Neue (display headings)
         Playfair Display (editorial / pull quotes)
         DM Sans (body text)

Palette: --void:#05060a  --gold:#c8a84b  --bone:#ede8dc
         --dust:#b8a888  --muted:#8a7e6e  --abyss:#080a10

Rooms:   Learn #6480d4  Work #4ab8c8  Earn #c8943c
         Create #5ab87a  Think #9a7cd4  Future #4ab8c8
```

---

## VERSION CHAIN

```
RC1          Baseline — 10 HTML files sealed
  └─ RC1.1   ZONE labels → room names (text only, 6 files)
       └─ RC1.2   JS syntax repair — room pages (6 files, 1 line each)
            └─ RC1.3   Phase 1 humanization — homepage + daily upgrade
                 └─ RC1.4   New pages — about, contact, disclaimer
                      └─ RC1.5   JS repair — daily-upgrade syntax error
                           └─ RC1.6   Mobile critical fixes — drawer, iOS zoom, reduced-motion
                                └─ RC1.7   Audit cleanup — legal links, SEO, labels, canonical
                                     └─ RC1.7 FINAL  ← THIS PACKAGE
```

---

**NAILINTHEHEAD RC1.7 FINAL**
**Sealed: 2026-06-01**
**✅ READY FOR PRODUCTION DEPLOYMENT**
