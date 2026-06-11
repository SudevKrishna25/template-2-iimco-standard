"use client";

import { motion } from 'framer-motion';
import { Send, FileCheck, CheckCircle } from 'lucide-react';

export default function ApplyPage() {
  const slideUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div>
      <section style={{ backgroundColor: 'var(--primary)', color: '#fff', padding: '6rem 0', textAlign: 'center' }}>
        <div className="container">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ fontSize: '3rem', fontFamily: 'var(--font-poppins)', marginBottom: '1rem' }}>
            Apply for Information
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto', color: 'rgba(255,255,255,0.9)' }}>
            Start your journey with ARASS. Fill out the application form below to request detailed program information and admission requirements.
          </motion.p>
        </div>
      </section>

      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
            
            <motion.div variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-poppins)', color: 'var(--primary)', marginBottom: '1.5rem' }}>Application Form</h2>
              
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
                <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: 'var(--border-radius)', boxShadow: 'var(--box-shadow)' }}>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--secondary)' }}>1. Personal Details</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                    <input type="text" placeholder="First Name *" required style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: 'var(--border-radius)', fontFamily: 'inherit', fontSize: '1rem', width: '100%' }} />
                    <input type="text" placeholder="Last Name *" required style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: 'var(--border-radius)', fontFamily: 'inherit', fontSize: '1rem', width: '100%' }} />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <input type="email" placeholder="Email Address *" required style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: 'var(--border-radius)', fontFamily: 'inherit', fontSize: '1rem', width: '100%' }} />
                    <input type="tel" placeholder="Phone Number *" required style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: 'var(--border-radius)', fontFamily: 'inherit', fontSize: '1rem', width: '100%' }} />
                  </div>
                </div>

                <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: 'var(--border-radius)', boxShadow: 'var(--box-shadow)' }}>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--secondary)' }}>2. Academic Interest</h3>
                  <select required style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: 'var(--border-radius)', fontFamily: 'inherit', fontSize: '1rem', color: 'var(--text-secondary)', width: '100%', marginBottom: '1.5rem' }}>
                    <option value="">Select Program Level *</option>
                    <option value="certification">Certification Program</option>
                    <option value="masters">Master's Level Program</option>
                    <option value="short">Short Course</option>
                  </select>
                  <select required style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: 'var(--border-radius)', fontFamily: 'inherit', fontSize: '1rem', color: 'var(--text-secondary)', width: '100%', marginBottom: '1.5rem' }}>
                    <option value="">Select Intended Start Date *</option>
                    <option value="fall">Fall Semester</option>
                    <option value="spring">Spring Semester</option>
                    <option value="summer">Summer Semester</option>
                  </select>
                  <textarea placeholder="Tell us about your background and why you wish to apply to ARASS (Optional)" rows={4} style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: 'var(--border-radius)', fontFamily: 'inherit', fontSize: '1rem', resize: 'vertical', width: '100%' }}></textarea>
                </div>

                <button type="submit" className="btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '1rem 2rem', alignSelf: 'flex-start', fontSize: '1.1rem' }}>
                  Submit Application <Send size={20} />
                </button>
              </form>
            </motion.div>

            <motion.div variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div style={{ backgroundColor: 'var(--background-secondary)', padding: '3rem 2rem', borderRadius: 'var(--border-radius)' }}>
                <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-poppins)', color: 'var(--primary)', marginBottom: '2rem' }}>Next Steps</h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  <div style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ color: 'var(--secondary)' }}><FileCheck size={32} /></div>
                    <div>
                      <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>1. Review Process</h4>
                      <p style={{ color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>Our admissions team will review your submitted information and academic interests.</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ color: 'var(--secondary)' }}><Send size={32} /></div>
                    <div>
                      <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>2. Receive Information Packet</h4>
                      <p style={{ color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>You will receive a comprehensive digital brochure with curriculum details and fee structures.</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ color: 'var(--secondary)' }}><CheckCircle size={32} /></div>
                    <div>
                      <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>3. Schedule Consultation</h4>
                      <p style={{ color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>An academic advisor will contact you to answer questions and finalize enrollment.</p>
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