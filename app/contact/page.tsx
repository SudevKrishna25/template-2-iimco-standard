"use client";

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  const slideUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div>
      <section style={{ backgroundColor: 'var(--primary)', color: '#fff', padding: '6rem 0', textAlign: 'center' }}>
        <div className="container">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ fontSize: '3rem', fontFamily: 'var(--font-poppins)', marginBottom: '1rem' }}>
            Contact Us
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto', color: 'rgba(255,255,255,0.9)' }}>
            Have questions about our programs or admissions? Get in touch with our team today.
          </motion.p>
        </div>
      </section>

      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
            
            <motion.div variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-poppins)', color: 'var(--primary)', marginBottom: '1.5rem' }}>Get In Touch</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                Fill out the form below and our admissions team will get back to you within 24 hours.
              </p>
              
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <input type="text" placeholder="First Name" required style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: 'var(--border-radius)', fontFamily: 'inherit', fontSize: '1rem' }} />
                  <input type="text" placeholder="Last Name" required style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: 'var(--border-radius)', fontFamily: 'inherit', fontSize: '1rem' }} />
                </div>
                <input type="email" placeholder="Email Address" required style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: 'var(--border-radius)', fontFamily: 'inherit', fontSize: '1rem' }} />
                <input type="tel" placeholder="Phone Number" style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: 'var(--border-radius)', fontFamily: 'inherit', fontSize: '1rem' }} />
                <select style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: 'var(--border-radius)', fontFamily: 'inherit', fontSize: '1rem', color: 'var(--text-secondary)' }}>
                  <option value="">Select Program of Interest</option>
                  <option value="clinical">Advanced Clinical Leadership</option>
                  <option value="management">Healthcare Management</option>
                  <option value="surgery">Surgical Innovations</option>
                  <option value="other">Other</option>
                </select>
                <textarea placeholder="Your Message" rows={5} required style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: 'var(--border-radius)', fontFamily: 'inherit', fontSize: '1rem', resize: 'vertical' }}></textarea>
                <button type="submit" className="btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '1rem' }}>
                  Send Message <Send size={18} />
                </button>
              </form>
            </motion.div>

            <motion.div variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div style={{ backgroundColor: 'var(--background-secondary)', padding: '3rem 2rem', borderRadius: 'var(--border-radius)' }}>
                <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-poppins)', color: 'var(--primary)', marginBottom: '2rem' }}>Contact Information</h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ backgroundColor: 'var(--primary)', color: '#fff', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Our Campus</h4>
                      <p style={{ color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>123 Medical Innovation Drive,<br/>Healthcare City, 10001</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ backgroundColor: 'var(--primary)', color: '#fff', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Phone Numbers</h4>
                      <p style={{ color: 'var(--text-secondary)', margin: 0 }}>Admissions: +1 (555) 123-4567<br/>General: +1 (555) 123-4568</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ backgroundColor: 'var(--primary)', color: '#fff', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Email Addresses</h4>
                      <p style={{ color: 'var(--text-secondary)', margin: 0 }}>admissions@arass.edu<br/>info@arass.edu</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>
    </div>
  );
}