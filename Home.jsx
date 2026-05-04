import React from 'react';

// Home page — StoryBrand refinement focused on clarity, credibility, and practical action

function Home({ setActivePage }) {
  const isMobile = window.useIsMobile();
  const wrap = { maxWidth: 1120, margin: '0 auto', padding: isMobile ? '0 22px' : '0 40px' };

  const h2Style = {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 'clamp(30px, 3.5vw, 48px)',
    fontWeight: 500,
    color: '#1B2B42',
    margin: isMobile ? '0 0 16px' : '0 0 22px',
    lineHeight: 1.15,
  };

  const bodyStyle = {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: isMobile ? 16 : 15,
    lineHeight: isMobile ? 1.62 : 1.8,
    color: '#4A4540',
    margin: 0,
  };

  const cardStyle = {
    background: '#fff',
    border: '1px solid #E2DDD8',
    padding: isMobile ? '22px 20px' : '30px 30px 28px',
  };

  // 1. Hero
  const hero = (
    <section style={{
      position: 'relative',
      background: '#1B2B42',
      color: '#fff',
      padding: isMobile ? '104px 22px 58px' : '160px 40px 120px',
      minHeight: isMobile ? 'auto' : '90vh',
      display: 'flex',
      alignItems: 'center',
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
      <div style={{ ...wrap, padding: 0, width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 860 }}>
          <div style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 11,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.68)',
            fontWeight: 600,
            marginBottom: isMobile ? 20 : 28,
          }}>
            MIH: Make It Happen
          </div>

          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(44px, 6vw, 74px)',
            fontWeight: 500,
            lineHeight: 1.06,
            letterSpacing: '-0.01em',
            color: '#fff',
            margin: isMobile ? '0 0 20px' : '0 0 28px',
            maxWidth: 820,
          }}>
            Your business is too valuable to run on memory, workarounds, and founder instinct.
          </h1>

          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: isMobile ? 17 : 18,
            lineHeight: isMobile ? 1.58 : 1.75,
            color: 'rgba(255,255,255,0.72)',
            maxWidth: 680,
            marginBottom: isMobile ? 28 : 40,
          }}>
            Maggio MIH helps owner-led businesses clean up workflows, scattered tools, weak reporting, and owner-dependent processes — so the business becomes easier to run, easier to delegate, and easier to grow.
          </p>

          <div style={{ display: 'flex', gap: isMobile ? 12 : 14, flexWrap: 'wrap' }}>
            <Button onClick={() => setActivePage('about')}>Schedule a Conversation</Button>
            <Button variant="ghost" onClick={() => setActivePage('assessment')}>Explore the Assessment</Button>
          </div>

          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 13,
            color: 'rgba(255,255,255,0.58)',
            fontWeight: 500,
            marginTop: isMobile ? 24 : 36,
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
    <section style={{ background: '#F8F6F2', padding: isMobile ? '52px 22px' : '96px 40px' }}>
      <div style={wrap}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 28 : 80, alignItems: 'start' }}>
          <div>
            <SectionLabel>The Problem</SectionLabel>
            <h2 style={h2Style}>
              You built something real. The operating layer just has not caught up.
            </h2>
            <p style={{ ...bodyStyle, marginBottom: 26 }}>
              Most owner-led businesses do not become harder to run because the owner is careless. They become harder to run because the business grew through hustle, judgment, relationships, and daily problem-solving.
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

            <div style={{ display: 'grid', gap: isMobile ? 12 : 14 }}>
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

  // 3. Prospect outcomes / guide
  const outcomes = [
    {
      title: 'You stop being the operating system',
      body: 'The business should not depend on one person remembering every detail, answering every question, and holding every process together.',
    },
    {
      title: 'You get cleaner execution',
      body: 'Clear workflows, cleaner handoffs, and better accountability help the team move work forward without constant founder intervention.',
    },
    {
      title: 'You get better visibility',
      body: 'Stronger reporting and cleaner information flow make it easier to see what is working, what is stuck, and what needs attention.',
    },
    {
      title: 'You get practical implementation',
      body: 'This is not abstract advice or another strategy deck. The work translates business needs into usable systems, workflows, and next steps.',
    },
  ];

  const whyPaul = (
    <section style={{ background: '#fff', padding: isMobile ? '52px 22px' : '96px 40px' }}>
      <div style={wrap}>
        <div style={{ maxWidth: 760, marginBottom: 48 }}>
          <SectionLabel>What Changes For You</SectionLabel>
          <h2 style={h2Style}>
            You get the clarity, structure, and operating discipline your business needs for its next stage.
          </h2>
          <p style={bodyStyle}>
            The point is not to add theory, software, or another layer of complexity. The point is to make the business easier to run, easier to delegate, and easier to trust.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: isMobile ? 16 : 22 }}>
          {outcomes.map((item, i) => (
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

        <p style={{
          ...bodyStyle,
          maxWidth: 820,
          marginTop: 28,
          paddingTop: 24,
          borderTop: '1px solid #E2DDD8',
          color: '#5A544E',
        }}>
          Maggio MIH brings COO-level judgment, Air Force discipline, deep legal-tech and services operations experience, technical fluency, and outside perspective — but the outcome is simple: make the business easier to run, scale, and trust.
        </p>
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
    <section style={{ background: '#F8F6F2', padding: isMobile ? '52px 22px' : '96px 40px' }}>
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

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 16 : 26 }}>
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
          padding: isMobile ? '22px 20px' : '28px 34px',
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
    <section style={{ background: '#fff', padding: isMobile ? '52px 22px' : '96px 40px' }}>
      <div style={wrap}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '0.85fr 1.15fr', gap: isMobile ? 28 : 80, alignItems: 'start' }}>
          <div>
            <SectionLabel>The Plan</SectionLabel>
            <h2 style={h2Style}>
              Make the business easier to operate before adding more complexity.
            </h2>
            <p style={bodyStyle}>
              The work starts with reality: what tools you already use, how the team actually communicates, where work gets stuck, and what the owner should stop carrying personally.
            </p>
          </div>

          <div style={{ display: 'grid', gap: isMobile ? 14 : 18 }}>
            {steps.map(([num, title, body]) => (
              <div key={num} style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '72px 1fr',
                gap: isMobile ? 16 : 24,
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
    <section style={{ background: '#F8F6F2', padding: isMobile ? '56px 22px 64px' : '90px 40px 110px' }}>
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
          fontSize: isMobile ? 16 : 15,
          color: '#6B6560',
          lineHeight: isMobile ? 1.62 : 1.8,
          marginBottom: isMobile ? 24 : 36,
        }}>
          Start with a conversation. We can identify whether the right next move is a narrow cleanup pilot, a broader readiness assessment, or no engagement at all.
        </p>
        <div style={{ display: 'flex', gap: isMobile ? 12 : 14, justifyContent: 'center', flexWrap: 'wrap' }}>
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
