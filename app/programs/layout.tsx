import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Programs & Courses | ARASS',
  description: 'Explore our comprehensive range of clinical programs and certifications designed for modern healthcare professionals.',
  openGraph: {
    title: 'Programs & Courses | ARASS',
    description: 'Explore our comprehensive range of clinical programs and certifications designed for modern healthcare professionals.',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
