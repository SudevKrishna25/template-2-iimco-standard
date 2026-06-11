"use client";
import { motion } from 'framer-motion';

export default function Page() {
  return (
    <div>
      <section style={{ backgroundColor: 'var(--primary)', color: '#fff', padding: '6rem 0', textAlign: 'center' }}>
        <div className="container">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ fontSize: '3rem', fontFamily: 'var(--font-poppins)', marginBottom: '1rem' }}>
            Programs & Courses
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto', color: 'rgba(255,255,255,0.9)' }}>
            Explore our comprehensive range of clinical programs and certifications designed for modern healthcare professionals.
          </motion.p>
        </div>
      </section>
      <section style={{ padding: "6rem 0" }}><div className="container"><div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>{[1, 2, 3, 4, 5, 6].map(i => {
        const img = i % 3 === 0 ? 'program_3' : i % 2 === 0 ? 'program_2' : 'program_1';
        return (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ padding: "2rem", border: "1px solid #e2e8f0", borderRadius: "var(--border-radius)", backgroundColor: "#fff", overflow: "hidden" }}><div style={{ width: "100%", height: "180px", backgroundImage: `url(/images/${img}.png)`, backgroundSize: "cover", backgroundPosition: "center", borderRadius: "8px", marginBottom: "1.5rem", margin: "-2rem -2rem 1.5rem -2rem", width: "calc(100% + 4rem)" }}></div><h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>Clinical Program {i}</h3><p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem" }}>An advanced program focusing on practical and theoretical excellence.</p><div style={{ display: "flex", gap: "1rem", color: "var(--secondary)", fontSize: "0.9rem", fontWeight: 600 }}><span>12 Months</span> • <span>Certification</span></div></motion.div>);
      })}</div></div></section>
    </div>
  );
}