import { Project } from "@/types/project";

export const nfcMobileMoney: Project = {
  slug: "nfc-mobile-money",
  index: "05",

  title: "NFC Mobile Money Withdrawal",
  subtitle: "Contactless ATM Experience",
  description:
    "A concept exploration for redesigning mobile money ATM withdrawals using NFC technology. Addresses the unnecessarily long, fragmented, and cognitively demanding current process by leveraging contactless payment capabilities already present in modern smartphones.",
  shortDescription:
    "Concept redesigning mobile money ATM withdrawals using NFC for faster, simpler transactions.",

  category: "concept",
  tags: ["Fintech", "NFC/Contactless", "Personal Exploration"],

  thumbnail: "/projects/nfc-mobile-money/Tech.png",
  heroImage: "/projects/nfc-mobile-money/Tech.png",
  images: [
    {
      src: "/projects/nfc-mobile-money/AUthentication.png",
      alt: "Authentication flow",
      caption: "Biometric and PIN authentication on phone",
    },
    {
      src: "/projects/nfc-mobile-money/Withdrawal.png",
      alt: "Withdrawal interface",
      caption: "Simplified NFC-enabled withdrawal flow",
    },
    {
      src: "/projects/nfc-mobile-money/Completed_transaction.png",
      alt: "Transaction complete",
      caption: "Successful transaction confirmation screen",
    },
    {
      src: "/projects/nfc-mobile-money/Tech.png",
      alt: "Technical overview",
      caption: "NFC technology integration for contactless ATM interaction",
    },
  ],

  overview: {
    problem:
      "Withdrawing mobile money from ATMs in Ghana requires 10+ steps: dialing USSD codes, navigating menus, generating tokens, waiting for confirmation, then re-entering tokens at the ATM. This process is repetitive, time-consuming, and error-prone—especially for frequent users. The friction contradicts users' mental model of 'instant' mobile money.",
    solution:
      "A contactless, NFC-enabled withdrawal concept: authenticate on phone (biometric/PIN), tap phone on NFC-enabled ATM, confirm amount, receive cash instantly. Removes token generation entirely, leverages device-based authentication, and treats the ATM as a smart reader rather than requiring manual input.",
    impact:
      "Concept reduces withdrawal steps from 10+ to 3-4. Eliminates waiting and re-entry of codes. Aligns with 'tap & go' mental model. Received positive feedback from senior design colleague validating the idea as high-potential and well-reasoned.",
  },

  metrics: [
    {
      value: "10+",
      label: "Current Steps",
      description: "Steps in existing USSD withdrawal process",
    },
    {
      value: "3-4",
      label: "Proposed Steps",
      description: "Steps in NFC-enabled concept",
    },
    {
      value: "0",
      label: "Tokens Required",
      description: "Eliminates token generation and entry",
    },
  ],

  challenges: [
    {
      title: "Fragmented Interaction Flow",
      description:
        "Current process splits one task across two disconnected interfaces (USSD on phone + ATM keypad). Context switching between phone and ATM creates cognitive load and opportunity for errors.",
    },
    {
      title: "Redundant Security Steps",
      description:
        "Token generation adds steps without adding security—wallet is already authenticated, device ownership verified, and network validated. The friction is interaction inefficiency, not security.",
    },
    {
      title: "Infrastructure Limitations",
      description:
        "Current ATM infrastructure in Ghana lacks advanced NFC readers, reliable QR scanners, and unified telco wallet integration. Solution requires infrastructure investment.",
    },
    {
      title: "Bank-Telco Interoperability",
      description:
        "Strong dependency on banks and telcos working together. Regulatory and security considerations add complexity to implementation.",
    },
  ],

  solutions: [
    {
      title: "Remove Token Generation",
      description:
        "Replace temporary token generation with device-based authentication. The phone itself becomes the secure credential through biometrics and wallet authentication.",
      features: [
        "Biometric authentication on phone",
        "Device-based credential",
        "No code memorization required",
      ],
    },
    {
      title: "NFC Instead of USSD",
      description:
        "Leverage NFC capabilities already present in modern smartphones and contactless payment systems. Faster interaction with fewer steps and less cognitive load.",
      features: [
        "Tap-to-interact model",
        "Leverages existing phone capabilities",
        "Familiar 'tap & pay' pattern",
      ],
    },
    {
      title: "ATM as Smart Reader",
      description:
        "ATM reads intent directly from phone rather than requiring manual input. The phone communicates withdrawal request, ATM confirms and dispenses.",
      features: [
        "Phone initiates transaction",
        "ATM receives and confirms",
        "Minimal ATM interaction",
      ],
    },
    {
      title: "Graceful Fallback",
      description:
        "Designed flows that degrade gracefully for non-NFC ATMs, providing hybrid NFC + QR fallback options for transition period.",
      features: [
        "QR code fallback option",
        "Progressive infrastructure adoption",
        "Backward compatibility",
      ],
    },
  ],

  results: [
    {
      metric: "70% Step Reduction",
      description:
        "Concept reduces withdrawal from 10+ steps to 3-4 steps, significantly reducing time and cognitive load.",
      before: "10+ steps across phone and ATM",
      after: "3-4 steps, primarily on phone",
    },
    {
      metric: "Expert Validation",
      description:
        "Senior design colleague validated the idea as high-potential and well-reasoned, providing UX refinement suggestions.",
    },
    {
      metric: "Systems Thinking Demonstration",
      description:
        "Concept demonstrates ability to translate personal pain points into scalable, technology-aware solutions.",
    },
  ],

  technologies: [
    { name: "Figma", category: "design" },
    { name: "Auto-Ethnographic Research", category: "other" },
    { name: "Process Mapping", category: "other" },
    { name: "Technology Feasibility Analysis", category: "other" },
    { name: "Concept Design", category: "design" },
  ],

  role: "Sole Designer (Problem Framing, Research, UX, Concept)",
  duration: "Iterative personal project",
  team: "Solo execution with peer design review",

  links: [],
  testimonials: [],

  featured: false,
  order: 5,
};
