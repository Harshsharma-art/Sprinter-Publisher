'use client';

import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function GuidelinesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="bg-primary/5 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4">Submission Guidelines</h1>
          <p className="text-lg text-muted-foreground">
            Complete guidelines for preparing and submitting your manuscript
          </p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Format Requirements */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Manuscript Format Requirements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3">File Format</h3>
                <p className="text-muted-foreground mb-3">
                  Manuscripts should be submitted in one of the following formats:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>PDF (.pdf)</li>
                  <li>Microsoft Word (.doc or .docx)</li>
                  <li>Rich Text Format (.rtf)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3">Text Formatting</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Font: Times New Roman or Arial</li>
                  <li>• Font Size: 12 points minimum</li>
                  <li>• Line Spacing: Double-spaced for review versions</li>
                  <li>• Margins: 1 inch (2.54 cm) on all sides</li>
                  <li>• Page Numbers: Include page numbers on all pages</li>
                  <li>• Line Numbers: Include line numbers for review process</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3">File Size Limits</h3>
                <p className="text-muted-foreground">
                  Maximum file size: 50 MB. This includes all figures, tables, and supplementary materials.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Structure and Content */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Manuscript Structure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3">Required Sections</h3>
                <div className="space-y-4">
                  {[
                    {
                      title: 'Title Page',
                      content: 'Include full title, author names, affiliations, corresponding author email, and keywords (5-10).',
                    },
                    {
                      title: 'Abstract',
                      content: '150-250 words. Should summarize objective, methods, results, and conclusions. No citations or abbreviations.',
                    },
                    {
                      title: 'Introduction',
                      content: 'Establish context, review relevant literature, and clearly state research objectives and hypotheses.',
                    },
                    {
                      title: 'Methods/Methodology',
                      content: 'Describe materials, procedures, and analysis methods in sufficient detail for reproduction.',
                    },
                    {
                      title: 'Results',
                      content: 'Present findings clearly with appropriate tables and figures. No interpretation of results.',
                    },
                    {
                      title: 'Discussion',
                      content: 'Interpret results, explain significance, compare with existing literature, and discuss limitations.',
                    },
                    {
                      title: 'Conclusions',
                      content: 'Summarize key findings and their implications. Suggest directions for future research.',
                    },
                    {
                      title: 'References',
                      content: 'Use the preferred citation style for your discipline. All citations must be complete and accurate.',
                    },
                  ].map((section, idx) => (
                    <div key={idx} className="pb-4 border-b border-border last:border-0">
                      <h4 className="font-medium text-foreground mb-1">{section.title}</h4>
                      <p className="text-sm text-muted-foreground">{section.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Writing Standards */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Writing Standards</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3">Language</h3>
                <p className="text-muted-foreground">
                  Manuscripts should be written in clear, concise English. Non-native English speakers are encouraged to have their manuscripts reviewed by a native English speaker before submission. Grammatical errors or unclear writing may result in desk rejection.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3">Terminology</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Use standard terminology in your field</li>
                  <li>Define acronyms and abbreviations at first use</li>
                  <li>Use active voice where possible</li>
                  <li>Avoid jargon that would not be understood by readers outside your specialty</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3">Citations</h3>
                <p className="text-muted-foreground mb-3">
                  Use a consistent citation style throughout the manuscript. Common styles include:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>APA (American Psychological Association)</li>
                  <li>Chicago Style</li>
                  <li>Harvard</li>
                  <li>IEEE</li>
                  <li>MLA</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Tables and Figures */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Tables and Figures</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3">General Guidelines</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• All tables and figures must be referenced in the text</li>
                  <li>• Number sequentially in order of appearance (Table 1, Table 2, etc.)</li>
                  <li>• Include descriptive captions that can stand alone</li>
                  <li>• Ensure sufficient resolution for publication (minimum 300 DPI)</li>
                  <li>• Use sans-serif fonts in figures</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3">Data Presentation</h3>
                <p className="text-muted-foreground mb-3">
                  All figures and tables should be self-explanatory and support the text. Avoid duplication between tables and figures. Use color sparingly and ensure figures remain clear when printed in black and white.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Ethical Guidelines */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Ethical Guidelines</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3">Originality</h3>
                <p className="text-muted-foreground">
                  Manuscripts must be original works not previously published or under consideration elsewhere. All sources must be properly cited.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3">Plagiarism</h3>
                <p className="text-muted-foreground mb-3">
                  All submissions are screened for plagiarism using advanced detection software. Plagiarism exceeding 15% will result in rejection. This includes:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Text copied from other sources without attribution</li>
                  <li>Paraphrasing without citations</li>
                  <li>Self-plagiarism (republishing your own previous work)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3">Author Contributions</h3>
                <p className="text-muted-foreground">
                  All authors listed must have made significant contributions. Author order should reflect contribution level. Corresponding author should confirm all authors' agreement.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3">Conflicts of Interest</h3>
                <p className="text-muted-foreground">
                  All financial or personal conflicts must be disclosed. This includes funding sources, financial interests, personal relationships, or other factors that could influence the work.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3">Research Ethics</h3>
                <p className="text-muted-foreground">
                  For research involving human subjects or animals, evidence of institutional review board (IRB) approval must be provided. All research must comply with ethical standards and regulations.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Review Process */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Review Process and Timeline</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3">Process Steps</h3>
                <div className="space-y-3">
                  {[
                    { step: '1. Initial Screening', desc: '2-4 weeks - Editorial team reviews manuscript for scope and quality' },
                    { step: '2. Peer Review', desc: '4-8 weeks - Manuscript sent to 2-3 expert reviewers' },
                    { step: '3. Editorial Decision', desc: '1-2 weeks - Editor makes decision based on reviews' },
                    { step: '4. Author Revisions', desc: '2-4 weeks - Authors address reviewer comments' },
                    { step: '5. Final Decision', desc: '1-2 weeks - Editor makes final acceptance decision' },
                    { step: '6. Publication', desc: '2-3 weeks - Accepted paper published online' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-3">
                      <div className="font-semibold text-primary flex-shrink-0 w-32">{item.step}</div>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3">Possible Outcomes</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <span className="font-medium">Accept:</span> Paper is accepted for publication</li>
                  <li>• <span className="font-medium">Minor Revisions:</span> Minor changes required before acceptance</li>
                  <li>• <span className="font-medium">Major Revisions:</span> Substantial revisions and re-review required</li>
                  <li>• <span className="font-medium">Reject:</span> Paper does not meet publication standards</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="bg-primary/5 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Submit?</h3>
            <p className="text-muted-foreground mb-6">
              Review these guidelines carefully and prepare your manuscript according to our standards.
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/submit">Submit Your Paper</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
