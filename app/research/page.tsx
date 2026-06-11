"use client";
import { motion } from 'framer-motion';

export default function Page() {
  return (
    <div>
      <section style={{ backgroundColor: 'var(--primary)', color: '#fff', padding: '6rem 0', textAlign: 'center' }}>
        <div className="container">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ fontSize: '3rem', fontFamily: 'var(--font-poppins)', marginBottom: '1rem' }}>
            Research & Publications
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto', color: 'rgba(255,255,255,0.9)' }}>
            Access our repository of groundbreaking medical research, whitepapers, and clinical studies.
          </motion.p>
        </div>
      </section>
      <section style={{ padding: "6rem 0" }}><div className="container"><div style={{ display: "flex", flexDirection: "column", gap: "2rem", maxWidth: "900px", margin: "0 auto" }}>{[1, 2, 3, 4, 5].map(i => (<motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ padding: "2rem", backgroundColor: "#fff", borderRadius: "var(--border-radius)", boxShadow: "var(--box-shadow)", display: "flex", justifyContent: "space-between", alignItems: "center" }}><div><div style={{ color: "var(--secondary)", fontWeight: 600, fontSize: "0.9rem", marginBottom: "0.5rem" }}>Published: Oct 202{i}</div><h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>Advancements in Clinical Research Methodology Vol {i}</h3><p style={{ color: "var(--text-secondary)", margin: 0 }}>A comprehensive study on modern patient care approaches.</p></div><button className="btn-secondary" style={{ padding: "0.5rem 1.5rem" }}>Download PDF</button></motion.div>))}</div></div></section>
    </div>
  );
}