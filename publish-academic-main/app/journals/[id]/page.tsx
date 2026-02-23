'use client';

import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { journals } from '@/lib/mock-data';
import { notFound } from 'next/navigation';

export default function JournalDetailPage({ params }: { params: { id: string } }) {
  const journal = journals.find(j => j.id === params.id);

  if (!journal) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="bg-primary/5 py-12 px-6 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <Link href="/journals" className="text-primary hover:underline text-sm mb-4 inline-block">
            ← Back to Journals
          </Link>
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="flex-1">
              <Badge className="mb-3">{journal.discipline}</Badge>
              <h1 className="text-4xl font-bold text-foreground mb-3">{journal.title}</h1>
              <p className="text-lg text-muted-foreground">{journal.description}</p>
            </div>
            <Button size="lg" asChild className="md:self-start">
              <Link href="/submit">Submit Paper</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-card rounded-lg p-6 border border-border">
              <p className="text-xs text-muted-foreground mb-2">Impact Factor</p>
              <p className="text-3xl font-bold text-primary">{journal.impactFactor}</p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border">
              <p className="text-xs text-muted-foreground mb-2">ISSN</p>
              <p className="text-lg font-semibold text-foreground">{journal.issn}</p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border">
              <p className="text-xs text-muted-foreground mb-2">Published Papers</p>
              <p className="text-3xl font-bold text-foreground">{journal.paperCount}</p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border">
              <p className="text-xs text-muted-foreground mb-2">Acceptance Rate</p>
              <p className="text-3xl font-bold text-foreground">{journal.acceptanceRate}%</p>
            </div>
          </div>

          {/* Tabbed Content */}
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="editorial">Editorial Board</TabsTrigger>
              <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
              <TabsTrigger value="issues">Recent Issues</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Journal Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Editor-in-Chief</h3>
                    <p className="text-muted-foreground">{journal.editorInChief}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Scope and Topics</h3>
                    <p className="text-muted-foreground">
                      This journal publishes peer-reviewed research across {journal.discipline}. We accept original research articles, reviews, case studies, and perspectives that advance the field. All submissions undergo rigorous peer review to ensure scientific quality and integrity.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Publication Frequency</h3>
                    <p className="text-muted-foreground">Monthly (12 issues per year)</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Review Timeline</h3>
                    <p className="text-muted-foreground">
                      Initial review: 2-4 weeks | Peer review: 4-8 weeks | Revision period: 2-4 weeks | Publication: 2-3 weeks after acceptance
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="editorial" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Editorial Board</CardTitle>
                  <CardDescription>Leading experts in {journal.discipline}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: 'Dr. Sarah Chen', role: 'Editor-in-Chief', affiliation: 'Stanford University' },
                      { name: 'Prof. James Mitchell', role: 'Associate Editor', affiliation: 'Oxford University' },
                      { name: 'Dr. Maria Rodriguez', role: 'Associate Editor', affiliation: 'MIT' },
                      { name: 'Prof. David Kumar', role: 'Associate Editor', affiliation: 'Cambridge University' },
                      { name: 'Dr. Elena Thompson', role: 'Managing Editor', affiliation: 'Harvard University' },
                      { name: 'Dr. Hassan Patel', role: 'Technical Editor', affiliation: 'UC Berkeley' },
                    ].map((member, idx) => (
                      <div key={idx} className="flex justify-between items-start pb-4 border-b border-border last:border-0">
                        <div>
                          <p className="font-semibold text-foreground">{member.name}</p>
                          <p className="text-sm text-muted-foreground">{member.role}</p>
                          <p className="text-xs text-muted-foreground">{member.affiliation}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="guidelines" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Submission Guidelines</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Manuscript Format</h3>
                    <ul className="text-muted-foreground text-sm space-y-1 list-disc list-inside">
                      <li>PDF or Word format accepted</li>
                      <li>Single or double column layout</li>
                      <li>Font: Times New Roman, 12pt minimum</li>
                      <li>Double spacing for review versions</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Required Sections</h3>
                    <ul className="text-muted-foreground text-sm space-y-1 list-disc list-inside">
                      <li>Abstract (150-250 words)</li>
                      <li>Introduction</li>
                      <li>Methods/Methodology</li>
                      <li>Results</li>
                      <li>Discussion</li>
                      <li>References</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Plagiarism Policy</h3>
                    <p className="text-muted-foreground text-sm">
                      All submissions are screened for plagiarism using advanced detection software. Plagiarism exceeding 15% will result in rejection. Proper citation of all sources is required.
                    </p>
                  </div>
                  <Button asChild className="mt-4">
                    <Link href="/submit">Submit Your Manuscript</Link>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="issues" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Latest Issues</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { volume: 20, issue: 2, month: 'February 2024', papers: 12 },
                    { volume: 20, issue: 1, month: 'January 2024', papers: 14 },
                    { volume: 19, issue: 12, month: 'December 2023', papers: 11 },
                    { volume: 19, issue: 11, month: 'November 2023', papers: 13 },
                  ].map((vol, idx) => (
                    <div key={idx} className="flex justify-between items-center pb-4 border-b border-border last:border-0 cursor-pointer hover:bg-muted/50 -mx-2 px-2 py-2 rounded transition-colors">
                      <div>
                        <p className="font-semibold text-foreground">Volume {vol.volume}, Issue {vol.issue}</p>
                        <p className="text-sm text-muted-foreground">{vol.month} • {vol.papers} papers</p>
                      </div>
                      <Button variant="outline" size="sm">View</Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </main>
  );
}
