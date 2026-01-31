import Hero from "../components/ui/hero";
import SelectedWorks from "../components/ui/selected-works";
import AboutMe from "../components/ui/about-me";
import Testimonials from "../components/ui/testimonials";
import Contact from "../components/ui/contact";

export default function Home() {
  return (
    <main className="bg-white dark:bg-black">
      <Hero />

      <SelectedWorks />

      <AboutMe />

      <Testimonials />

      <Contact />
    </main>
  );
}
