---
version: "alpha"
name: "NEXUS.CORE // Identity Protocol"
description: "Nexus Core Login Section is designed for authenticating users through a focused access flow. Key features include reusable structure, responsive behavior, and production-ready presentation. It is suitable for authentication screens in web products."
colors:
  primary: "#6366F1"
  secondary: "#71717A"
  tertiary: "#C968F7"
  neutral: "#71717A"
  background: "#6366F1"
  surface: "#D4D4D8"
  text-primary: "#71717A"
  text-secondary: "#18181B"
  border: "#000000"
  accent: "#6366F1"
typography:
  display-lg:
    fontFamily: "DM Sans"
    fontSize: "72px"
    fontWeight: 300
    lineHeight: "72px"
    letterSpacing: "-0.025em"
  body-md:
    fontFamily: "Roboto Mono"
    fontSize: "10px"
    fontWeight: 400
    lineHeight: "15px"
    letterSpacing: "0.1em"
    textTransform: "uppercase"
  label-md:
    fontFamily: "DM Sans"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "24px"
rounded:
  md: "0px"
spacing:
  base: "8px"
  sm: "1px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  gap: "4px"
  card-padding: "20px"
  section-padding: "24px"
components:
  button-link:
    textColor: "#27272A"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    padding: "1px"
---

## Overview

- **Composition cues:**
  - Layout: Grid
  - Content Width: Full Bleed
  - Framing: Glassy
  - Grid: Strong

## Colors

The color system uses light mode with #6366F1 as the main accent and #71717A as the neutral foundation.

- **Primary (#6366F1):** Main accent and emphasis color.
- **Secondary (#71717A):** Supporting accent for secondary emphasis.
- **Tertiary (#C968F7):** Reserved accent for supporting contrast moments.
- **Neutral (#71717A):** Neutral foundation for backgrounds, surfaces, and supporting chrome.

- **Usage:** Background: #6366F1; Surface: #D4D4D8; Text Primary: #71717A; Text Secondary: #18181B; Border: #000000; Accent: #6366F1

- **Gradients:** bg-gradient-to-br from-indigo-400 to-indigo-600, bg-gradient-to-br from-black/10 to-transparent via-black/5

## Typography

Typography pairs DM Sans for display hierarchy with Roboto Mono for supporting content and interface copy.

- **Display (`display-lg`):** DM Sans, 72px, weight 300, line-height 72px, letter-spacing -0.025em.
- **Body (`body-md`):** Roboto Mono, 10px, weight 400, line-height 15px, letter-spacing 0.1em, uppercase.
- **Labels (`label-md`):** DM Sans, 16px, weight 400, line-height 24px.

## Layout

Layout follows a grid composition with reusable spacing tokens. Preserve the grid, full bleed structural frame before changing ornament or component styling. Use 8px as the base rhythm and let larger gaps step up from that cadence instead of introducing unrelated spacing values.

Treat the page as a grid / full bleed composition, and keep that framing stable when adding or remixing sections.

- **Layout type:** Grid
- **Content width:** Full Bleed
- **Base unit:** 8px
- **Scale:** 1px, 8px, 12px, 16px, 20px, 24px, 32px, 48px
- **Section padding:** 24px, 64px
- **Card padding:** 20px, 24px, 64px
- **Gaps:** 4px, 6px, 8px, 12px

## Elevation & Depth

Depth is communicated through glass, border contrast, and reusable shadow or blur treatments. Keep those recipes consistent across hero panels, cards, and controls so the page reads as one material system.

Surfaces should read as glass first, with borders, shadows, and blur only reinforcing that material choice.

- **Surface style:** Glass
- **Borders:** 0.8px #000000; 0.8px #FDFBF6
- **Shadows:** rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(99, 102, 241, 0.5) 0px 0px 8px 0px; rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.05) 0px 8px 10px -6px
- **Blur:** 4px, 12px

### Techniques
- **Gradient border shell:** Use a thin gradient border shell around the main card. Wrap the surface in an outer shell with 0px padding and a 9999px radius. Drive the shell with none so the edge reads like premium depth instead of a flat stroke. Keep the actual stroke understated so the gradient shell remains the hero edge treatment. Inset the real content surface inside the wrapper with a slightly smaller radius so the gradient only appears as a hairline frame.

## Shapes

Shapes rely on a tight radius system anchored by 9999px and scaled across cards, buttons, and supporting surfaces. Icon geometry should stay compatible with that soft-to-controlled silhouette.

Use the radius family intentionally: larger surfaces can open up, but controls and badges should stay within the same rounded DNA instead of inventing sharper or pill-only exceptions.

- **Corner radii:** 9999px
- **Icon treatment:** Linear
- **Icon sets:** Solar

## Components

Anchor interactions to the detected button styles.

### Buttons
- **Links:** text #27272A, radius 0px, padding 1px, border 0px solid rgb(229, 231, 235).

### Iconography
- **Treatment:** Linear.
- **Sets:** Solar.

## Do's and Don'ts

Use these constraints to keep future generations aligned with the current system instead of drifting into adjacent styles.

### Do
- Do use the primary palette as the main accent for emphasis and action states.
- Do keep spacing aligned to the detected 8px rhythm.
- Do reuse the Glass surface treatment consistently across cards and controls.
- Do keep corner radii within the detected 9999px family.

### Don't
- Don't introduce extra accent colors outside the core palette roles unless the page needs a new semantic state.
- Don't mix unrelated shadow or blur recipes that break the current depth system.
- Don't exceed the detected moderate motion intensity without a deliberate reason.

## Motion

Motion feels controlled and interface-led across text, layout, and section transitions. Timing clusters around 150ms and 100ms. Easing favors ease and cubic-bezier(0.4. Hover behavior focuses on color changes. Scroll choreography uses GSAP ScrollTrigger for section reveals and pacing.

**Motion Level:** moderate

**Durations:** 150ms, 100ms

**Easings:** ease, cubic-bezier(0.4, 0, 0.2, 1), ease-out

**Hover Patterns:** color

**Scroll Patterns:** gsap-scrolltrigger
