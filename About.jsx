import React, { useState } from 'react';

// About & Contact page

function About({ setActivePage }) {
  const isMobile = window.useIsMobile();
  const wrap = { maxWidth: 1120, margin: '0 auto', padding: isMobile ? '0 22px' : '0 40px' };
  const [formState, setFormState] = useState({
    name: '', email: '', company: '', role: '', message: '', context: '', submitted: false,
  });

  const handleChange = (e) => setFormState(s => ({ ...s, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Inquiry from maggio-mih.com');
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\nCompany: ${formState.company}\nRole: ${formState.role}\nContext: ${formState.context}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:pmaggio@maggio-mih.com?subject=${subject}&body=${body}`;
    setFormState(s => ({ ...s, submitted: true }));
  };

  const inputStyle = {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 14,
    color: '#1A1918',
    background: '#fff',
    border: '1px solid #E2DDD8',
    borderRadius: 2,
    padding: '12px 16px',
    width: '100%',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s',
  };

  const labelStyle = {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 12,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: '#6B6560',
    display: 'block',
    marginBottom: 8,
    fontWeight: 700,
  };

  const fieldWrap = { marginBottom: 24 };

  const strengths = [
    ['COO-level judgment', 'Paul has sat close enough to the operating layer to understand how businesses actually run — not just how they look in a meeting or spreadsheet.'],
    ['Military discipline', 'Air Force Academy training and Air Force service shaped a bias toward clarity, accountability, ownership, and calm execution under pressure.'],
    ['Technical depth', 'Experience across technology, information management, AI, workflows, and systems helps translate between business needs and practical implementation.'],
    ['Outside perspective', 'Most owners are too close to the daily fire to redesign the system. Paul brings a clear outside view without losing respect for how the business was built.'],
  ];

  const principles = [
    ['Start with the real workflow', 'Before adding tools, I want to understand how the work actually moves today.'],
    ['Use what already exists', 'Most businesses do not need another system first. They need clearer use of the systems already in place.'],
    ['Make it useful quickly', 'A better dashboard, checklist, triage rule, or weekly rhythm is more valuable than a polished deck no one uses.'],
    ['Build clarity that lasts', 'The goal is not dependency. The goal is stronger operating structure the team can maintain.'],
  ];

  return (
    <div>
      {/* Hero */}
      <section style={{
        position: 'relative',
        padding: isMobile ? '104px 22px 62px' : '160px 40px 118px',
        color: '#fff',
        overflow: 'hidden',
        backgroundImage: 'url(chapel.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(27,43,66,0.94) 42%, rgba(27,43,66,0.58) 100%)',
        }} />
        <div style={{ ...wrap, position: 'relative', zIndex: 1 }}>
          <div style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 12,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.70)',
            fontWeight: 700,
            marginBottom: 24,
          }}>
            About Paul Maggio
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
            Operator. Translator. Problem-solver.
          </h1>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: isMobile ? 17 : 18,
            lineHeight: isMobile ? 1.58 : 1.75,
            color: 'rgba(255,255,255,0.78)',
            maxWidth: 680,
            marginBottom: isMobile ? 24 : 36,
          }}>
            I help owners and teams turn operational mess into clearer workflows, better visibility, and practical systems that make the business easier to run.
          </p>
          <Button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>
            Start a Conversation
          </Button>
        </div>
      </section>

      {/* Background */}
      <section style={{ padding: isMobile ? '52px 22px' : '96px 40px', background: '#F8F6F2' }}>
        <div style={wrap}>
          <SectionLabel>Background</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 28 : 72, alignItems: 'start' }}>
            <div>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(36px, 4vw, 52px)',
                fontWeight: 500,
                lineHeight: 1.12,
                color: '#1B2B42',
                margin: '0 0 24px',
              }}>
                Built for the messy middle between strategy and execution.
              </h2>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: isMobile ? 17 : 16,
                lineHeight: 1.85,
                color: '#4A4540',
                marginBottom: 18,
              }}>
                My work sits where many owner-led businesses struggle most: the space between good intentions and repeatable execution.
              </p>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: isMobile ? 17 : 16,
                lineHeight: 1.85,
                color: '#4A4540',
              }}>
                I am most useful when the business is real, the opportunity is valuable, and the operating layer is too dependent on memory, workarounds, scattered tools, or a few overloaded people.
              </p>
            </div>

            <div style={{
              background: '#fff',
              border: '1px solid #E2DDD8',
              padding: 36,
              boxShadow: '0 12px 36px rgba(27,43,66,0.06)',
            }}>
              {[
                ['Former COO', 'Senior operating experience with responsibility for execution, organization, and follow-through.'],
                ['Air Force Academy graduate', 'A mindset built on discipline, accountability, and clarity under pressure.'],
                ['Air Force veteran', 'Leadership experience shaped by structure, mission, and ownership.'],
                ['Technology and AI fluency', 'Practical understanding of tools, systems, data, workflows, and where AI can reduce friction.'],
              ].map(([title, body], i) => (
                <div key={title} style={{
                  padding: i === 0 ? '0 0 22px' : '22px 0',
                  borderBottom: i === 3 ? 'none' : '1px solid #E2DDD8',
                }}>
                  <h3 style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 13,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#1B2B42',
                    margin: '0 0 8px',
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
        </div>
      </section>

      {/* What I bring */}
      <section style={{ padding: isMobile ? '52px 22px' : '96px 40px', background: '#fff' }}>
        <div style={wrap}>
          <SectionLabel>What I Bring</SectionLabel>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(36px, 4vw, 52px)',
            fontWeight: 500,
            lineHeight: 1.12,
            color: '#1B2B42',
            margin: '0 0 40px',
            maxWidth: 760,
          }}>
            Practical judgment for businesses that have outgrown informal systems.
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, minmax(0, 1fr))', gap: isMobile ? 18 : 28 }}>
            {strengths.map(([title, body]) => (
              <div key={title} style={{
                border: '1px solid #E2DDD8',
                background: '#F8F6F2',
                padding: 32,
                minHeight: 230,
              }}>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 32,
                  fontWeight: 500,
                  color: '#1B2B42',
                  margin: '0 0 14px',
                }}>
                  {title}
                </h3>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: isMobile ? 16 : 15,
                  lineHeight: isMobile ? 1.58 : 1.75,
                  color: '#4A4540',
                  margin: 0,
                }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MIH */}
      <section style={{ padding: isMobile ? '50px 22px' : '88px 40px', background: '#1B2B42', color: '#fff' }}>
        <div style={{ ...wrap, display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '0.9fr 1.1fr', gap: isMobile ? 26 : 64, alignItems: 'center' }}>
          <div>
            <SectionLabel>MIH: Make It Happen</SectionLabel>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(36px, 4vw, 52px)',
              fontWeight: 500,
              lineHeight: 1.15,
              color: '#fff',
              margin: 0,
            }}>
              Clear the mess. Build the system. Move the work forward.
            </h2>
          </div>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: isMobile ? 17 : 16,
            lineHeight: 1.85,
            color: 'rgba(255,255,255,0.76)',
            margin: 0,
          }}>
            MIH stands for Make It Happen. Not as a slogan, but as the standard for the work: clarify the objective, identify the bottlenecks, create the operating structure, and keep moving until the next step is real.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section style={{ padding: isMobile ? '52px 22px' : '96px 40px', background: '#F8F6F2' }}>
        <div style={wrap}>
          <SectionLabel>How I Work</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '0.85fr 1.15fr', gap: isMobile ? 26 : 64, alignItems: 'start' }}>
            <div>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(36px, 4vw, 52px)',
                fontWeight: 500,
                lineHeight: 1.12,
                color: '#1B2B42',
                margin: '0 0 18px',
              }}>
                The goal is not more complexity.
              </h2>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: isMobile ? 17 : 16,
                lineHeight: isMobile ? 1.62 : 1.8,
                color: '#4A4540',
                margin: 0,
              }}>
                The goal is less friction, clearer ownership, and useful structure the team can maintain.
              </p>
            </div>
            <div>
              {principles.map(([title, body], i) => (
                <div key={title} style={{
                  padding: '20px 0',
                  borderBottom: i === principles.length - 1 ? 'none' : '1px solid #E2DDD8',
                }}>
                  <h3 style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 14,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#1B2B42',
                    margin: '0 0 8px',
                  }}>
                    {title}
                  </h3>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: isMobile ? 16 : 15,
                    lineHeight: isMobile ? 1.58 : 1.75,
                    color: '#5A544E',
                    margin: 0,
                  }}>
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact-form" style={{ padding: isMobile ? '52px 22px' : '96px 40px', background: '#fff' }}>
        <div style={wrap}>
          <SectionLabel>Contact</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '0.9fr 1.1fr', gap: isMobile ? 28 : 72, alignItems: 'start' }}>
            <div>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(36px, 4vw, 52px)',
                fontWeight: 500,
                lineHeight: 1.12,
                color: '#1B2B42',
                margin: isMobile ? '0 0 16px' : '0 0 22px',
              }}>
                Tell me what feels messy, unclear, or too dependent on you.
              </h2>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: isMobile ? 17 : 16,
                lineHeight: 1.85,
                color: '#4A4540',
                marginBottom: isMobile ? 20 : 28,
              }}>
                Share the business, project, or operating issue that needs more clarity. The best starting point is usually narrow: one workflow, one dashboard, one role, one handoff, or one operating rhythm.
              </p>
              <div style={{
                background: '#F8F6F2',
                border: '1px solid #E2DDD8',
                padding: 28,
              }}>
                <h3 style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#1B2B42',
                  margin: '0 0 14px',
                }}>
                  Helpful context
                </h3>
                {[
                  'What kind of business or project is it?',
                  'What feels stuck, scattered, or owner-dependent?',
                  'What tools are already in place?',
                  'What would make the next 30 days easier?',
                ].map((item) => (
                  <div key={item} style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: '#5A544E',
                    marginBottom: 10,
                  }}>
                    — {item}
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              background: '#F8F6F2',
              border: '1px solid #E2DDD8',
              padding: 36,
            }}>
              {formState.submitted ? (
                <div>
                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 34,
                    fontWeight: 500,
                    color: '#1B2B42',
                    margin: '0 0 12px',
                  }}>
                    Message opened in your email client.
                  </h3>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: isMobile ? 16 : 15,
                    lineHeight: isMobile ? 1.58 : 1.75,
                    color: '#5A544E',
                  }}>
                    Send the email from your mail app to complete the inquiry.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={fieldWrap}>
                    <label style={labelStyle}>Name</label>
                    <input name="name" value={formState.name} onChange={handleChange} required style={inputStyle} placeholder="Your name" />
                  </div>
                  <div style={fieldWrap}>
                    <label style={labelStyle}>Email</label>
                    <input name="email" type="email" value={formState.email} onChange={handleChange} required style={inputStyle} placeholder="your@email.com" />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 14 : 18 }}>
                    <div style={fieldWrap}>
                      <label style={labelStyle}>Company</label>
                      <input name="company" value={formState.company} onChange={handleChange} style={inputStyle} placeholder="Company" />
                    </div>
                    <div style={fieldWrap}>
                      <label style={labelStyle}>Role</label>
                      <input name="role" value={formState.role} onChange={handleChange} style={inputStyle} placeholder="Owner / Founder / Advisor" />
                    </div>
                  </div>
                  <div style={fieldWrap}>
                    <label style={labelStyle}>Context</label>
                    <select name="context" value={formState.context} onChange={handleChange} style={inputStyle}>
                      <option value="">Select one</option>
                      <option value="Operations cleanup / workflow">Operations cleanup / workflow</option>
                      <option value="Operational readiness assessment">Operational readiness assessment</option>
                      <option value="Founder / owner operating support">Founder / owner operating support</option>
                      <option value="AI-assisted operations">AI-assisted operations</option>
                      <option value="Special project / opportunity">Special project / opportunity</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div style={fieldWrap}>
                    <label style={labelStyle}>What needs to be cleaned up?</label>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      style={{ ...inputStyle, resize: 'vertical' }}
                      placeholder="Describe the business situation, workflow, team handoff, dashboard, tool, or operating issue that needs more clarity."
                    />
                  </div>
                  <button
                    type="submit"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 13,
                      fontWeight: 700,
                      letterSpacing: '0.07em',
                      textTransform: 'uppercase',
                      background: '#2A4535',
                      color: '#fff',
                      border: 'none',
                      padding: isMobile ? '14px 18px' : '15px 30px',
                      cursor: 'pointer',
                      width: '100%',
                    }}
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

window.About = About;
