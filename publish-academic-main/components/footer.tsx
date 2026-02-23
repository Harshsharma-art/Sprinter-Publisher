'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">About</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link href="/about" className="hover:opacity-100 transition-opacity">About Us</Link></li>
              <li><Link href="/mission" className="hover:opacity-100 transition-opacity">Our Mission</Link></li>
              <li><Link href="/team" className="hover:opacity-100 transition-opacity">Team</Link></li>
              <li><Link href="/careers" className="hover:opacity-100 transition-opacity">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">For Authors</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link href="/submit" className="hover:opacity-100 transition-opacity">Submit Paper</Link></li>
              <li><Link href="/guidelines" className="hover:opacity-100 transition-opacity">Guidelines</Link></li>
              <li><Link href="/templates" className="hover:opacity-100 transition-opacity">Templates</Link></li>
              <li><Link href="/faq" className="hover:opacity-100 transition-opacity">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">For Reviewers</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link href="/reviewers" className="hover:opacity-100 transition-opacity">Reviewer Login</Link></li>
              <li><Link href="/reviewer-guide" className="hover:opacity-100 transition-opacity">Guide</Link></li>
              <li><Link href="/join-reviewers" className="hover:opacity-100 transition-opacity">Join Reviewers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link href="/privacy" className="hover:opacity-100 transition-opacity">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:opacity-100 transition-opacity">Terms of Service</Link></li>
              <li><Link href="/contact" className="hover:opacity-100 transition-opacity">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-sm opacity-90 text-center">
            © 2024 Publish Academic Papers. All rights reserved. | Advancing Global Research Through Open Access Publishing
          </p>
        </div>
      </div>
    </footer>
  );
}
