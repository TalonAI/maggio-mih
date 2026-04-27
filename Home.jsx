
import React, { useState } from 'react';

// Home page — trimmed to 5 sections

function Home({ setActivePage }) {
  const wrap = { maxWidth: 1120, margin: '0 auto', padding: '0 40px' };

  // 1. Hero
  const hero = (
    <section style={{
      background: '#1B2B42', color: '#fff',
      padding: '160px 40px 120px', minHeight: '90vh',
      display: 'flex', alignItems: 'center',
    }}>
      <div style={{ ...wrap, padding: 0, width: '100%' }}>
        <div style={{ maxWidth: 780 }}>
          <div style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 11,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.45)', marginBottom: 28,
          }}>
            Paul Maggio · MIH: Make It Happen
          </div>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(44px, 6vw, 72px)', fontWeight: 500,
            lineHeight: 1.1, letterSpacing: '-0.01em',
            color: '#fff', margin: '0 0 28px',
          }}>
            Operational clarity for owner-led businesses preparing to grow.
          </h1>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 18,
            lineHeight: 1.75, color: 'rgba(255,255,255,0.7)',
            maxWidth: 600, marginBottom: 40,
          }}>
            Maggio MIH works with founders, owners, investors, and advisors to clean up messy workflows, scattered tools, weak reporting, and founder-dependent processes. The result is a business that is easier to run, easier to delegate, and easier to trust.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Button onClick={() => setActivePage('about')}>Schedule a Conversation</Button>
            <Button variant="ghost" onClick={() => setActivePage('assessment')}>Explore the Assessment</Button>
          </div>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 13,
            color: 'rgba(255,255,255,0.3)', marginTop: 36, lineHeight: 1.6,
          }}>
            Practical operating support. No AI hype. No bloated strategy decks.
          </p>
        </div>
      </div>
    </section>
  );

  // 2. Problem
  const symptoms = [
    'The owner is still the operating system',
    'Reporting is inconsistent or unreliable',
    'Workflows are undocumented',
    'Staff rely on memory instead of process',
    'Handoffs create friction',
    'The business is harder to delegate than it should be',
  ];

  const problem = (
    <section style={{ background: '#F8F6F2', padding: '96px 40px' }}>
      <div style={wrap}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <SectionLabel>The Problem</SectionLabel>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(30px, 3.5vw, 48px)', fontWeight: 500,
              color: '#1B2B42', margin: '0 0 24px', lineHeight: 1.15,
            }}>
              Valuable businesses often run on informal systems.
            </h2>
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 15,
              lineHeight: 1.8, color: '#4A4540', marginBottom: 28,
            }}>
              A founder-led company can be profitable and full of opportunity while still being harder to run than it should be. Growth, transition, or diligence eventually exposes the gaps.
            </p>
            <div style={{
              padding: '22px 28px', borderLeft: '3px solid #2A4535', background: '#fff',
            }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif", fontSize: 20,
                fontWeight: 500, color: '#1B2B42', margin: 0, lineHeight: 1.5,
              }}>
                "The issue is not always effort. Often, the operating layer simply has not caught up to the value of the business."
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid #E2DDD8' }}>
            {symptoms.map((s, i) => (
              <div key={i} style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 14,
                color: '#3A3530', padding: '15px 0',
                borderBottom: '1px solid #E2DDD8',
                display: 'flex', alignItems: 'flex-start', gap: 14,
              }}>
                <span style={{ color: '#2A4535', fontSize: 16, lineHeight: 1, marginTop: 2, flexShrink: 0 }}>—</span>
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  // 3. What We Do
  const serviceLinks = [
    ['Operational Readiness', 'assessment'],
    ['Workflow & Systems Cleanup', 'services'],
    ['AI-Assisted Operations', 'services'],
    ['Founder Operating Support', 'services'],
    ['Investor & Portfolio Support', 'services'],
    ['Special Projects', 'services'],
  ];

  const whatWeDo = (
    <section style={{ background: '#fff', padding: '96px 40px' }}>
      <div style={wrap}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <SectionLabel>What We Do</SectionLabel>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(30px, 3.5vw, 48px)', fontWeight: 500,
              color: '#1B2B42', margin: '0 0 24px', lineHeight: 1.15,
            }}>
              Turning operational mess into practical structure.
            </h2>
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 15,
              lineHeight: 1.8, color: '#4A4540', marginBottom: 32,
            }}>
              The work sits between strategy and execution. The focus is on identifying what is actually slowing the business down, then building simple systems that make work easier to manage.
            </p>
            <div style={{
              padding: '20px 24px', background: '#F8F6F2',
              borderTop: '3px solid #1B2B42',
            }}>
              <p style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 13,
                color: '#3A3530', margin: 0, lineHeight: 1.7,
              }}>
                The goal is not more software or more meetings. The goal is <strong>less friction, clearer ownership, and better execution.</strong>
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid #E2DDD8' }}>
            {serviceLinks.map(([label, page], i) => (
              <div key={i}
                onClick={() => setActivePage(page)}
                style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '18px 0', borderBottom: '1px solid #E2DDD8',
                  cursor: 'pointer',
                }}>
                <span style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: '#1B2B42',
                }}>{label}</span>
                <span style={{ color: '#2A4535', fontSize: 16 }}>→</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  // 4. Assessment callout strip
  const assessmentStrip = (
    <section style={{ background: '#2A4535', padding: '72px 40px' }}>
      <div style={wrap}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 32 }}>
          <div style={{ maxWidth: 640 }}>
            <div style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 11,
              letterSpacing: '0.16em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.45)', marginBottom: 12,
            }}>Flagship Offer</div>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 500,
              color: '#fff', margin: '0 0 12px', lineHeight: 1.2,
            }}>
              Operational Readiness Assessment
            </h2>
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 15,
              lineHeight: 1.75, color: 'rgba(255,255,255,0.65)', margin: 0,
            }}>
              A practical review that identifies what is unclear, founder-dependent, or vulnerable before growth or transition exposes those gaps.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 14, flexShrink: 0, flexWrap: 'wrap' }}>
            <Button style={{ background: '#fff', color: '#2A4535' }} onClick={() => setActivePage('assessment')}>
              Learn More
            </Button>
            <Button variant="ghost" onClick={() => setActivePage('about')}>Request an Assessment</Button>
          </div>
        </div>
      </div>
    </section>
  );

  // 5. Final CTA
  const finalCta = (
    <section style={{ background: '#F8F6F2', padding: '96px 40px' }}>
      <div style={{ maxWidth: 620, margin: '0 auto', textAlign: 'center', padding: '0 40px' }}>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(30px, 3.5vw, 48px)', fontWeight: 500,
          color: '#1B2B42', margin: '0 0 20px', lineHeight: 1.2,
        }}>
          Have a business that is valuable but harder to run than it should be?
        </h2>
        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: 15,
          color: '#6B6560', lineHeight: 1.8, marginBottom: 36,
        }}>
          If you are preparing for growth, transition, or a messy operational initiative, we can help identify what is slowing the business down and what needs to happen next.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button onClick={() => setActivePage('about')}>Schedule a Conversation</Button>
          <Button variant="secondary" onClick={() => setActivePage('services')}>See All Services</Button>
        </div>
      </div>
    </section>
  );

  return (
    <div>
      {hero}
      {problem}
      {whatWeDo}
      {assessmentStrip}
      {finalCta}
    </div>
  );
}

window.Home = Home;
