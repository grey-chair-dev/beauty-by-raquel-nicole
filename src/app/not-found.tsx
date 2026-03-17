import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-heading text-4xl md:text-5xl font-bold text-text mb-4">
        Page not found
      </h1>
      <p className="text-body text-text/80 mb-8 max-w-md">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <Link
        href="/"
        className="btn-primary inline-flex items-center justify-center min-h-[48px] px-6 py-3"
      >
        Back to home
      </Link>
    </div>
  );
}
