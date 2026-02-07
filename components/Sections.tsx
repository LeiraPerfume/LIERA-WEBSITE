import { Product, products } from "@/data/products";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { ProductCard } from "@/components/ui/product-card";
import { ProductCard as ProductCardNew } from "@/components/ui/cards-1";
import { Snowflake, Leaf, Sparkles, Heart, Wind, TreePine } from "lucide-react";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";
import { Testimonials } from "@/components/ui/testimonials-columns-1";
import FAQs from "@/components/ui/faq";

export const IntroducingSection = ({ product }: { product: Product }) => {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const imageY = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const imageOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.3]);
    const textY = useTransform(scrollYProgress, [0, 1], [0, 50]);
    const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [0.05, 0.15]);

    const titleWords = product.introducingSection.title.split(" ");

    return (
        <section 
            ref={sectionRef}
            className="py-20 md:py-24 px-6 relative z-10 overflow-hidden" 
            style={{ backgroundColor: "#FAF9F6" }}
        >
            {/* Animated Background Gradient - More Subtle */}
            <motion.div 
                className="absolute inset-0 opacity-20"
                style={{
                    background: "radial-gradient(circle at 30% 50%, rgba(255, 165, 0, 0.08) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(255, 20, 147, 0.08) 0%, transparent 50%)",
                }}
            />

            {/* Floating Decorative Elements - Smaller */}
            <motion.div
                className="absolute top-10 right-10 w-24 h-24 rounded-full bg-gradient-to-br from-orange-200/15 to-pink-200/15 blur-2xl"
                animate={{
                    y: [0, 20, 0],
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-10 left-10 w-28 h-28 rounded-full bg-gradient-to-br from-amber-200/15 to-yellow-200/15 blur-2xl"
                animate={{
                    y: [0, -25, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
            />

            <div className="container mx-auto max-w-6xl relative">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Left Side - Product Image with Premium Effects - Smaller */}
                    <motion.div
                        initial={{ opacity: 0, x: -60, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ 
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                        style={{ y: imageY, opacity: imageOpacity }}
                        className="flex-1 w-full lg:w-auto relative group"
                    >
                        {/* Premium Image Container with Glass Effect */}
                        <div className="relative">
                            {/* Glow Effect - More Subtle */}
                            <div className="absolute -inset-3 bg-gradient-to-r from-orange-400/15 via-pink-400/15 to-amber-400/15 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            
                            {/* Image with Premium Border - Smaller */}
                            <div className="relative aspect-[4/3] max-w-lg mx-auto rounded-xl overflow-hidden shadow-xl border border-white/40 backdrop-blur-sm bg-gradient-to-br from-white/10 to-white/5">
                                <motion.div
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="w-full h-full"
                                >
                                    <Image
                                        src="/images/Intro.JPEG"
                                        alt="Leira Perfume Collection"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </motion.div>
                                
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            {/* BOTANICAL MASTERPIECE overlay - Smaller and More Refined */}
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                                className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full max-w-xs"
                            >
                                <div className="bg-white/95 backdrop-blur-md px-6 py-3 text-center rounded-full shadow-lg border border-white/60">
                                    <p className="text-gray-700 text-[10px] uppercase tracking-[0.25em] font-semibold">
                                        BOTANICAL MASTERPIECE
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Side - Content with Premium Typography - More Compact */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ 
                            duration: 0.8,
                            delay: 0.2,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                        style={{ y: textY }}
                        className="flex-1 w-full lg:w-auto relative"
                    >
                        {/* Animated Faded LEIRA background text - Smaller */}
                        <motion.div 
                            className="absolute -z-10 top-0 left-0 w-full h-full flex items-center justify-center"
                            style={{ opacity: backgroundOpacity }}
                        >
                            <h2 className="text-[8rem] md:text-[12rem] font-black text-gray-800/40 leading-none tracking-tighter select-none">
                                LEIRA
                            </h2>
                        </motion.div>

                        <div className="relative space-y-6">
                            {/* INTRODUCING subtitle with Animation */}
                            <motion.p
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                className="text-gray-600 text-xs uppercase tracking-[0.25em] font-semibold relative inline-block"
                            >
                                <span className="relative z-10">{product.introducingSection.subtitle}</span>
                                <motion.span
                                    className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-pink-500/80 to-pink-600/80"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6, duration: 0.6 }}
                                />
                            </motion.p>

                            {/* Main Heading with Stagger Animation - Smaller */}
                            <div className="overflow-hidden">
                                {titleWords.map((word, i) => (
                                    <motion.h1
                                        key={i}
                                        initial={{ opacity: 0, y: 60 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            delay: 0.5 + i * 0.1,
                                            duration: 0.7,
                                            ease: [0.22, 1, 0.36, 1]
                                        }}
                                        className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-pink-600/95 leading-[0.95] tracking-tight mb-1 font-medium"
                                    >
                                        {word}
                                    </motion.h1>
                                ))}
                            </div>

                            {/* Paragraphs with Fade In - More Compact */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.9, duration: 0.7 }}
                                className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed max-w-xl font-light"
                            >
                                <p>{product.introducingSection.paragraph1}</p>
                                <p>{product.introducingSection.paragraph2}</p>
                            </motion.div>

                            {/* Premium CTA Buttons - More Refined */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1.1, duration: 0.7 }}
                                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4"
                            >
                                <button className="relative bg-black text-white px-10 py-4 text-xs uppercase tracking-[0.15em] font-semibold overflow-hidden rounded-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group shadow-lg">
                                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-pink-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
                                    <span className="relative z-10">SHOP NOW</span>
                                </button>
                                
                                <motion.a
                                    href="#"
                                    whileHover={{ x: 3 }}
                                    className="group/link text-gray-700 text-xs uppercase tracking-[0.15em] font-semibold relative inline-block"
                                >
                                    <span className="relative z-10">EXPLORE STORY</span>
                                    <motion.span
                                        className="absolute bottom-0 left-0 h-[1px] bg-gray-700 origin-left"
                                        initial={{ scaleX: 0 }}
                                        whileHover={{ scaleX: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.a>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export const ProductCardsSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const headerY = useTransform(scrollYProgress, [0, 1], [0, -30]);
    const cardsY = useTransform(scrollYProgress, [0, 1], [0, 20]);
    const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.5]);

    const handleSave = (title: string) => {
        console.log(`Saved: ${title}`);
    };

    return (
        <section 
            ref={sectionRef}
            className="py-32 md:py-40 px-6 relative z-10 overflow-hidden" 
            style={{ backgroundColor: "#FAF9F6" }}
        >
            {/* Animated Background Gradient */}
            <motion.div 
                className="absolute inset-0 opacity-30"
                style={{
                    background: "radial-gradient(circle at 20% 30%, rgba(255, 20, 147, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255, 165, 0, 0.08) 0%, transparent 50%)",
                    opacity: backgroundOpacity,
                }}
            />

            {/* Floating Decorative Elements */}
            <motion.div
                className="absolute top-10 left-10 w-40 h-40 rounded-full bg-gradient-to-br from-pink-200/15 to-pink-300/15 blur-3xl"
                animate={{
                    y: [0, 40, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-gradient-to-br from-orange-200/15 to-amber-200/15 blur-3xl"
                animate={{
                    y: [0, -50, 0],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5,
                }}
            />

            <div className="container mx-auto max-w-7xl relative">
                {/* Section Header with Parallax */}
                <motion.div
                    style={{ y: headerY }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ 
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                    className="text-center mb-20 md:mb-24"
                >
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-black text-sm uppercase tracking-[0.3em] font-bold mb-6 relative inline-block"
                    >
                        <span className="relative z-10">discover our products</span>
                        <motion.span
                            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-pink-500 to-pink-600"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        />
                    </motion.p>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-pink-600 leading-tight mb-6"
                    >
                        Loved by women everywhere
                    </motion.h2>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-gray-700 text-xl md:text-2xl font-light italic"
                    >
                        Charm. Allure. Luscious
                    </motion.p>
                </motion.div>

                {/* Product Grid with Enhanced Animations */}
                <motion.div
                    style={{ y: cardsY }}
                    className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center max-w-6xl mx-auto"
                >
                    {products.map((product, index) => {
                        // Map product IDs to image paths
                        const imageMap: Record<string, string> = {
                            "jasmine": "/images/jasmine.png",
                            "ylang-ylang": "/images/yalng.png",
                            "damask-rose": "/images/Damk.png",
                        };
                        const imageUrl = imageMap[product.id] || `${product.folderPath}/1.jpg`;
                        
                        return (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 80, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ 
                                    delay: 0.6 + index * 0.15,
                                    duration: 0.8,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="w-full max-w-sm"
                            >
                                <ProductCardNew
                                    imageUrl={imageUrl}
                                    title={product.name}
                                    category={product.subName}
                                    href={`#${product.id}`}
                                    originalPrice="₹3,299.00"
                                    currentPrice="₹2,999.00"
                                    onSave={() => handleSave(product.name)}
                                />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export const BenefitsSection = ({ product }: { product: Product }) => {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const panelsY = useTransform(scrollYProgress, [0, 1], [0, -20]);
    const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1]);
    const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 0.1]);

    return (
        <section 
            ref={sectionRef}
            className="py-32 md:py-40 px-6 relative z-10 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden"
        >
            {/* Decorative Background Elements */}
            <motion.div
                className="absolute inset-0 opacity-30"
                style={{
                    background: "radial-gradient(circle at 10% 20%, rgba(13, 74, 58, 0.05) 0%, transparent 50%), radial-gradient(circle at 90% 80%, rgba(37, 99, 235, 0.05) 0%, transparent 50%)",
                    opacity: backgroundOpacity,
                }}
            />

            {/* Thin blue vertical line on left with glow */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-400 shadow-lg shadow-blue-500/50" />

            {/* Floating decorative elements */}
            <motion.div
                className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-teal-200/10 to-green-200/10 blur-3xl"
                animate={{
                    y: [0, 30, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <div className="container mx-auto max-w-7xl relative">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-stretch">
                    {/* Leftmost Panel - Dark Teal with Premium Effects */}
                    <motion.div
                        style={{ y: panelsY }}
                        initial={{ opacity: 0, x: -80, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="md:col-span-1 rounded-3xl bg-gradient-to-br from-[#0d4a3a] to-[#0a3d2e] text-white p-10 flex flex-col justify-between shadow-2xl border border-teal-900/30 relative overflow-hidden group"
                    >
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-400/0 to-teal-600/0 group-hover:from-teal-400/10 group-hover:to-teal-600/10 transition-all duration-500 rounded-3xl" />
                        
                        {/* Top Section - Cooling Sensation */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="mb-10 relative z-10"
                        >
                            <motion.div
                                whileHover={{ rotate: 180, scale: 1.1 }}
                                transition={{ duration: 0.5 }}
                                className="mb-6"
                            >
                                <Snowflake className="w-10 h-10 text-white drop-shadow-lg" />
                            </motion.div>
                            <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">COOLING SENSATION</h3>
                            <p className="text-sm text-white/90 leading-relaxed font-light">
                                Provides a gentle, non-irritating cooling effect, which can help relieve discomfort, itchiness, or a feeling of heat in the intimate area.
                            </p>
                        </motion.div>
                        
                        <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent my-8" />
                        
                        {/* Bottom Section - Mental & Mood Uplift */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="relative z-10"
                        >
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                                className="mb-6"
                            >
                                <div className="w-10 h-10 flex items-center justify-center">
                                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                                    </svg>
                                </div>
                            </motion.div>
                            <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">MENTAL & MOOD UPLIFT</h3>
                            <p className="text-sm text-white/90 leading-relaxed font-light">
                                The aroma of peppermint has a calming and energizing effect, which can help boost confidence and reduce stress—especially during menstruation or intimacy.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Central Product Image with Premium Effects */}
                    <motion.div
                        style={{ scale: imageScale }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="md:col-span-1 flex items-stretch relative z-10 w-full h-full"
                    >
                        <div className="relative group w-full h-full flex items-center justify-center">
                            {/* Glow effect */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-blue-400/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            
                            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden w-full h-full flex items-center justify-center p-8">
                                {/* Decorative lines */}
                                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
                                <div className="absolute right-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
                                
                                <div className="w-full h-full relative flex items-center justify-center">
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.5 }}
                                        className="w-full h-full relative"
                                    >
                                        <Image
                                            src="/images/open.JPEG"
                                            alt={product.name}
                                            fill
                                            className="object-contain drop-shadow-2xl"
                                            priority
                                        />
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Section - Split into two */}
                    <div className="md:col-span-2 flex flex-col gap-8">
                        {/* Upper Right - Blue Background with Premium Effects */}
                        <motion.div
                            style={{ y: panelsY }}
                            initial={{ opacity: 0, x: 80, scale: 0.95 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            whileHover={{ scale: 1.02, y: -5 }}
                            className="rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 text-white p-10 flex flex-col justify-between shadow-2xl border border-blue-500/30 relative overflow-hidden group"
                        >
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-blue-500/0 group-hover:from-blue-400/20 group-hover:to-blue-500/20 transition-all duration-500 rounded-3xl" />
                            
                            {/* Top Section - Soothing Irritation */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                className="mb-10 relative z-10"
                            >
                                <motion.div
                                    whileHover={{ rotate: 15, scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                    className="mb-6"
                                >
                                    <Wind className="w-10 h-10 text-white drop-shadow-lg" />
                                </motion.div>
                                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">SOOTHING IRRITATION</h3>
                                <p className="text-sm text-white/90 leading-relaxed font-light">
                                    Its anti-inflammatory properties can soothe minor irritation, itching, or redness on the outer genital skin (vulva).
                                </p>
                            </motion.div>
                            
                            <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent my-8" />
                            
                            {/* Bottom Section - Odor Control */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.7, duration: 0.6 }}
                                className="relative z-10"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                    className="mb-6"
                                >
                                    <TreePine className="w-10 h-10 text-white drop-shadow-lg" />
                                </motion.div>
                                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">ODOR CONTROL</h3>
                                <p className="text-sm text-white/90 leading-relaxed font-light">
                                    By refreshing the area and reducing moisture, it may help with odor control when used in combination with other deodorizing or antibacterial ingredients.
                                </p>
                            </motion.div>
                        </motion.div>

                        {/* Lower Right - Light Gray Background with Premium Effects */}
                        <motion.div
                            style={{ y: panelsY }}
                            initial={{ opacity: 0, x: 80, scale: 0.95 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            whileHover={{ scale: 1.01 }}
                            className="rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 text-black p-10 flex flex-col shadow-xl border border-gray-300/50 relative overflow-hidden"
                        >
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.7, duration: 0.6 }}
                                className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
                            >
                                WHY LEIRA IS GOOD FOR YOU?
                            </motion.h2>
                            
                            <motion.button
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ delay: 0.8, duration: 0.3 }}
                                className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold px-8 py-4 rounded-xl mb-10 transition-all duration-300 w-fit shadow-lg hover:shadow-xl"
                            >
                                MORE BENEFITS
                            </motion.button>
                            
                            {/* Natural Tightening Effect */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.9, duration: 0.6 }}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ duration: 0.3 }}
                                    className="mb-6"
                                >
                                    <Leaf className="w-10 h-10 text-black" />
                                </motion.div>
                                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">NATURAL TIGHTENING EFFECT</h3>
                                <p className="text-sm text-gray-700 leading-relaxed font-light">
                                    Rich in tannins, Manjakani has strong astringent properties that help tighten and tone vaginal muscles— popular for postpartum care and feminine rejuvenation.
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const DetailsSection = ({ product }: { product: Product }) => (
    <section className="py-24 px-6 container mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24 relative z-10">
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 aspect-square rounded-3xl bg-neutral-900 border border-white/10 overflow-hidden shadow-2xl relative group"
        >
            <div className="absolute inset-0 flex items-center justify-center text-neutral-600 font-medium bg-neutral-900">
                [ Image: {product.detailsSection.imageAlt} ]
            </div>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-8"
        >
            <h3 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                {product.detailsSection.title}
            </h3>
            <p className="text-xl md:text-2xl text-neutral-400 leading-relaxed font-light">
                {product.detailsSection.description}
            </p>
        </motion.div>
    </section>
);

export const FreshnessSection = ({ product }: { product: Product }) => (
    <section className="py-32 relative z-10">
        <div className="container mx-auto px-6 text-center max-w-5xl">
            <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-bold mb-8 text-white tracking-tight"
            >
                {product.freshnessSection.title}
            </motion.h3>
            <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl md:text-2xl text-neutral-400 leading-relaxed max-w-3xl mx-auto"
            >
                {product.freshnessSection.description}
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
                {product.stats.map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="p-8 rounded-3xl bg-neutral-900/50 backdrop-blur-md border border-white/5 hover:border-white/20 transition-colors"
                    >
                        <div
                            className="text-5xl md:text-6xl font-bold mb-3"
                            style={{ color: product.themeColor }}
                        >
                            {stat.val}
                        </div>
                        <div className="text-sm uppercase tracking-[0.2em] text-neutral-500 font-bold">
                            {stat.label}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export const BuyNowSection = ({ product }: { product: Product }) => (
    <section className="py-32 px-6 container mx-auto relative z-10">
        <div className="bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-20 shadow-2xl flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1 space-y-10">
                <h3 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                    Pure. Simple. <br />
                    <span style={{ color: product.themeColor }}>Fast.</span>
                </h3>
                <div className="flex flex-wrap gap-4">
                    {product.buyNowSection.processingParams.map((p, i) => (
                        <span
                            key={i}
                            className="px-6 py-2 rounded-full border border-white/20 text-sm font-bold text-neutral-300 tracking-wider uppercase"
                        >
                            {p}
                        </span>
                    ))}
                </div>
                <div className="space-y-4 text-neutral-400 font-medium text-lg">
                    <p className="flex items-center gap-4">
                        <span className="text-2xl">🚚</span>{" "}
                        {product.buyNowSection.deliveryPromise}
                    </p>
                    <p className="flex items-center gap-4">
                        <span className="text-2xl">🛡️</span>{" "}
                        {product.buyNowSection.returnPolicy}
                    </p>
                </div>
            </div>

            <div className="flex-1 w-full max-w-md flex flex-col items-center p-10 bg-black rounded-3xl border border-white/10 shadow-inner ring-1 ring-white/5">
                <div className="text-xs uppercase text-neutral-500 font-bold tracking-[0.2em] mb-4">
                    One-Time Purchase
                </div>
                <div
                    className="text-7xl font-bold mb-2 tracking-tighter"
                    style={{ color: product.themeColor }}
                >
                    {product.buyNowSection.price}
                </div>
                <div className="text-neutral-500 mb-10 font-medium">
                    {product.buyNowSection.unit}
                </div>
                <button
                    className="w-full py-5 rounded-2xl text-black font-bold text-xl shadow-[0_0_40px_-10px] transform hover:scale-[1.02] active:scale-[0.98] transition-all"
                    style={{
                        background: product.themeColor,
                        boxShadow: `0 0 30px -5px ${product.themeColor}40`
                    }}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    </section>
);

export const FeaturesSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [0.05, 0.15]);
    const contentY = useTransform(scrollYProgress, [0, 1], [0, -30]);

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

            <div className="container mx-auto max-w-7xl relative">
                {/* Section Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 md:mb-16 text-center text-pink-600 relative z-10"
                >
                    WHY LEIRA IS GOOD FOR YOU?
                </motion.h2>
                <motion.div style={{ y: contentY }}>
                    <FeaturesSectionWithHoverEffects />
                </motion.div>
            </div>
        </section>
    );
};

export const TestimonialsSection = () => {
    return <Testimonials />;
};

export const FAQSection = () => {
    return <FAQs />;
};

export const ProductsSection = () => {
    // Original prices for discount display
    const productPrices = {
        "jasmine": { original: "₹3,000.00", current: "₹2,999.00" },
        "ylang-ylang": { original: "₹3,200.00", current: "₹2,999.00" },
        "damask-rose": { original: "₹3,200.00", current: "₹2,999.00" },
    };

    return (
        <section className="py-24 md:py-32 px-6 relative z-10 bg-white">
            <div className="container mx-auto max-w-7xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-gray-500 text-sm uppercase tracking-[0.3em] font-semibold mb-4">
                        DISCOVER OUR PRODUCTS
                    </p>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-900 leading-tight">
                        Loved by Women Everywhere
                    </h2>
                </motion.div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {products.map((product, index) => {
                        const prices = productPrices[product.id as keyof typeof productPrices] || { original: "₹3,000.00", current: product.price };
                        return (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                            >
                                <ProductCard
                                    imageUrl={`${product.folderPath}/1.jpg`}
                                    title={product.name.toUpperCase()}
                                    originalPrice={prices.original}
                                    currentPrice={prices.current}
                                    href={`#${product.id}`}
                                    showDiscount={true}
                                    discountPercent={10}
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
