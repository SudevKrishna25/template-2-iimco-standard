"use client";
import { motion } from 'framer-motion';

export default function Page() {
  return (
    <div>
      <section style={{ backgroundColor: 'var(--primary)', color: '#fff', padding: '6rem 0', textAlign: 'center' }}>
        <div className="container">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ fontSize: '3rem', fontFamily: 'var(--font-poppins)', marginBottom: '1rem' }}>
            Faculty Directory
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto', color: 'rgba(255,255,255,0.9)' }}>
            Meet our distinguished faculty members who bring decades of clinical experience to the classroom.
          </motion.p>
        </div>
      </section>
      <section style={{ padding: "6rem 0" }}><div className="container"><div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "3rem" }}>{[1, 2, 3, 4, 5, 6, 7, 8].map(i => {
        const img = i % 4 === 0 ? 'faculty_4' : i % 3 === 0 ? 'faculty_3' : i % 2 === 0 ? 'faculty_2' : 'faculty';
        return (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ backgroundColor: "#fff", borderRadius: "var(--border-radius)", overflow: "hidden", boxShadow: "var(--box-shadow)" }}><div style={{ height: "300px", backgroundColor: "var(--background-secondary)", backgroundImage: `url(/images/${img}.png)`, backgroundSize: "cover", backgroundPosition: "center", display: "flex", alignItems: "center", justifyContent: "center", color: "transparent" }}>[Photo]</div><div style={{ padding: "2rem", textAlign: "center" }}><h3 style={{ fontSize: "1.25rem", marginBottom: "0.25rem" }}>Dr. Faculty Member {i}</h3><p style={{ color: "var(--secondary)", fontWeight: 600, marginBottom: "1rem" }}>Department Head</p><p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>Specializes in advanced clinical procedures and research methodology.</p></div></motion.div>);
      })}</div></div></section>
    </div>
  );
}