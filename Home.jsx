import React from 'react';

// Home page — StoryBrand refinement focused on clarity, credibility, and practical action

function Home({ setActivePage }) {
  const wrap = { maxWidth: 1120, margin: '0 auto', padding: '0 40px' };

  const h2Style = {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 'clamp(30px, 3.5vw, 48px)',
    fontWeight: 500,
    color: '#1B2B42',
    margin: '0 0 22px',
    lineHeight: 1.15,
  };

  const bodyStyle = {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 15,
    lineHeight: 1.8,
    color: '#4A4540',
    margin: 0,
  };

  const cardStyle = {
    background: '#fff',
    border: '1px solid #E2DDD8',
    padding: '30px 30px 28px',
  };

  // 1. Hero
  const hero = (
    <section style={{
      background: '#1B2B42',
      color: '#fff',
      padding: '160px 40px 120px',
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center',
    }}>
      <div style={{ ...wrap, padding: 0, width: '100%' }}>
        <div style={{ maxWidth: 860 }}>
          <div style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 11,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.68)',
            fontWeight: 600,
            marginBottom: 28,
          }}>
            Paul Maggio · MIH: Make It Happen
          </div>

          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(44px, 6vw, 74px)',
            fontWeight: 500,
            lineHeight: 1.06,
            letterSpacing: '-0.01em',
            color: '#fff',
            margin: '0 0 28px',
            maxWidth: 820,
          }}>
            Your business is too valuable to run on memory, workarounds, and founder instinct.
          </h1>

          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 18,
            lineHeight: 1.75,
            color: 'rgba(255,255,255,0.72)',
            maxWidth: 680,
            marginBottom: 40,
          }}>
            I help owner-led businesses clean up workflows, scattered tools, weak reporting, and owner-dependent processes — so the business becomes easier to run, easier to delegate, and easier to grow.
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Button onClick={() => setActivePage('about')}>Schedule a Conversation</Button>
            <Button variant="ghost" onClick={() => setActivePage('assessment')}>Explore the Assessment</Button>
          </div>

          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 13,
            color: 'rgba(255,255,255,0.58)',
            fontWeight: 500,
            marginTop: 36,
            lineHeight: 1.6,
            maxWidth: 620,
          }}>
            Practical operating support. No AI hype. No generic decks. No extra systems unless they are needed.
          </p>
        </div>
      </div>
    </section>
  );

  // 2. Problem
  const symptoms = [
    'The owner is still the operating system',
    'Important work lives in inboxes, spreadsheets, and memory',
    'Reporting is inconsistent or hard to trust',
    'Tools exist, but the rhythm around them is weak',
    'New hires need clearer direction to become useful faster',
    'Growth keeps exposing the same open loops',
  ];

  const problem = (
    <section style={{ background: '#F8F6F2', padding: '96px 40px' }}>
      <div style={wrap}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <SectionLabel>The Problem</SectionLabel>
            <h2 style={h2Style}>
              You built something real. The operating layer just has not caught up.
            </h2>
            <p style={{ ...bodyStyle, marginBottom: 26 }}>
              Most owner-led businesses do not become messy because the owner is careless. They become messy because the business grew through hustle, judgment, relationships, and daily problem-solving.
            </p>
            <p style={bodyStyle}>
              That works for a while. Then the same informal systems that helped the business survive start making it harder to scale.
            </p>
          </div>

          <div style={{
            background: '#fff',
            border: '1px solid #E2DDD8',
            padding: 34,
          }}>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 24,
              fontWeight: 500,
              color: '#1B2B42',
              marginBottom: 22,
              lineHeight: 1.3,
            }}>
              This usually shows up as:
            </div>

            <div style={{ display: 'grid', gap: 14 }}>
              {symptoms.map((s, i) => (
                <div key={i} style={{
                  display: 'flex',
                  gap: 12,
                  alignItems: 'flex-start',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14,
                  lineHeight: 1.55,
                  color: '#4A4540',
                }}>
                  <span style={{
                    color: '#2A4535',
                    fontWeight: 600,
                    fontSize: 13,
                    marginTop: 1,
                  }}>—</span>
                  <span>{s}</span>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: 28,
              paddingTop: 24,
              borderTop: '1px solid #E2DDD8',
            }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 21,
                fontWeight: 500,
                color: '#1B2B42',
                lineHeight: 1.45,
                margin: 0,
              }}>
                The goal is not to add complexity. The goal is to make next Monday easier.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // 3. Why Paul / guide
  const strengths = [
    {
      title: 'COO-level judgment',
      body: 'I look at how work actually moves through the business: who owns it, where it gets stuck, what is unclear, and what needs to change first.',
    },
    {
      title: 'Military discipline',
      body: 'I value clarity, ownership, follow-through, and calm execution. The point is not more theory. The point is getting useful work organized and moving.',
    },
    {
      title: 'Technical depth without tool worship',
      body: 'I can work across business process, software, AI, reporting, and documentation — but I do not recommend new tools unless they reduce friction.',
    },
  ];

  const whyPaul = (
    <section style={{ background: '#fff', padding: '96px 40px' }}>
      <div style={wrap}>
        <div style={{ maxWidth: 720, marginBottom: 48 }}>
          <SectionLabel>Why Maggio MIH</SectionLabel>
          <h2 style={h2Style}>
            Outside perspective for owners who are too close to the daily fire.
          </h2>
          <p style={bodyStyle}>
            Owners are often too busy running the business to redesign how the business runs. I help step back, find the friction, and build practical structure around the work that matters.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
          {strengths.map((item, i) => (
            <div key={i} style={cardStyle}>
              <div style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#2A4535',
                marginBottom: 16,
              }}>
                0{i + 1}
              </div>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 26,
                fontWeight: 500,
                color: '#1B2B42',
                margin: '0 0 14px',
                lineHeight: 1.2,
              }}>
                {item.title}
              </h3>
              <p style={bodyStyle}>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // 4. Offers
  const offers = [
    {
      label: 'Start Narrow',
      title: 'Operations Cleanup Pilot',
      body: 'A focused 2–3 week engagement to clean up one operating rhythm, dashboard, workflow, or team handoff using the tools you already have.',
      bullets: [
        'Weekly operating dashboard',
        'Task / project rhythm',
        'Email and workflow triage rules',
        'New hire or assistant checklist',
      ],
      cta: 'Discuss a Pilot',
      page: 'about',
    },
    {
      label: 'Step Back',
      title: 'Operational Readiness Assessment',
      body: 'A practical review of where the business is owner-dependent, under-documented, overly manual, or harder to run than it should be.',
      bullets: [
        'Operating map',
        'Top bottlenecks',
        'Quick-win opportunities',
        '30 / 60 / 90-day plan',
      ],
      cta: 'Explore the Assessment',
      page: 'assessment',
    },
  ];

  const offerSection = (
    <section style={{ background: '#F8F6F2', padding: '96px 40px' }}>
      <div style={wrap}>
        <div style={{ maxWidth: 760, marginBottom: 48 }}>
          <SectionLabel>The Work</SectionLabel>
          <h2 style={h2Style}>
            Start with the smallest useful move that creates real clarity.
          </h2>
          <p style={bodyStyle}>
            Some businesses need a focused cleanup sprint. Others need a broader readiness review. Either way, the work should produce useful operating structure — not just another document.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 26 }}>
          {offers.map((offer, i) => (
            <div key={i} style={{
              ...cardStyle,
              padding: 36,
              display: 'flex',
              flexDirection: 'column',
              minHeight: 430,
            }}>
              <div style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#2A4535',
                marginBottom: 18,
              }}>
                {offer.label}
              </div>

              <h3 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 34,
                fontWeight: 500,
                color: '#1B2B42',
                margin: '0 0 18px',
                lineHeight: 1.15,
              }}>
                {offer.title}
              </h3>

              <p style={{ ...bodyStyle, marginBottom: 26 }}>{offer.body}</p>

              <div style={{ display: 'grid', gap: 10, marginBottom: 34 }}>
                {offer.bullets.map((b, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    gap: 10,
                    alignItems: 'flex-start',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 14,
                    color: '#4A4540',
                    lineHeight: 1.55,
                  }}>
                    <span style={{ color: '#2A4535', fontWeight: 700 }}>✓</span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 'auto' }}>
                <Button variant={i === 0 ? 'primary' : 'secondary'} onClick={() => setActivePage(offer.page)}>
                  {offer.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 34,
          background: '#1B2B42',
          padding: '28px 34px',
          color: '#fff',
        }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 24,
            fontWeight: 500,
            lineHeight: 1.45,
            margin: 0,
          }}>
            AI should not feel like another system to manage. It should make existing work easier to see, easier to move, and easier to complete.
          </p>
        </div>
      </div>
    </section>
  );

  // 5. Process
  const steps = [
    ['01', 'Clarify', 'Name the real friction, the owner bottlenecks, and the operating rhythm that needs attention first.'],
    ['02', 'Build', 'Create practical tools: dashboards, checklists, triage rules, handoff flows, documentation, and reporting cadence.'],
    ['03', 'Test', 'Run the system in real work, simplify what creates drag, and identify the next workflow to clean up.'],
  ];

  const process = (
    <section style={{ background: '#fff', padding: '96px 40px' }}>
      <div style={wrap}>
        <div style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 80, alignItems: 'start' }}>
          <div>
            <SectionLabel>The Plan</SectionLabel>
            <h2 style={h2Style}>
              Make the business easier to operate before adding more complexity.
            </h2>
            <p style={bodyStyle}>
              The work starts with reality: what tools you already use, how the team actually communicates, where work gets stuck, and what the owner should stop carrying personally.
            </p>
          </div>

          <div style={{ display: 'grid', gap: 18 }}>
            {steps.map(([num, title, body]) => (
              <div key={num} style={{
                display: 'grid',
                gridTemplateColumns: '72px 1fr',
                gap: 24,
                padding: '24px 0',
                borderBottom: '1px solid #E2DDD8',
              }}>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 30,
                  color: '#2A4535',
                }}>
                  {num}
                </div>
                <div>
                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 26,
                    fontWeight: 500,
                    color: '#1B2B42',
                    margin: '0 0 8px',
                  }}>
                    {title}
                  </h3>
                  <p style={bodyStyle}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  // 6. Final CTA
  const finalCta = (
    <section style={{ background: '#F8F6F2', padding: '90px 40px 110px' }}>
      <div style={{ ...wrap, textAlign: 'center', maxWidth: 760 }}>
        <SectionLabel>Next Step</SectionLabel>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(32px, 4vw, 52px)',
          fontWeight: 500,
          color: '#1B2B42',
          margin: '0 0 20px',
          lineHeight: 1.15,
        }}>
          Have a business that needs to clean up before it can grow?
        </h2>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 15,
          color: '#6B6560',
          lineHeight: 1.8,
          marginBottom: 36,
        }}>
          Start with a conversation. We can identify whether the right next move is a narrow cleanup pilot, a broader readiness assessment, or no engagement at all.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button onClick={() => setActivePage('about')}>Schedule a Conversation</Button>
          <Button variant="secondary" onClick={() => setActivePage('services')}>See Services</Button>
        </div>
      </div>
    </section>
  );

  return (
    <div>
      {hero}
      {problem}
      {whyPaul}
      {offerSection}
      {process}
      {finalCta}
    </div>
  );
}

window.Home = Home;
