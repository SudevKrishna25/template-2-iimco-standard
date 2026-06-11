"use client";
import { motion } from 'framer-motion';

export default function Page() {
  return (
    <div>
      <section style={{ backgroundColor: 'var(--primary)', color: '#fff', padding: '6rem 0', textAlign: 'center' }}>
        <div className="container">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ fontSize: '3rem', fontFamily: 'var(--font-poppins)', marginBottom: '1rem' }}>
            Events & Workshops
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto', color: 'rgba(255,255,255,0.9)' }}>
            Join our upcoming workshops, seminars, and conferences to advance your medical career.
          </motion.p>
        </div>
      </section>
      <section style={{ padding: "6rem 0" }}><div className="container"><div style={{ display: "flex", flexDirection: "column", gap: "2rem", maxWidth: "800px", margin: "0 auto" }}>{[1, 2, 3, 4].map(i => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ display: "flex", backgroundColor: "#fff", borderRadius: "var(--border-radius)", overflow: "hidden", boxShadow: "var(--box-shadow)" }}><div style={{ backgroundColor: "var(--primary)", color: "#fff", padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", minWidth: "150px" }}><span style={{ fontSize: "2rem", fontWeight: 700 }}>1{i}</span><span style={{ fontSize: "1.1rem" }}>Nov</span></div><div style={{ padding: "2rem", flex: 1 }}><h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Annual Clinical Symposium 202{i}</h3><p style={{ color: "var(--text-secondary)", marginBottom: "1rem" }}>Main Campus Auditorium • 9:00 AM - 4:00 PM</p><button className="btn-secondary" style={{ padding: "0.5rem 1.5rem" }}>Register Now</button></div></motion.div>))}</div></div></section>
    </div>
  );
}