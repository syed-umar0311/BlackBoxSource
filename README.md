# BlackBoxSourcing - React Frontend

React JSX conversion of the BlackBoxSourcing website. UI remains identical to the original HTML/CSS version.

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Structure

- `src/pages/` - Index, Service, Work, Contact, NotFound
- `src/components/` - MouseCircle, CPHTime, Loader, PageLink
- `src/css/` - styles.css, service.css, contact.css, work.css
- `public/images/` - static images (copied from original `images/` folder)

## Routes

- `/` - Home
- `/work` - Work
- `/service` - Our Story
- `/contact` - Contact
- `*` - 404
