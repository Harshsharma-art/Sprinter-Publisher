'use client';

import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="bg-primary/5 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4">About Us</h1>
          <p className="text-lg text-muted-foreground">
            Advancing Global Research Through Open Access Publishing
          </p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Mission */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              At Publish Academic Papers, we believe that access to knowledge should never be a barrier to scientific progress. Our mission is to democratize academic publishing by providing a platform where researchers from around the world can share their discoveries, collaborate with peers, and contribute to the collective advancement of human knowledge.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are committed to maintaining the highest standards of scientific rigor while ensuring that groundbreaking research reaches the global community. Through rigorous peer review, transparent processes, and open access principles, we foster an environment where innovation thrives.
            </p>
          </div>

          {/* Values */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Scientific Integrity',
                  description: 'We maintain rigorous peer review standards to ensure the quality and credibility of published research.',
                },
                {
                  title: 'Open Access',
                  description: 'We believe knowledge should be freely accessible to all researchers, regardless of institutional affiliation.',
                },
                {
                  title: 'Transparency',
                  description: 'Our processes are open and well-documented, allowing authors and reviewers to understand every step.',
                },
                {
                  title: 'Innovation',
                  description: 'We continuously improve our platform and processes to better serve the research community.',
                },
              ].map((value) => (
                <Card key={value.title}>
                  <CardHeader>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* History */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Our History</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Founded in 2015, Publish Academic Papers emerged from a simple observation: the traditional academic publishing model was inefficient, expensive, and excluded many researchers from accessing the latest discoveries. Our founders, all active researchers themselves, envisioned a platform that would make publishing equitable and transparent.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Starting with 5 journals across core disciplines, we have grown to 42 journals covering physics, biology, engineering, medicine, computer science, and environmental science. Our platform now serves over 45,000 active researchers and publishes more than 18,000 papers annually.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we continue to innovate in academic publishing, investing in technology that makes the peer review process more efficient, fair, and transparent. We are proud to be a leading voice for open access and research equity globally.
              </p>
            </div>
          </div>

          {/* Team Leadership */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  name: 'Dr. Victoria Harrison',
                  role: 'Editor-in-Chief & Co-Founder',
                  bio: 'PhD in Physics from Stanford University. 25+ years of experience in academic publishing and peer review.',
                },
                {
                  name: 'Prof. Michael Chen',
                  role: 'Chief Scientific Officer',
                  bio: 'Leading researcher in computational biology. Oversees quality standards and journal management.',
                },
                {
                  name: 'Dr. Sarah Thompson',
                  role: 'Director of Operations',
                  bio: 'Former director of digital publishing at major academic publisher. 15+ years in operations.',
                },
                {
                  name: 'James Rodriguez',
                  role: 'Chief Technology Officer',
                  bio: 'Tech entrepreneur with expertise in building scalable platforms for research communities.',
                },
              ].map((member) => (
                <Card key={member.name}>
                  <CardHeader>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm font-medium text-primary">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Impact */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: '42', value: 'Journals' },
                { label: '18,490', value: 'Published Papers' },
                { label: '45,230', value: 'Active Researchers' },
                { label: '2.8M+', value: 'Annual Citations' },
              ].map((stat) => (
                <Card key={stat.label} className="text-center">
                  <CardContent className="pt-6">
                    <p className="text-3xl font-bold text-primary mb-2">{stat.label}</p>
                    <p className="text-sm text-muted-foreground">{stat.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 rounded-lg p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Join Our Community</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you're ready to publish your research, review contributions from peers, or discover groundbreaking work in your field, we invite you to join Publish Academic Papers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="/submit">Submit a Paper</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/journals">Browse Journals</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
