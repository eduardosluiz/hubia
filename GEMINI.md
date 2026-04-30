# Hubia Project Constitution - Engineering Standards

## 1. Visual & UI Guidelines
- ALWAYS use 'rounded-sm' (square borders) for buttons, inputs, and cards.
- ALWAYS maintain the "Cyber-Industrial / Command Center" aesthetic (Dark Mode, Neon Accents, Glassmorphism).
- Sidebar must remain collapsible with Framer Motion animations.

## 2. Flow Builder Mandatory Features (DO NOT REVERT)
- TOOLBOX: Must always contain: WhatsApp, E-mail, Delay (Timer icon), Condition (2 branches), Audience, Tag, and Webhook.
- CONNECTIONS: Lines must follow nodes in real-time (60fps) using DOM Path manipulation.
- CONDITION NODE: Must have two output connectors: BLUE (True/Sim) and RED (False/Não).
- DELAY NODE: Must be a circular glass Timer icon, showing time value below.
- INTERACTIVITY: Clicking a node must open the Node Inspector sidebar.
- NAVIGATION: Canvas must support Pan (dragging background) and Zoom.

## 3. CRM Standards
- Table must always include columns: Identification, E-mail, Tags, and Status.
- Modals must always have a Close (X) button in the top right.
- Importing leads must allow bulk tagging.
