import { AmbientBackground } from "@/components/ambient-background";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Expertise } from "@/components/expertise";
import { CaseStudies } from "@/components/case-studies";
import { Process } from "@/components/process";
import { Testimonials } from "@/components/testimonials";
import { ContactCTA } from "@/components/contact-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-50 h-40 bg-gradient-to-b from-black via-black/60 to-transparent" />
      <div className="absolute inset-0">
        <AmbientBackground />
      </div>
      <div className="grid-overlay" />

      <main className="relative z-30 flex min-h-screen flex-col gap-24 pb-20 pt-10">
        <Navbar />
        <Hero />
        <Expertise />
        <CaseStudies />
        <Process />
        <Testimonials />
        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
}
