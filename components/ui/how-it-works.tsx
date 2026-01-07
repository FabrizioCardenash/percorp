"use client";

import { cn } from "@/lib/utils";
import type React from "react";
import { AnimatedText } from "@/components/ui/animated-text";
import { useInView } from "@/hooks/useInView";

interface StepCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

const StepCard: React.FC<StepCardProps> = ({
  icon,
  title,
  description,
  benefits,
}) => (
  <div
    className={cn(
      "relative rounded-2xl border border-white/10 bg-white/5 p-6 text-white transition-all duration-300 ease-in-out",
      "hover:scale-105 hover:shadow-lg hover:border-white/30 hover:bg-white/10"
    )}
  >
    {/* Icon */}
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-white">
      {icon}
    </div>
    {/* Title and Description */}
    <h3 className="mb-2 text-xl font-heading font-semibold">{title}</h3>
    <p className="mb-6 text-gray-400 font-body">{description}</p>
    {/* Benefits List */}
    <ul className="space-y-3">
      {benefits.map((benefit, index) => (
        <li key={index} className="flex items-center gap-3">
          <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-cyan-500/20">
            <div className="h-2 w-2 rounded-full bg-cyan-500"></div>
          </div>
          <span className="text-gray-300 font-body text-sm">{benefit}</span>
        </li>
      ))}
    </ul>
  </div>
);

interface HowItWorksProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  subtitle?: string;
  steps?: StepCardProps[];
}

export const HowItWorks: React.FC<HowItWorksProps> = ({
  className,
  title = "Cómo Trabajamos",
  subtitle = "Un proceso estructurado para garantizar resultados excepcionales",
  steps = [],
  ...props
}) => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="como-trabajamos"
      className={cn("w-full bg-black py-16 sm:py-24", className)}
      {...props}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div ref={ref} className="mx-auto mb-16 max-w-4xl text-center">
          <div className="flex justify-center mb-4">
            <AnimatedText 
              text={title}
              as="h2"
              textClassName="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white"
              underlineGradient="from-cyan-500 via-blue-500 to-purple-500"
              underlineHeight="h-1.5"
              underlineOffset="-bottom-3"
              underlineClassName="rounded-full"
              duration={0.08}
              delay={0.05}
              replay={isInView}
            />
          </div>
          <p className="mt-8 text-lg text-gray-400 font-body">
            {subtitle}
          </p>
        </div>

        {/* Step Indicators with Connecting Line */}
        <div className="relative mx-auto mb-8 w-full max-w-5xl hidden md:block">
          <div
            aria-hidden="true"
            className="absolute left-[16.6667%] top-1/2 h-0.5 w-[66.6667%] -translate-y-1/2 bg-white/20"
          ></div>
          <div className="relative grid grid-cols-3">
            {steps.map((_, index) => (
              <div
                key={index}
                className="flex h-10 w-10 items-center justify-center justify-self-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 font-semibold text-white ring-4 ring-black font-heading"
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Steps Grid */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              benefits={step.benefits}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

