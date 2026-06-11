"use client";

import { motion } from 'framer-motion';
import { Target, Eye, Shield, Award } from 'lucide-react';

export default function AboutPage() {
  const slideUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div>
      <section style={{ backgroundColor: 'var(--primary)', color: '#fff', padding: '6rem 0', textAlign: 'center' }}>
        <div className="container">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ fontSize: '3rem', fontFamily: 'var(--font-poppins)', marginBottom: '1rem' }}>
            About ARASS
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto', color: 'rgba(255,255,255,0.9)' }}>
            Shaping the future of global healthcare through clinical excellence, innovative research, and exceptional education.
          </motion.p>
        </div>
      </section>

      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <motion.div variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-poppins)', color: 'var(--primary)', marginBottom: '1.5rem' }}>Our History & Philosophy</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1rem' }}>
                Established with a vision to bridge the gap between theoretical medical knowledge and practical clinical application, ARASS has grown into a globally recognized institution for healthcare professionals.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                We believe that education must evolve alongside medical advancements. Our philosophy centers on evidence-based practice, ethical patient care, and continuous professional development.
              </p>
            </motion.div>
            <motion.div variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ backgroundColor: 'var(--background-secondary)', padding: '2rem', borderRadius: 'var(--border-radius)', borderLeft: '4px solid var(--secondary)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <Eye size={28} color="var(--primary)" />
                    <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Our Vision</h3>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', margin: 0 }}>To be the world's leading educational platform for healthcare professionals, driving innovation and raising global clinical standards.</p>
                </div>
                <div style={{ backgroundColor: 'var(--background-secondary)', padding: '2rem', borderRadius: 'var(--border-radius)', borderLeft: '4px solid var(--accent)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <Target size={28} color="var(--primary)" />
                    <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Our Mission</h3>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', margin: 0 }}>To provide accessible, high-quality, and evidence-based clinical education that empowers medical practitioners to deliver exceptional patient care.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section style={{ padding: '6rem 0', backgroundColor: 'var(--background-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-poppins)', color: 'var(--primary)' }}>Core Values</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {[
              { icon: <Shield size={32} color="var(--primary)" />, title: 'Integrity', desc: 'Upholding the highest ethical standards in education and clinical practice.' },
              { icon: <Award size={32} color="var(--primary)" />, title: 'Excellence', desc: 'Striving for perfection and superior quality in all our programs.' },
              { icon: <Target size={32} color="var(--primary)" />, title: 'Innovation', desc: 'Embracing modern technology and advanced medical research.' }
            ].map((val, i) => (
              <motion.div key={i} variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: 'var(--border-radius)', textAlign: 'center', boxShadow: 'var(--box-shadow)' }}>
                <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>{val.icon}</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{val.title}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}