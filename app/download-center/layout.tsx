import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Download Center | ARASS',
  description: 'Access our comprehensive library of institutional brochures, program prospectuses, and academic policies.',
  openGraph: {
    title: 'Download Center | ARASS',
    description: 'Access our comprehensive library of institutional brochures, program prospectuses, and academic policies.',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
