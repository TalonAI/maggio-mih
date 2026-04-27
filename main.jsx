import React from 'react';
import { createRoot } from 'react-dom/client';

window.React = React;

async function startApp() {
  await import('./components.jsx');
  await import('./Home.jsx');
  await import('./Assessment.jsx');
  await import('./Services.jsx');
  await import('./About.jsx');
  await import('./App.jsx');

  createRoot(document.getElementById('root')).render(<window.App />);
}

startApp();