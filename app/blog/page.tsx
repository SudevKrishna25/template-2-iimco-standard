"use client";
import { motion } from 'framer-motion';

export default function Page() {
  return (
    <div className="container">
      <section style={{ backgroundColor: 'var(--primary)', color: '#fff', padding: '6rem 0', textAlign: 'center' }}>
        <div className="container">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ fontSize: '3rem', fontFamily: 'var(--font-poppins)', marginBottom: '1rem' }}>
            Blog & News
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto', color: 'rgba(255,255,255,0.9)' }}>
            Stay updated with the latest trends in healthcare, clinical best practices, and institutional updates.
          </motion.p>
        </div>
      </section>
      <section style={{ padding: "6rem 0" }}><div className="container"><div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>{[1, 2, 3, 4, 5, 6].map(i => {
        const img = i % 3 === 0 ? 'blog_3' : i % 2 === 0 ? 'blog_2' : 'blog';
        return (<motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} style={{ backgroundColor: "#fff", borderRadius: "var(--border-radius)", overflow: "hidden", boxShadow: "var(--box-shadow)" }}><div style={{ height: "200px", backgroundColor: "var(--background-secondary)", backgroundImage: `url(/images/${img}.png)`, backgroundSize: "cover", backgroundPosition: "center" }}></div><div style={{ padding: "2rem" }}><div style={{ color: "var(--accent)", fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.5rem" }}>Healthcare Trends</div><h3 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>The Future of Medical Education {i}</h3><p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem" }}>Exploring how technology is reshaping the way clinical skills are taught and assessed.</p><a href="#" style={{ color: "var(--primary)", fontWeight: 600 }}>Read More →</a></div></motion.div>);
      })}</div></div></section>
    </div>
  );
}