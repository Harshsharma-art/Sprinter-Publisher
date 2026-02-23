import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import {
  HeroSection,
  StatisticsSection,
  FeaturedJournalsSection,
  ResearchFieldsSection,
  LatestPapersSection,
  EditorWelcomeSection,
  CallToActionSection,
} from '@/components/home-sections';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <StatisticsSection />
      <FeaturedJournalsSection />
      <ResearchFieldsSection />
      <LatestPapersSection />
      <EditorWelcomeSection />
      <CallToActionSection />
      <Footer />
    </main>
  );
}
