"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, ArrowRight, Filter } from "lucide-react";
import Link from "next/link";

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Tutoring", "Creative Arts", "Language Learning", "Science Projects", "Music"];

  const galleryItems = [
    {
      id: 1,
      title: "Math Competition Winners",
      category: "Tutoring",
      image: "/image.jpeg",
      description: "Our students excelling in regional math competitions",
      details: "Students achieved top 3 positions in regional mathematics olympiad after intensive tutoring sessions.",
      relatedActivities: ["Advanced Math Tutoring", "Competition Prep", "Problem Solving Workshops"]
    },
    {
      id: 2,
      title: "Student Art Exhibition",
      category: "Creative Arts",
      image: "/image (1).jpeg",
      description: "Beautiful artwork created by our art students",
      details: "Annual art exhibition showcasing student creativity in painting, drawing, and digital art.",
      relatedActivities: ["Art Classes", "Digital Design", "Portfolio Development"]
    },
    {
      id: 3,
      title: "TOEFL Success Stories",
      category: "Language Learning",
      image: "/image (2).jpeg",
      description: "Students celebrating their TOEFL achievements",
      details: "95% of our TOEFL students achieved their target scores for university admission.",
      relatedActivities: ["TOEFL Preparation", "IELTS Coaching", "Speaking Practice"]
    },
    {
      id: 4,
      title: "Home School Achievement",
      category: "Tutoring",
      image: "/image (3).jpeg",
      description: "Successful home schooling program graduates",
      details: "Home schooled students showing exceptional academic progress with personalized curriculum.",
      relatedActivities: ["Home School Support", "Curriculum Planning", "Progress Tracking"]
    },
    {
      id: 5,
      title: "Science Fair Projects",
      category: "Science Projects",
      image: "/image (4).jpeg",
      description: "Innovative science projects by our students",
      details: "Students presenting award-winning science fair projects with hands-on experiments.",
      relatedActivities: ["Science Tutoring", "Lab Experiments", "Research Projects"]
    },
    {
      id: 6,
      title: "Piano Recital Performance",
      category: "Music",
      image: "/image.jpeg",
      description: "Students performing at annual piano recital",
      details: "Young musicians showcasing their piano skills after months of dedicated practice.",
      relatedActivities: ["Piano Lessons", "Music Theory", "Performance Training"]
    }
  ];

  const filteredItems = galleryItems.filter(item => 
    selectedCategory === "All" || item.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-transparent py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-4">
            Our Work Gallery
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing the achievements and success stories of our students across various educational programs
          </p>
        </div>

        {/* Filter */}
        <div className="flex justify-center mb-8">
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
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card key={item.id} className="bg-white/10 backdrop-blur-sm border-yellow-400/30 hover:scale-105 transition-transform duration-300 overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Eye className="w-12 h-12 text-yellow-400" />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-yellow-500/80 text-black text-xs rounded-full font-medium">
                    {item.category}
                  </span>
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

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Want to Be Featured in Our Gallery?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our programs and showcase your achievements. Every student success story matters to us.
          </p>
          <Button className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-bold px-8 py-4 text-lg rounded-3xl hover:scale-105 transition-transform">
            Enroll Today
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;