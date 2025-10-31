"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Users, Award, BookOpen } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const GalleryDetailPage = () => {
  const params = useParams();
  const id = params.id as string;

  const galleryItems = [
    {
      id: 1,
      title: "Math Competition Winners",
      category: "Tutoring",
      image: "/image.jpeg",
      description: "Our students excelling in regional math competitions",
      details: "Students achieved top 3 positions in regional mathematics olympiad after intensive tutoring sessions. The competition involved 200+ participants from across the region.",
      relatedActivities: ["Advanced Math Tutoring", "Competition Prep", "Problem Solving Workshops"],
      date: "March 2024",
      participants: "15 students",
      achievements: ["1st Place - Sarah Johnson", "2nd Place - Michael Chen", "3rd Place - Emma Rodriguez"],
      instructor: "Dr. Patricia Williams"
    },
    {
      id: 2,
      title: "Student Art Exhibition",
      category: "Creative Arts",
      image: "/image (1).jpeg",
      description: "Beautiful artwork created by our art students",
      details: "Annual art exhibition showcasing student creativity in painting, drawing, and digital art. Over 50 pieces were displayed with community attendance of 300+ visitors.",
      relatedActivities: ["Art Classes", "Digital Design", "Portfolio Development"],
      date: "February 2024",
      participants: "25 students",
      achievements: ["Best in Show - Lisa Thompson", "People's Choice - David Kim", "Innovation Award - James Wilson"],
      instructor: "Maria Santos"
    },
    {
      id: 3,
      title: "TOEFL Success Stories",
      category: "Language Learning",
      image: "/image (2).jpeg",
      description: "Students celebrating their TOEFL achievements",
      details: "95% of our TOEFL students achieved their target scores for university admission. Average score improvement of 25 points after our 8-week intensive program.",
      relatedActivities: ["TOEFL Preparation", "IELTS Coaching", "Speaking Practice"],
      date: "January 2024",
      participants: "20 students",
      achievements: ["Average Score: 105/120", "100% Pass Rate", "University Admissions: 18/20"],
      instructor: "Dr. Robert Chen"
    },
    {
      id: 4,
      title: "Home School Achievement",
      category: "Tutoring",
      image: "/image (3).jpeg",
      description: "Successful home schooling program graduates",
      details: "Home schooled students showing exceptional academic progress with personalized curriculum. All students advanced 1.5 grade levels in core subjects.",
      relatedActivities: ["Home School Support", "Curriculum Planning", "Progress Tracking"],
      date: "December 2023",
      participants: "12 families",
      achievements: ["Grade Level Advancement", "Standardized Test Scores Above Average", "College Readiness Achieved"],
      instructor: "Jennifer Martinez"
    },
    {
      id: 5,
      title: "Science Fair Projects",
      category: "Science Projects",
      image: "/image (4).jpeg",
      description: "Innovative science projects by our students",
      details: "Students presenting award-winning science fair projects with hands-on experiments. Projects ranged from renewable energy to biotechnology innovations.",
      relatedActivities: ["Science Tutoring", "Lab Experiments", "Research Projects"],
      date: "November 2023",
      participants: "18 students",
      achievements: ["Regional Science Fair Winners", "Innovation in Renewable Energy", "Best Research Methodology"],
      instructor: "Dr. Amanda Foster"
    },
    {
      id: 6,
      title: "Piano Recital Performance",
      category: "Music",
      image: "/image.jpeg",
      description: "Students performing at annual piano recital",
      details: "Young musicians showcasing their piano skills after months of dedicated practice. The recital featured classical, contemporary, and original compositions.",
      relatedActivities: ["Piano Lessons", "Music Theory", "Performance Training"],
      date: "October 2023",
      participants: "22 students",
      achievements: ["Flawless Performances", "Original Compositions Premiered", "Standing Ovation"],
      instructor: "Maestro Carlos Rodriguez"
    }
  ];

  const item = galleryItems.find(item => item.id === parseInt(id));

  if (!item) {
    return (
      <div className="min-h-screen bg-transparent py-8 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Gallery Item Not Found</h1>
          <Link href="/gallery">
            <Button className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black">
              Back to Gallery
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link href="/gallery">
          <Button className="mb-8 bg-white/10 text-white border border-yellow-400/30 hover:bg-yellow-400/20">
            <ArrowLeft className="mr-2 w-4 h-4" /> Back to Gallery
          </Button>
        </Link>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Image Section */}
          <div className="relative">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-96 object-cover rounded-2xl"
            />
            <div className="absolute top-4 left-4">
              <span className="px-4 py-2 bg-yellow-500/90 text-black text-sm rounded-full font-bold">
                {item.category}
              </span>
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-4">
                {item.title}
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed">
                {item.details}
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm border border-yellow-400/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-5 h-5 text-yellow-400" />
                  <span className="text-white font-medium">Date</span>
                </div>
                <p className="text-gray-300">{item.date}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-yellow-400/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-yellow-400" />
                  <span className="text-white font-medium">Participants</span>
                </div>
                <p className="text-gray-300">{item.participants}</p>
              </div>
            </div>

            {/* Instructor */}
            <div className="bg-white/10 backdrop-blur-sm border border-yellow-400/30 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-5 h-5 text-yellow-400" />
                <span className="text-white font-medium">Lead Instructor</span>
              </div>
              <p className="text-gray-300">{item.instructor}</p>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <Card className="bg-white/10 backdrop-blur-sm border-yellow-400/30 mb-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Award className="w-6 h-6 text-yellow-400" />
              Key Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {item.achievements.map((achievement, index) => (
                <div key={index} className="bg-yellow-400/20 rounded-lg p-4 text-center">
                  <p className="text-yellow-300 font-medium">{achievement}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Related Activities */}
        <Card className="bg-white/10 backdrop-blur-sm border-yellow-400/30 mb-8">
          <CardHeader>
            <CardTitle className="text-white">Related Activities & Programs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {item.relatedActivities.map((activity, index) => (
                <Card key={index} className="bg-white/5 border-yellow-400/20">
                  <CardContent className="p-4 text-center">
                    <h3 className="text-white font-semibold mb-2">{activity}</h3>
                    <Button size="sm" className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Interested in Similar Programs?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join our educational programs and be part of the next success story. 
            We offer personalized learning experiences for all students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-bold px-8 py-3 hover:scale-105 transition-transform">
              Enroll Now
            </Button>
            <Button className="bg-transparent text-white border-2 border-yellow-400 font-bold px-8 py-3 hover:bg-yellow-400/20 transition-all">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryDetailPage;