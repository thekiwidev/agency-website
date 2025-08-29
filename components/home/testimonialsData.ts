export type Testimonial = {
  id: string;
  quote: string; // 20–40 words, plain text
  name: string; // e.g., "Lisa Cosme"
  title: string; // e.g., "Designer"
  location?: string; // city, country
  org?: string; // company label
  photo: { src: string; alt: string; width: number; height: number }; // portrait
};

export const testimonials: Testimonial[] = [
  {
    id: "lisa-cosme",
    quote:
      "Bondlayer made our process so simple! We can design and test in use immediately.",
    name: "Lisa Cosme",
    title: "Designer",
    org: "Significa",
    photo: {
      src: "https://images.unsplash.com/photo-1494790108755-2616b612c068?q=80&w=800&auto=format&fit=crop",
      alt: "Lisa Cosme, Designer at Significa",
      width: 800,
      height: 800,
    },
  },
  {
    id: "giuseppe-prancetino",
    quote:
      "We created all the Rock in Rio website in 14 days without the single line of code!",
    name: "Giuseppe Prancetino",
    title: "Marketing VP",
    org: "Rock in Rio",
    photo: {
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
      alt: "Giuseppe Prancetino, Marketing VP at Rock in Rio",
      width: 800,
      height: 800,
    },
  },
  {
    id: "sarah-johnson",
    quote:
      "They stabilized our pipeline and we shipped features again. The team was responsive and delivered exactly what we needed.",
    name: "Sarah Johnson",
    title: "CTO",
    location: "San Francisco",
    org: "Series B Fintech",
    photo: {
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop",
      alt: "Sarah Johnson, CTO at Series B Fintech",
      width: 800,
      height: 800,
    },
  },
  {
    id: "michael-chen",
    quote:
      "Security review was pragmatic and fast. We passed audit without any major issues thanks to their thorough preparation.",
    name: "Michael Chen",
    title: "Head of Security",
    location: "Austin",
    org: "Healthcare SaaS",
    photo: {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
      alt: "Michael Chen, Head of Security at Healthcare SaaS",
      width: 800,
      height: 800,
    },
  },
  {
    id: "ana-rodriguez",
    quote:
      "OTA made our fleet manageable. We can now push updates seamlessly across thousands of devices in the field.",
    name: "Ana Rodriguez",
    title: "VP Hardware",
    location: "Barcelona",
    org: "IoT Manufacturer",
    photo: {
      src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
      alt: "Ana Rodriguez, VP Hardware at IoT Manufacturer",
      width: 800,
      height: 800,
    },
  },
  {
    id: "david-kim",
    quote:
      "The AI implementation exceeded our expectations. Customer satisfaction improved dramatically with the new search capabilities.",
    name: "David Kim",
    title: "Product Director",
    location: "Lagos, NG",
    org: "Enterprise Software",
    photo: {
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
      alt: "David Kim, Product Director at Enterprise Software",
      width: 800,
      height: 800,
    },
  },
];
