# Intel Sustainability Timeline

This project is a standalone, static assignment site built for GitHub Pages deployment. It presents Intel-inspired sustainability milestones in a responsive timeline layout.

## Files

- `index.html` - page structure and milestone content
- `styles.css` - layout, theme, responsive behavior, hover transitions, and scroll snap
- `script.js` - small accessibility enhancement for timeline card hint text
- `assets/` - local SVG milestone visuals
- `RUBRIC_CHECKLIST.md` - rubric completion audit
- `REFLECTION_QUESTIONS.md` - reflection prompts for the written submission

## Local Preview

From this folder, run:

```bash
python -m http.server 8000
```

Then open:

```text
http://127.0.0.1:8000/
```

## GitHub Pages

This project is ready for GitHub Pages as a root-level static site.

Recommended deployment setup:

1. Push this folder to a GitHub repository.
2. In the repository settings, enable GitHub Pages.
3. Set the source to:
   - Branch: `main`
   - Folder: `/ (root)`
4. Your published URL will follow this pattern:

```text
https://USERNAME.github.io/REPOSITORY-NAME/
```

All asset references use relative paths, so the site will work under a repository subpath.

## Notes

- This is an educational project and not an official Intel website.
- The timeline visuals are custom local SVG assets created for the assignment.
