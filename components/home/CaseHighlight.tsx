// Purpose: Featured case studies in continuous marquee with background images.
"use client";

import { useState } from "react";
import { CaseHighlightMarquee } from "./CaseHighlightMarquee";
import { caseStudies } from "./caseData";

export default function CaseHighlight() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <CaseHighlightMarquee
      items={caseStudies}
      speed={70}
      slowFactor={0.25}
      paused={isPaused}
      onTogglePause={setIsPaused}
    />
  );
}
