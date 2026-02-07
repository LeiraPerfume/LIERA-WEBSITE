"use client";

import { useState, useEffect } from "react";
import { products } from "@/data/products";
import { MiniNavbar } from "@/components/ui/mini-navbar";

import Footer from "@/components/Footer";
import ProductBottleScroll from "@/components/ProductBottleScroll";
import {
  IntroducingSection,
  ProductCardsSection,
  FeaturesSection,
  TestimonialsSection,
  FAQSection,
} from "@/components/Sections";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const [index, setIndex] = useState(0);
  const product = products[index];

  const nextProduct = () => setIndex((prev) => (prev + 1) % products.length);
  const prevProduct = () =>
    setIndex((prev) => (prev - 1 + products.length) % products.length);
  const goToProduct = (i: number) => setIndex(i);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Update body background with a smooth transition handled by CSS
    document.documentElement.style.setProperty("--bg-gradient", product.gradient);
  }, [index, product.gradient]);

  return (
    <>
      <MiniNavbar />


      <AnimatePresence mode="wait">
        <motion.main
          key={product.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          className="min-h-screen"
        >
          {/* Scroll Engine (Occupies significant height) */}
          <ProductBottleScroll 
            product={product} 
            products={products}
            currentIndex={index}
            onProductChange={goToProduct}
            onPrevProduct={prevProduct}
            onNextProduct={nextProduct}
          />

          {/* Content Sections */}
          <div className="relative z-10">
            <IntroducingSection product={product} />
            <ProductCardsSection />
            <FeaturesSection />
            <TestimonialsSection />
            <FAQSection />
            <Footer />
          </div>
        </motion.main>
      </AnimatePresence>
    </>
  );
}
