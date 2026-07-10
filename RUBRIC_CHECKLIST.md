# Rubric Checklist

## Responsive Timeline

- Completed.
- Verified with desktop, tablet, and mobile layouts.
- Large screens use a horizontal scrolling Flexbox row.
- Small screens stack cards vertically.

## Interactive Milestone Cards

- Completed.
- Each card shows year, title, image, and teaser by default.
- Additional details reveal on hover, focus, or tap.
- Implemented with semantic `<details>` and `<summary>` for keyboard and touch access.

## CSS Styling and Layout

- Completed.
- Intel-inspired blue, white, and neutral palette.
- Consistent spacing, card sizes, border radii, shadows, and typography.
- CSS custom properties used for colors, spacing, and shadows.

## Images Added to Timeline

- Completed.
- Image count: 5 local milestone visuals in `assets/`.
- All images use meaningful `alt` text.

## CSS Transforms LevelUp

- Completed.
- Cards lift slightly on hover/focus.
- Shadow and transform transitions included.
- `prefers-reduced-motion` respected.

## Scroll Snap LevelUp

- Completed.
- Horizontal timeline uses `scroll-snap-type`.
- Cards use `scroll-snap-align`.
- Disabled on stacked mobile layout.

## Custom Images LevelUp

- Completed.
- Replaced missing starter visuals with custom local SVG milestone illustrations tailored to each milestone theme.

## GitHub Pages Deployment Status

- Prepared.
- Project uses relative paths and `index.html` as the public entry point.
- Ready to publish after repository creation and push.

## Accessibility Checks

- Semantic landmarks used: header, nav, main, section, footer.
- Keyboard focus states visible.
- Timeline cards are accessible through `<details>/<summary>`.
- Skip link included.
- Contrast kept high against light surfaces.

## Responsive Viewport Checks

- 1440px: horizontal timeline, working scroll, no broken images.
- 1024px: horizontal timeline, stable card sizing, no clipped text.
- 768px: stacked mobile/tablet layout, readable spacing.
- 390px: stacked layout, no horizontal page overflow.
- 320px: stacked layout, buttons and headings remain readable.
