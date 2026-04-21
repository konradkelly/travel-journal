# My Travel Journal

A small data-driven React app that displays a personal travel journal. Each entry shows a destination photo, country name, visit dates, a short description, and a link to the location on Google Maps.

## What it does

- Reads travel entries from a central `data.js` array
- Maps over the data to render an `<Entry>` card for each destination
- Currently includes three sample entries: Mount Fuji (Japan), Sydney Opera House (Australia), and Geirangerfjord (Norway)

## Project structure

```
src/
  data.js       # Array of travel entry objects (image, title, country, dates, description, map link)
  App.jsx       # Maps over data and renders Entry components
  Entry.jsx     # Card component for a single journal entry
  Header.jsx    # Page header with globe icon and "my travel journal" title
```

## Getting started

```bash
npm install
npm run dev
```

Built with React 19 and Vite. Part of the Scrimba data-driven components module.
