"use client";
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Users, Award, Star, Filter, GraduationCap, Music, Palette, Computer, Languages, Globe } from "lucide-react";

const CoursesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");

  const categories = ["All", "Tutoring", "Creative Skills", "Language Tests", "Exam Prep", "Counseling"];
  const levels = ["All", "Primary", "Secondary", "Advanced"];

  const services = [
    {
      id: 1,
      title: "Primary School Mathematics",
      description: "Comprehensive math tutoring for elementary students covering arithmetic, geometry, and problem-solving",
      category: "Tutoring",
      level: "Primary",
      duration: "Ongoing",
      students: 247,
      rating: 4.9,
      price: "$25/hour",
      instructor: "Sarah Mitchell",
      sessions: "Weekly",
      subjects: ["Arithmetic", "Geometry", "Word Problems", "Basic Algebra"],
      icon: GraduationCap
    },
    {
      id: 2,
      title: "TOEFL Preparation Course",
      description: "Intensive TOEFL preparation with practice tests, speaking sessions, and writing workshops",
      category: "Language Tests",
      level: "Advanced",
      duration: "8 weeks",
      students: 193,
      rating: 4.8,
      price: "$40/hour",
      instructor: "Dr. Michael Chen",
      sessions: "3x per week",
      subjects: ["Reading", "Listening", "Speaking", "Writing"],
      icon: Languages
    },
    {
      id: 3,
      title: "Piano Lessons for Beginners",
      description: "Learn piano fundamentals, music theory, and play your favorite songs",
      category: "Creative Skills",
      level: "Primary",
      duration: "12 weeks",
      students: 156,
      rating: 4.7,
      price: "$30/hour",
      instructor: "Emma Rodriguez",
      sessions: "Weekly",
      subjects: ["Music Theory", "Technique", "Repertoire", "Performance"],
      icon: Music
    },
    {
      id: 4,
      title: "High School Science Tutoring",
      description: "Physics, Chemistry, and Biology tutoring for secondary school students",
      category: "Tutoring",
      level: "Secondary",
      duration: "Ongoing",
      students: 98,
      rating: 4.9,
      price: "$35/hour",
      instructor: "David Kim",
      sessions: "2x per week",
      subjects: ["Physics", "Chemistry", "Biology", "Lab Work"],
      icon: Award
    },
    {
      id: 5,
      title: "Art & Design Workshop",
      description: "Develop artistic skills through drawing, painting, and digital design projects",
      category: "Creative Skills",
      level: "All",
      duration: "10 weeks",
      students: 76,
      rating: 4.8,
      price: "$28/hour",
      instructor: "Lisa Wang",
      sessions: "Weekly",
      subjects: ["Drawing", "Painting", "Digital Art", "Portfolio"],
      icon: Palette
    },
    {
      id: 6,
      title: "Student Academic Counseling",
      description: "Academic planning, study skills, and career guidance for students",
      category: "Counseling",
      level: "All",
      duration: "Ongoing",
      students: 142,
      rating: 4.6,
      price: "$45/hour",
      instructor: "James Wilson",
      sessions: "Bi-weekly",
      subjects: ["Study Skills", "Goal Setting", "Career Planning", "Motivation"],
      icon: Users
    },
    {
      id: 7,
      title: "IELTS Preparation",
      description: "Complete IELTS preparation with mock tests and personalized feedback",
      category: "Language Tests",
      level: "Advanced",
      duration: "6 weeks",
      students: 89,
      rating: 4.9,
      price: "$38/hour",
      instructor: "Anna Thompson",
      sessions: "3x per week",
      subjects: ["Academic Writing", "Speaking", "Listening", "Reading"],
      icon: Globe
    },
    {
      id: 8,
      title: "Computer Programming for Kids",
      description: "Introduction to programming concepts using Scratch and Python",
      category: "Creative Skills",
      level: "Primary",
      duration: "8 weeks",
      students: 134,
      rating: 4.7,
      price: "$32/hour",
      instructor: "Mark Johnson",
      sessions: "Weekly",
      subjects: ["Scratch", "Python Basics", "Logic", "Projects"],
      icon: Computer
    }
  ];

  const filteredServices = services.filter(service => {
    const categoryMatch = selectedCategory === "All" || service.category === selectedCategory;
    const levelMatch = selectedLevel === "All" || service.level === selectedLevel || service.level === "All";
    return categoryMatch && levelMatch;
  });

  return (
    <div className="min-h-screen bg-transparent py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-4">
            Educational Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive tutoring and educational support services for students of all ages. 
            Personalized learning with qualified instructors.
          </p>
        </div>

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
              {categories.map(category => (
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
              {levels.map(level => (
                <option key={level} value={level} className="bg-gray-800">
                  {level}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
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

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of students who have improved their academic performance with our personalized tutoring services. 
            Schedule a consultation to discuss your learning goals.
          </p>
          <Button className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-bold px-8 py-4 text-lg rounded-3xl hover:scale-105 transition-transform">
            Schedule Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;