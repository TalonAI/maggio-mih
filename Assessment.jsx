
import React, { useState } from 'react';

// Assessment page...

function Assessment({ setActivePage }) {
  const wrap = { maxWidth: 1120, margin: '0 auto', padding: '0 40px' };

  const reviewItems = [
    'Owner dependency and key-person risk',
    'Workflow and handoff clarity',
    'Reporting visibility and consistency',
    'Tool and software usage',
    'CRM and pipeline discipline',
    'Back-office processes',
    'Staff roles and accountability',
    'SOPs and documentation',
    'AI and automation opportunities',
    'Operational risks a buyer, investor, or successor may notice',
  ];

  const deliverables = [
    ['Practical operations map', 'A clear picture of how the business actually runs today.'],
    ['Top bottlenecks and risks', 'What is most likely to slow growth or transition.'],
    ['Quick-win opportunities', 'Improvements that can be made quickly with meaningful impact.'],
    ['AI / automation leverage points', 'Where technology can reduce friction without adding complexity.'],
    ['Recommended systems and workflows', 'Practical next steps, not abstract recommendations.'],
    ['30 / 60 / 90-day improvement plan', 'A sequenced roadmap with clear priorities.'],
    ['Optional implementation support', 'Paul can stay engaged to execute the plan.'],
  ];

  const whenUseful = [
    'Preparing for a sale or recapitalization',
    'Planning a leadership handoff or succession',
    'Getting ready for investor diligence',
    'Scaling past the point where informal systems work',
    'Onboarding a new executive who needs to understand the business',
    'Cleaning up operations after a period of rapid growth',
    'Evaluating a potential acquisition or portfolio company',
  ];

  return (
    <div>
      {/* Hero */}
      <section style={{ background: '#1B2B42', padding: '140px 40px 100px', color: '#fff' }}>
        <div style={wrap}>
          <div style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 11,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.4)', marginBottom: 24,
          }}>Flagship Offer</div>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 500,
            lineHeight: 1.1, color: '#fff', margin: '0 0 24px', maxWidth: 700,
          }}>
            Operational Readiness Assessment
          </h1>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 18,
            lineHeight: 1.7, color: 'rgba(255,255,255,0.65)',
            maxWidth: 600, marginBottom: 40,
          }}>
            A practical review for owner-led businesses preparing for growth, transition, or operational cleanup.
          </p>
          <Button onClick={() => setActivePage('about')}>Request an Assessment</Button>
        </div>
      </section>

      {/* Intro */}
      <section style={{ background: '#fff', padding: '80px 40px' }}>
        <div style={wrap}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
            <div>
              <SectionLabel>What It Is</SectionLabel>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 500,
                color: '#1B2B42', margin: '0 0 20px', lineHeight: 1.2,
              }}>
                A practical look at how the business actually runs.
              </h2>
              <p style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 15,
                lineHeight: 1.8, color: '#4A4540', marginBottom: 20,
              }}>
                An Operational Readiness Assessment identifies the parts of the business that are unclear, overly manual, founder-dependent, under-documented, or vulnerable during growth or transition.
              </p>
              <p style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 15,
                lineHeight: 1.8, color: '#4A4540', marginBottom: 20,
              }}>
                It is designed for companies that are real, valuable, and moving. The operating systems are simply not yet as mature as the business itself.
              </p>
              <div style={{
                padding: '24px 28px', borderLeft: '3px solid #2A4535',
                background: '#F8F6F2', marginTop: 28,
              }}>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif", fontSize: 20,
                  fontWeight: 500, color: '#1B2B42', margin: 0, lineHeight: 1.5,
                }}>
                  "Buyers do not just buy earnings. They buy confidence that the business can keep working after the owner steps away."
                </p>
              </div>
            </div>
            <div>
              <SectionLabel>When It Is Useful</SectionLabel>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {whenUseful.map((item, i) => (
                  <div key={i} style={{
                    fontFamily: "'DM Sans', sans-serif", fontSize: 14,
                    color: '#3A3530', padding: '14px 0',
                    borderBottom: '1px solid #E2DDD8',
                    display: 'flex', gap: 12, alignItems: 'flex-start',
                  }}>
                    <span style={{ color: '#2A4535', fontSize: 16, marginTop: 1 }}>→</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What it reviews */}
      <section style={{ background: '#F8F6F2', padding: '80px 40px' }}>
        <div style={wrap}>
          <SectionLabel>What It Reviews</SectionLabel>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 500,
            color: '#1B2B42', margin: '0 0 40px', lineHeight: 1.2,
          }}>Ten areas of operational review.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 1, background: '#E2DDD8' }}>
            {reviewItems.map((item, i) => (
              <div key={i} style={{
                background: '#fff', padding: '24px 28px',
                display: 'flex', gap: 16, alignItems: 'flex-start',
              }}>
                <span style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 11,
                  color: '#2A4535', letterSpacing: '0.1em',
                  minWidth: 24, paddingTop: 2,
                }}>0{i + 1}</span>
                <span style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 14,
                  color: '#3A3530', lineHeight: 1.6,
                }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section style={{ background: '#fff', padding: '80px 40px' }}>
        <div style={wrap}>
          <SectionLabel>What You Receive</SectionLabel>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 500,
            color: '#1B2B42', margin: '0 0 40px', lineHeight: 1.2,
          }}>Clear output. No filler.</h2>
          <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid #E2DDD8' }}>
            {deliverables.map(([title, desc], i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '260px 1fr',
                gap: 40, padding: '24px 0',
                borderBottom: '1px solid #E2DDD8', alignItems: 'start',
              }}>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif", fontSize: 18,
                  fontWeight: 600, color: '#1B2B42',
                }}>{title}</div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 14,
                  color: '#6B6560', lineHeight: 1.7,
                }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#2A4535', padding: '80px 40px' }}>
        <div style={{ ...wrap, maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 500,
            color: '#fff', margin: '0 0 20px', lineHeight: 1.2,
          }}>
            Ready to get a clear picture of where things stand?
          </h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 15,
            color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, marginBottom: 36,
          }}>
            Request an Operational Readiness Assessment or schedule a conversation to discuss whether it is the right fit.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button style={{ background: '#fff', color: '#2A4535' }} onClick={() => setActivePage('about')}>
              Request an Assessment
            </Button>
            <Button variant="ghost" onClick={() => setActivePage('about')}>Schedule a Conversation</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

window.Assessment = Assessment;
