# Deploying on GitHub Pages

Target address: **https://saadzil.github.io/tangier2027/** (it becomes live only after the steps below).

## Option A — from the GitHub website (no software needed)
1. Sign in to GitHub as **saadzil**.
2. Click **New repository** → name it exactly `tangier2027` → **Public** → **Create repository**.
3. On the empty repository page, click **uploading an existing file**.
4. Unzip `tangier2027_website_html.zip` on your computer, open the `tangier2027` folder, select **everything inside it**
   (including the hidden `.nojekyll` file and the `assets` and `docs` folders) and drag it into the browser.
   > `index.html` must be at the top level of the repository, not inside a sub-folder.
5. Click **Commit changes**.
6. Go to **Settings → Pages**. Under *Build and deployment*, choose **Source: Deploy from a branch**,
   **Branch: main**, folder **/ (root)**, then **Save**.
7. Wait 1–3 minutes, then open https://saadzil.github.io/tangier2027/.

## Option B — with Git (command line)
```bash
cd tangier2027
git init
git add .
git commit -m "Tangier 2027 conference website"
git branch -M main
git remote add origin https://github.com/saadzil/tangier2027.git
git push -u origin main
```
Then do step 6 above.

## Updating the site later
Edit `index.html` (or add PDFs, logos, photos), then upload the changed files to the repository
(GitHub website: open the folder → **Add file → Upload files** → Commit). The site updates within a few minutes.
If you do not see the change, refresh with Ctrl+F5 (cache).

## Checks after publication
- The page opens; the menu links go to each section.
- The three programme tabs work; the PDF downloads open.
- Share the URL in a private message to check the social preview image.
- Optional: test the structured data at https://search.google.com/test/rich-results
