import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { VideoCarousel } from './components/VideoCarousel';
import { ReviewsSection } from './components/ReviewsSection';
import { HistorySection } from './components/HistorySection';
import { MenuDigital } from './components/MenuDigital';
import { FamousGuests } from './components/FamousGuests';
import { InstagramFeed } from './components/InstagramFeed';
import { TripAdvisorReviews } from './components/TripAdvisorReviews';
import { FAQSection } from './components/FAQSection';
import { MapSection } from './components/MapLocation';
import { FloatingElements } from './components/FloatingElements';

export default function App() {
  return (
    <>
      <Navbar />
      <FloatingElements />
      <main className="min-h-screen bg-mare-cream">
        <HeroSection />
        <VideoCarousel />
        <ReviewsSection />
        <HistorySection />
        <MenuDigital />
        <FamousGuests />
        <InstagramFeed />
        <TripAdvisorReviews />
        <FAQSection />
        <MapSection />
        
        <footer className="py-10 text-center text-mare-navy/60">
          <p>&copy; 2026 Divina Gula. Todos os direitos reservados.</p>
        </footer>
      </main>
    </>
  );
}
