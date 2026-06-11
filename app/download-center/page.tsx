"use client";

import { motion } from 'framer-motion';
import { Download, FileText, Book } from 'lucide-react';

export default function DownloadCenterPage() {
  return (
    <div>
      <section style={{ backgroundColor: 'var(--primary)', color: '#fff', padding: '6rem 0', textAlign: 'center' }}>
        <div className="container">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ fontSize: '3rem', fontFamily: 'var(--font-poppins)', marginBottom: '1rem' }}>
            Download Center
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto', color: 'rgba(255,255,255,0.9)' }}>
            Access our comprehensive library of institutional brochures, program prospectuses, and academic policies.
          </motion.p>
        </div>
      </section>

      <section style={{ padding: '6rem 0', backgroundColor: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {[
              { title: "Institutional Brochure 2026", type: "PDF Brochure", size: "4.2 MB", icon: <Book size={32} color="var(--primary)" /> },
              { title: "Clinical Programs Prospectus", type: "PDF Prospectus", size: "5.8 MB", icon: <FileText size={32} color="var(--primary)" /> },
              { title: "Admissions Policy & Guidelines", type: "PDF Document", size: "1.5 MB", icon: <FileText size={32} color="var(--primary)" /> },
              { title: "International Student Guide", type: "PDF Guide", size: "3.4 MB", icon: <Book size={32} color="var(--primary)" /> },
              { title: "Faculty Research Compendium", type: "PDF Publication", size: "12.1 MB", icon: <FileText size={32} color="var(--primary)" /> },
              { title: "Academic Calendar 2026-2027", type: "PDF Calendar", size: "0.8 MB", icon: <FileText size={32} color="var(--primary)" /> }
            ].map((doc, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ 
                  padding: '2rem', 
                  backgroundColor: 'var(--background-secondary)', 
                  borderRadius: 'var(--border-radius)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  boxShadow: 'var(--box-shadow)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <div style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '50%' }}>
                    {doc.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>{doc.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem' }}>{doc.type} • {doc.size}</p>
                  </div>
                </div>
                <button className="btn-primary" style={{ padding: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }} aria-label="Download">
                  <Download size={20} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}