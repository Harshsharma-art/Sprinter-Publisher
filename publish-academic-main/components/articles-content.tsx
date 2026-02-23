'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { recentPapers } from '@/lib/mock-data';

export function ArticlesContent() {
  const searchParams = useSearchParams();
  const initialDiscipline = searchParams.get('discipline') || null;

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDiscipline, setSelectedDiscipline] = useState<string | null>(initialDiscipline);
  const [sortBy, setSortBy] = useState<'recent' | 'citations' | 'title'>('recent');

  const disciplines = Array.from(new Set(recentPapers.map(p => p.discipline)));

  const filteredAndSortedPapers = useMemo(() => {
    let filtered = recentPapers.filter(paper => {
      const matchesSearch = paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        paper.authors.some(a => a.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesDiscipline = !selectedDiscipline || paper.discipline === selectedDiscipline;
      return matchesSearch && matchesDiscipline;
    });

    return filtered.sort((a, b) => {
      if (sortBy === 'citations') return b.citations - a.citations;
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }, [searchTerm, selectedDiscipline, sortBy]);

  return (
    <>
      <section className="bg-primary/5 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4">Browse Articles</h1>
          <p className="text-lg text-muted-foreground">
            Search and discover published research papers
          </p>
        </div>
      </section>

      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar Filters */}
            <div className="w-full lg:w-56 flex-shrink-0">
              <div className="bg-card rounded-lg p-6 border border-border space-y-6 sticky top-24">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Search</h3>
                  <Input
                    placeholder="Search papers..."
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

                <div>
                  <h3 className="font-semibold text-foreground mb-3">Sort By</h3>
                  <div className="space-y-2">
                    {['recent', 'citations', 'title'].map(option => (
                      <button
                        key={option}
                        onClick={() => setSortBy(option as any)}
                        className={`text-sm w-full text-left px-3 py-2 rounded transition-colors capitalize ${
                          sortBy === option
                            ? 'bg-primary text-primary-foreground'
                            : 'hover:bg-muted text-muted-foreground'
                        }`}
                      >
                        {option === 'recent' ? 'Most Recent' : option === 'citations' ? 'Most Cited' : 'Title (A-Z)'}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    Showing {filteredAndSortedPapers.length} of {recentPapers.length} papers
                  </p>
                </div>
              </div>
            </div>

            {/* Articles List */}
            <div className="flex-1">
              <div className="space-y-4">
                {filteredAndSortedPapers.length > 0 ? (
                  filteredAndSortedPapers.map(paper => (
                    <Card key={paper.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="pt-6">
                        <div className="flex flex-col gap-4">
                          <div>
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
                            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-4">
                              <span className="font-medium text-foreground">{paper.journal}</span>
                              <span>Vol. {paper.volume}, No. {paper.issue}</span>
                              <span>pp. {paper.pages}</span>
                              <span className="text-primary font-medium">{paper.citations} citations</span>
                              <span>{new Date(paper.date).toLocaleDateString()}</span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" asChild className="w-fit">
                            <Link href={`/articles/${paper.id}`}>Read Paper</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <Card className="bg-muted/50 border-dashed">
                    <CardContent className="pt-6 text-center">
                      <p className="text-muted-foreground">No papers found matching your criteria.</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
