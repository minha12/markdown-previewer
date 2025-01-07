# Markdown Previewer

A real-time markdown previewer built with React that allows you to write markdown and see the rendered result instantly.

## Features

- Live preview of markdown text
- Support for headers, links, code blocks, lists
- Support for text formatting (bold, italic, strikethrough)
- Support for images
- Line break support

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Available Scripts

### `npm start`
Runs the app in development mode.

### `npm test`
Launches the test runner.

### `npm run build`
Builds the app for production.

### `npm run deploy`
Deploys the app to GitHub Pages. The live version will be available at [https://minha12.github.io/markdown-previewer/](https://minha12.github.io/markdown-previewer/)

## Deployment

To deploy to GitHub Pages:

1. Ensure your package.json has the correct homepage URL:
```json
"homepage": "https://minha12.github.io/markdown-previewer"
```

2. Run the deploy command:
```bash
npm run deploy
```

3. Your app will be deployed and accessible at https://minha12.github.io/markdown-previewer/

## Dependencies

- React
- marked
- sass

## Example Markdown

The app comes with example markdown text that demonstrates:
- Headers (H1, H2, H3)
- Links
- Block quotes
- Code blocks
- Lists (ordered and unordered)
- Text formatting
- Images
