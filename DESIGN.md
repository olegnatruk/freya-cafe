# DESIGN.md: Freya Studio Cafe Design System

## Design Persona & Tone
- **Archetype**: Warm Artisan & Creative Soul
- **Voice**: Welcoming, refined, cozy, expressive, authentic.

## Color Tokens
```css
:root {
  /* Warm Backgrounds */
  --bg-primary: #FDFBF7;
  --bg-secondary: #F6F1E8;
  --bg-tertiary: #EFE6D8;
  --bg-card: rgba(255, 255, 255, 0.85);

  /* Deep Warm Darks */
  --text-primary: #1F1714;
  --text-secondary: #594B44;
  --text-muted: #8C7B72;

  /* Brand Accents */
  --accent-terracotta: #C86D51;
  --accent-terracotta-hover: #B25B40;
  --accent-toast: #D98E3A;
  --accent-caramel: #E5A861;
  --accent-cream: #FAF5ED;
  --accent-sage: #6B7C6E;

  /* Borders & Shadows */
  --border-light: rgba(89, 75, 68, 0.12);
  --border-accent: rgba(200, 109, 81, 0.25);
  --shadow-soft: 0 10px 30px -5px rgba(31, 23, 20, 0.05);
  --shadow-elevated: 0 20px 40px -10px rgba(31, 23, 20, 0.1);
  --glass-bg: rgba(253, 251, 247, 0.75);
  --glass-border: rgba(255, 255, 255, 0.6);
}
```

## Typography
- **Headings (Display)**: `Fraunces`, serif (Google Fonts) - Variable font with warm, organic serif curves and soft warmth.
- **Body & Controls**: `Plus Jakarta Sans`, sans-serif (Google Fonts) - Clean, legibly spaced contemporary sans.

## Layout & Components Rules
- **No generic AI tells**: Avoid Inter font, avoid SaaS purple-blue gradients, avoid gray text on dark gray, avoid generic cards with square icon badges.
- **Micro-Animations**: Smooth scale hover on buttons, scroll-triggered fade & slide up, subtle floating ambient badges.
- **Icons**: 100% custom SVG icons with warm stroke profiles.
