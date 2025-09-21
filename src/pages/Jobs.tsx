import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Search, Filter, MapPin, Calendar, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Jobs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">All Government Jobs</h1>
          <p className="text-lg text-muted-foreground">
            Browse through thousands of government job opportunities across Punjab
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card rounded-lg p-6 shadow-medium mb-8">
          <div className="grid md:grid-cols-4 gap-4 mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Search jobs..."
                className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <select className="px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring">
              <option>All Locations</option>
              <option>Chandigarh</option>
              <option>Ludhiana</option>
              <option>Amritsar</option>
            </select>
            <select className="px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring">
              <option>All Departments</option>
              <option>Education</option>
              <option>Health</option>
              <option>Police</option>
            </select>
            <Button className="w-full">
              <Filter className="w-4 h-4 mr-2" />
              Filter Jobs
            </Button>
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {[1, 2, 3, 4, 5].map((job) => (
            <div key={job} className="bg-card rounded-lg p-6 shadow-medium hover:shadow-large transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Senior Teacher - Mathematics
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Building className="w-4 h-4 mr-1" />
                      Department of Education
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      Ludhiana, Punjab
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      Last Date: 30 Dec 2024
                    </div>
                  </div>
                </div>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Government Job
                </span>
              </div>
              
              <p className="text-muted-foreground mb-4">
                We are seeking qualified Mathematics teachers for secondary education. 
                Candidates should have B.Ed qualification and experience in teaching.
              </p>
              
              <div className="flex justify-between items-center">
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium">Qualification:</span> B.Ed, M.A Mathematics
                </div>
                <Button>View Details & Apply</Button>
              </div>
            </div>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Jobs;