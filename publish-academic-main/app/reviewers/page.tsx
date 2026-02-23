'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function ReviewersPage() {
  const [selectedTab, setSelectedTab] = useState('login');

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="bg-primary/5 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4">For Reviewers</h1>
          <p className="text-lg text-muted-foreground">
            Join our community of expert reviewers advancing peer-reviewed research
          </p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="guide">Review Guide</TabsTrigger>
              <TabsTrigger value="join">Join Program</TabsTrigger>
            </TabsList>

            {/* Login Tab */}
            <TabsContent value="login" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Login Form */}
                <Card>
                  <CardHeader>
                    <CardTitle>Reviewer Login</CardTitle>
                    <CardDescription>Access your assigned reviews and submissions</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="your.email@institution.edu"
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Password
                      </label>
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="remember"
                        className="rounded border border-border"
                      />
                      <label htmlFor="remember" className="text-sm text-muted-foreground cursor-pointer">
                        Remember me
                      </label>
                    </div>

                    <Button className="w-full">Sign In</Button>

                    <div className="text-center">
                      <Link href="#" className="text-sm text-primary hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                {/* Reviewer Dashboard Preview */}
                <Card>
                  <CardHeader>
                    <CardTitle>Dashboard Overview</CardTitle>
                    <CardDescription>What you'll access after login</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <div>
                          <p className="font-medium text-foreground">Pending Reviews</p>
                          <p className="text-sm text-muted-foreground">Awaiting your feedback</p>
                        </div>
                        <span className="text-xl font-bold text-primary">5</span>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <div>
                          <p className="font-medium text-foreground">In Progress</p>
                          <p className="text-sm text-muted-foreground">Currently reviewing</p>
                        </div>
                        <span className="text-xl font-bold text-primary">2</span>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <div>
                          <p className="font-medium text-foreground">Completed</p>
                          <p className="text-sm text-muted-foreground">Submitted reviews</p>
                        </div>
                        <span className="text-xl font-bold text-primary">28</span>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <div>
                          <p className="font-medium text-foreground">Response Rate</p>
                          <p className="text-sm text-muted-foreground">On-time submissions</p>
                        </div>
                        <span className="text-xl font-bold text-primary">96%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Review Guide Tab */}
            <TabsContent value="guide" className="mt-8 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Peer Review Guidelines</CardTitle>
                  <CardDescription>Best practices for conducting high-quality reviews</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Review Criteria</h3>
                    <div className="space-y-3 text-muted-foreground">
                      <p>• <span className="font-medium">Originality:</span> Is the research novel and significant?</p>
                      <p>• <span className="font-medium">Methodology:</span> Are the methods appropriate and rigorous?</p>
                      <p>• <span className="font-medium">Results:</span> Are the results clearly presented and supported?</p>
                      <p>• <span className="font-medium">Clarity:</span> Is the paper well-written and understandable?</p>
                      <p>• <span className="font-medium">Impact:</span> Does it contribute meaningfully to the field?</p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <h3 className="font-semibold text-foreground mb-3">Review Timeline</h3>
                    <div className="space-y-2">
                      <p className="text-sm">Most reviews should be completed within <span className="font-semibold">4-6 weeks</span>. This timeline allows for thorough evaluation without excessive delays in the publication process.</p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <h3 className="font-semibold text-foreground mb-3">Recommendation Options</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• Accept - Ready for publication</p>
                      <p>• Minor Revisions - Accept after addressing minor issues</p>
                      <p>• Major Revisions - Requires substantial revisions and re-review</p>
                      <p>• Reject - Does not meet publication standards</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Writing Your Review</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Effective peer reviews are constructive, specific, and evidence-based. Include both positive and negative feedback with actionable recommendations.
                  </p>
                  <div className="bg-primary/5 rounded-lg p-4 space-y-3 text-sm">
                    <p className="font-medium text-foreground">Your review should include:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Summary of the paper's main contribution</li>
                      <li>Strengths of the research</li>
                      <li>Weaknesses and areas for improvement</li>
                      <li>Specific comments on methodology and results</li>
                      <li>Minor editorial comments</li>
                      <li>Your recommendation with justification</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Join Program Tab */}
            <TabsContent value="join" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Join Our Reviewer Program</CardTitle>
                    <CardDescription>Become part of our expert review community</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground">
                      We are always looking for qualified reviewers to help maintain the quality of published research. If you have expertise in your field and would like to contribute to peer review, we invite you to apply.
                    </p>

                    <div className="space-y-3">
                      <h3 className="font-semibold text-foreground">Requirements</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>PhD or equivalent expertise in your field</span>
                        </li>
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>Active research background and publications</span>
                        </li>
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>Ability to provide timely reviews (4-6 weeks)</span>
                        </li>
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>Commitment to confidentiality and ethics</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-semibold text-foreground">Benefits</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>Access to cutting-edge research before publication</span>
                        </li>
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>Recognition on our reviewer board</span>
                        </li>
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>Certificate of reviewer status</span>
                        </li>
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>Annual reviewer thank you gift</span>
                        </li>
                      </ul>
                    </div>

                    <Button className="w-full">Apply Now</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Application Process</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      {[
                        { step: 1, title: 'Submit Application', desc: 'Provide your CV and research interests' },
                        { step: 2, title: 'Review by Editors', desc: 'Our editorial team evaluates your qualifications' },
                        { step: 3, title: 'Trial Review', desc: 'Complete a sample review evaluation' },
                        { step: 4, title: 'Acceptance', desc: 'Join the reviewer pool and start reviewing' },
                      ].map((item) => (
                        <div key={item.step} className="flex gap-4">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
                            {item.step}
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">{item.title}</p>
                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                      <p className="text-sm text-muted-foreground">
                        The entire process typically takes 2-4 weeks. We will contact you via email with updates on your application status.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </main>
  );
}
