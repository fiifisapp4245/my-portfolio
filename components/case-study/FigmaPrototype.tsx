interface FigmaPrototypeProps {
  url: string;
  title?: string;
}

export function FigmaPrototype({ url, title = "Figma Prototype" }: FigmaPrototypeProps) {
  // Convert Figma URL to embed URL
  const embedUrl = url.replace("figma.com/proto", "figma.com/embed?embed_host=share&url=" + encodeURIComponent(url));

  return (
    <section>
      <h2 className="text-2xl font-semibold text-zinc-900 mb-6">
        Interactive Prototype
      </h2>
      <p className="text-zinc-600 mb-6">
        Explore the interactive Figma prototype below. Click through the screens to experience the full user flow.
      </p>
      <div className="relative w-full rounded-xl overflow-hidden border border-zinc-200 bg-zinc-50">
        <div className="aspect-[16/10]">
          <iframe
            src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(url)}`}
            className="absolute inset-0 w-full h-full"
            allowFullScreen
            title={title}
          />
        </div>
      </div>
      <p className="mt-4 text-sm text-zinc-500">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-700 underline"
        >
          Open in Figma →
        </a>
      </p>
    </section>
  );
}
