import React from 'react';

// Services / Who I Help page

function Services({ setActivePage }) {
  const wrap = { maxWidth: 1120, margin: '0 auto', padding: '0 40px' };

  const services = [
    {
      num: '01',
      title: 'Operations Cleanup Pilot',
      for: 'Owner-led businesses that need a practical first win without launching a large engagement.',
      body: 'A focused 2–3 week sprint to clean up one operating rhythm, workflow, dashboard, or team handoff using the tools already in place.',
      includes: ['Monday dashboard','Weekly operating rhythm','Task tool cleanup','Email triage rules','Escalation rules','New hire checklist'],
    },
    {
      num: '02',
      title: 'Operational Readiness Assessment',
      for: 'Businesses preparing for growth, diligence, sale, succession, or leadership transition.',
      body: 'A practical review of the operating layer: workflows, handoffs, reporting, tools, documentation, and owner dependency.',
      includes: ['Operating layer map','Bottleneck review','Risk flags','Quick wins','30-day plan','Next workflows to clean up'],
    },
    {
      num: '03',
      title: 'Workflow & Systems Cleanup',
      for: 'Teams running on spreadsheets, inboxes, disconnected tools, staff memory, and informal handoffs.',
      body: 'Map how work actually moves, remove friction, clarify ownership, and create simple systems people can follow.',
      includes: ['Workflow mapping','SOPs','Tool rationalization','CRM cleanup','Dashboard design','Recurring cadence'],
    },
    {
      num: '04',
      title: 'Founder / Owner Operating Support',
      for: 'Founders and owners who have traction but too much of the business still routes through them.',
      body: 'Create operating rhythm, project visibility, accountability, and structure so the owner can stay focused on the highest-value work.',
      includes: ['Priority rhythm','Project tracking','Team accountability','Vendor coordination','Decision logs','Operating meetings'],
    },
    {
      num: '05',
      title: 'AI-Assisted Operations',
      for: 'Businesses that want leverage from AI without turning the company into an experiment.',
      body: 'Apply AI where it supports real workflows: admin work, reporting, documentation, follow-up, meeting capture, and internal coordination.',
      includes: ['AI workflow design','Prompt libraries','Document summarization','Meeting capture','Knowledge base support','Team guardrails'],
    },
    {
      num: '06',
      title: 'Special Projects & Opportunity Assessment',
      for: 'Owners, investors, or advisors facing a valuable but messy initiative that needs structure.',
      body: 'Pressure-test the idea, define the operating model, clarify roles, identify risks, and decide what should be built, paused, or killed.',
      includes: ['Business model review','Operating requirements','Role clarity','90-day test plan','Go / no-go criteria','Implementation roadmap'],
    },
  ];

  const audiences = [
    ['Owner-Led Businesses', 'The company is valuable, but too much still depends on informal systems, personal memory, and heroic effort.'],
    ['Advisors & Dealmakers', 'A client needs operational cleanup, technical process support, or diligence readiness before the next step.'],
    ['Founders', 'The business has traction, but needs rhythm, accountability, and execution structure before adding more people or tools.'],
    ['Investors & Portfolio Companies', 'Operational risk, reporting gaps, and weak process visibility need to be understood or improved.'],
    ['Professional Service Firms', 'Intake, handoffs, documents, staff workflows, software usage, and accountability need cleaner structure.'],
    ['Real Estate / Asset Operators', 'Multiple projects, properties, vendors, assistants, documents, and decisions need a better operating rhythm.'],
  ];

  return (
    <div>
      {/* Hero */}
      <section style={{ background: '#1B2B42', padding: '140px 40px 96px', color: '#fff' }}>
        <div style={wrap}>
          <div style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 12,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.68)',
            fontWeight: 700,
            marginBottom: 24,
          }}>
            Services
          </div>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(44px, 6vw, 72px)',
            fontWeight: 500,
            lineHeight: 1.08,
            color: '#fff',
            margin: '0 0 28px',
            maxWidth: 820,
          }}>
            Practical operating support for businesses that have outgrown informal systems.
          </h1>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 18,
            lineHeight: 1.75,
            color: 'rgba(255,255,255,0.76)',
            maxWidth: 700,
            marginBottom: 36,
          }}>
            Start with what is messy, unclear, scattered, or too dependent on the owner. Then build the operating structure that makes the work easier to see, assign, manage, and complete.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Button onClick={() => setActivePage('about')}>Schedule a Conversation</Button>
            <Button variant="ghost" onClick={() => setActivePage('assessment')}>Explore the Assessment</Button>
          </div>
        </div>
      </section>

      {/* Core principle */}
      <section style={{ padding: '78px 40px', background: '#F8F6F2' }}>
        <div style={{ ...wrap, display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <SectionLabel>Operating Principle</SectionLabel>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(34px, 4vw, 48px)',
              fontWeight: 500,
              lineHeight: 1.15,
              color: '#1B2B42',
              margin: 0,
            }}>
              Use the tools already in place before adding another system.
            </h2>
          </div>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 16,
            lineHeight: 1.85,
            color: '#4A4540',
            margin: 0,
          }}>
            Small teams often hear “AI” or “systems” and assume more work is coming. The better path is to clean up the operating rhythm first: what gets reviewed, who owns it, what gets escalated, and how the team knows what matters.
          </p>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: '96px 40px', background: '#fff' }}>
        <div style={wrap}>
          <SectionLabel>The Work</SectionLabel>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(36px, 4vw, 52px)',
            fontWeight: 500,
            lineHeight: 1.12,
            color: '#1B2B42',
            margin: '0 0 40px',
            maxWidth: 760,
          }}>
            Clear service lanes, all pointed at the same outcome: cleaner execution.
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 28 }}>
            {services.map((s) => (
              <div key={s.num} style={{
                border: '1px solid #E2DDD8',
                background: '#F8F6F2',
                padding: 32,
                display: 'flex',
                flexDirection: 'column',
                minHeight: 390,
              }}>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 12,
                  color: '#8A827A',
                  marginBottom: 24,
                }}>
                  {s.num}
                </div>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 34,
                  fontWeight: 500,
                  lineHeight: 1.12,
                  color: '#1B2B42',
                  margin: '0 0 14px',
                }}>
                  {s.title}
                </h3>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13,
                  lineHeight: 1.65,
                  color: '#6B6560',
                  margin: '0 0 18px',
                }}>
                  <strong style={{ color: '#2A4535' }}>Best for:</strong> {s.for}
                </p>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 15,
                  lineHeight: 1.75,
                  color: '#4A4540',
                  margin: '0 0 24px',
                }}>
                  {s.body}
                </p>
                <div style={{ marginTop: 'auto', paddingTop: 20, borderTop: '1px solid #E2DDD8' }}>
                  <div style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 11,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#8A827A',
                    marginBottom: 12,
                    fontWeight: 700,
                  }}>
                    Typical Outputs
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {s.includes.map((item) => (
                      <span key={item} style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 12,
                        color: '#2F2B27',
                        background: '#fff',
                        border: '1px solid #E2DDD8',
                        padding: '7px 10px',
                      }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audiences */}
      <section style={{ padding: '96px 40px', background: '#F8F6F2' }}>
        <div style={wrap}>
          <SectionLabel>Who It Is For</SectionLabel>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(36px, 4vw, 52px)',
            fontWeight: 500,
            lineHeight: 1.12,
            color: '#1B2B42',
            margin: '0 0 40px',
            maxWidth: 780,
          }}>
            Best fit: valuable businesses where growth is exposing the gaps.
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 24 }}>
            {audiences.map(([title, body]) => (
              <div key={title} style={{
                background: '#fff',
                border: '1px solid #E2DDD8',
                padding: 28,
                minHeight: 210,
              }}>
                <h3 style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#1B2B42',
                  margin: '0 0 16px',
                }}>
                  {title}
                </h3>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14,
                  lineHeight: 1.75,
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

      {/* What to expect */}
      <section style={{ padding: '88px 40px', background: '#1B2B42', color: '#fff' }}>
        <div style={{ ...wrap, display: 'grid', gridTemplateColumns: '0.95fr 1.05fr', gap: 64, alignItems: 'start' }}>
          <div>
            <SectionLabel>What To Expect</SectionLabel>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(34px, 4vw, 52px)',
              fontWeight: 500,
              lineHeight: 1.15,
              color: '#fff',
              margin: '0 0 20px',
            }}>
              Less noise. More ownership. Clearer next actions.
            </h2>
          </div>
          <div>
            {[
              'No tool recommendations before the workflow is understood.',
              'No AI hype where a checklist, dashboard, or better rhythm would solve the problem.',
              'No broad transformation language where a narrow pilot would create more value.',
              'No extra complexity unless it makes the work easier to manage.',
            ].map((item, i) => (
              <div key={i} style={{
                padding: '18px 0',
                borderBottom: '1px solid rgba(255,255,255,0.14)',
                display: 'flex',
                gap: 14,
              }}>
                <span style={{ color: '#fff', opacity: 0.75 }}>—</span>
                <span style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: 'rgba(255,255,255,0.76)',
                }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 40px', background: '#2A4535', color: '#fff' }}>
        <div style={{ ...wrap, display: 'flex', justifyContent: 'space-between', gap: 40, alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ maxWidth: 640 }}>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(34px, 4vw, 48px)',
              fontWeight: 500,
              lineHeight: 1.15,
              margin: '0 0 14px',
            }}>
              Start with one workflow, one dashboard, or one operating rhythm.
            </h2>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 15,
              lineHeight: 1.75,
              color: 'rgba(255,255,255,0.72)',
              margin: 0,
            }}>
              The right starting point is narrow enough to execute and useful enough to prove value quickly.
            </p>
          </div>
          <Button variant="ghost" onClick={() => setActivePage('about')}>Schedule a Conversation</Button>
        </div>
      </section>
    </div>
  );
}

window.Services = Services;
