# Skill: Add App

Help the user add a new app entry to `data/apps.yaml`.

## Steps

1. Ask for the following information (all fields except name and description are optional):
   - App name
   - Short description (1-2 sentences)
   - Section name (look at existing sections in `data/apps.yaml` and offer to add to one or create new)
   - Logo filename (e.g. `my-app.svg`; user should place file in `static/logos/`)
   - Tool URL (the live app)
   - Docs URL
   - Repo URL (GitHub)

2. Generate the YAML snippet:

```yaml
- name: "<App Name>"
  logo: "/logos/<filename>.svg"
  description: "<description>"
  links:
    tool: "<tool URL>"
    docs: "<docs URL>"
    repo: "<repo URL>"
```

   Omit any `links.*` keys for which the user provided no URL.
   Omit `logo` if no filename was provided.

3. Tell the user exactly where to paste it:
   - Open `data/apps.yaml`
   - Find the section named `<section name>`
   - Paste the snippet under `apps:`, indented with 6 spaces (2 extra relative to `apps:`)

4. If a logo filename was provided, remind the user to add `static/logos/<filename>.svg`.

5. Suggest running `npm run dev` to verify the result at http://localhost:1313.
