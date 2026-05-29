# Nail in the Head 🔨

**AI prompts for real life — copy, paste, done.**

A prompt library website for nailinthehead.org. Helps normal people get great results from AI without knowing how to write prompts themselves.

---

## What's in this project

```
nailinthehead/
├── index.html          ← The whole website (all pages)
├── css/
│   └── style.css       ← All styles
├── js/
│   └── app.js          ← All functionality
└── data/
    └── prompts.js      ← All prompts (add new ones here)
```

---

## How to run it locally

1. Download or clone this repo
2. Open `index.html` in your browser
3. That's it — no server needed, no installs

---

## How to add a new prompt

Open `data/prompts.js` and add a new object to the `PROMPTS` array:

```javascript
{
  id: 17,                    // Next number in sequence
  cat: "work",               // work | money | letters | everyday | business | writing
  title: "Your prompt title",
  desc: "One or two sentences describing what this prompt does.",
  preview: "First line of the prompt shown on the card...",
  prompt: `The full prompt text.
  
Use [SQUARE BRACKETS] for parts the user fills in.

My name: [YOUR NAME]
What I need: [DESCRIBE IT]`,
  tip: "A short practical tip for getting the best result."
}
```

Save the file and refresh the browser. Done.

---

## How to deploy to GitHub Pages (free hosting)

1. Create a free account at [github.com](https://github.com)
2. Create a new repository called `nailinthehead`
3. Upload all these files
4. Go to **Settings → Pages → Source → main branch**
5. Your site goes live at `https://yourusername.github.io/nailinthehead`
6. Point your nailinthehead.org domain at it in your domain settings

---

## Categories

| Key | Label |
|-----|-------|
| `work` | Work |
| `money` | Money |
| `letters` | Letters & Complaints |
| `everyday` | Everyday Life |
| `business` | Small Business |
| `writing` | Writing |

---

## Built with

- Plain HTML, CSS, JavaScript — no frameworks, no build tools
- Google Fonts (Bebas Neue + DM Sans)
- Works on all modern browsers

---

## Roadmap ideas

- [ ] Add more prompts (aim for 50+)
- [ ] Email signup for new prompts
- [ ] Premium prompts section
- [ ] User ratings on prompts
- [ ] "Did this work for you?" feedback

---

Made in Walsall. No nonsense.
