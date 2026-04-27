import React, { useState } from 'react';

function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'assessment':
        return <window.Assessment setActivePage={setActivePage} />;
      case 'services':
        return <window.Services setActivePage={setActivePage} />;
      case 'about':
        return <window.About setActivePage={setActivePage} />;
      case 'home':
      default:
        return <window.Home setActivePage={setActivePage} />;
    }
  };

  return (
    <>
      <window.Nav activePage={activePage} setActivePage={setActivePage} />
      <main>{renderPage()}</main>
      <window.Footer setActivePage={setActivePage} />
    </>
  );
}

window.App = App;