import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { BookOpen, Award, Users, Calendar, ArrowRight } from 'lucide-react';

const SkillDevelopment = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Skill Development Programs</h1>
          <p className="text-lg text-muted-foreground">
            Enhance your skills with government-sponsored training programs and certifications
          </p>
        </div>

        {/* Program Categories */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card rounded-lg p-6 shadow-medium hover:shadow-large transition-shadow">
            <BookOpen className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
            <p className="text-muted-foreground mb-4">
              Learn in-demand technical skills like computer programming, data analysis, and digital marketing.
            </p>
            <Button variant="outline" className="w-full">
              View Programs
            </Button>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-medium hover:shadow-large transition-shadow">
            <Award className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Professional Certification</h3>
            <p className="text-muted-foreground mb-4">
              Get certified in various professional domains to boost your career prospects.
            </p>
            <Button variant="outline" className="w-full">
              View Certifications
            </Button>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-medium hover:shadow-large transition-shadow">
            <Users className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Soft Skills</h3>
            <p className="text-muted-foreground mb-4">
              Develop communication, leadership, and interpersonal skills for career advancement.
            </p>
            <Button variant="outline" className="w-full">
              View Programs
            </Button>
          </div>
        </div>

        {/* Current Programs */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Current Training Programs</h2>
          
          <div className="space-y-6">
            {[
              {
                title: "Digital Marketing Certification",
                duration: "3 Months",
                type: "Online",
                seats: "50 Available",
                deadline: "15 Jan 2025"
              },
              {
                title: "Computer Programming Bootcamp",
                duration: "6 Months", 
                type: "Hybrid",
                seats: "30 Available",
                deadline: "20 Jan 2025"
              },
              {
                title: "Financial Literacy Program",
                duration: "2 Months",
                type: "Online",
                seats: "100 Available", 
                deadline: "25 Jan 2025"
              }
            ].map((program, index) => (
              <div key={index} className="bg-card rounded-lg p-6 shadow-medium">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {program.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        Duration: {program.duration}
                      </div>
                      <span>Mode: {program.type}</span>
                      <span className="text-green-600">{program.seats}</span>
                    </div>
                  </div>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    Registration Open
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  Comprehensive training program designed to enhance your professional skills 
                  and improve employment opportunities in the current job market.
                </p>
                
                <div className="flex justify-between items-center">
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium text-destructive">Registration Deadline:</span> {program.deadline}
                  </div>
                  <Button>
                    Register Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* E-Counseling Section */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Career Counseling Services</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get personalized career guidance from experienced counselors. 
            Book a free session to discuss your career goals and skill development path.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Book Free Counseling
            </Button>
            <Button variant="outline" size="lg">
              View Career Resources
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SkillDevelopment;