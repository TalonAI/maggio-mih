import React, { useState, useEffect } from 'react';

// Shared components: Nav, Footer, Button, SectionLabel
// Exported to window for use across page files

function Nav({ activePage, setActivePage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'assessment', label: 'Assessment' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
  ];

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    background: scrolled || menuOpen ? 'rgba(248,246,242,0.97)' : 'transparent',
    backdropFilter: scrolled ? 'blur(8px)' : 'none',
    borderBottom: scrolled ? '1px solid #E2DDD8' : '1px solid transparent',
    transition: 'all 0.3s ease',
    padding: '0 40px',
  };

  const innerStyle = {
    maxWidth: 1120,
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 64,
  };

  const logoStyle = {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 20,
    fontWeight: 600,
    letterSpacing: '0.02em',
    color: scrolled || menuOpen ? '#1B2B42' : '#ffffff',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'baseline',
    gap: 10,
  };

  const linkStyle = (id) => ({
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 13,
    fontWeight: 400,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    color:
      activePage === id
        ? scrolled
          ? '#2A4535'
          : '#ffffff'
        : scrolled
          ? '#6B6560'
          : 'rgba(255,255,255,0.75)',
    cursor: 'pointer',
    textDecoration: 'none',
    paddingBottom: 2,
    borderBottom: activePage === id ? '1px solid currentColor' : '1px solid transparent',
    transition: 'color 0.2s',
  });

  const ctaStyle = {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    background: '#2A4535',
    color: '#ffffff',
    border: 'none',
    cursor: 'pointer',
    padding: '9px 20px',
    borderRadius: 2,
  };

  return (
    <nav style={navStyle}>
      <div style={innerStyle}>
        <div style={logoStyle} onClick={() => setActivePage('home')}>
          Maggio MIH, LLC
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {links.map((l) => (
            <span key={l.id} style={linkStyle(l.id)} onClick={() => setActivePage(l.id)}>
              {l.label}
            </span>
          ))}

          <button style={ctaStyle} onClick={() => setActivePage('about')}>
            Get in Touch
          </button>
        </div>
      </div>
    </nav>
  );
}

function Footer({ setActivePage }) {
  const s = {
    wrapper: {
      background: '#1B2B42',
      color: 'rgba(255,255,255,0.55)',
      padding: '56px 40px 40px',
    },
    inner: { maxWidth: 1120, margin: '0 auto' },
    top: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 48,
      flexWrap: 'wrap',
      gap: 32,
    },
    brand: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: 22,
      fontWeight: 600,
      color: '#fff',
      marginBottom: 6,
    },
    tagline: {
      fontFamily: "'DM Sans', sans-serif",
      fontSize: 13,
      color: 'rgba(255,255,255,0.5)',
      lineHeight: 1.6,
      maxWidth: 280,
    },
    nav: { display: 'flex', flexDirection: 'column', gap: 10 },
    link: {
      fontFamily: "'DM Sans', sans-serif",
      fontSize: 13,
      color: 'rgba(255,255,255,0.6)',
      cursor: 'pointer',
      textDecoration: 'none',
    },
    divider: {
      borderTop: '1px solid rgba(255,255,255,0.1)',
      paddingTop: 24,
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 8,
    },
    small: {
      fontFamily: "'DM Sans', sans-serif",
      fontSize: 12,
      color: 'rgba(255,255,255,0.35)',
    },
  };

  return (
    <footer style={s.wrapper}>
      <div style={s.inner}>
        <div style={s.top}>
          <div>
            <div style={s.brand}>Paul Maggio</div>
            <div
              style={{
                ...s.small,
                color: 'rgba(255,255,255,0.4)',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: 12,
              }}
            >
              MIH: Make It Happen
            </div>
            <div style={s.tagline}>
              Operational clarity for owner-led businesses preparing to grow or transition.
            </div>
          </div>

          <div style={s.nav}>
            {[
              ['home', 'Home'],
              ['assessment', 'Assessment'],
              ['services', 'Services'],
              ['about', 'About & Contact'],
            ].map(([id, label]) => (
              <span key={id} style={s.link} onClick={() => setActivePage(id)}>
                {label}
              </span>
            ))}
          </div>
        </div>

        <div style={s.divider}>
          <span style={s.small}>© 2026 Paul Maggio / MIH: Make It Happen. All rights reserved.</span>
          <span style={s.small}>pmaggio@maggio-mih.com</span>
        </div>
      </div>
    </footer>
  );
}

function Button({ children, variant = 'primary', onClick, style: extraStyle }) {
  const base = {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 13,
    fontWeight: 500,
    letterSpacing: '0.07em',
    textTransform: 'uppercase',
    cursor: 'pointer',
    border: 'none',
    borderRadius: 2,
    display: 'inline-block',
    textDecoration: 'none',
    transition: 'opacity 0.2s',
  };

  const variants = {
    primary: { background: '#2A4535', color: '#fff', padding: '14px 28px' },
    secondary: {
      background: 'transparent',
      color: '#2A4535',
      padding: '13px 27px',
      border: '1px solid #2A4535',
    },
    ghost: {
      background: 'transparent',
      color: '#fff',
      padding: '13px 27px',
      border: '1px solid rgba(255,255,255,0.5)',
    },
    ghostDark: {
      background: 'transparent',
      color: '#1B2B42',
      padding: '13px 27px',
      border: '1px solid #1B2B42',
    },
  };

  return (
    <button style={{ ...base, ...variants[variant], ...extraStyle }} onClick={onClick}>
      {children}
    </button>
  );
}

function SectionLabel({ children }) {
  return (
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: '#2A4535',
        marginBottom: 16,
      }}
    >
      {children}
    </div>
  );
}

function Divider() {
  return <div style={{ borderTop: '1px solid #E2DDD8', margin: '0 auto' }} />;
}

Object.assign(window, { Nav, Footer, Button, SectionLabel, Divider });