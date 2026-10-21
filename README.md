# Intel's Climate Promises, Checked — English / العربية

The bilingual edition of a data case study: Intel's five public sustainability deadlines set against Intel's own reported figures for 2021–2025.

- English: https://srao189.github.io/03-prj-intel-localization/
- العربية: https://srao189.github.io/03-prj-intel-localization/ar/

What this project demonstrates is localization done at the source rather than at load time:

- `ar/index.html` is a hand-authored `lang="ar" dir="rtl"` page, linked to the English page with `hreflang` alternates. There is no machine-translation widget, no third-party script and no translation cookie, so both pages keep a strict self-only Content-Security-Policy.
- One stylesheet serves both directions through CSS logical properties (`inset-inline-start`, `padding-inline-start`, `text-align: start/end`).
- Time reads in the reader's direction: the Arabic timeline and every chart are mirrored, so 2021 sits on the right.
- Fonts are self-hosted: Archivo for Latin script and digits, and Noto Kufi Arabic for Arabic (both under the SIL Open Font License). Arabic headings drop negative letter-spacing, which would break the joined letterforms.

Every yearly number comes from the performance data table in Intel's [2025-26 Corporate Responsibility Report executive summary](https://csrreportbuilder.intel.com/pdfbuilder/pdfs/CSR-2025-26-Executive-Summary.pdf#page=9). The Arabic translation was drafted with AI help and has not yet been reviewed by a native speaker.

This began as a class assignment that used the Google Website Translator. The graded version is preserved at the [`submitted-original`](https://github.com/SRao189/03-prj-intel-localization/tree/submitted-original) tag.

Independent student project; not affiliated with or endorsed by Intel.
