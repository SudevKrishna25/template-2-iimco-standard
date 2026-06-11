import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        {/* Column 1: Overview */}
        <div className={styles.footerCol}>
          <Link href="/" className={styles.logo}>
            ARASS<span className={styles.logoDot}>.</span>
          </Link>
          <p className={styles.overviewText}>
            Empowering Healthcare Excellence Through Advanced Clinical Education. We develop healthcare professionals through evidence-based education and expert faculty.
          </p>
          <div className={styles.socialLinks}>
            <a href="#" aria-label="Facebook"><FaFacebook size={20} /></a>
            <a href="#" aria-label="Twitter"><FaTwitter size={20} /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin size={20} /></a>
            <a href="#" aria-label="Instagram"><FaInstagram size={20} /></a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className={styles.footerCol}>
          <h4 className={styles.colTitle}>Quick Links</h4>
          <ul className={styles.linkList}>
            <li><Link href="/about">About ARASS</Link></li>
            <li><Link href="/faculty">Faculty Directory</Link></li>
            <li><Link href="/events">Events & Workshops</Link></li>
            <li><Link href="/blog">Blog & News</Link></li>
            <li><Link href="/faq">Frequently Asked Questions</Link></li>
          </ul>
        </div>

        {/* Column 3: Programs */}
        <div className={styles.footerCol}>
          <h4 className={styles.colTitle}>Programs</h4>
          <ul className={styles.linkList}>
            <li><Link href="/programs/clinical">Clinical Programs</Link></li>
            <li><Link href="/programs/certifications">Certifications</Link></li>
            <li><Link href="/programs/professional-development">Professional Development</Link></li>
            <li><Link href="/programs/research">Research Methodology</Link></li>
            <li><Link href="/programs">View All Programs</Link></li>
          </ul>
        </div>

        {/* Column 4: Resources */}
        <div className={styles.footerCol}>
          <h4 className={styles.colTitle}>Resources</h4>
          <ul className={styles.linkList}>
            <li><Link href="/research">Research & Publications</Link></li>
            <li><Link href="/download-center">Download Center</Link></li>
            <li><Link href="/accreditations">Accreditations</Link></li>
            <li><Link href="/student-support">Student Support</Link></li>
            <li><Link href="/alumni">Alumni Network</Link></li>
          </ul>
        </div>

        {/* Column 5: Contact Information */}
        <div className={styles.footerCol}>
          <h4 className={styles.colTitle}>Contact Us</h4>
          <ul className={styles.contactList}>
            <li>
              <MapPin size={18} />
              <span>123 Medical Innovation Drive, Healthcare City, 10001</span>
            </li>
            <li>
              <Phone size={18} />
              <span>+1 (555) 123-4567</span>
            </li>
            <li>
              <Mail size={18} />
              <span>admissions@arass.edu</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomBarContainer}`}>
          <p>&copy; 2026 ARASS. All Rights Reserved.</p>
          <div className={styles.legalLinks}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
            <Link href="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
