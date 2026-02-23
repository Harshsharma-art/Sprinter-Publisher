'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { journals, recentPapers, researchFields, platformStats } from '@/lib/mock-data';

export function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
          Leading Open Access Platform
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
          Publish & Discover Groundbreaking Research
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          The premier platform for peer-reviewed academic papers. Submit your research, review contributed work, and access thousands of publications across physics, biology, engineering, and more.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
            <Link href="/submit">Submit Your Paper</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/journals">Browse Journals</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function StatisticsSection() {
  return (
    <section className="py-16 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              {platformStats.totalJournals}
            </div>
            <p className="text-sm text-muted-foreground">Peer-Reviewed Journals</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              {platformStats.totalPapers.toLocaleString()}
            </div>
            <p className="text-sm text-muted-foreground">Published Papers</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              {platformStats.totalAuthors.toLocaleString()}
            </div>
            <p className="text-sm text-muted-foreground">Researchers</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              {platformStats.citationsPerDay.toLocaleString()}
            </div>
            <p className="text-sm text-muted-foreground">Citations Daily</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              {platformStats.acceptedThisMonth}
            </div>
            <p className="text-sm text-muted-foreground">Accepted This Month</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeaturedJournalsSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Featured Journals</h2>
            <p className="text-muted-foreground mt-2">Explore our most impactful publications</p>
          </div>
          <Button variant="outline" asChild className="hidden md:flex">
            <Link href="/journals">View All</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {journals.slice(0, 6).map((journal) => (
            <Card key={journal.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{journal.discipline}</Badge>
                  <Badge variant="outline" className="text-xs">
                    IF: {journal.impactFactor}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{journal.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {journal.description}
                </p>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    Editor: <span className="text-foreground font-medium">{journal.editorInChief}</span>
                  </span>
                </div>
                <div className="flex gap-4 text-xs text-muted-foreground pt-2 border-t">
                  <span>{journal.paperCount} papers</span>
                  <span>{journal.acceptanceRate}% acceptance</span>
                </div>
                <Button asChild className="w-full mt-2" variant="outline">
                  <Link href={`/journals/${journal.id}`}>View Journal</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ResearchFieldsSection() {
  return (
    <section className="py-16 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12">Research Disciplines</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {researchFields.map((field) => (
            <Link
              key={field.name}
              href={`/articles?discipline=${field.name}`}
              className="group"
            >
              <Card className="group-hover:shadow-md transition-all h-full cursor-pointer group-hover:border-primary">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl mb-3">{field.icon}</div>
                  <h3 className="font-semibold text-sm mb-1">{field.name}</h3>
                  <p className="text-xs text-muted-foreground">{field.paperCount.toLocaleString()} papers</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LatestPapersSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Latest Publications</h2>
            <p className="text-muted-foreground mt-2">Recently accepted papers across disciplines</p>
          </div>
          <Button variant="outline" asChild className="hidden md:flex">
            <Link href="/articles">View All</Link>
          </Button>
        </div>

        <div className="space-y-6">
          {recentPapers.map((paper) => (
            <Card key={paper.id} className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <Link href={`/articles/${paper.id}`}>
                      <h3 className="text-lg font-semibold text-foreground hover:text-primary transition-colors line-clamp-2 mb-2">
                        {paper.title}
                      </h3>
                    </Link>
                    <p className="text-sm text-muted-foreground mb-3">
                      {paper.authors.join(', ')}
                    </p>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                      {paper.abstract}
                    </p>
                    <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                      <span className="font-medium text-foreground">{paper.journal}</span>
                      <span>Vol. {paper.volume}, No. {paper.issue}</span>
                      <span>pp. {paper.pages}</span>
                      <span>{paper.citations} citations</span>
                      <span>{new Date(paper.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/articles/${paper.id}`}>Read Paper</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EditorWelcomeSection() {
  return (
    <section className="py-16 px-6 bg-primary/5">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card border border-border rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Welcome from Our Editor-in-Chief</h2>
          <div className="h-1 w-16 bg-primary mb-6 rounded"></div>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            "Welcome to Publish Academic Papers, a pioneering platform dedicated to advancing global research through open access publishing. Our mission is to democratize access to high-quality peer-reviewed research, enabling scientists and researchers worldwide to share their discoveries and build upon the work of their peers."
          </p>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            "With rigorous peer-review processes and a commitment to scientific integrity, we provide a trusted space for groundbreaking discoveries across physics, biology, engineering, medicine, and beyond. Whether you're submitting your research, reviewing contributions, or discovering new knowledge, we're honored to support your academic journey."
          </p>
          <p className="text-lg font-semibold text-foreground">
            Dr. Victoria Harrison<br />
            <span className="text-sm font-normal text-muted-foreground">Editor-in-Chief</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export function CallToActionSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto bg-primary text-primary-foreground rounded-lg p-8 md:p-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Ready to Publish Your Research?</h2>
        <p className="text-lg text-center mb-8 opacity-90">
          Submit your manuscript today and join thousands of researchers publishing with us. Our streamlined process ensures your work reaches a global audience.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/submit">Start Submission</Link>
          </Button>
          <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
            <Link href="/guidelines">View Guidelines</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
