import React from 'react';
import { Button } from '@/components/ui/button';
import { Search, MapPin, Briefcase, Users } from 'lucide-react';
import heroImage from '@/assets/punjab-govt-building.jpg';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-accent overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="relative container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-primary-foreground">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Find Your Dream
              <span className="text-saffron block">Government Job</span>
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Discover thousands of government job opportunities across Punjab. 
              From entry-level positions to senior roles, find the perfect career match.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-saffron">2,500+</div>
                <div className="text-sm opacity-80">Active Jobs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-saffron">50+</div>
                <div className="text-sm opacity-80">Departments</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-saffron">1M+</div>
                <div className="text-sm opacity-80">Registered Users</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="bg-saffron text-saffron-foreground hover:bg-saffron/90">
                <Search className="w-5 h-5 mr-2" />
                Search Jobs
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Users className="w-5 h-5 mr-2" />
                Register Now
              </Button>
            </div>
          </div>

          {/* Search Card */}
          <div className="bg-card rounded-2xl p-8 shadow-large">
            <h3 className="text-2xl font-bold text-foreground mb-6">Quick Job Search</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Job Title or Keywords
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <input
                    type="text"
                    placeholder="e.g. Teacher, Police, Engineer"
                    className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <select className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring">
                    <option>All Punjab</option>
                    <option>Chandigarh</option>
                    <option>Ludhiana</option>
                    <option>Amritsar</option>
                    <option>Jalandhar</option>
                    <option>Patiala</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Department
                </label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <select className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring">
                    <option>All Departments</option>
                    <option>Education</option>
                    <option>Health & Medical</option>
                    <option>Police & Security</option>
                    <option>Agriculture</option>
                    <option>IT & Technology</option>
                    <option>Public Works</option>
                  </select>
                </div>
              </div>

              <Button className="w-full" size="lg">
                <Search className="w-5 h-5 mr-2" />
                Search Jobs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;