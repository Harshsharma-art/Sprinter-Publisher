'use client';

import { Suspense } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ArticlesContent } from '@/components/articles-content';

export default function ArticlesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Suspense fallback={<div className="min-h-screen bg-background" />}>
        <ArticlesContent />
      </Suspense>
      <Footer />
    </main>
  );
}
