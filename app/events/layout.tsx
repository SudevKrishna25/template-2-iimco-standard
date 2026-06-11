import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events & Workshops | ARASS',
  description: 'Join our upcoming workshops, seminars, and clinical conferences to advance your medical career.',
  openGraph: {
    title: 'Events & Workshops | ARASS',
    description: 'Join our upcoming workshops, seminars, and clinical conferences to advance your medical career.',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
