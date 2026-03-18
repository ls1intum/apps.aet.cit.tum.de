# apps.aet.cit.tum.de

Static site listing apps and tools built by the [Applied Education Technologies (AET)](https://aet.cit.tum.de) chair at TU Munich.
Live at **https://apps.aet.cit.tum.de**, deployed via GitHub Pages.

## Quick start

```bash
npm install
npm run dev   # http://localhost:1313
```

## Adding a tool

All tools are listed in **`data/apps.yaml`**. No template changes needed.

### 1. Add an entry to `data/apps.yaml`

Open the file and append your tool under the relevant section (or add a new section):

```yaml
sections:
  - name: "Your Section"
    description: "Optional subtitle shown under the section heading"
    apps:
      - name: "My Tool"
        logo: "/logos/my-tool.svg"          # optional - see step 2
        description: "One or two sentences describing the tool and its audience."
        links:
          tool: "https://my-tool.aet.cit.tum.de"       # "Open Tool" button
          docs: "https://docs.my-tool.aet.cit.tum.de"  # "Docs" button
          repo: "https://github.com/ls1intum/my-tool"  # "Repo" button
```

**All fields except `name` and `description` are optional.**
Omitting a `links.*` key hides that button entirely.
Omitting `logo` shows a two-letter initials placeholder instead.

### 2. Add a logo (optional)

Place an SVG file in `static/logos/`, e.g. `static/logos/my-tool.svg`.
A square 40x40 px viewBox works best.
If you skip this, the card shows a coloured initials badge automatically.

### 3. Verify locally

```bash
npm install   # first time only
npm run dev   # opens http://localhost:1313
```

### 4. Push to `main`

GitHub Actions builds and deploys the site automatically.

---

### Adding a new section

Add a new entry under `sections:` in `data/apps.yaml`:

```yaml
  - name: "New Section Name"
    description: "Optional description"
    apps:
      - name: "First Tool in Section"
        ...
```

Sections appear on the homepage in the order they are listed in the file.

## Tech stack

Hugo Extended + Tailwind CSS v3. No JavaScript framework, no CDN dependencies.

## Deployment

Push to `main` - GitHub Actions builds and deploys automatically.
First-time setup: set **Source: GitHub Actions** in repository Settings > Pages.