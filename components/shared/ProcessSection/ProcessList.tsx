"use client";

import { ProcessStep } from "./processData";

interface ProcessListProps {
  steps: ProcessStep[];
  activeIndex: number;
  onItemClick: (index: number) => void;
}

export function ProcessList({
  steps,
  activeIndex,
  onItemClick,
}: ProcessListProps) {
  return (
    <div role="tablist" aria-label="Process steps" className="space-y-4">
      {steps.map((step, index) => {
        const isActive = index === activeIndex;

        return (
          <button
            key={step.key}
            role="tab"
            tabIndex={isActive ? 0 : -1}
            aria-selected={isActive}
            aria-controls={`process-panel-${step.key}`}
            className={`
              group relative w-full rounded-2xl p-6 text-left transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-blue-400/60
              ${
                isActive
                  ? "bg-navy-800 border border-brand"
                  : "bg-brand/20 border border-brand/70 hover:bg-brand/40"
              }
            `}
            onClick={() => onItemClick(index)}
          >
            {/* Left accent bar for active state */}
            {isActive && (
              <div className="absolute left-0 top-6 bottom-6 w-0.5 bg-blue-400 rounded-full" />
            )}

            <div className="flex items-start gap-4">
              {/* Icon circle */}
              <div
                className={`
                flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center
                transition-colors duration-300
                ${
                  isActive
                    ? "bg-blue-400/30 text-blue-200"
                    : "bg-blue-800/40 text-blue-300 group-hover:bg-blue-700/50"
                }
              `}
              >
                {step.icon}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3
                  className={`
                    font-semibold transition-colors duration-300 mb-2
                    ${
                      isActive
                        ? "text-white"
                        : "text-white/90 group-hover:text-white"
                    }
                  `}
                >
                  {step.title}
                </h3>

                <p
                  className={`
                  text-sm leading-relaxed transition-colors duration-300
                  ${
                    isActive
                      ? "text-white/80"
                      : "text-white/60 group-hover:text-white/70"
                  }
                `}
                >
                  {step.body}
                </p>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
