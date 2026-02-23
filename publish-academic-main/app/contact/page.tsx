'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="bg-primary/5 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground">
            Have questions? We're here to help. Get in touch with our team.
          </p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Info Cards */}
            {[
              {
                title: 'Editorial Support',
                email: 'editor@publishacademicpapers.org',
                phone: '+1 (555) 123-4567',
                hours: 'Monday - Friday, 9 AM - 5 PM EST',
                desc: 'For questions about manuscript submission, journal scopes, and editorial decisions.',
              },
              {
                title: 'Technical Support',
                email: 'support@publishacademicpapers.org',
                phone: '+1 (555) 987-6543',
                hours: 'Monday - Friday, 8 AM - 6 PM EST',
                desc: 'For issues with account access, submission portal, or website functionality.',
              },
              {
                title: 'General Inquiries',
                email: 'info@publishacademicpapers.org',
                phone: '+1 (555) 456-7890',
                hours: 'Monday - Friday, 9 AM - 5 PM EST',
                desc: 'For partnerships, advertising, or general questions about the platform.',
              },
            ].map((contact) => (
              <Card key={contact.title}>
                <CardHeader>
                  <CardTitle className="text-lg">{contact.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <p className="text-muted-foreground">{contact.desc}</p>
                  <div className="space-y-2 border-t border-border pt-4">
                    <p>
                      <span className="font-medium text-foreground">Email:</span><br />
                      <a href={`mailto:${contact.email}`} className="text-primary hover:underline">
                        {contact.email}
                      </a>
                    </p>
                    <p>
                      <span className="font-medium text-foreground">Phone:</span><br />
                      <a href={`tel:${contact.phone}`} className="text-primary hover:underline">
                        {contact.phone}
                      </a>
                    </p>
                    <p>
                      <span className="font-medium text-foreground">Hours:</span><br />
                      <span className="text-muted-foreground">{contact.hours}</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <Input
                      placeholder="John"
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <Input
                      placeholder="Doe"
                      className="bg-background border-border"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-background border-border"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Organization
                  </label>
                  <Input
                    placeholder="Your Institution"
                    className="bg-background border-border"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <Select>
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="submission">Manuscript Submission</SelectItem>
                      <SelectItem value="review">Reviewer Questions</SelectItem>
                      <SelectItem value="technical">Technical Support</SelectItem>
                      <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                      <SelectItem value="feedback">General Feedback</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    placeholder="Please describe your inquiry..."
                    className="bg-background border-border min-h-[150px]"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="rounded border border-border"
                  />
                  <label htmlFor="privacy" className="text-sm text-muted-foreground">
                    I agree to the privacy policy and consent to receive communications from Publish Academic Papers.
                  </label>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <div className="mt-12 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: 'How long does the peer review process take?',
                  a: 'Typically 4-8 weeks, depending on reviewer availability. Initial screening takes 2-4 weeks.',
                },
                {
                  q: 'What if my manuscript is rejected?',
                  a: 'You will receive detailed feedback from reviewers. Many authors revise and resubmit to other journals on our platform.',
                },
                {
                  q: 'Do you charge publication fees?',
                  a: 'No, Publish Academic Papers is free to submit and publish. We believe in making research openly accessible.',
                },
                {
                  q: 'Can I submit to multiple journals?',
                  a: 'You can only have one submission per manuscript at a time. It must not be under review elsewhere.',
                },
                {
                  q: 'How can I become a reviewer?',
                  a: 'Visit our Reviewers page and apply. We look for researchers with PhDs and active publication records.',
                },
              ].map((faq, idx) => (
                <div key={idx} className="bg-card rounded-lg p-4 border border-border">
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Office Locations */}
          <div className="mt-12 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">Our Offices</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  city: 'Boston, USA',
                  address: '123 Academic Lane, Boston, MA 02101',
                  phone: '+1 (555) 123-4567',
                },
                {
                  city: 'London, UK',
                  address: '456 Research Street, London, UK EC1A 1BB',
                  phone: '+44 (20) 1234 5678',
                },
              ].map((office) => (
                <Card key={office.city}>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-foreground mb-3">{office.city}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{office.address}</p>
                    <p className="text-sm text-muted-foreground">{office.phone}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
