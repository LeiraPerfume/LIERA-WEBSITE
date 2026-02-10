"use client";

import { MiniNavbar } from "@/components/ui/mini-navbar";
import Footer from "@/components/Footer";
import { ProductCard } from "@/components/ui/card-7";
import { products } from "@/data/products";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import Image from "next/image";

export default function ShopPage() {
  const handleBuyNow = (productId: string) => {
    // Handle buy now action
    console.log("Buy now clicked for:", productId);
    // You can add toast notification or navigation here
  };

  return (
    <>
      <MiniNavbar />
      <main className="min-h-screen">
        <div className="relative z-10">
          <div className="bg-white">
            <div className="pt-24 pb-16">
              {/* Hero Section */}
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="text-center space-y-6"
                >
                  {/* Small decorative text */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xs md:text-sm text-gray-400 font-medium tracking-[0.2em] uppercase"
                  >
                    Our Collection
                  </motion.p>
                  
                  {/* Main Heading */}
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-[1.1] tracking-tight"
                  >
                    <span className="font-serif italic">Shop</span>{" "}
                    <span className="font-semibold text-pink-600">Leira</span>
                  </motion.h1>
                  
                  {/* Decorative line */}
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="w-24 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent mx-auto"
                  />
                  
                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed font-light"
                  >
                    Discover our collection of intimate perfumes crafted exclusively for women. 
                    <br className="hidden md:block" />
                    Premium quality, natural ingredients, and elegant fragrances.
                  </motion.p>
                </motion.div>
              </section>

              {/* Products Grid */}
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 justify-items-center">
                  {products.map((product, index) => {
                    const isJasmine = product.id === "jasmine";
                    const isYlang = product.id === "ylang-ylang";
                    const isDamask = product.id === "damask" || product.id === "damask-rose";

                    // Custom images per product
                    const imageUrl = isJasmine
                      ? "/images/j1.png"
                      : isYlang
                      ? "/images/yalng.png"
                      : isDamask
                      ? "/images/Damk.png"
                      : `${product.folderPath}/1.jpg`;

                    // Custom titles per product
                    const title = isJasmine
                      ? "Leira Inner Perfume Jasmine"
                      : isYlang
                      ? "Leira Inner Perfume Ylang Ylang"
                      : isDamask
                      ? "Leira Inner Perfume Damask Rose"
                      : product.name.toUpperCase();

                    // Custom pricing per product
                    const price =
                      isJasmine || isYlang || isDamask ? "₹2,699.00" : product.price;
                    
                    return (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        className="w-full flex justify-center"
                      >
                        <ProductCard
                          imageUrl={imageUrl}
                          imageAlt={`${product.name} - ${product.description}`}
                          logo={<Heart className="h-5 w-5 text-white/80" />}
                          title={title}
                          description={product.subName || product.description}
                          price={price}
                          onBookNow={() => handleBuyNow(product.id)}
                        />
                      </motion.div>
                    );
                  })}
                </div>
              </section>
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}

