const testimonials = [
  {
    quote:
      "Fiifi goes beyond surface-level design. He integrates engineering thinking into his design process and consistently thinks beyond conventional approaches, the depth shows in how he communicates solutions.",
    author: "Innocent Kuwornu",
    role: "Expert Frontend developer",
    company: "AmaliTech",
  },
  {
    quote:
      "Fiifi operates with a strong end-to-end mindset. He doesn't just design screens, he frames problems, presents solutions clearly, and maintains documentation throughout the process.",
    author: "Elliot Awayiga",
    role: "Design Lead (Expert)",
    company: "AmaliTech",
  },
  {
    quote:
      "Fiifi consistently delivers high-quality work with impressive speed. He collaborates seamlessly across functions, adapts quickly to feedback, and takes ownership of execution.",
    author: "Solomon Appier-Sign",
    role: "Team lead",
    company: "Broadspectrum",
  },
  {
    quote:
      "Fiifi is exceptionally smart in how he approaches design, not just visually, but in how he uses tools and applies structured processes to solve problems effectively.",
    author: "Aakash Toshniwal",
    role: "Technical Consultant",
    company: "T-mobile",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16">
        {/* Left column - Headline */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 leading-tight">
            What collaborators say about me.
          </h2>
        </div>

        {/* Right column - Testimonials */}
        <div className="space-y-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="space-y-4">
              <p className="text-zinc-600 leading-relaxed">
                {testimonial.quote}
              </p>
              <div>
                <p className="font-semibold text-zinc-900">
                  {testimonial.author}
                </p>
                <p className="text-sm text-zinc-500">
                  {testimonial.role} · {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
