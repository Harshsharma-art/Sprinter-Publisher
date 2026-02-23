'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="border-b border-border bg-background sticky top-0 z-50 shadow-sm">
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
            P
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold text-foreground">Publish</h1>
            <p className="text-xs text-muted-foreground">Academic Papers</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/journals" className="text-foreground hover:text-primary transition-colors">
            Journals
          </Link>
          <Link href="/articles" className="text-foreground hover:text-primary transition-colors">
            Articles
          </Link>
          <Link href="/submit" className="text-foreground hover:text-primary transition-colors">
            Submit Paper
          </Link>
          <Link href="/reviewers" className="text-foreground hover:text-primary transition-colors">
            For Reviewers
          </Link>
          <Link href="/about" className="text-foreground hover:text-primary transition-colors">
            About
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button size="sm" asChild className="hidden sm:flex">
            <Link href="/submit">Submit Paper</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
