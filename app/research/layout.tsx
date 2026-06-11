import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research & Publications | ARASS',
  description: 'Access our repository of groundbreaking medical research, whitepapers, and clinical studies.',
  openGraph: {
    title: 'Research & Publications | ARASS',
    description: 'Access our repository of groundbreaking medical research, whitepapers, and clinical studies.',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
