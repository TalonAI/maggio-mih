
import React from 'react';

// Services / Who I Help page

function Services({ setActivePage }) {
  const wrap = { maxWidth: 1120, margin: '0 auto', padding: '0 40px' };

  const lanes = [
    {
      num: '01',
      title: 'Operational Readiness Before Sale or Transition',
      for: 'Owner-led businesses preparing for a transaction, succession, or leadership handoff.',
      body: 'I help identify and clean up the operating friction that can weaken buyer confidence, slow diligence, or make the business harder to transfer.',
      includes: ['Process documentation','Owner dependency review','Reporting cleanup','Staff workflow mapping','Tool usage review','Operational diligence preparation','Transition playbooks'],
    },
    {
      num: '02',
      title: 'Workflow & Systems Cleanup',
      for: 'Businesses running on spreadsheets, inboxes, disconnected tools, and staff memory.',
      body: 'I help map how work actually moves through the business, then simplify handoffs, clarify ownership, and build practical systems people can follow.',
      includes: ['Workflow mapping','SOPs','CRM cleanup','Dashboard design','Tool rationalization','Internal documentation','Recurring operating cadence'],
    },
    {
      num: '03',
      title: 'AI-Assisted Operations',
      for: 'Owners who want the leverage of AI without turning the business into an experiment.',
      body: 'I help apply AI where it supports real workflows: admin work, reporting, customer communication, documentation, follow-up, and internal coordination.',
      includes: ['AI workflow design','Prompt libraries','Document summarization','Customer communication support','Meeting and task capture','Internal knowledge base','Staff training and guardrails'],
    },
    {
      num: '04',
      title: 'Founder / COO-Level Operating Support',
      for: 'Founders who have traction but too many priorities living in their head.',
      body: 'I help create the operating rhythm, project visibility, team accountability, and execution support needed before the company is ready for a full-time COO.',
      includes: ['Weekly operating cadence','Project tracking','Vendor and team coordination','Founder priority management','Product / ops follow-through','Special projects'],
    },
    {
      num: '05',
      title: 'Investor & Portfolio Company Support',
      for: 'Investors, advisors, and portfolio operators who need to understand or improve the operating layer of a business.',
      body: 'I help evaluate operational readiness, identify where a company may break under scale, and build practical support systems after investment.',
      includes: ['Operational diligence','Shared services readiness','Post-investment operating support','Reporting workflows','Governance cadence','Portfolio company process improvement'],
    },
    {
      num: '06',
      title: 'Special Projects & Opportunity Assessment',
      for: 'Owners and investors facing a valuable but messy opportunity.',
      body: 'I help pressure-test the idea, clarify the operating model, define roles, identify risks, and determine whether the opportunity should be built, paused, or killed.',
      includes: ['Business model review','Operating requirements','Role clarity','First 90-day test plan','Go / no-go criteria','Implementation roadmap'],
    },
  ];

  const [open, setOpen] = React.useState(null);

  return (
    <div>
      {/* Hero */}
      <section style={{ background: '#1B2B42', padding: '140px 40px 100px', color: '#fff' }}>
        <div style={wrap}>
          <div style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 11,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.4)', marginBottom: 24,
          }}>Services</div>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 500,
            lineHeight: 1.1, color: '#fff', margin: '0 0 24px', maxWidth: 700,
          }}>
            Where I Help
          </h1>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 18,
            lineHeight: 1.7, color: 'rgba(255,255,255,0.65)',
            maxWidth: 580,
          }}>
            Six service lanes, all connected by the same core work: building the operating layer behind valuable businesses.
          </p>
        </div>
      </section>

      {/* Service lanes */}
      <section style={{ background: '#fff', padding: '80px 40px' }}>
        <div style={wrap}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderTop: '1px solid #E2DDD8' }}>
            {lanes.map((lane, i) => {
              const isOpen = open === i;
              return (
                <div key={i} style={{ borderBottom: '1px solid #E2DDD8' }}>
                  <div
                    style={{
                      display: 'grid', gridTemplateColumns: '60px 1fr 32px',
                      gap: 24, padding: '28px 0', cursor: 'pointer', alignItems: 'center',
                    }}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span style={{
                      fontFamily: "'DM Sans', sans-serif", fontSize: 11,
                      letterSpacing: '0.12em', color: '#2A4535',
                      textTransform: 'uppercase',
                    }}>{lane.num}</span>
                    <div>
                      <div style={{
                        fontFamily: "'Cormorant Garamond', serif", fontSize: 22,
                        fontWeight: 600, color: '#1B2B42', lineHeight: 1.2, marginBottom: 4,
                      }}>{lane.title}</div>
                      <div style={{
                        fontFamily: "'DM Sans', sans-serif", fontSize: 13,
                        color: '#6B6560',
                      }}>{lane.for}</div>
                    </div>
                    <span style={{
                      fontFamily: "'DM Sans', sans-serif", fontSize: 20,
                      color: '#1B2B42', lineHeight: 1, userSelect: 'none',
                      transition: 'transform 0.2s',
                      display: 'inline-block',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}>+</span>
                  </div>
                  {isOpen && (
                    <div style={{
                      paddingBottom: 32, paddingLeft: 84,
                      display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48,
                    }}>
                      <div>
                        <p style={{
                          fontFamily: "'DM Sans', sans-serif", fontSize: 14,
                          color: '#4A4540', lineHeight: 1.8, marginBottom: 20, marginTop: 0,
                        }}>{lane.body}</p>
                      </div>
                      <div>
                        <div style={{
                          fontFamily: "'DM Sans', sans-serif", fontSize: 11,
                          letterSpacing: '0.14em', textTransform: 'uppercase',
                          color: '#6B6560', marginBottom: 12,
                        }}>Includes</div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                          {lane.includes.map((tag, j) => (
                            <span key={j} style={{
                              fontFamily: "'DM Sans', sans-serif", fontSize: 12,
                              padding: '6px 12px', border: '1px solid #E2DDD8',
                              color: '#3A3530', borderRadius: 2,
                            }}>{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who I Help grid */}
      <section style={{ background: '#F8F6F2', padding: '80px 40px' }}>
        <div style={wrap}>
          <SectionLabel>Who I Help</SectionLabel>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 500,
            color: '#1B2B42', margin: '0 0 16px', lineHeight: 1.2,
          }}>I am most useful when the opportunity is real but the path is messy.</h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 15,
            color: '#6B6560', lineHeight: 1.7, marginBottom: 48, maxWidth: 600,
          }}>
            That may be a founder trying to get out of the weeds, an owner preparing for sale, an advisor helping a client clean up before market, or an investor evaluating operational risk.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: '#E2DDD8', marginBottom: 1 }}>
            {[
              ['Owner-Led Businesses', 'You have built something real, but too much still depends on informal systems, personal memory, or heroic effort.'],
              ['Advisors & Dealmakers', 'You need a trusted operator you can introduce when a client needs operational cleanup, technical process support, or transition readiness.'],
              ['Founders', 'You have the vision and market knowledge, but the business needs better rhythm, accountability, and execution structure.'],
            ].map(([label, copy], i) => (
              <div key={i} style={{ background: '#fff', padding: '36px 32px' }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 600, color: '#1B2B42', marginBottom: 12 }}>{label}</div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: '#6B6560', lineHeight: 1.7, margin: 0 }}>{copy}</p>
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1, background: '#E2DDD8' }}>
            {[
              ['Investors & Portfolio Companies', 'You need to understand operational risk, improve visibility, and strengthen the systems that support scale.'],
              ['Professional Service Firms', 'You need cleaner intake, handoffs, documents, workflows, software usage, and team accountability.'],
            ].map(([label, copy], i) => (
              <div key={i} style={{ background: '#fff', padding: '36px 32px' }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 600, color: '#1B2B42', marginBottom: 12 }}>{label}</div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: '#6B6560', lineHeight: 1.7, margin: 0 }}>{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#1B2B42', padding: '80px 40px' }}>
        <div style={{ ...wrap, maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 500,
            color: '#fff', margin: '0 0 20px', lineHeight: 1.2,
          }}>Not sure which lane fits?</h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 15,
            color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: 36,
          }}>
            Most engagements start with a short conversation. Share what you are trying to clean up or move forward, and we can identify the right starting point.
          </p>
          <Button onClick={() => setActivePage('about')}>Schedule a Conversation</Button>
        </div>
      </section>
    </div>
  );
}

window.Services = Services;
