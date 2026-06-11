import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About ARASS | ARASS',
  description: 'Learn about ARASS history, mission, vision, and core values in advancing medical and clinical education globally.',
  openGraph: {
    title: 'About ARASS | ARASS',
    description: 'Learn about ARASS history, mission, vision, and core values in advancing medical and clinical education globally.',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
