"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Shield, Calendar, AlertCircle, CheckCircle, RefreshCw, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

type FAQItem = {
    id: string;
    icon: React.ReactNode;
    question: string;
    answer: string;
}

export default function FAQs() {
    const faqItems: FAQItem[] = [
        {
            id: 'item-1',
            icon: <Shield className="w-4 h-4" />,
            question: 'Is this a substitute for hygiene?',
            answer: 'No. Leira is a finishing touch, to complement—not replace—your daily cleansing.',
        },
        {
            id: 'item-2',
            icon: <Calendar className="w-4 h-4" />,
            question: 'Can I use it every day?',
            answer: 'Yes. Begin with a patch test; once you\'re comfortable, enjoy daily as part of your self-care ritual.',
        },
        {
            id: 'item-3',
            icon: <AlertCircle className="w-4 h-4" />,
            question: 'What if my skin is sensitive?',
            answer: 'Apply sparingly on less delicate areas (such as the hip line). Avoid freshly shaved skin; allow at least 24 hours before use.',
        },
        {
            id: 'item-4',
            icon: <CheckCircle className="w-4 h-4" />,
            question: 'Is Leira safe for daily use?',
            answer: 'Yes. Leira is designed for gentle, everyday use. Start with a small amount and continue daily once your skin feels comfortable.',
        },
        {
            id: 'item-5',
            icon: <RefreshCw className="w-4 h-4" />,
            question: 'Is this a replacement for intimate hygiene products?',
            answer: 'No. Leira is a finishing touch meant to complement your regular cleansing routine, not replace it.',
        },
        {
            id: 'item-6',
            icon: <Sparkles className="w-4 h-4" />,
            question: 'Does it help with odor control?',
            answer: 'Yes. By keeping the area fresh and balanced, Leira may help reduce unwanted odor when used as part of your daily self-care ritual.',
        },
    ];

    return (
        <section className="py-24 md:py-32 px-6 relative z-10 overflow-hidden" style={{ backgroundColor: "#FAF9F6" }}>
            {/* Animated Background Gradient */}
            <motion.div 
                className="absolute inset-0 opacity-20"
                style={{
                    background: "radial-gradient(circle at 30% 50%, rgba(255, 20, 147, 0.08) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(255, 165, 0, 0.08) 0%, transparent 50%)",
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

            <div className="mx-auto max-w-5xl relative z-10">
                <div className="flex flex-col gap-10 md:flex-row md:gap-16">
                    <motion.div 
                        className="md:w-1/3"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="sticky top-20">
                            <div className="flex justify-center mb-4 md:justify-start">
                                <div className="border border-pink-200 py-1 px-4 rounded-lg text-pink-600 text-xs uppercase tracking-wider font-semibold bg-white/50 backdrop-blur-sm">
                                    FAQ
                                </div>
                            </div>
                            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold text-pink-600 text-center md:text-left">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-gray-600 mt-4 text-center md:text-left">
                                Can't find what you're looking for? Contact our{' '}
                                <Link
                                    href="#"
                                    className="text-pink-600 font-medium hover:underline">
                                    customer support team
                                </Link>
                            </p>
                        </div>
                    </motion.div>
                    <motion.div 
                        className="md:w-2/3"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full space-y-3">
                            {faqItems.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <AccordionItem
                                        value={item.id}
                                        className="bg-white/80 backdrop-blur-sm shadow-md rounded-lg border border-gray-200/80 px-4 last:border-b hover:shadow-lg hover:border-pink-200 transition-all duration-300">
                                        <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
                                            <div className="flex items-center gap-3">
                                                <div className="flex size-6 items-center justify-center text-pink-600">
                                                    {item.icon}
                                                </div>
                                                <span className="text-base font-semibold text-gray-900">{item.question}</span>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="pb-5">
                                            <div className="px-9">
                                                <p className="text-base text-gray-600 leading-relaxed">{item.answer}</p>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </motion.div>
                            ))}
                        </Accordion>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

