import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Clock, Bookmark, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const jobsData = [
  {
    id: 1,
    title: "Assistant Teacher (Elementary)",
    department: "Education Department",
    location: "Ludhiana",
    salary: "₹25,500 - ₹81,100",
    type: "Government",
    deadline: "2024-10-15",
    applicants: 245,
    experience: "0-2 years",
    qualification: "B.Ed, D.Ed",
    urgent: true
  },
  {
    id: 2,
    title: "Sub Inspector (Police)",
    department: "Punjab Police",
    location: "Amritsar",
    salary: "₹35,400 - ₹1,12,400",
    type: "Government",
    deadline: "2024-10-20",
    applicants: 456,
    experience: "0-3 years",
    qualification: "Graduate",
    urgent: false
  },
  {
    id: 3,
    title: "Junior Engineer (Civil)",
    department: "Public Works Department",
    location: "Chandigarh",
    salary: "₹35,400 - ₹1,12,400",
    type: "Government",
    deadline: "2024-11-01",
    applicants: 189,
    experience: "0-2 years",
    qualification: "B.Tech/Diploma",
    urgent: false
  },
  {
    id: 4,
    title: "Staff Nurse",
    department: "Health Department",
    location: "Patiala",
    salary: "₹25,500 - ₹81,100",
    type: "Government",
    deadline: "2024-10-25",
    applicants: 312,
    experience: "0-5 years",
    qualification: "B.Sc Nursing, GNM",
    urgent: true
  },
  {
    id: 5,
    title: "Agricultural Extension Officer",
    department: "Agriculture Department",
    location: "Jalandhar",
    salary: "₹25,500 - ₹81,100",
    type: "Government",
    deadline: "2024-11-10",
    applicants: 98,
    experience: "0-3 years",
    qualification: "B.Sc Agriculture",
    urgent: false
  },
  {
    id: 6,
    title: "Computer Programmer",
    department: "IT Department",
    location: "Mohali",
    salary: "₹35,400 - ₹1,12,400",
    type: "Government",
    deadline: "2024-10-30",
    applicants: 267,
    experience: "0-4 years",
    qualification: "MCA, B.Tech CSE",
    urgent: false
  }
];

const JobCard = ({ job }: { job: typeof jobsData[0] }) => {
  const navigate = useNavigate();
  const daysLeft = Math.ceil((new Date(job.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
  
  return (
    <Card className="hover:shadow-medium transition-all duration-300 border border-border hover:border-primary/20">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              {job.urgent && (
                <Badge variant="destructive" className="text-xs">
                  Urgent
                </Badge>
              )}
              <Badge variant="secondary" className="text-xs">
                {job.type}
              </Badge>
            </div>
            <CardTitle className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
              {job.title}
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">{job.department}</p>
          </div>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
            <Bookmark className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-3">
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 mr-2 text-primary" />
            {job.location}
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 mr-2 text-primary" />
            Apply by: {new Date(job.deadline).toLocaleDateString()}
            <Badge 
              variant={daysLeft <= 5 ? "destructive" : "secondary"} 
              className="ml-2 text-xs"
            >
              {daysLeft} days left
            </Badge>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="w-4 h-4 mr-2 text-primary" />
            {job.applicants} applicants
          </div>
          
          <div className="pt-2">
            <div className="text-lg font-semibold text-primary">{job.salary}</div>
            <div className="text-sm text-muted-foreground">per month</div>
          </div>
          
          <div className="flex flex-wrap gap-2 pt-2">
            <Badge variant="outline" className="text-xs">
              {job.qualification}
            </Badge>
            <Badge variant="outline" className="text-xs">
              {job.experience}
            </Badge>
          </div>
          
          <div className="flex gap-2 pt-4">
            <Button 
              className="flex-1" 
              size="sm"
              onClick={() => navigate('/jobs')}
            >
              Apply Now
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => navigate('/jobs')}
            >
              View Details
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const FeaturedJobs = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured Government Jobs
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Latest opportunities across various government departments in Punjab
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {jobsData.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => navigate('/jobs')}
          >
            View All Jobs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;