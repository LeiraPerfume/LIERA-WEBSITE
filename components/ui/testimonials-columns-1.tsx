"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const testimonials = [
  {
    text: "Using Leira gave me the confidence and comfort to enjoy our intimate moments fully. It's been a wonderful change.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Anita",
    role: "Customer",
  },
  {
    text: "I was skeptical at first, but now I can't imagine going without it. It's light, natural, and gives me a sense of calm every time I use it.",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    name: "Sneha P",
    role: "Customer",
  },
  {
    text: "This is something I didn't even know I needed. I love how gentle it is on my skin. No irritation, no discomfort — just clean and confident all day.",
    image: "https://randomuser.me/api/portraits/women/46.jpg",
    name: "Rina",
    role: "Customer",
  },
  {
    text: "After trying a few different brands, I finally found something that works and feels right. Thank you, Leira, for creating a product that actually cares.",
    image: "https://randomuser.me/api/portraits/women/47.jpg",
    name: "Sasha",
    role: "Customer",
  },
  {
    text: "Leira has completely transformed my daily routine. The cooling sensation is so gentle and refreshing, and the fragrance is absolutely divine. I feel confident and fresh all day long!",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Priya Sharma",
    role: "Marketing Professional",
  },
  {
    text: "As someone with sensitive skin, I was hesitant to try new products. But Leira is so gentle and natural. The pH balance support gives me peace of mind, and I love the botanical ingredients.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Ananya Patel",
    role: "Yoga Instructor",
  },
  {
    text: "The long-lasting fragrance is incredible! I've tried many products, but Leira's blend of jasmine and rose is simply elegant. It's become an essential part of my self-care routine.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Meera Kapoor",
    role: "Fashion Designer",
  },
  {
    text: "Postpartum care was challenging, but Leira's natural tightening effect has been a game-changer. The product is gentle, effective, and the aroma is so calming. Highly recommend!",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Riya Verma",
    role: "New Mother",
  },
  {
    text: "I love how Leira addresses multiple concerns - from odor control to soothing irritation. The mental uplift from the peppermint aroma is amazing. It's like a spa treatment in a bottle!",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Sneha Reddy",
    role: "Corporate Executive",
  },
];

export type Testimonial = typeof testimonials[0];

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <motion.div 
                  className="p-8 rounded-2xl border border-gray-200/80 bg-white/95 backdrop-blur-sm shadow-lg shadow-pink-500/5 max-w-xs w-full group/card relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/15 hover:border-pink-200 hover:-translate-y-1" 
                  key={`${index}-${i}`}
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {/* Premium Glow Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 via-pink-500/0 to-pink-500/0 group-hover/card:from-pink-500/5 group-hover/card:via-pink-500/3 group-hover/card:to-pink-500/5 transition-all duration-500 rounded-2xl pointer-events-none" />
                  
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 opacity-10 group-hover/card:opacity-20 transition-opacity duration-300">
                    <svg className="w-12 h-12 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.433.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.995 3.638-3.995 5.849h3.983v10h-9.984z"/>
                    </svg>
                  </div>

                  <div className="relative z-10">
                    <div className="text-gray-700 text-sm leading-relaxed mb-4">{text}</div>
                    <div className="flex items-center gap-3 mt-6 pt-4 border-t border-gray-100">
                      <motion.img
                        width={40}
                        height={40}
                        src={image}
                        alt={name}
                        className="h-10 w-10 rounded-full object-cover border-2 border-pink-100 group-hover/card:border-pink-300 transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                      />
                      <div className="flex flex-col">
                        <div className="font-semibold tracking-tight leading-5 text-gray-900 group-hover/card:text-pink-600 transition-colors duration-300">{name}</div>
                        <div className="leading-5 text-gray-500 text-sm tracking-tight">{role}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

export const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [0.05, 0.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -20]);

  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  return (
    <section 
      ref={sectionRef}
      className="py-24 md:py-32 px-6 relative z-10 overflow-hidden" 
      style={{ backgroundColor: "#FAF9F6" }}
    >
      {/* Animated Background Gradient */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{
          background: "radial-gradient(circle at 30% 50%, rgba(255, 20, 147, 0.08) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(255, 165, 0, 0.08) 0%, transparent 50%)",
          opacity: backgroundOpacity,
        }}
      />

      {/* Floating Decorative Elements */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-pink-200/20 to-pink-300/20 blur-3xl"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-gradient-to-br from-orange-200/20 to-amber-200/20 blur-3xl"
        animate={{
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-gradient-to-br from-pink-300/10 to-orange-300/10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      <div className="container z-10 mx-auto max-w-7xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-12 md:mb-16 relative z-10"
        >
          <motion.div 
            className="flex justify-center mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="border border-pink-200 py-1 px-4 rounded-lg text-pink-600 text-xs uppercase tracking-wider font-semibold bg-white/50 backdrop-blur-sm shadow-sm">
              Testimonials
            </div>
          </motion.div>

          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-pink-600 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            What our users say
          </motion.h2>
          <motion.p 
            className="text-center mt-5 text-gray-600"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            See what our customers have to say about Leira.
          </motion.p>
        </motion.div>

        <motion.div 
          style={{ y: contentY }}
          className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden relative z-10"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </motion.div>
      </div>
    </section>
  );
};

