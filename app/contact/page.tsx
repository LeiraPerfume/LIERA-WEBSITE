"use client";

import { MiniNavbar } from "@/components/ui/mini-navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Building2, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
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
                    Get in Touch
                  </motion.p>
                  
                  {/* Main Heading */}
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-[1.1] tracking-tight"
                  >
                    <span className="font-serif italic">Contact</span>{" "}
                    <span className="font-semibold text-pink-600">Us</span>
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
                    We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                  </motion.p>
                </motion.div>
              </section>

              {/* Forms Section */}
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
                  {/* Contact Form - Left */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full space-y-8 rounded-2xl border border-gray-100 bg-white/70 shadow-sm hover:shadow-xl hover:border-pink-200 transition-all duration-300 p-8"
                  >
                    <div className="space-y-1">
                      <h2 className="text-xs md:text-sm font-medium text-gray-500 uppercase tracking-[0.2em]">
                        Contact Us
                      </h2>
                      <h3 className="text-2xl md:text-3xl font-semibold text-pink-600">
                        Send us a Message
                      </h3>
                    </div>
                    
                    <form className="space-y-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700">
                          Name <span className="text-pink-600">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                          placeholder="Your name"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                          Email <span className="text-pink-600">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-gray-700">
                          Message <span className="text-pink-600">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={6}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none"
                          placeholder="Tell us how we can help you..."
                        />
                      </div>
                      
                      <div className="pt-2">
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full bg-pink-600 text-white hover:bg-pink-700 rounded-full px-8 py-5 text-sm font-semibold tracking-wide uppercase shadow-md hover:shadow-lg transition-all duration-300"
                        >
                          Send
                        </Button>
                      </div>
                    </form>
                  </motion.div>

                  {/* Product Review Form - Right */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full space-y-8 rounded-2xl border border-gray-100 bg-white/70 shadow-sm hover:shadow-xl hover:border-pink-200 transition-all duration-300 p-8"
                  >
                    <div className="space-y-1">
                      <h2 className="text-xs md:text-sm font-medium text-gray-500 uppercase tracking-[0.2em]">
                        Product Review
                      </h2>
                      <h3 className="text-2xl md:text-3xl font-semibold text-pink-600">
                        Share Your Leira Experience With Us
                      </h3>
                    </div>
                    
                    <form className="space-y-6">
                      <div className="space-y-2">
                        <label htmlFor="review-name" className="text-sm font-medium text-gray-700">
                          Name <span className="text-pink-600">*</span>
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                          <input
                            type="text"
                            id="first-name"
                            name="first-name"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                            placeholder="First"
                          />
                          <input
                            type="text"
                            id="last-name"
                            name="last-name"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                            placeholder="Last"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="review-email" className="text-sm font-medium text-gray-700">
                          Email <span className="text-pink-600">*</span>
                        </label>
                        <input
                          type="email"
                          id="review-email"
                          name="review-email"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="review-text" className="text-sm font-medium text-gray-700">
                          Review <span className="text-pink-600">*</span>
                        </label>
                        <textarea
                          id="review-text"
                          name="review-text"
                          rows={6}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none"
                          placeholder="Share your experience with Leira..."
                        />
                      </div>
                      
                      <div className="pt-2">
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full bg-pink-600 text-white hover:bg-pink-700 rounded-full px-8 py-5 text-sm font-semibold tracking-wide uppercase shadow-md hover:shadow-lg transition-all duration-300"
                        >
                          Send
                        </Button>
                      </div>
                    </form>
                  </motion.div>
                </div>
              </section>

              {/* Contact Information Section - Below Forms */}
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-12"
                >
                  <div className="text-center">
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-xs md:text-sm text-gray-400 font-medium tracking-[0.2em] uppercase mb-4"
                    >
                      Get in Touch
                    </motion.p>
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="text-4xl md:text-5xl font-light text-gray-900 mb-6"
                    >
                      <span className="font-semibold text-pink-600">Contact</span> Information
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-sm md:text-base text-gray-500 leading-relaxed max-w-2xl mx-auto font-light"
                    >
                      Reach out to us through any of these channels. We're here to help and answer any questions you may have.
                    </motion.p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Company Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="group relative bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-xl hover:border-pink-200 transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="flex flex-col items-start space-y-4">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center shadow-lg shadow-pink-500/20 group-hover:scale-110 transition-transform duration-300">
                          <Building2 className="h-7 w-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">Company</h3>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            AOMAN SERVICES PRIVATE LIMITED
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Address Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="group relative bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-xl hover:border-pink-200 transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="flex flex-col items-start space-y-4">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center shadow-lg shadow-pink-500/20 group-hover:scale-110 transition-transform duration-300">
                          <MapPin className="h-7 w-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            Office No. 48, 7th Floor,<br />
                            ETT Tower 2,<br />
                            Sector -132, Noida, UP - 201304
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Phone Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="group relative bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-xl hover:border-pink-200 transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="flex flex-col items-start space-y-4">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center shadow-lg shadow-pink-500/20 group-hover:scale-110 transition-transform duration-300">
                          <Phone className="h-7 w-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                          <a
                            href="tel:+919211227024"
                            className="text-pink-600 hover:text-pink-700 text-sm font-medium transition-colors inline-block"
                          >
                            9211227024
                          </a>
                        </div>
                      </div>
                    </motion.div>

                    {/* Email Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="group relative bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-xl hover:border-pink-200 transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="flex flex-col items-start space-y-4">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center shadow-lg shadow-pink-500/20 group-hover:scale-110 transition-transform duration-300">
                          <Mail className="h-7 w-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                          <a
                            href="mailto:info@leira.com"
                            className="text-pink-600 hover:text-pink-700 text-sm font-medium transition-colors inline-block break-all"
                          >
                            info@leira.com
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </section>
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}

