'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { journals } from '@/lib/mock-data';

export default function JournalsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDiscipline, setSelectedDiscipline] = useState<string | null>(null);

  const disciplines = Array.from(new Set(journals.map(j => j.discipline)));

  const filteredJournals = journals.filter(journal => {
    const matchesSearch = journal.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      journal.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDiscipline = !selectedDiscipline || journal.discipline === selectedDiscipline;
    return matchesSearch && matchesDiscipline;
  });

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="bg-primary/5 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4">Browse Journals</h1>
          <p className="text-lg text-muted-foreground">
            Explore {journals.length} peer-reviewed journals across multiple disciplines
          </p>
        </div>
      </section>

      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar Filters */}
            <div className="w-full md:w-48 flex-shrink-0">
              <div className="bg-card rounded-lg p-6 border border-border space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Search</h3>
                  <Input
                    placeholder="Search journals..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-background border-border"
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3">Discipline</h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => setSelectedDiscipline(null)}
                      className={`text-sm w-full text-left px-3 py-2 rounded transition-colors ${
                        selectedDiscipline === null
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-muted text-muted-foreground'
                      }`}
                    >
                      All Disciplines
                    </button>
                    {disciplines.map(discipline => (
                      <button
                        key={discipline}
                        onClick={() => setSelectedDiscipline(discipline)}
                        className={`text-sm w-full text-left px-3 py-2 rounded transition-colors ${
                          selectedDiscipline === discipline
                            ? 'bg-primary text-primary-foreground'
                            : 'hover:bg-muted text-muted-foreground'
                        }`}
                      >
                        {discipline}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    Showing {filteredJournals.length} of {journals.length} journals
                  </p>
                </div>
              </div>
            </div>

            {/* Journals List */}
            <div className="flex-1">
              <div className="space-y-4">
                {filteredJournals.length > 0 ? (
                  filteredJournals.map(journal => (
                    <Card key={journal.id} className="hover:shadow-md transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <Link href={`/journals/${journal.id}`}>
                              <CardTitle className="hover:text-primary transition-colors cursor-pointer">
                                {journal.title}
                              </CardTitle>
                            </Link>
                            <CardDescription className="mt-1">
                              {journal.description}
                            </CardDescription>
                          </div>
                          <Badge className="flex-shrink-0">{journal.discipline}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4 text-sm">
                          <div>
                            <p className="text-xs text-muted-foreground">Impact Factor</p>
                            <p className="font-semibold text-foreground">{journal.impactFactor}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">ISSN</p>
                            <p className="font-semibold text-foreground text-xs">{journal.issn}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Editor</p>
                            <p className="font-medium text-foreground text-xs">{journal.editorInChief}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Papers</p>
                            <p className="font-semibold text-foreground">{journal.paperCount}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Acceptance Rate</p>
                            <p className="font-semibold text-foreground">{journal.acceptanceRate}%</p>
                          </div>
                        </div>
                        <Button asChild size="sm">
                          <Link href={`/journals/${journal.id}`}>View Journal Details</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <Card className="bg-muted/50 border-dashed">
                    <CardContent className="pt-6 text-center">
                      <p className="text-muted-foreground">No journals found matching your criteria.</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
