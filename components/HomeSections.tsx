"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, Award, Users, FileText, Calendar, Download } from 'lucide-react';

export default function HomeSections() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const slideUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
      {/* SECTION 5: FEATURED PROGRAMS */}
      <section style={{ padding: '6rem 0', backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontFamily: 'var(--font-poppins)', fontSize: '2.5rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>Featured Programs</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>Discover our most sought-after clinical and professional development programs.</p>
          </div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {[
              { title: "Advanced Clinical Leadership", duration: "12 Months", type: "Certification" },
              { title: "Healthcare Management", duration: "24 Months", type: "Master's Level" },
              { title: "Surgical Innovations", duration: "6 Months", type: "Short Course" }
            ].map((prog, i) => (
              <motion.div key={i} variants={slideUp} style={{ padding: '2rem', border: '1px solid #e2e8f0', borderRadius: 'var(--border-radius)', backgroundColor: '#fff', transition: 'var(--transition)' }}>
                <BookOpen size={32} color="var(--primary)" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{prog.title}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Duration: {prog.duration} • {prog.type}</p>
                <Link href="/programs" className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Learn More</Link>
              </motion.div>
            ))}
          </motion.div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/programs" className="btn-primary">View All Programs</Link>
          </div>
        </div>
      </section>

      {/* SECTION 6: FACULTY EXCELLENCE */}
      <section style={{ padding: '6rem 0', backgroundColor: 'var(--background-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontFamily: 'var(--font-poppins)', fontSize: '2.5rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>Faculty Excellence</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>Learn from internationally recognized medical professionals.</p>
          </div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[1, 2, 3, 4].map((faculty, i) => (
              <motion.div key={i} variants={slideUp} style={{ backgroundColor: '#fff', borderRadius: 'var(--border-radius)', overflow: 'hidden', boxShadow: 'var(--box-shadow)', textAlign: 'center' }}>
                <div style={{ height: '250px', backgroundColor: '#e2e8f0', backgroundImage: 'url(/images/faculty.png)', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'transparent' }}>Photo</div>
                <div style={{ padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Dr. John Doe</h3>
                  <p style={{ color: 'var(--secondary)', fontWeight: 600, marginBottom: '1rem' }}>Clinical Director</p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>15+ years experience in surgical innovations and education.</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 14: FINAL CTA */}
      <section style={{ padding: '6rem 0', backgroundColor: 'var(--primary)', color: '#fff', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <h2 style={{ fontFamily: 'var(--font-poppins)', fontSize: '3rem', marginBottom: '1.5rem', color: '#fff' }}>Take the Next Step in Your Healthcare Career</h2>
            <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', color: 'rgba(255,255,255,0.9)' }}>Explore opportunities designed to advance your professional journey.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <Link href="/contact" className="btn-primary">Request Information</Link>
              <Link href="/apply" className="btn-secondary" style={{ borderColor: '#fff', color: '#fff' }}>Contact Admissions</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
