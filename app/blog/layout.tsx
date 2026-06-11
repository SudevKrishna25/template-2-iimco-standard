import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog & News | ARASS',
  description: 'Stay updated with the latest trends in healthcare, clinical best practices, and institutional updates from ARASS.',
  openGraph: {
    title: 'Blog & News | ARASS',
    description: 'Stay updated with the latest trends in healthcare, clinical best practices, and institutional updates from ARASS.',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
