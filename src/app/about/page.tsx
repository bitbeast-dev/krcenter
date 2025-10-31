"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Award, Heart, ArrowRight,HandshakeIcon,ComputerIcon,Globe,LucideMapPinCheckInside } from "lucide-react";

const AboutPage = () => {
  const stats = [
    { number: "200+", label: "Students Helped", icon: Users },
    { number: "95%", label: "Grade Improvement", icon: Target },
    { number: "15+", label: "Subject Areas", icon: Award },
    { number: "25+", label: "Expert Tutors", icon: Heart }
  ];

  const team = [
    {
      name: "Jean Baptiste Uwimana",
      role: "Founder & Director",
      bio: "Experienced educator with 10+ years in academic excellence. Masters in Education from University of Rwanda.",
      image: "/team1.jpg"
    },
    {
      name: "Marie Claire Mukamana",
      role: "Head of Academics",
      bio: "Former secondary school principal with expertise in curriculum development and student assessment.",
      image: "/team2.jpg"
    },
    {
      name: "Dr. Emmanuel Nkurunziza",
      role: "Science & Math Director",
      bio: "PhD in Mathematics with specialization in making complex concepts accessible to all learning levels.",
      image: "/team3.jpg"
    },
    {
      name: "Grace Uwimana",
      role: "Student Success Coordinator",
      bio: "Dedicated counselor helping students achieve their academic goals and build confidence in learning.",
      image: "/team4.jpg"
    }
  ];

  const values = [
    {
      title: "Quality Education",
      description: "Providing excellent educational support that meets each student's unique learning needs and goals.",
      icon: <Globe/>
    },
    {
      title: "Academic Excellence",
      description: "Our programs are designed to help students achieve outstanding results in their studies.",
      icon:<LucideMapPinCheckInside/>
    },
    {
      title: "Personalized Learning",
      description: "Tailored tutoring approaches that adapt to individual learning styles and academic requirements.",
      icon: <ComputerIcon/>
    },
    {
      title: "Student Success",
      description: "Creating a supportive environment where every student can thrive and reach their full potential.",
      icon: <HandshakeIcon/>
    }
  ];

  return (
    <div className="min-h-screen bg-transparent py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-6">
            About Kigali Revision Center
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We're dedicated to empowering students through quality education and personalized learning. 
            Founded to bridge educational gaps, Kigali Revision Center has helped hundreds of students 
            excel in their studies through our comprehensive tutoring and educational support programs.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-yellow-400/30 text-center">
                <CardContent className="p-6">
                  <IconComponent className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-white/10 backdrop-blur-sm border-yellow-400/30">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-2">
                <Target className="w-6 h-6 text-yellow-400" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed">
                To provide exceptional educational support that empowers students to achieve 
                academic excellence. We believe that with personalized guidance and quality 
                tutoring, every student can unlock their potential and succeed in their studies.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-yellow-400/30">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-2">
                <Award className="w-6 h-6 text-yellow-400" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed">
                To become Rwanda's premier educational support center, creating opportunities 
                where every student, regardless of their starting point, can achieve academic 
                success and build a strong foundation for their future.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-yellow-400/30 text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4 text-yellow-500 justify-center mx-auto">{value.icon}</div>
                  <h3 className="text-white font-semibold text-lg mb-3">{value.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-8">Meet Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-yellow-400/30">
                <div className="h-48 bg-gradient-to-br from-yellow-600/20 to-yellow-500/20 flex items-center justify-center">
                  <Users className="w-16 h-16 text-yellow-400" />
                </div>
                <CardHeader>
                  <CardTitle className="text-white text-lg">{member.name}</CardTitle>
                  <p className="text-yellow-300 font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-6">Our Story</h2>
          <div className="max-w-4xl mx-auto text-gray-300 leading-relaxed space-y-4">
            <p>
              Kigali Revision Center was founded with a clear vision: to provide quality educational 
              support that helps students excel in their academic journey. Our founder, Jean Baptiste Uwimana, 
              recognized that many bright students needed additional guidance to reach their full potential.
            </p>
            <p>
              Starting with just 20 students in our first year, we've grown to support hundreds of 
              learners across Kigali. Our success is measured by the improved grades, increased confidence, 
              and academic achievements of our students - from struggling learners becoming top performers 
              to ambitious students reaching their dream universities.
            </p>
            <p>
              Today, we offer comprehensive educational services including tutoring, exam preparation, 
              creative skills development, and academic counseling. Our holistic approach ensures that 
              every student receives the support they need to succeed academically and personally.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of students who have achieved academic excellence with Kigali Revision Center. 
            Your educational success starts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-bold px-8 py-4 text-lg rounded-3xl hover:scale-105 transition-transform">
              Explore Our Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button className="bg-transparent text-white border-2 border-yellow-400 font-bold px-8 py-4 text-lg rounded-3xl hover:bg-yellow-400/20 transition-all">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
