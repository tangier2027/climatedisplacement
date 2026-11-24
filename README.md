# Tangier 2027 — International Conference Website (static HTML)

Bilingual website of the international conference
**Refugee Law in the Face of Climate-Induced Migration: What Developments for Effective Contemporary Protection?**
Tangier, 19–21 January 2027 — Faculty of Legal and Political Sciences of Tangier, Abdelmalek Essaâdi University.

It is built like a portfolio site: **plain HTML pages that you edit directly**, one stylesheet, one small script.
No framework, no build step, no database. Works on GitHub Pages and opens directly from your computer.

```
tangier2027/
├── index.html            The website (English for now) → https://saadzil.github.io/tangier2027/
├── assets/css/style.css  Design: colours, fonts, layout
├── assets/js/site.js     Interactions only (programme tabs, mobile menu, biography windows)
├── assets/img/logos/     Institutional logos
├── assets/img/people/    Photographs
├── assets/img/           roundtable illustration, social preview image, favicons
├── docs/                 PDFs offered for download
├── 404.html  .nojekyll   GitHub Pages helpers
└── DEPLOY.md             How to publish
```

## How to edit
Open `index.html` in any text editor (VS Code, Notepad++, even GitHub's editor).
Each section starts with a clear comment, for example:

```html
<!-- ===================== SCIENTIFIC PROGRAMME (3 day tabs) ===================== -->
```

Change the text between the tags and save.
The site is in English for now; the Arabic version is kept aside (folder `arabic_version_for_later`, outside the website) for when you want to add it back.

### Programme
Each presentation looks like this:
```html
<li class="talk"><span class="tm" dir="ltr">12:15–12:35</span><span class="n" aria-hidden="true">1</span><div>
  <div class="t">Presentation title…</div>
  <div class="who"><b>Speaker:</b> <span class="tbc">To be confirmed</span></div>
</div></li>
```
To confirm a speaker, replace `<span class="tbc">To be confirmed</span>` with
`<span class="nm">Name SURNAME</span> — University, Country`.
Session chairs and rapporteurs are in the line `<div class="roles">…` just above the presentations.

### Speakers
Every speaker uses the same card (`<article class="sp-card">`): photo 4:5, label, name, one line, and two buttons
**Read Abstract** and **View Presentation**. Each button opens a window placed at the end of the SPEAKERS section:
`<dialog id="abs-ID">` (abstract) and `<dialog id="pres-ID">` (presentation). IDs: `michel-prieur`, `abdelkader-moussaid`,
`talk-1` … `talk-24`.

- **Add an abstract (only the text supplied by the speaker):** in `<dialog id="abs-ID">`, replace
  `<p class="soon-msg">Abstract coming soon.</p>` with `<p>Text of the abstract…</p>`.
- **Add a presentation document:** copy the PDF into `docs/`, then in `<dialog id="pres-ID">` replace
  `<p class="soon-msg">Presentation materials coming soon.</p>` with
  `<a class="btn btn-primary" href="docs/FILE.pdf" download>Download the presentation</a>`.
- **Confirm the speaker of presentation N:** in the card that has `data-dlg="abs-talk-N"`, replace the grey silhouette
  `<div class="portrait empty">…</div>` with `<div class="portrait"><img src="assets/img/people/NAME.jpg" alt="Name SURNAME"></div>`
  (photograph supplied or authorised by the person) and `<span class="tbc">To be confirmed</span>` with the name
  (also in the two windows `abs-talk-N` and `pres-talk-N`, and in the SCIENTIFIC PROGRAMME section).

### Organising Committee
Each member is an `<article class="person member">`: photograph (or initials circle), then name, then role.
To add a photograph, put it in `assets/img/people/` and replace `<div class="ini" …>SZ</div>` with
`<img src="assets/img/people/saad-zilali.jpg" alt="Saad ZILALI">`. To add a member, copy one `<article>` block.

### Add sponsors and supporting partners — the moving logo chain (confirmed and authorised only)
In the SPONSORS section the logos move in a continuous chain. The chain contains two identical lists
(`<div class="set">` and `<div class="set" aria-hidden="true">`) so that it loops without a gap.
1. Put the logo in `assets/img/logos/` (PNG with transparent background).
2. In **both** lists, replace one `<span class="logo-tile placeholder">Partner logo</span>` with:
```html
<a class="logo-tile" href="https://www.partner.org" target="_blank" rel="noopener" title="Partner name"><img src="assets/img/logos/partner.png" alt="Partner name"></a>
```
3. Remove the placeholders you do not need (in both lists). With few logos, repeat them so the chain fills the width.
4. When partners are announced, you can delete the sentence `<p class="empty">…</p>` in the panel below the chain.
The chain pauses when the mouse is over it, and stays still for visitors who disable animations.
To slow it down or speed it up, change `38s` in `.marquee .track{… animation:chain 38s …}` in `assets/css/style.css`.

### Publish a document
Copy the PDF into `docs/`. In the SCIENTIFIC DOCUMENTS section, replace
`<span class="soon">Coming soon</span>` with `<a href="docs/FILE.pdf" download>Download · PDF</a>`
and remove ` off` from `<article class="doc off">`.
For the Concept Note, also update the hero button (HOME section): replace
`href="#documents">Download the Conference Concept Note<span class="badge">Coming soon</span>`
with `href="docs/FILE.pdf" download>Download the Conference Concept Note`.
To publish a revised programme, overwrite the PDF in `docs/` keeping the same file name.

### International Scientific Roundtable and Tangier Declaration
The section `CLOSING ROUNDTABLE AND TANGIER DECLARATION` reproduces pages 10 and 11 of the official programme PDF
(roundtable, Tangier Declaration, Official Closing Session, organisational notes). Edit it only if the PDF changes.
- Moderator / General Rapporteur: replace `<span class="tbc">To be confirmed</span>` with the name once confirmed.
- After formal adoption of the Declaration (not before): replace the status sentence inside `<p class="status">`
  with `Adopted on 21 January 2027`, change it to `<p class="status adopted">`, and add a download button after it:
  `<div style="margin-top:22px"><a class="btn btn-primary" href="docs/Tangier_Declaration_2027.pdf" download>Download the Tangier Declaration</a></div>`

### Logos
Replace a file in `assets/img/logos/` keeping its name. Use only genuine logos.

## Fonts
Loaded from Google Fonts (Cormorant Garamond, Source Serif 4, Source Sans 3).

## Search engines and sharing
Title, description, canonical address, language alternates, social preview (`assets/img/og-image.png`) and Event
structured data are in the `<head>` of each page. If the final address is different from
`https://saadzil.github.io/tangier2027/`, replace it in both pages.
