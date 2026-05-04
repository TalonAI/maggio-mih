import React from 'react';

// Assessment page

function Assessment({ setActivePage }) {
  const isMobile = window.useIsMobile();
  const wrap = { maxWidth: 1120, margin: '0 auto', padding: isMobile ? '0 22px' : '0 40px' };

  const reviewItems = [
    'Where the owner is still the operating system',
    'Which workflows depend on memory, workarounds, or informal handoffs',
    'Where reporting is inconsistent, unreliable, or too hard to find',
    'Which tools are being used well — and which are creating noise',
    'Where tasks, email, files, and decisions are scattered',
    'Where staff need clearer roles, escalation rules, or weekly rhythm',
    'Where documentation, SOPs, or checklists would reduce dependency',
    'Where AI or automation could reduce friction without adding complexity',
  ];

  const outputs = [
    ['Operating layer map', 'A simple picture of how work actually moves through the business today.'],
    ['Top bottlenecks', 'The few issues creating the most drag, confusion, or owner dependency.'],
    ['Practical cleanup priorities', 'What should be fixed first, in what order, and why.'],
    ['Dashboard / reporting recommendations', 'The weekly visibility the owner and team need to make better decisions.'],
    ['Workflow and tool recommendations', 'How to use existing tools more clearly before adding anything new.'],
    ['30-day action plan', 'A focused plan designed to make the next month easier to manage.'],
  ];

  const practicalExamples = [
    'Monday Operations Dashboard',
    'Weekly operating rhythm',
    'Asana / task management cleanup',
    'Gmail triage rules',
    'New hire or assistant checklist',
    'Escalation rules for owner decisions',
    'One-page workflow map',
    'Top workflows to clean up next',
  ];

  const whenUseful = [
    'Growth is exposing operational gaps',
    'The owner is still pulled into too many daily decisions',
    'A new employee or assistant needs structure quickly',
    'Work is scattered across email, task tools, folders, spreadsheets, and memory',
    'Reporting exists, but does not create useful visibility',
    'The team is busy, but ownership and priorities are unclear',
    'A business is preparing for sale, diligence, succession, or investor review',
  ];

  return (
    <div>
      {/* Hero */}
      <section style={{
        position: 'relative',
        background: '#1B2B42',
        padding: isMobile ? '104px 22px 58px' : '140px 40px 96px',
        color: '#fff',
        overflow: 'hidden',
      }}>
        <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(90deg, #16283f 0%, #1d3756 54%, #4b739c 100%)',
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(/chapel.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: isMobile ? 'auto 82%' : 'auto 118%',
        backgroundPosition: isMobile ? 'right -105px bottom -12px' : 'right -78px bottom -18px',
        opacity: isMobile ? 0.20 : 0.32,
        filter: 'grayscale(100%) brightness(1.85) contrast(1.45)',
        mixBlendMode: 'screen',
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to right, rgba(18,30,47,0.97) 0%, rgba(22,38,60,0.93) 34%, rgba(26,47,74,0.76) 60%, rgba(54,91,132,0.34) 100%)',
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 86% 44%, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.06) 18%, rgba(255,255,255,0) 44%)',
      }} />
        <div style={{ ...wrap, position: 'relative', zIndex: 1 }}>
          <div style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 12,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.68)',
            fontWeight: 700,
            marginBottom: 24,
          }}>
            Flagship Starting Point
          </div>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(44px, 6vw, 72px)',
            fontWeight: 500,
            lineHeight: 1.08,
            color: '#fff',
            margin: isMobile ? '0 0 20px' : '0 0 28px',
            maxWidth: 780,
          }}>
            Operational Readiness Assessment
          </h1>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: isMobile ? 17 : 18,
            lineHeight: isMobile ? 1.58 : 1.75,
            color: 'rgba(255,255,255,0.76)',
            maxWidth: 680,
            marginBottom: isMobile ? 24 : 36,
          }}>
            A practical review of the workflows, tools, reporting, handoffs, and owner-dependent processes that make a business harder to run than it should be.
          </p>
          <div style={{ display: 'flex', gap: isMobile ? 12 : 14, flexWrap: 'wrap' }}>
            <Button onClick={() => setActivePage('about')}>Request an Assessment</Button>
            <Button variant="ghost" onClick={() => setActivePage('services')}>View Services</Button>
          </div>
        </div>
      </section>

      {/* What it is */}
      <section style={{ padding: isMobile ? '52px 22px' : '96px 40px', background: '#F8F6F2' }}>
        <div style={wrap}>
          <SectionLabel>What It Is</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.1fr 0.9fr', gap: isMobile ? 28 : 72, alignItems: 'start' }}>
            <div>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(36px, 4vw, 52px)',
                fontWeight: 500,
                lineHeight: 1.12,
                color: '#1B2B42',
                margin: '0 0 24px',
              }}>
                Not a generic audit. Not a strategy deck.
              </h2>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: isMobile ? 17 : 16,
                lineHeight: isMobile ? 1.62 : 1.8,
                color: '#4A4540',
                marginBottom: 18,
              }}>
                The assessment is designed to identify what is unclear, overloaded, undocumented, or too dependent on the owner — then turn that into practical next steps.
              </p>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: isMobile ? 17 : 16,
                lineHeight: isMobile ? 1.62 : 1.8,
                color: '#4A4540',
              }}>
                The goal is usable operating clarity: better visibility, cleaner ownership, simpler workflows, and a short list of improvements that can actually be executed.
              </p>
            </div>

            <div style={{
              background: '#fff',
              border: '1px solid #E2DDD8',
              padding: 36,
              boxShadow: '0 12px 36px rgba(27,43,66,0.06)',
            }}>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 30,
                fontWeight: 500,
                color: '#1B2B42',
                margin: '0 0 18px',
              }}>
                The test:
              </h3>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: isMobile ? 17 : 18,
                lineHeight: 1.7,
                color: '#2A4535',
                margin: 0,
              }}>
                Does this make the business easier to run next Monday?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When useful */}
      <section style={{ padding: isMobile ? '50px 22px' : '88px 40px', background: '#fff' }}>
        <div style={wrap}>
          <SectionLabel>When It Helps</SectionLabel>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(34px, 4vw, 48px)',
            fontWeight: 500,
            color: '#1B2B42',
            margin: '0 0 36px',
            maxWidth: 760,
          }}>
            Use it when the business is working, but the operating layer is not keeping up.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, minmax(0, 1fr))', gap: isMobile ? 14 : 18 }}>
            {whenUseful.map((item, i) => (
              <div key={i} style={{
                borderTop: '1px solid #E2DDD8',
                padding: '18px 0',
                display: 'flex',
                gap: isMobile ? 12 : 14,
              }}>
                <span style={{ color: '#2A4535', fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}>✓</span>
                <span style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: isMobile ? 16 : 15,
                  lineHeight: 1.65,
                  color: '#3A3632',
                }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review */}
      <section style={{ padding: isMobile ? '50px 22px' : '88px 40px', background: '#F8F6F2' }}>
        <div style={wrap}>
          <SectionLabel>What Gets Reviewed</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '0.85fr 1.15fr', gap: isMobile ? 26 : 64, alignItems: 'start' }}>
            <div>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(34px, 4vw, 48px)',
                fontWeight: 500,
                lineHeight: 1.15,
                color: '#1B2B42',
                margin: '0 0 18px',
              }}>
                The real operating system underneath the business.
              </h2>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: isMobile ? 17 : 16,
                lineHeight: isMobile ? 1.62 : 1.8,
                color: '#4A4540',
              }}>
                Most operational drag is not caused by one broken tool. It comes from unclear handoffs, scattered information, inconsistent rhythm, and decisions that still have to route through the owner.
              </p>
            </div>
            <div>
              {reviewItems.map((item, i) => (
                <div key={i} style={{
                  padding: '16px 0',
                  borderBottom: '1px solid #E2DDD8',
                  display: 'flex',
                  gap: isMobile ? 12 : 14,
                  alignItems: 'flex-start',
                }}>
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 12,
                    color: '#8A827A',
                    width: 24,
                    flexShrink: 0,
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: isMobile ? 16 : 15,
                    lineHeight: 1.65,
                    color: '#2F2B27',
                  }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outputs */}
      <section style={{ padding: isMobile ? '50px 22px' : '88px 40px', background: '#fff' }}>
        <div style={wrap}>
          <SectionLabel>What You Receive</SectionLabel>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(34px, 4vw, 48px)',
            fontWeight: 500,
            color: '#1B2B42',
            margin: '0 0 36px',
            maxWidth: 760,
          }}>
            Clear findings, practical outputs, and the next work to do.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, minmax(0, 1fr))', gap: isMobile ? 16 : 24 }}>
            {outputs.map(([title, body], i) => (
              <div key={i} style={{
                border: '1px solid #E2DDD8',
                background: '#F8F6F2',
                padding: 28,
                minHeight: 190,
              }}>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 12,
                  color: '#8A827A',
                  marginBottom: 18,
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: isMobile ? 16 : 15,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: '#1B2B42',
                  margin: '0 0 12px',
                }}>
                  {title}
                </h3>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: '#5A544E',
                  margin: 0,
                }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical outputs */}
      <section style={{ padding: isMobile ? '50px 22px' : '88px 40px', background: '#1B2B42', color: '#fff' }}>
        <div style={wrap}>
          <SectionLabel>Practical Outputs</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '0.9fr 1.1fr', gap: isMobile ? 26 : 64, alignItems: 'start' }}>
            <div>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(34px, 4vw, 52px)',
                fontWeight: 500,
                lineHeight: 1.15,
                color: '#fff',
                margin: '0 0 20px',
              }}>
                The best next step may be one dashboard, one checklist, or one operating rhythm.
              </h2>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: isMobile ? 17 : 16,
                lineHeight: isMobile ? 1.62 : 1.8,
                color: 'rgba(255,255,255,0.74)',
              }}>
                The assessment should not create more work. It should point directly to the few outputs that make the business easier to manage.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, minmax(0, 1fr))', gap: isMobile ? 12 : 14 }}>
              {practicalExamples.map((item, i) => (
                <div key={i} style={{
                  border: '1px solid rgba(255,255,255,0.16)',
                  padding: isMobile ? '16px 16px' : '18px 20px',
                  background: 'rgba(255,255,255,0.04)',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14,
                  lineHeight: 1.5,
                  color: 'rgba(255,255,255,0.82)',
                }}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: isMobile ? '52px 22px' : '80px 40px', background: '#2A4535', color: '#fff' }}>
        <div style={{ ...wrap, display: 'flex', justifyContent: 'space-between', gap: isMobile ? 22 : 40, alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ maxWidth: 640 }}>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(34px, 4vw, 48px)',
              fontWeight: 500,
              lineHeight: 1.15,
              margin: '0 0 14px',
            }}>
              Start by finding what is unclear, overloaded, or too dependent on the owner.
            </h2>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: isMobile ? 16 : 15,
              lineHeight: isMobile ? 1.58 : 1.75,
              color: 'rgba(255,255,255,0.72)',
              margin: 0,
            }}>
              Then turn it into a practical cleanup plan the team can actually use.
            </p>
          </div>
          <Button variant="ghost" onClick={() => setActivePage('about')}>Request an Assessment</Button>
        </div>
      </section>
    </div>
  );
}

window.Assessment = Assessment;
