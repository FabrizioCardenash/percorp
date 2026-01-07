"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
  iconClassName?: string;
  titleClassName?: string;
  index?: number;
  activeIndex?: number | null;
  onClick?: () => void;
}

function DisplayCard({
  className,
  icon,
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  iconClassName = "bg-blue-600",
  titleClassName = "text-blue-400",
  index = 0,
  activeIndex,
  onClick,
}: DisplayCardProps) {
  const isActive = activeIndex === index;
  
  return (
    <div
      onClick={onClick}
      className={cn(
        "relative flex h-52 w-[28rem] -skew-y-[8deg] select-none flex-col justify-between rounded-xl border border-white/10 bg-black/90 backdrop-blur-sm px-6 py-5 transition-all duration-500 cursor-pointer",
        "hover:border-white/30 hover:bg-black",
        "[&>*]:flex [&>*]:items-center [&>*]:gap-3",
        isActive && "!translate-y-[-120px] !translate-x-0 z-50 border-white/40 shadow-2xl shadow-white/10",
        className
      )}
    >
      <div>
        <span className={cn("relative inline-flex items-center justify-center rounded-full p-2", iconClassName)}>
          {icon}
        </span>
        <p className={cn("text-2xl font-heading font-bold", titleClassName)}>{title}</p>
      </div>
      <p className="text-lg text-white/80 font-body leading-relaxed">{description}</p>
      <p className="text-sm text-white/50 font-body">{date}</p>
    </div>
  );
}

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const displayCards = cards || [];

  return (
    <div className="grid [grid-template-areas:'stack'] place-items-center opacity-100">
      {displayCards.map((cardProps, index) => (
        <DisplayCard 
          key={index} 
          {...cardProps} 
          index={index}
          activeIndex={activeIndex}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}

export { DisplayCard };
