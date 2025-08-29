import { ReactNode, createElement } from "react";
import {
  PiChatCircle,
  PiMagnifyingGlass,
  PiWallet,
  PiWrench,
  PiPackage,
} from "react-icons/pi";

export type ProcessStep = {
  key: "inquiry" | "discovery" | "quote" | "build" | "deliver";
  title: string;
  body: string;
  icon: ReactNode;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export const processSteps: ProcessStep[] = [
  {
    key: "inquiry",
    title: "Inquiry",
    body: "Tell us your goals, constraints, and timeline. Attach briefs or a repo link.",
    icon: createElement(PiChatCircle, { className: "w-5 h-5" }),
    image: {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
      alt: "Team discussion around a conference table during project inquiry phase",
      width: 600,
      height: 400,
    },
  },
  {
    key: "discovery",
    title: "Discovery",
    body: "30–45 min call to align scope and success criteria.",
    icon: createElement(PiMagnifyingGlass, { className: "w-5 h-5" }),
    image: {
      src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1000&auto=format&fit=crop",
      alt: "Whiteboard session with team members planning and discussing project scope",
      width: 600,
      height: 400,
    },
  },
  {
    key: "quote",
    title: "Quote",
    body: "Role mix, estimated hours, milestones, and start date. Hourly T&M by default.",
    icon: createElement(PiWallet, { className: "w-5 h-5" }),
    image: {
      src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop",
      alt: "Calculator and contract documents on a desk during quote preparation",
      width: 600,
      height: 400,
    },
  },
  {
    key: "build",
    title: "Build",
    body: "Assigned lead engineer, weekly check‑ins, transparent progress.",
    icon: createElement(PiWrench, { className: "w-5 h-5" }),
    image: {
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1000&auto=format&fit=crop",
      alt: "Code editor with programming interface and development tools",
      width: 600,
      height: 400,
    },
  },
  {
    key: "deliver",
    title: "Deliver",
    body: "Demo, handover docs, and next‑step options (support, retainer).",
    icon: createElement(PiPackage, { className: "w-5 h-5" }),
    image: {
      src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop",
      alt: "Professional presentation showing project demo to stakeholders",
      width: 600,
      height: 400,
    },
  },
];
