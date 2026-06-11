import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | ARASS',
  description: 'Get in touch with the ARASS admissions and support team for any inquiries.',
  openGraph: {
    title: 'Contact Us | ARASS',
    description: 'Get in touch with the ARASS admissions and support team for any inquiries.',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
