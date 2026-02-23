'use client';

import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { recentPapers } from '@/lib/mock-data';
import { notFound } from 'next/navigation';

export default function ArticleDetailPage({ params }: { params: { id: string } }) {
  const paper = recentPapers.find(p => p.id === params.id);

  if (!paper) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="bg-primary/5 py-12 px-6 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <Link href="/articles" className="text-primary hover:underline text-sm mb-4 inline-block">
            ← Back to Articles
          </Link>
          <Badge className="mb-4">{paper.discipline}</Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
            {paper.title}
          </h1>
          <div className="space-y-3">
            <p className="text-lg font-medium text-foreground">
              By {paper.authors.join(', ')}
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span>{paper.journal}</span>
              <span>•</span>
              <span>Vol. {paper.volume}, Issue {paper.issue}, pp. {paper.pages}</span>
              <span>•</span>
              <span>{new Date(paper.date).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Paper Metadata */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-card rounded-lg p-4 border border-border">
              <p className="text-xs text-muted-foreground mb-1">Citations</p>
              <p className="text-2xl font-bold text-primary">{paper.citations}</p>
            </div>
            <div className="bg-card rounded-lg p-4 border border-border">
              <p className="text-xs text-muted-foreground mb-1">Published</p>
              <p className="text-sm font-semibold text-foreground">{new Date(paper.date).getFullYear()}</p>
            </div>
            <div className="bg-card rounded-lg p-4 border border-border">
              <p className="text-xs text-muted-foreground mb-1">Pages</p>
              <p className="text-sm font-semibold text-foreground">{paper.pages}</p>
            </div>
            <div className="bg-card rounded-lg p-4 border border-border">
              <p className="text-xs text-muted-foreground mb-1">Access</p>
              <p className="text-sm font-semibold text-primary">Open Access</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Abstract */}
              <Card>
                <CardHeader>
                  <CardTitle>Abstract</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {paper.abstract}
                  </p>
                </CardContent>
              </Card>

              {/* Paper Content Preview */}
              <Card>
                <CardHeader>
                  <CardTitle>Paper Content</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">1. Introduction</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      This section provides the context and motivation for the research. It introduces the problem statement, reviews relevant literature, and clearly states the research objectives and hypotheses that guide this investigation.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3">2. Methodology</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Our experimental design involved careful selection of materials and methods to ensure reproducibility. We employed standard protocols with modifications tailored to our specific research questions. All procedures were approved by the appropriate institutional review boards.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3">3. Results</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Our analysis revealed significant findings in line with our initial hypotheses. The primary outcomes demonstrated measurable improvements across all key metrics. Secondary analyses provided additional insights into the mechanisms underlying these observations.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3">4. Discussion</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Our findings contribute to the existing body of knowledge by providing empirical evidence for previously theoretical concepts. The results align with similar studies while offering new perspectives on the subject matter. Limitations of our work and directions for future research are discussed.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3">5. Conclusion</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      In summary, this research demonstrates important implications for the field and provides a foundation for future investigations. Our work advances understanding of key phenomena and offers practical applications for practitioners.
                    </p>
                  </div>

                  <Button asChild className="mt-4">
                    <Link href="#">Download Full PDF</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* References */}
              <Card>
                <CardHeader>
                  <CardTitle>References</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>[1] Author, A. et al. "Seminal work in the field". Journal Name, 2022.</p>
                    <p>[2] Researcher, B. "Key contributions to methodology". Academic Press, 2021.</p>
                    <p>[3] Scholar, C. et al. "Related research findings". Review Journal, 2023.</p>
                    <p>[4] Expert, D. "Foundational concepts". International Journal, 2020.</p>
                    <p>[5] Scientist, E. et al. "Recent advances in the discipline". Modern Research, 2024.</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Download Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Access This Paper</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full" asChild>
                    <Link href="#">Download PDF</Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="#">Read Online</Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="#">Export Citation</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Journal Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Journal Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Journal</p>
                    <p className="font-semibold text-foreground">{paper.journal}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Publication Date</p>
                    <p className="font-semibold text-foreground">
                      {new Date(paper.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Volume/Issue</p>
                    <p className="font-semibold text-foreground">
                      {paper.volume}({paper.issue}):{paper.pages}
                    </p>
                  </div>
                  <Button variant="outline" size="sm" asChild className="w-full mt-3">
                    <Link href={`/journals/${paper.journal}`}>View Journal</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Authors */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Authors</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {paper.authors.map((author, idx) => (
                      <div key={idx} className="text-sm">
                        <p className="font-medium text-foreground">{author}</p>
                        <p className="text-xs text-muted-foreground">Research Institution</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Keywords */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Keywords</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {['research', 'methodology', 'analysis', 'findings', 'innovation'].map(keyword => (
                      <Badge key={keyword} variant="secondary" className="text-xs">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
