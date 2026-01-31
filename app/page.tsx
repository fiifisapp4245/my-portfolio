import Hero from "../components/ui/hero";
import SelectedWorks from "../components/ui/selected-works";

export default function Home() {
  return (
    <main className="bg-white dark:bg-black">
      <Hero />

      <SelectedWorks />

      {/* TODO: About, Testimonials, Footer */}
    </main>
  );
}
