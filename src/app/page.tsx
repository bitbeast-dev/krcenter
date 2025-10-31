"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Award, Clock, Globe, Star, GraduationCap, Music, Palette, Computer, Languages, ChevronLeft, ChevronRight, Filter, Target, Heart } from "lucide-react";


import Link from "next/link";

const HomePage = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");

  const heroImages = [
    "/image.jpeg",
    "/image (1).jpeg",
    "/image (2).jpeg",
    "/image (3).jpeg",
    "/image (4).jpeg"
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    const featureInterval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 6);
    }, 3000);
    return () => {
      clearInterval(slideInterval);
      clearInterval(featureInterval);
    };
  }, [heroImages.length]);

  const features = [
    { icon: GraduationCap, title: "Expert Tutoring", description: "Qualified teachers for all subjects" },
    { icon: Users, title: "1-on-1 Support", description: "Personalized learning approach" },
    { icon: Award, title: "Exam Preparation", description: "TOEFL, IELTS, DELF coaching" },
    { icon: Clock, title: "Flexible Schedule", description: "Learn at your own pace" },
    { icon: Globe, title: "Online & Offline", description: "Hybrid learning options" },
    { icon: Star, title: "Student Guidance", description: "Counseling and career support" }
  ];

  const services = [
    {
      title: "Home Schooling Assistance",
      description: "Comprehensive curriculum support for home-educated students with structured learning plans.",
      benefits: ["Structured curriculum", "Progress tracking", "Parent guidance", "Flexible pacing"]
    },
    {
      title: "Primary & Secondary Tutoring",
      description: "Expert tutoring for students from elementary through high school in all core subjects.",
      benefits: ["Math & Science", "Language Arts", "Social Studies", "Test preparation"]
    },
    {
      title: "Independent Exam Coaching",
      description: "Specialized coaching for students preparing for independent examinations and assessments.",
      benefits: ["Exam strategies", "Practice tests", "Time management", "Stress reduction"]
    },
    {
      title: "Student Counseling & Guidance",
      description: "Professional counseling services to support academic and personal development.",
      benefits: ["Academic planning", "Career guidance", "Study skills", "Confidence building"]
    },
    {
      title: "Creative Skills Classes",
      description: "Develop artistic and technical skills through hands-on creative learning experiences.",
      benefits: ["Art & Design", "Digital Computing", "Music (Piano)", "Creative Writing"]
    },
    {
      title: "Language Proficiency Tests",
      description: "Comprehensive preparation for international language certification examinations.",
      benefits: ["TOEFL preparation", "IELTS coaching", "DELF training", "DALF preparation"]
    }
  ];

  const testimonials = [
    { name: "Sarah Johnson", text: "Kigali Revision Center's tutoring program helped my daughter improve her math grades from C to A+ in just 3 months!", avatar: "/1.png", role: "Parent", company: "Primary Student" },
    { name: "Michael Chen", text: "The TOEFL preparation course was excellent. I achieved my target score and got accepted to my dream university!", avatar: "/2.png", role: "Student", company: "University Applicant" },
    { name: "Emma Rodriguez", text: "Piano lessons with Kigali Revision Center were amazing. My son now plays beautifully and loves music more than ever!", avatar: "/3.png", role: "Parent", company: "Music Student" },
    { name: "David Kim", text: "The counseling sessions helped me choose the right career path. I'm now confident about my future!", avatar: "/4.png", role: "Student", company: "High School" },
    { name: "Lisa Thompson", text: "Home schooling support made our educational journey smooth and effective. Highly recommended!", avatar: "/5.png", role: "Parent", company: "Home School" },
    { name: "James Wilson", text: "Art classes unleashed my creativity. I'm now pursuing graphic design thanks to Kigali Revision Center!", avatar: "/6.png", role: "Student", company: "Creative Arts" }
  ];

  const faqs = [
    { q: "What age groups do you serve?", a: "We provide educational services for students from primary school (ages 5-11) through secondary school (ages 12-18), as well as adult learners preparing for language proficiency tests." },
    { q: "Do you offer online or in-person classes?", a: "We offer both online and in-person classes to accommodate different learning preferences and schedules. Our hybrid approach ensures flexibility for all families." },
    { q: "How qualified are your tutors?", a: "All our tutors are qualified educators with relevant degrees and teaching experience. Many hold specialized certifications in their subject areas." },
    { q: "What is your pricing structure?", a: "Our pricing varies by service type and duration. We offer competitive rates starting from $25/hour for tutoring, with package deals available for multiple sessions." },
    { q: "Can you help with exam preparation?", a: "Yes! We specialize in preparing students for various exams including TOEFL, IELTS, DELF, DALF, and standard school examinations." },
    { q: "Do you provide progress reports?", a: "Absolutely! We provide regular progress reports to parents and students, tracking improvement and identifying areas that need additional focus." },
    { q: "How do I schedule a consultation?", a: "You can schedule a free consultation by clicking the 'Schedule Consultation' button or contacting us directly. We'll discuss your specific needs and recommend the best services." },
    { q: "What creative skills do you teach?", a: "We offer classes in art & design, digital computing, music (including piano), and creative writing. These classes help develop both technical and artistic abilities." }
  ];

  const partners = [
    { name: "Local Schools Network", category: "Educational Partnership", image: "/1.png", students: "500+", programs: "10+" },
    { name: "Music Academy Alliance", category: "Creative Arts", image: "/2.png", students: "200+", programs: "5+" },
    { name: "Language Testing Centers", category: "Test Preparation", image: "/3.png", students: "300+", programs: "8+" },
    { name: "Home School Association", category: "Home Education", image: "/4.png", students: "150+", programs: "6+" },
    { name: "Community Learning Centers", category: "Community Education", image: "/5.png", students: "400+", programs: "12+" },
    { name: "Digital Skills Institute", category: "Technology Education", image: "/6.png", students: "250+", programs: "7+" }
  ];

  return (
    <div className="min-h-screen bg-transparent flex flex-col overflow-x-hidden py-2 px-2 sm:px-4 lg:px-8">
      {/* Hero Section with Image Slider */}
      <div className="relative w-full mb-8">
        <div className="relative h-screen w-screen overflow-hidden">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                activeSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={image}
                alt={`Education slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          ))}
          
          {/* Navigation Arrows */}
          <button
            onClick={() => setActiveSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={() => setActiveSlide((prev) => (prev + 1) % heroImages.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
          
          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeSlide === index ? 'bg-yellow-400' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
          
          {/* Hero Text Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-4 animate-in slide-in-from-top duration-1500 delay-500 ease-out">
              Kigali Revision Center
            </h1>
            <p className="text-white pacifico-regular text-xl sm:text-2xl md:text-3xl lg:text-4xl animate-in slide-in-from-right duration-1200 delay-1000">
              Empowering Students Through{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Quality Education
              </span>{" "}
              & Personalized Learning
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-start w-full max-w-7xl mx-auto">
        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mb-8 md:mb-12 w-full max-w-6xl">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index}
                className={`bg-white/10 backdrop-blur-sm border-yellow-400/30 h-32 transition-all duration-500 hover:scale-105 ${
                  activeFeature === index ? 'ring-2 ring-yellow-400 bg-yellow-400/20' : ''
                }`}
              >
                <CardContent className="p-4 text-center h-full flex flex-col justify-center">
                  <IconComponent className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <CardTitle className="text-xs text-white font-medium mb-1">
                    {feature.title}
                  </CardTitle>
                  <p className="text-xs text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mb-12 md:mb-16 w-full max-w-2xl">
          <Button className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-bold px-8 py-4 text-lg rounded-3xl hover:scale-105 transition-transform duration-300">
            Start Learning Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button className="bg-transparent text-white border-2 border-yellow-400 font-bold px-8 py-4 text-lg rounded-3xl hover:bg-yellow-400/20 transition-all duration-300">
            Schedule Consultation
          </Button>
        </div>
      </div>
     {/* Gallery Page */}
     <div className="w-full max-w-7xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          Our Work <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Gallery</span>
        </h2>
        <p className="text-xl text-gray-300 text-center mb-8 max-w-3xl mx-auto">
          Showcasing student achievements and success stories across our educational programs
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { id: 1, title: "Math Competition Winners", category: "Tutoring", image: "/image.jpeg", description: "Our students excelling in regional math competitions" },
            { id: 2, title: "Student Art Exhibition", category: "Creative Arts", image: "/image (1).jpeg", description: "Beautiful artwork created by our art students" },
            { id: 3, title: "TOEFL Success Stories", category: "Language Learning", image: "/image (2).jpeg", description: "Students celebrating their TOEFL achievements" },
            { id: 4, title: "Home School Achievement", category: "Tutoring", image: "/image (3).jpeg", description: "Successful home schooling program graduates" },
            { id: 5, title: "Science Fair Projects", category: "Science Projects", image: "/image (4).jpeg", description: "Innovative science projects by our students" },
            { id: 6, title: "Piano Recital Performance", category: "Music", image: "/image.jpeg", description: "Students performing at annual piano recital" }
          ].map((item) => (
            <Card key={item.id} className="bg-white/10 backdrop-blur-sm border-yellow-400/30 hover:scale-105 transition-transform duration-300 overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Users className="w-12 h-12 text-yellow-400" />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-yellow-500/80 text-black text-xs rounded-full font-medium">{item.category}</span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                <Link href={`/gallery/${item.id}`}>
                  <Button className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-bold hover:from-yellow-700 hover:to-yellow-600">
                    View Details <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/gallery">
            <Button className="bg-transparent text-white border-2 border-yellow-400 font-bold px-8 py-3 text-lg rounded-3xl hover:bg-yellow-400/20 transition-all">
              View Full Gallery
            </Button>
          </Link>
        </div>
      </div>

<div className="w-full max-w-7xl mx-auto mb-16">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Why Choose <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Kigali Revision Center</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-white font-semibold mb-2">Qualified Teachers</h3>
              <p className="text-gray-300 text-sm">Experienced educators with proven track records</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-white font-semibold mb-2">Small Class Sizes</h3>
              <p className="text-gray-300 text-sm">Personalized attention for every student</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-white font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-gray-300 text-sm">Learn at times that work for your family</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-white font-semibold mb-2">Proven Results</h3>
              <p className="text-gray-300 text-sm">High success rates in exams and assessments</p>
            </div>
          </div>
        </div>
      </div>

      {/* Educational Services Section */}
      <div className="w-full max-w-7xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
          Our <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Educational Services</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-yellow-400/30 hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold text-lg">{index + 1}</span>
                </div>
                <CardTitle className="text-white text-lg text-center mb-2">{service.title}</CardTitle>
                <CardDescription className="text-gray-300 text-sm text-center">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="bg-yellow-400/20 rounded-lg p-2 text-center">
                      <span className="text-yellow-300 text-xs font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
                <Button size="sm" className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-black">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      

      {/* Detailed Services Section */}
      <div className="w-full max-w-7xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          Detailed <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Service Offerings</span>
        </h2>
        <p className="text-xl text-gray-300 text-center mb-8 max-w-3xl mx-auto">
          Comprehensive tutoring and educational support services for students of all ages with qualified instructors.
        </p>
        
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-yellow-400" />
            <span className="text-white font-medium">Category:</span>
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-white/10 text-white border border-yellow-400/30 rounded-lg px-3 py-1"
            >
              {["All", "Tutoring", "Creative Skills", "Language Tests", "Exam Prep", "Counseling"].map(category => (
                <option key={category} value={category} className="bg-gray-800">
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white font-medium">Level:</span>
            <select 
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="bg-white/10 text-white border border-yellow-400/30 rounded-lg px-3 py-1"
            >
              {["All", "Primary", "Secondary", "Advanced"].map(level => (
                <option key={level} value={level} className="bg-gray-800">
                  {level}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Detailed Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { id: 1, title: "Primary School Mathematics", description: "Comprehensive math tutoring for elementary students covering arithmetic, geometry, and problem-solving", category: "Tutoring", level: "Primary", students: 247, rating: 4.9, price: "$25/hour", instructor: "Sarah Mitchell", sessions: "Weekly", subjects: ["Arithmetic", "Geometry", "Word Problems", "Basic Algebra"], icon: GraduationCap },
            { id: 2, title: "TOEFL Preparation Course", description: "Intensive TOEFL preparation with practice tests, speaking sessions, and writing workshops", category: "Language Tests", level: "Advanced", students: 193, rating: 4.8, price: "$40/hour", instructor: "Dr. Michael Chen", sessions: "3x per week", subjects: ["Reading", "Listening", "Speaking", "Writing"], icon: Languages },
            { id: 3, title: "Piano Lessons for Beginners", description: "Learn piano fundamentals, music theory, and play your favorite songs", category: "Creative Skills", level: "Primary", students: 156, rating: 4.7, price: "$30/hour", instructor: "Emma Rodriguez", sessions: "Weekly", subjects: ["Music Theory", "Technique", "Repertoire", "Performance"], icon: Music },
            { id: 4, title: "High School Science Tutoring", description: "Physics, Chemistry, and Biology tutoring for secondary school students", category: "Tutoring", level: "Secondary", students: 98, rating: 4.9, price: "$35/hour", instructor: "David Kim", sessions: "2x per week", subjects: ["Physics", "Chemistry", "Biology", "Lab Work"], icon: Award },
            { id: 5, title: "Art & Design Workshop", description: "Develop artistic skills through drawing, painting, and digital design projects", category: "Creative Skills", level: "All", students: 76, rating: 4.8, price: "$28/hour", instructor: "Lisa Wang", sessions: "Weekly", subjects: ["Drawing", "Painting", "Digital Art", "Portfolio"], icon: Palette },
            { id: 6, title: "Student Academic Counseling", description: "Academic planning, study skills, and career guidance for students", category: "Counseling", level: "All", students: 142, rating: 4.6, price: "$45/hour", instructor: "James Wilson", sessions: "Bi-weekly", subjects: ["Study Skills", "Goal Setting", "Career Planning", "Motivation"], icon: Users }
          ].filter(service => {
            const categoryMatch = selectedCategory === "All" || service.category === selectedCategory;
            const levelMatch = selectedLevel === "All" || service.level === selectedLevel || service.level === "All";
            return categoryMatch && levelMatch;
          }).map((service) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.id} className="bg-white/10 backdrop-blur-sm border-yellow-400/30 hover:scale-105 transition-transform duration-300 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-yellow-600/20 to-yellow-500/20 flex items-center justify-center">
                  <IconComponent className="w-16 h-16 text-yellow-400" />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full">
                      {service.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white text-sm">{service.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-white text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-gray-300 text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-300">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{service.sessions}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{service.students} students</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {service.subjects.map((subject, index) => (
                      <div key={index} className="bg-yellow-400/20 rounded-lg p-2 text-center">
                        <span className="text-yellow-300 text-xs font-medium">{subject}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-yellow-400/20 pt-4">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-300 text-sm">Instructor: {service.instructor}</span>
                      <span className="text-xl font-bold text-green-400">{service.price}</span>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600 text-black">
                      Book Session
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="w-full max-w-7xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
          Student <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Success Stories</span>
        </h2>
        <div className="overflow-hidden">
          <div className="flex animate-scroll space-x-6">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-yellow-400/30 min-w-[350px] min-h-[280px] flex-shrink-0">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{testimonial.name}</h3>
                      <p className="text-yellow-300 text-sm">{testimonial.role}</p>
                      <p className="text-gray-400 text-xs">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">&ldquo;{testimonial.text}&rdquo;</p>
                  <div className="flex mt-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-full max-w-7xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
          Frequently Asked <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Questions</span>
        </h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`} className="bg-white/10 backdrop-blur-sm border-yellow-400/30 px-6">
              <AccordionTrigger className="text-white font-semibold text-lg hover:text-yellow-300 transition-colors">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 leading-relaxed pb-6">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Gallery Section */}
      
      {/* Partners Section */}
      <div className="w-full max-w-7xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          Our Educational <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Partners</span>
        </h2>
        <p className="text-gray-300 text-center mb-8 text-lg">
          Collaborating with educational institutions to provide comprehensive learning opportunities
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {partners.map((partner, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-yellow-400/30 hover:border-yellow-400 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 flex items-center justify-center">
                  <GraduationCap className="w-12 h-12 text-yellow-400" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">{partner.name}</h3>
                <p className="text-yellow-300 text-sm mb-3">{partner.category}</p>
                <div className="flex justify-between text-sm text-gray-300 mb-4">
                  <span>{partner.students} students</span>
                  <span>{partner.programs} programs</span>
                </div>
                <Button className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-bold hover:from-yellow-700 hover:to-yellow-600">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="bg-white/5 backdrop-blur-sm border-yellow-400/30">
          <CardContent className="p-8 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Partner with Kigali Revision Center</h3>
            <p className="text-gray-300 mb-6 text-lg">
              Join our network of educational partners and help us provide quality education to more students
            </p>
            <Button className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-bold px-8 py-3 text-lg hover:scale-105 transition-transform">
              Become a Partner
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* About Section */}
      <div className="w-full max-w-7xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-6">
          About <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Kigali Revision Center</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 text-center mb-12 max-w-4xl mx-auto">
          Empowering students through quality education and personalized learning experiences since 2020.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { number: "500+", label: "Students Taught", icon: Users },
            { number: "95%", label: "Success Rate", icon: Target },
            { number: "15+", label: "Partner Schools", icon: Award },
            { number: "25+", label: "Expert Tutors", icon: Heart }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-yellow-400/30 text-center">
                <CardContent className="p-4">
                  <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-yellow-400 mx-auto mb-2" />
                  <div className="text-xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-white/10 backdrop-blur-sm border-yellow-400/30">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl text-white flex items-center gap-2">
                <Target className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                To provide accessible, high-quality education that empowers students to achieve their academic goals and unlock their full potential.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-yellow-400/30">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl text-white flex items-center gap-2">
                <Award className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                To be the leading educational academy that transforms lives through personalized learning and innovative teaching methods.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HomePage;