'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { journals } from '@/lib/mock-data';

export default function SubmitPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    paperTitle: '',
    selectedJournal: '',
    discipline: '',
    authors: '',
    abstract: '',
    keywords: '',
    fileName: '',
    agreeTerms: false,
    agreeEthics: false,
    agreeConflict: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      selectedJournal: value,
      discipline: journals.find(j => j.id === value)?.discipline || '',
    });
  };

  const handleCheckboxChange = (name: string) => {
    setFormData({
      ...formData,
      [name]: !formData[name],
    });
  };

  const isStep1Complete = formData.paperTitle && formData.selectedJournal && formData.abstract;
  const isStep2Complete = formData.authors && formData.keywords && formData.fileName;
  const isStep3Complete = formData.agreeTerms && formData.agreeEthics && formData.agreeConflict;

  const handleSubmit = () => {
    if (isStep3Complete) {
      // Handle final submission
      console.log('Submitting:', formData);
      alert('Manuscript submitted successfully! You will receive a confirmation email shortly.');
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="bg-primary/5 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4">Submit Your Manuscript</h1>
          <p className="text-lg text-muted-foreground">
            Join thousands of researchers publishing high-quality research
          </p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="flex items-center justify-between mb-12">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-colors ${
                    step >= num
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {num}
                </div>
                {num < 3 && (
                  <div
                    className={`h-1 flex-1 mx-2 rounded transition-colors ${
                      step > num ? 'bg-primary' : 'bg-muted'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-2 mb-8 text-center text-sm">
            <div>
              <p className="font-medium text-foreground">Paper Details</p>
            </div>
            <div>
              <p className="font-medium text-foreground">Authors & File</p>
            </div>
            <div>
              <p className="font-medium text-foreground">Agreements</p>
            </div>
          </div>

          {/* Step 1: Paper Details */}
          {step === 1 && (
            <Card>
              <CardHeader>
                <CardTitle>Step 1: Paper Details</CardTitle>
                <CardDescription>Provide information about your manuscript</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="paperTitle" className="text-base font-semibold mb-2 block">
                    Paper Title *
                  </Label>
                  <Input
                    id="paperTitle"
                    name="paperTitle"
                    placeholder="Enter your paper title"
                    value={formData.paperTitle}
                    onChange={handleInputChange}
                    className="bg-background border-border"
                  />
                </div>

                <div>
                  <Label htmlFor="journal" className="text-base font-semibold mb-2 block">
                    Select Journal *
                  </Label>
                  <Select value={formData.selectedJournal} onValueChange={handleSelectChange}>
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue placeholder="Choose a journal" />
                    </SelectTrigger>
                    <SelectContent>
                      {journals.map(journal => (
                        <SelectItem key={journal.id} value={journal.id}>
                          {journal.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {formData.selectedJournal && (
                  <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                    <div className="flex items-start gap-3">
                      <div className="flex-1">
                        <p className="font-semibold text-foreground mb-2">
                          {journals.find(j => j.id === formData.selectedJournal)?.title}
                        </p>
                        <p className="text-sm text-muted-foreground mb-2">
                          {journals.find(j => j.id === formData.selectedJournal)?.description}
                        </p>
                        <div className="flex gap-4 text-xs text-muted-foreground">
                          <span>Impact Factor: {journals.find(j => j.id === formData.selectedJournal)?.impactFactor}</span>
                          <span>Acceptance Rate: {journals.find(j => j.id === formData.selectedJournal)?.acceptanceRate}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div>
                  <Label htmlFor="abstract" className="text-base font-semibold mb-2 block">
                    Abstract (150-250 words) *
                  </Label>
                  <Textarea
                    id="abstract"
                    name="abstract"
                    placeholder="Enter your abstract"
                    value={formData.abstract}
                    onChange={handleInputChange}
                    className="bg-background border-border min-h-[120px]"
                  />
                  <p className="text-xs text-muted-foreground mt-2">
                    {formData.abstract.length} characters
                  </p>
                </div>

                <div className="flex gap-4 pt-6 border-t border-border">
                  <Button
                    variant="outline"
                    onClick={() => setStep(1)}
                    disabled
                    className="flex-1"
                  >
                    Previous
                  </Button>
                  <Button
                    onClick={() => setStep(2)}
                    disabled={!isStep1Complete}
                    className="flex-1"
                  >
                    Next
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Authors & File */}
          {step === 2 && (
            <Card>
              <CardHeader>
                <CardTitle>Step 2: Authors & File Upload</CardTitle>
                <CardDescription>Add author information and upload your manuscript</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="authors" className="text-base font-semibold mb-2 block">
                    Authors (comma-separated) *
                  </Label>
                  <Input
                    id="authors"
                    name="authors"
                    placeholder="Dr. John Doe, Dr. Jane Smith, Prof. Robert Johnson"
                    value={formData.authors}
                    onChange={handleInputChange}
                    className="bg-background border-border"
                  />
                </div>

                <div>
                  <Label htmlFor="keywords" className="text-base font-semibold mb-2 block">
                    Keywords (comma-separated) *
                  </Label>
                  <Input
                    id="keywords"
                    name="keywords"
                    placeholder="keyword1, keyword2, keyword3"
                    value={formData.keywords}
                    onChange={handleInputChange}
                    className="bg-background border-border"
                  />
                </div>

                <div>
                  <Label className="text-base font-semibold mb-4 block">
                    Upload Manuscript *
                  </Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:bg-muted/50 transition-colors cursor-pointer">
                    <input
                      type="file"
                      id="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => {
                        if (e.target.files?.[0]) {
                          setFormData({
                            ...formData,
                            fileName: e.target.files[0].name,
                          });
                        }
                      }}
                      className="hidden"
                    />
                    <label htmlFor="file" className="cursor-pointer block">
                      <p className="text-lg font-medium text-foreground mb-1">
                        Drop your file here or click to upload
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Supported formats: PDF, DOC, DOCX (max 50MB)
                      </p>
                    </label>
                  </div>
                  {formData.fileName && (
                    <div className="mt-3 flex items-center gap-2">
                      <Badge className="bg-green-100 text-green-800">✓ {formData.fileName}</Badge>
                    </div>
                  )}
                </div>

                <div className="flex gap-4 pt-6 border-t border-border">
                  <Button
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="flex-1"
                  >
                    Previous
                  </Button>
                  <Button
                    onClick={() => setStep(3)}
                    disabled={!isStep2Complete}
                    className="flex-1"
                  >
                    Next
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Agreements */}
          {step === 3 && (
            <Card>
              <CardHeader>
                <CardTitle>Step 3: Agreement & Submission</CardTitle>
                <CardDescription>Review and accept the submission terms</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4 bg-card border border-border rounded-lg p-4">
                  <div className="flex gap-3">
                    <Checkbox
                      id="terms"
                      checked={formData.agreeTerms}
                      onCheckedChange={() => handleCheckboxChange('agreeTerms')}
                    />
                    <Label htmlFor="terms" className="text-sm cursor-pointer flex-1">
                      <span className="font-medium">I agree to the Terms of Service</span>
                      <p className="text-xs text-muted-foreground mt-1">
                        By submitting, you acknowledge that this is original work and not previously published.
                      </p>
                    </Label>
                  </div>

                  <div className="flex gap-3 pt-3 border-t border-border">
                    <Checkbox
                      id="ethics"
                      checked={formData.agreeEthics}
                      onCheckedChange={() => handleCheckboxChange('agreeEthics')}
                    />
                    <Label htmlFor="ethics" className="text-sm cursor-pointer flex-1">
                      <span className="font-medium">I certify ethical compliance</span>
                      <p className="text-xs text-muted-foreground mt-1">
                        This research complies with ethical guidelines and institutional requirements.
                      </p>
                    </Label>
                  </div>

                  <div className="flex gap-3 pt-3 border-t border-border">
                    <Checkbox
                      id="conflict"
                      checked={formData.agreeConflict}
                      onCheckedChange={() => handleCheckboxChange('agreeConflict')}
                    />
                    <Label htmlFor="conflict" className="text-sm cursor-pointer flex-1">
                      <span className="font-medium">I disclose any conflicts of interest</span>
                      <p className="text-xs text-muted-foreground mt-1">
                        I have disclosed all potential conflicts of interest to the best of my knowledge.
                      </p>
                    </Label>
                  </div>
                </div>

                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-foreground mb-2">Submission Summary</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p><span className="text-foreground font-medium">Paper:</span> {formData.paperTitle}</p>
                      <p><span className="text-foreground font-medium">Journal:</span> {journals.find(j => j.id === formData.selectedJournal)?.title}</p>
                      <p><span className="text-foreground font-medium">Authors:</span> {formData.authors}</p>
                      <p><span className="text-foreground font-medium">File:</span> {formData.fileName}</p>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex gap-4 pt-6 border-t border-border">
                  <Button
                    variant="outline"
                    onClick={() => setStep(2)}
                    className="flex-1"
                  >
                    Previous
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    disabled={!isStep3Complete}
                    className="flex-1 bg-primary hover:bg-primary/90"
                  >
                    Submit Manuscript
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Guidelines Sidebar */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Submission Guidelines</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Format Requirements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p><span className="font-medium">File Format:</span> PDF, Word (DOC/DOCX)</p>
                  <p><span className="font-medium">Font:</span> Times New Roman, 12pt</p>
                  <p><span className="font-medium">Line Spacing:</span> Double-spaced</p>
                  <p><span className="font-medium">Max File Size:</span> 50MB</p>
                  <p><span className="font-medium">Page Limit:</span> No limit</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Required Sections</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>• Abstract (150-250 words)</p>
                  <p>• Introduction</p>
                  <p>• Methods/Methodology</p>
                  <p>• Results</p>
                  <p>• Discussion</p>
                  <p>• References</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Review Timeline</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p><span className="font-medium">Initial Review:</span> 2-4 weeks</p>
                  <p><span className="font-medium">Peer Review:</span> 4-8 weeks</p>
                  <p><span className="font-medium">Revisions:</span> 2-4 weeks</p>
                  <p><span className="font-medium">Publication:</span> 2-3 weeks</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Important Notes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>• Plagiarism limit: 15%</p>
                  <p>• Must be original, unpublished work</p>
                  <p>• All authors must agree to submission</p>
                  <p>• No publication fees</p>
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
