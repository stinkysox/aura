import { Navigate, Route, Routes } from "react-router-dom";
import { Nav, Footer } from "@/components/Chrome";
import { SmoothScroll } from "@/lib/motion";

import { HomePage } from "@/pages/HomePage";
import { AboutPage } from "@/pages/AboutPage";
import { BookPage } from "@/pages/BookPage";
import { CareersPage } from "@/pages/CareersPage";
import { ConcernsPage } from "@/pages/ConcernsPage";
import { ContactPage } from "@/pages/ContactPage";
import { DoctorsPage } from "@/pages/DoctorsPage";
import { ExperiencePage } from "@/pages/ExperiencePage";
import { FaqPage } from "@/pages/FaqPage";
import { GalleryPage } from "@/pages/GalleryPage";
import { JournalIndexPage } from "@/pages/JournalIndexPage";
import { JournalSlugPage } from "@/pages/JournalSlugPage";
import { PrivacyPage } from "@/pages/PrivacyPage";
import { TechnologyPage } from "@/pages/TechnologyPage";
import { TermsPage } from "@/pages/TermsPage";
import { TestimonialsPage } from "@/pages/TestimonialsPage";
import { TreatmentsIndexPage } from "@/pages/TreatmentsIndexPage";
import { TreatmentsSlugPage } from "@/pages/TreatmentsSlugPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
export function App() {
  return (
    <SmoothScroll>
      <div className="w-full min-w-0 overflow-x-clip">
      <Nav />
      <main className="min-h-screen w-full min-w-0 overflow-x-clip">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/book" element={<BookPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/concerns" element={<ConcernsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/journal" element={<Navigate to="/journal/" replace />} />
          <Route path="/journal/" element={<JournalIndexPage />} />
          <Route path="/journal/:slug" element={<JournalSlugPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/treatments" element={<Navigate to="/treatments/" replace />} />
          <Route path="/treatments/" element={<TreatmentsIndexPage />} />
          <Route path="/treatments/:slug" element={<TreatmentsSlugPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      </div>
    </SmoothScroll>
  );
}

