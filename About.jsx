import React, { useState } from 'react';

// About & Contact page

function About({ setActivePage }) {
  const wrap = { maxWidth: 1120, margin: '0 auto', padding: '0 40px' };
  const [formState, setFormState] = React.useState({
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
    fontFamily: "'DM Sans', sans-serif", fontSize: 14,
    color: '#1A1918', background: '#fff',
    border: '1px solid #E2DDD8', borderRadius: 2,
    padding: '12px 16px', width: '100%',
    outline: 'none', boxSizing: 'border-box',
    transition: 'border-color 0.2s',
  };
  const labelStyle = {
    fontFamily: "'DM Sans', sans-serif", fontSize: 12,
    letterSpacing: '0.1em', textTransform: 'uppercase',
    color: '#6B6560', display: 'block', marginBottom: 8,
  };
  const fieldWrap = { marginBottom: 24 };

  return (
    <div>
      {/* Hero, chapel photo as full-bleed bg */}
      <section style={{
        position: 'relative', padding: '160px 40px 120px', color: '#fff', overflow: 'hidden',
        backgroundImage: 'url(chapel.jpg)',
        backgroundSize: 'cover', backgroundPosition: 'center 40%',
      }}>
        {/* Dark overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(27,43,66,0.92) 45%, rgba(27,43,66,0.55) 100%)',
        }} />
        <div style={{ ...wrap, position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: 600 }}>
            <div style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 11,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)', marginBottom: 24,
            }}>About</div>
            <h1 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 500,
              lineHeight: 1.1, color: '#fff', margin: '0 0 28px',
            }}>
              Paul Maggio
            </h1>
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 17,
              lineHeight: 1.75, color: 'rgba(255,255,255,0.7)', maxWidth: 520,
            }}>
              Operator, problem-solver, and business builder focused on helping owners turn complexity into clear execution.
            </p>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section style={{ background: '#fff', padding: '80px 40px' }}>
        <div style={wrap}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
            <div>
              <SectionLabel>Background</SectionLabel>
              <p style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 15,
                lineHeight: 1.8, color: '#4A4540', marginBottom: 20, marginTop: 0,
              }}>
                My background sits at the intersection of operations, technology, investing, AI implementation, process design, and hands-on business support.
              </p>
              <p style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 15,
                lineHeight: 1.8, color: '#4A4540', marginBottom: 20,
              }}>
                I am most useful when the problem is ambiguous, the stakes are real, and someone needs to step in, make sense of the mess, and move the work forward.
              </p>
              <p style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 15,
                lineHeight: 1.8, color: '#4A4540',
              }}>
                I work best with people who value trust, ownership, direct communication, and practical follow-through.
              </p>
            </div>
            <div>
              <SectionLabel>MIH: Make It Happen</SectionLabel>
              <div style={{
                padding: '28px 32px', background: '#F8F6F2',
                borderTop: '3px solid #2A4535', marginBottom: 24,
              }}>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif", fontSize: 22,
                  fontWeight: 500, color: '#1B2B42', lineHeight: 1.5, margin: 0,
                }}>
                  "MIH stands for Make It Happen. Not a slogan. The standard for how I approach work."
                </p>
              </div>
              <p style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 14,
                lineHeight: 1.8, color: '#6B6560',
              }}>
                Clarify the objective. Identify the bottlenecks. Build the system. Keep moving until the work is real.
              </p>
              <p style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 14,
                lineHeight: 1.8, color: '#6B6560', marginTop: 16,
              }}>
                I believe the best operators do not create dependency. They build clarity, systems, and confidence so the business becomes stronger after they leave the room.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section style={{ background: '#F8F6F2', padding: '80px 40px' }} id="contact">
        <div style={wrap}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
            <div>
              <SectionLabel>Contact</SectionLabel>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 500,
                color: '#1B2B42', margin: '0 0 20px', lineHeight: 1.2,
              }}>
                Let's clarify what needs to happen next.
              </h2>
              <p style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 15,
                lineHeight: 1.8, color: '#6B6560', marginBottom: 36,
              }}>
                Use this form to share the business, project, or operational issue you are trying to move forward. Or reach out directly.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  ['Email', 'pmaggio@maggio-mih.com'],
                ].map(([label, val], i) => (
                  <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                    <span style={{
                      fontFamily: "'DM Sans', sans-serif", fontSize: 11,
                      letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: '#6B6560', minWidth: 60,
                    }}>{label}</span>
                    <span style={{
                      fontFamily: "'DM Sans', sans-serif", fontSize: 14,
                      color: '#1B2B42',
                    }}>{val}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 48, padding: '24px 28px', border: '1px solid #E2DDD8', background: '#fff' }}>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 13,
                  color: '#6B6560', lineHeight: 1.7, margin: 0,
                }}>
                  <strong style={{ color: '#1B2B42' }}>Helpful context to share:</strong> What kind of business is it? What is changing, growth, transition, cleanup? What feels messy or overly dependent on one person? What would make the next 30–90 days successful?
                </p>
              </div>
            </div>
            <div>
              {formState.submitted ? (
                <div style={{
                  background: '#fff', border: '1px solid #E2DDD8',
                  padding: '48px 40px', textAlign: 'center',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16,
                }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: '50%',
                    background: '#2A4535', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    fontSize: 20, color: '#fff',
                  }}>✓</div>
                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', serif", fontSize: 26,
                    fontWeight: 500, color: '#1B2B42', margin: 0,
                  }}>Message received.</h3>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif", fontSize: 14,
                    color: '#6B6560', lineHeight: 1.7, maxWidth: 320, margin: 0,
                  }}>
                    I will follow up within one business day. Thank you for reaching out.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ background: '#fff', padding: '36px 40px', border: '1px solid #E2DDD8' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 0 }}>
                    <div style={fieldWrap}>
                      <label style={labelStyle}>Name</label>
                      <input name="name" value={formState.name} onChange={handleChange} required style={inputStyle} placeholder="Your name" />
                    </div>
                    <div style={fieldWrap}>
                      <label style={labelStyle}>Email</label>
                      <input name="email" type="email" value={formState.email} onChange={handleChange} required style={inputStyle} placeholder="your@email.com" />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                    <div style={fieldWrap}>
                      <label style={labelStyle}>Company</label>
                      <input name="company" value={formState.company} onChange={handleChange} style={inputStyle} placeholder="Company name" />
                    </div>
                    <div style={fieldWrap}>
                      <label style={labelStyle}>Your Role</label>
                      <input name="role" value={formState.role} onChange={handleChange} style={inputStyle} placeholder="Owner, Advisor, Founder…" />
                    </div>
                  </div>
                  <div style={fieldWrap}>
                    <label style={labelStyle}>What are you trying to clean up or move forward?</label>
                    <textarea name="message" value={formState.message} onChange={handleChange} required rows={4} style={{ ...inputStyle, resize: 'vertical' }} placeholder="Describe the business situation, challenge, or initiative…" />
                  </div>
                  <div style={fieldWrap}>
                    <label style={labelStyle}>Context</label>
                    <select name="context" value={formState.context} onChange={handleChange} style={inputStyle}>
                      <option value="">Select the best fit…</option>
                      <option>Growth / scaling</option>
                      <option>Sale or transition preparation</option>
                      <option>Operational cleanup / workflow</option>
                      <option>Investor / diligence support</option>
                      <option>AI / process improvement</option>
                      <option>Special project or opportunity</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <button type="submit" style={{
                    fontFamily: "'DM Sans', sans-serif", fontSize: 13,
                    fontWeight: 500, letterSpacing: '0.07em', textTransform: 'uppercase',
                    background: '#2A4535', color: '#fff',
                    border: 'none', borderRadius: 2, cursor: 'pointer',
                    padding: '14px 28px', width: '100%',
                  }}>
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
