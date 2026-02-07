"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  Snowflake,
  Heart,
  Wind,
  TreePine,
  Leaf,
  Droplet,
} from "lucide-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "COOLING SENSATION",
      description:
        "Provides a gentle, non-irritating cooling effect, which can help relieve discomfort, itchiness, or a feeling of heat in the intimate area.",
      icon: <Snowflake className="w-6 h-6" />,
    },
    {
      title: "MENTAL & MOOD UPLIFT",
      description:
        "The aroma of peppermint has a calming and energizing effect, which can help boost confidence and reduce stress—especially during menstruation or intimacy.",
      icon: <Heart className="w-6 h-6" />,
    },
    {
      title: "SOOTHING IRRITATION",
      description:
        "Its anti-inflammatory properties can soothe minor irritation, itching, or redness on the outer genital skin (vulva).",
      icon: <Wind className="w-6 h-6" />,
    },
    {
      title: "ODOR CONTROL",
      description:
        "By refreshing the area and reducing moisture, it may help with odor control when used in combination with other deodorizing or antibacterial ingredients.",
      icon: <TreePine className="w-6 h-6" />,
    },
    {
      title: "NATURAL TIGHTENING EFFECT",
      description:
        "Rich in tannins, Manjakani has strong astringent properties that help tighten and tone vaginal muscles— popular for postpartum care and feminine rejuvenation.",
      icon: <Leaf className="w-6 h-6" />,
    },
    {
      title: "PH BALANCE SUPPORT",
      description:
        "Formulated with gentle botanical ingredients, Leira may help support the intimate area's natural pH balance, promoting long-lasting freshness and everyday comfort without disrupting sensitive skin.",
      icon: <Droplet className="w-6 h-6" />,
    },
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  // Calculate grid position for 3 columns (6 items: 3 upar, 3 neeche)
  const col = index % 3;
  const row = Math.floor(index / 3);
  const isLastCol = col === 2;
  const isFirstRow = row === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={cn(
        "flex flex-col py-8 px-6 relative group/feature transition-all duration-300 rounded-lg overflow-hidden",
        !isLastCol && "lg:border-r border-gray-300",
        !isFirstRow && "lg:border-t border-gray-300"
      )}
    >
      {/* Premium Black Background on Hover */}
      <div className="opacity-0 group-hover/feature:opacity-100 transition-all duration-300 absolute inset-0 h-full w-full bg-gradient-to-br from-black via-gray-900 to-black pointer-events-none rounded-lg" />
      
      {/* Subtle glow effect on hover */}
      <div className="opacity-0 group-hover/feature:opacity-20 transition-all duration-300 absolute inset-0 h-full w-full bg-gradient-to-br from-pink-500/10 via-transparent to-pink-500/10 pointer-events-none rounded-lg" />
      
      {/* Icon */}
      <div className="mb-4 relative z-10 text-gray-600 group-hover/feature:text-white transition-colors duration-300">
        {icon}
      </div>
      
      {/* Title */}
      <div className="text-lg font-bold mb-2 relative z-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-gray-200 group-hover/feature:bg-pink-500 transition-all duration-300 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition-all duration-300 inline-block text-pink-600 group-hover/feature:text-white pl-3">
          {title}
        </span>
      </div>
      
      {/* Description */}
      <p className="text-sm text-gray-600 group-hover/feature:text-white/90 max-w-xs relative z-10 transition-colors duration-300">
        {description}
      </p>
    </motion.div>
  );
};

