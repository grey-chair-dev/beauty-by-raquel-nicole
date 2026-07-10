# Stitch design options

Run from project root (requires `STITCH_API_KEY` in `.env.local`):

```bash
npm run stitch:fetch-options
```

This downloads three screens from project **Raquel Nicole Brand Redesign** (`1021744346406914327`) and copies PNG + HTML previews to `public/design-options/` for `/design-options`.

| Option | Screen | ID |
|--------|--------|-----|
| 1 Modern Retro Homepage | `modern-retro-homepage` | `8c2205705ee446eda10b3a57860d0434` |
| 2 Maximalist Retro Collage | `maximalist-retro-collage` | `37def5a0809e4635bb10922acec3e22d` |
| 3 Sophisticated Minimalist Retro | `sophisticated-minimalist-retro` | `b4a3a7b212ff4042a17c404329cc0a47` |

Raw downloads are kept under `stitch/design-options/<slug>/`.
