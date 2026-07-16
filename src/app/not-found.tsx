import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="min-h-[60vh] bg-bg flex flex-col items-center justify-center px-4 text-center py-24">
        <p className="font-label text-primary font-semibold text-sm uppercase tracking-wider mb-3">404</p>
        <h1 className="theme-heading text-4xl md:text-5xl mb-4">Page not found</h1>
        <p className="text-body text-on-surface-variant mb-8 max-w-md">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <Link
          href="/"
          className="btn-primary inline-flex items-center justify-center min-h-[48px] px-8"
        >
          Back to home
        </Link>
      </div>
      <Footer />
    </>
  );
}
