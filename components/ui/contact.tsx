'use client'
import Image from "next/image";
import posthog from "posthog-js";

const contactLinks = [
  {
    icon: "/line-md_email.svg",
    label: "Email",
    value: "fiifisapp4245@gmail.com",
    href: "mailto:fiifisapp4245@gmail.com",
  },
  {
    icon: "/basil_linkedin-solid.svg",
    label: "LinkedIn",
    value: "titus-fiifi-appiah2028",
    href: "https://www.linkedin.com/in/titus-fiifi-appiah2028/",
  },
  {
    icon: "/ri_behance-fill.svg",
    label: "Behance",
    value: "behance.net/fiifiappiah",
    href: "https://www.behance.net/fiifiappiah",
  },
  {
    icon: "phone",
    label: "Phone",
    value: "+233 55 722 8178",
    href: "tel:+233557228178",
  },
];

function PhoneIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M58.6667 45.12V53.12C58.6697 53.8622 58.5176 54.5967 58.2201 55.2765C57.9226 55.9563 57.4863 56.5661 56.9399 57.0666C56.3934 57.5672 55.7487 57.9474 55.0477 58.1832C54.3468 58.4189 53.6051 58.5051 52.8667 58.4367C44.4646 57.5179 36.3982 54.6339 29.28 50C22.6635 45.7449 17.0551 40.1365 12.8 33.52C8.14669 26.3637 5.26131 18.2512 4.36001 9.80666C4.29197 9.07063 4.37723 8.33139 4.61116 7.63245C4.84509 6.93351 5.22268 6.29022 5.72012 5.74394C6.21756 5.19766 6.82395 4.76018 7.50033 4.46003C8.17671 4.15987 8.90808 4.00365 9.64801 4H17.648C18.9408 3.98656 20.1938 4.44678 21.1795 5.29855C22.1652 6.15031 22.8186 7.33251 23.0187 8.61066C23.3916 10.9645 24.0128 13.272 24.8747 15.4933C25.2296 16.415 25.3117 17.4182 25.1114 18.3842C24.9112 19.3502 24.437 20.2401 23.7467 20.9413L20.3707 24.3173C24.3269 31.2614 30.0719 37.0064 37.016 40.9626L40.392 37.5866C41.0932 36.8964 41.9832 36.4222 42.9491 36.2219C43.9151 36.0217 44.9183 36.1037 45.84 36.4586C48.0613 37.3206 50.3689 37.9417 52.7227 38.3146C54.0157 38.5168 55.2097 39.1831 56.0636 40.1874C56.9175 41.1917 57.3697 42.4659 57.3387 43.7746L58.6667 45.12Z"
        stroke="#000D4D"
        strokeOpacity="0.45"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 mb-12">
        Connect with me{" "}
        <span className="inline-block" role="img" aria-label="telephone">
          📞
        </span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {contactLinks.map((contact, index) => (
          <a
            key={index}
            href={contact.href}
            target={contact.href.startsWith("http") ? "_blank" : undefined}
            rel={
              contact.href.startsWith("http")
                ? "noopener noreferrer"
                : undefined
            }
            onClick={() => posthog.capture('hire_me_click', { channel: contact.label })}
            aria-label={`${contact.label}: ${contact.value}${contact.href.startsWith("http") ? " (opens in new tab)" : ""}`}
            className="group flex flex-col items-start"
          >
            {/* Icon - decorative */}
            <div className="mb-4 transition-transform group-hover:scale-110" aria-hidden="true">
              {contact.icon === "phone" ? (
                <PhoneIcon />
              ) : (
                <Image
                  src={contact.icon}
                  alt=""
                  width={40}
                  height={40}
                />
              )}
            </div>

            {/* Contact value */}
            <span className="text-sm text-zinc-600 group-hover:text-zinc-900 transition-colors break-all">
              {contact.value}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
