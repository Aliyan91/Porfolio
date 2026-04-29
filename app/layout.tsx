import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mohammad Aliyan | MERN / PERN Developer',
  description: 'Portfolio of Mohammad Aliyan, a MERN / PERN developer focused on full-stack products, secure authentication, and dashboard experiences.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
