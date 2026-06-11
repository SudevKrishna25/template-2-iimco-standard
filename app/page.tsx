"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import HomeSections from '@/components/HomeSections';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div>
      {/* SECTION 1: PREMIUM HERO SECTION */}
      <section style={{
        position: 'relative',
        backgroundColor: 'var(--primary)',
        backgroundImage: 'url(/images/hero_bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        padding: '8rem 0 6rem 0',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
      }}>
        {/* Subtle background overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(0, 91, 150, 0.95) 0%, rgba(0, 140, 140, 0.8) 100%)',
          zIndex: 1
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              variants={itemVariants}
              style={{ 
                fontFamily: 'var(--font-poppins)', 
                fontSize: '3.5rem', 
                fontWeight: 700,
                lineHeight: 1.2,
                marginBottom: '1.5rem',
                color: '#ffffff'
              }}
            >
              Empowering Healthcare Excellence Through Advanced Clinical Education
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              style={{
                fontSize: '1.25rem',
                color: '#e2e8f0',
                marginBottom: '2.5rem',
                lineHeight: 1.6
              }}
            >
              Developing healthcare professionals through evidence-based education, expert faculty, and internationally aligned programs.
            </motion.p>
            <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <Link href="/programs" className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                Explore Programs
              </Link>
              <Link href="/download-center" className="btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.1rem', color: '#fff', borderColor: '#fff', backgroundColor: 'transparent' }}>
                Download Brochure
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* SECTION 2: INSTITUTIONAL IMPACT METRICS (Placeholder) */}
      <section style={{ padding: '4rem 0', backgroundColor: 'var(--background-secondary)' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center', flexWrap: 'wrap', gap: '2rem' }}
          >
            <div>
              <h3 style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '0.5rem', fontFamily: 'var(--font-poppins)' }}>25+</h3>
              <p style={{ fontWeight: 600, fontSize: '1.1rem' }}>Years of Excellence</p>
            </div>
            <div>
              <h3 style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '0.5rem', fontFamily: 'var(--font-poppins)' }}>50+</h3>
              <p style={{ fontWeight: 600, fontSize: '1.1rem' }}>Programs Offered</p>
            </div>
            <div>
              <h3 style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '0.5rem', fontFamily: 'var(--font-poppins)' }}>10k+</h3>
              <p style={{ fontWeight: 600, fontSize: '1.1rem' }}>Students Trained</p>
            </div>
            <div>
              <h3 style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '0.5rem', fontFamily: 'var(--font-poppins)' }}>150+</h3>
              <p style={{ fontWeight: 600, fontSize: '1.1rem' }}>Expert Faculty</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: ABOUT ARASS */}
      <section style={{ padding: '6rem 0', backgroundColor: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 style={{ fontFamily: 'var(--font-poppins)', fontSize: '2.5rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
                Shaping the Future of Healthcare Leadership
              </h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                ARASS is a premier institution dedicated to advancing medical and clinical education. We believe in bridging the gap between theoretical knowledge and practical clinical excellence.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                Our commitment to healthcare advancement ensures that our graduates are not just practitioners, but leaders who drive innovation in patient care globally.
              </p>
              <Link href="/about" className="btn-primary">
                Learn More About Us
              </Link>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              style={{ position: 'relative' }}
            >
              {/* Image Placeholder */}
              <div style={{ 
                width: '100%', 
                height: '400px', 
                backgroundColor: 'var(--background-secondary)',
                backgroundImage: 'url(/images/institution.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: 'var(--border-radius)',
                boxShadow: 'var(--box-shadow)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(45deg, rgba(0,91,150,0.2), rgba(0,140,140,0.2))' }}></div>
              </div>
              <div style={{ 
                position: 'absolute', 
                bottom: '-20px', 
                left: '-20px', 
                backgroundColor: 'var(--primary)', 
                color: '#fff', 
                padding: '2rem', 
                borderRadius: 'var(--border-radius)',
                boxShadow: 'var(--box-shadow-hover)'
              }}>
                <h4 style={{ fontFamily: 'var(--font-poppins)', fontSize: '1.5rem', marginBottom: '0.5rem', color: '#fff' }}>Global Standards</h4>
                <p style={{ margin: 0, color: 'rgba(255,255,255,0.8)' }}>Accredited Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY CHOOSE ARASS */}
      <section style={{ padding: '6rem 0', backgroundColor: 'var(--background-secondary)' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '700px', margin: '0 auto 4rem' }}
          >
            <h2 style={{ fontFamily: 'var(--font-poppins)', fontSize: '2.5rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Why Choose ARASS
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
              We provide an unparalleled educational experience designed to elevate your professional trajectory in the healthcare sector.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              { title: 'Expert Faculty', desc: 'Learn from industry leaders and experienced clinical practitioners.', icon: '👨‍⚕️' },
              { title: 'Industry-Relevant Curriculum', desc: 'Syllabus aligned with current global healthcare standards.', icon: '📚' },
              { title: 'Clinical Excellence', desc: 'Hands-on approach focusing on practical patient care.', icon: '🏥' },
              { title: 'Research-Driven Education', desc: 'Engage with the latest medical research and publications.', icon: '🔬' },
              { title: 'Professional Development', desc: 'Continuous learning opportunities for career advancement.', icon: '📈' },
              { title: 'Student Support Services', desc: 'Comprehensive academic and career guidance.', icon: '🤝' }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                style={{ 
                  backgroundColor: '#fff', 
                  padding: '2.5rem 2rem', 
                  borderRadius: 'var(--border-radius)',
                  boxShadow: 'var(--box-shadow)',
                  transition: 'var(--transition)',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{feature.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-poppins)', fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '1rem' }}>
                  {feature.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <HomeSections />
    </div>
  );
}
