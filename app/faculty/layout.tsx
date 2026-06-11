import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Faculty Directory | ARASS',
  description: 'Meet our distinguished faculty members who bring decades of clinical experience to the ARASS classrooms.',
  openGraph: {
    title: 'Faculty Directory | ARASS',
    description: 'Meet our distinguished faculty members who bring decades of clinical experience to the ARASS classrooms.',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
