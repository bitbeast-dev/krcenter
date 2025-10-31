"use client";
import React, { useState, useEffect } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ArrowRight, Menu, X, Globe, ChevronDown, Phone, MapPin, Mail } from "lucide-react";
import "./globals.css";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTranslateOpen, setIsTranslateOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('English');

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'rw', name: 'Kinyarwanda', flag: '🇷🇼' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'sw', name: 'Kiswahili', flag: '🇹🇿' }
  ];



  useEffect(() => {
    const addGoogleTranslateScript = () => {
      if (!document.getElementById('google-translate-script')) {
        const script = document.createElement('script');
        script.id = 'google-translate-script';
        script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        document.head.appendChild(script);
      }
    };

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'rw,fr,sw,en',
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
      }, 'google_translate_element');
      
      const mobileElement = document.getElementById('google_translate_element_mobile');
      if (mobileElement) {
        new window.google.translate.TranslateElement({
          pageLanguage: 'en',
          includedLanguages: 'rw,fr,sw,en',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false
        }, 'google_translate_element_mobile');
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.translate-dropdown')) {
        setIsTranslateOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    addGoogleTranslateScript();

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <html lang="en">
       <head>
        <title>Kigali Revision Center</title>
        <meta name="description" content="Empowering students through quality education and personalized learning" />
        <link rel="icon" href="/hola.svg" type="image/svg+xml" sizes="128x128" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bitcount+Single+Ink:wght@100..900&family=Pacifico&display=swap"
          rel="stylesheet"
        />
        <style>{`
          .goog-te-banner-frame { display: none !important; }
          .goog-te-menu-value { color: white !important; }
          body { top: 0 !important; }
          #google_translate_element { display: inline-block; }
          #google_translate_element_mobile { display: inline-block; }
          .goog-te-gadget { font-size: 0; }
          .goog-te-gadget > span > a { display: none; }
          .goog-te-gadget .goog-te-combo { 
            background: rgba(255,255,255,0.1); 
            border: 1px solid rgba(250,204,21,0.3); 
            color: white; 
            padding: 4px 8px; 
            border-radius: 6px;
            font-size: 12px;
          }
        `}</style>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <nav className="bg-transparent backdrop-blur-md sticky top-0 z-50 border-b border-yellow-400/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center">
                <img src="/kigali__.png" alt="Kigali Revision Center" className="w-24 h-12 object-cover"/>
                <h1 className="text-white">Kigali Revision center</h1>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:block">
                <NavigationMenu>
                  <NavigationMenuList className="flex space-x-6">
                    <NavigationMenuItem>
                      <NavigationMenuLink className="text-white hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-colors" href="/">
                        Home
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink className="text-white hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-colors" href="/courses">
                        Services
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink className="text-white hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-colors" href="/gallery">
                        Gallery
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink className="text-white hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-colors" href="/about">
                        About
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>

              {/* Language Selector & CTA Button */}
              <div className="hidden md:flex items-center space-x-4">
                <div className="relative translate-dropdown">
                  <button
                    onClick={() => setIsTranslateOpen(!isTranslateOpen)}
                    className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-yellow-400/30 rounded-lg px-3 py-2 text-white hover:bg-yellow-400/20 transition-all"
                  >
                    <Globe className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm font-medium">Language</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {isTranslateOpen && (
                    <div className="absolute top-full mt-2 right-0 bg-black/90 backdrop-blur-md border border-yellow-400/30 rounded-lg shadow-lg min-w-[180px] z-50">
                      <div className="flex items-center justify-between p-3 border-b border-yellow-400/20">
                        <span className="text-white text-sm font-medium">Select Language</span>
                        <button
                          onClick={() => setIsTranslateOpen(false)}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="p-2 space-y-1">
                        {languages.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => {
                              const combo = document.querySelector('.goog-te-combo') as HTMLSelectElement;
                              if (combo) {
                                combo.value = lang.code;
                                combo.dispatchEvent(new Event('change'));
                              }
                              setCurrentLang(lang.name);
                              setIsTranslateOpen(false);
                            }}
                            className="w-full flex items-center space-x-3 px-3 py-2 text-white hover:bg-yellow-400/20 transition-colors rounded-md"
                          >
                            <span className="text-base">{lang.flag}</span>
                            <span className="text-sm font-medium">{lang.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  <div id="google_translate_element" style={{position: 'absolute', left: '-9999px', opacity: 0}}></div>
                </div>
                <Link href="/courses">
                  <Button className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-bold px-6 py-2 rounded-3xl hover:scale-105 transition-transform">
                    Get Started <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-white hover:text-yellow-400 p-2"
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 backdrop-blur-md rounded-lg mt-2">
                  <Link href="/" className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>
                    Home
                  </Link>
                  <Link href="/courses" className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>
                    Services
                  </Link>
                  <Link href="/gallery" className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>
                    Gallery
                  </Link>
                  <Link href="/about" className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>
                    About
                  </Link>
                  <div className="px-3 py-2 translate-dropdown">
                    <div className="mb-3">
                      <span className="text-white text-sm font-medium flex items-center">
                        <Globe className="w-4 h-4 text-yellow-400 mr-2" />
                        Select Language
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            const combo = document.querySelector('.goog-te-combo') as HTMLSelectElement;
                            if (combo) {
                              combo.value = lang.code;
                              combo.dispatchEvent(new Event('change'));
                            }
                            setCurrentLang(lang.name);
                          }}
                          className="flex items-center space-x-2 bg-white/10 border border-yellow-400/30 rounded-lg px-3 py-2 text-white hover:bg-yellow-400/20 transition-colors"
                        >
                          <span className="text-sm">{lang.flag}</span>
                          <span className="text-xs font-medium">{lang.name}</span>
                        </button>
                      ))}
                    </div>
                    <div id="google_translate_element_mobile" style={{position: 'absolute', left: '-9999px', opacity: 0}}></div>
                  </div>
                  <div className="pt-4">
                    <Link href="/courses" onClick={() => setIsMenuOpen(false)}>
                      <Button className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-bold py-2 rounded-3xl">
                        Get Started <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>
        {children}
        
        {/* Footer */}
        <footer className="bg-transparent backdrop-blur-md border-t border-yellow-400/20 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="space-y-4">
                <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-yellow-400" />
                  <span>+250 788 429 419</span>
                </div>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-yellow-400 mt-1" />
                  <span>Kigali / Kicukiro / Kigarama / Rebero kk 794 st</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-yellow-400" />
                  <span>kigalirevisioncenter@gmail.com</span>
                </div>
              </div>
              
              {/* Quick Links */}
              <div className="space-y-4">
                <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <Link href="/" className="block text-gray-300 hover:text-yellow-400 transition-colors">Home</Link>
                  <Link href="/courses" className="block text-gray-300 hover:text-yellow-400 transition-colors">Services</Link>
                  <Link href="/gallery" className="block text-gray-300 hover:text-yellow-400 transition-colors">Gallery</Link>
                  <Link href="/about" className="block text-gray-300 hover:text-yellow-400 transition-colors">About</Link>
                </div>
              </div>
              
              {/* About */}
              <div className="space-y-4">
                <h3 className="text-white font-bold text-lg mb-4">Kigali Revision Center</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Empowering students through quality education and personalized learning experiences. 
                  Your success is our mission.
                </p>
              </div>
            </div>
            
            {/* Copyright */}
            <div className="border-t border-yellow-400/20 mt-8 pt-6 text-center">
              <p className="text-gray-400 text-sm">
                © 2025 Kigali Revision Center. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}