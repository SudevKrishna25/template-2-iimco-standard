import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Apply Now | ARASS',
  description: 'Start your journey with ARASS. Fill out the application form to request detailed program information.',
  openGraph: {
    title: 'Apply Now | ARASS',
    description: 'Start your journey with ARASS. Fill out the application form to request detailed program information.',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
