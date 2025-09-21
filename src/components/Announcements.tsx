import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ExternalLink, Megaphone, FileText, Users } from 'lucide-react';

const announcements = [
  {
    id: 1,
    title: "Walk-in Interview for Teaching Posts",
    description: "Department of Education is conducting walk-in interviews for Assistant Teacher positions across Punjab districts.",
    date: "2024-09-25",
    time: "10:00 AM",
    location: "Punjab Education Board, Mohali",
    type: "Walk-in Interview",
    urgent: true,
    department: "Education Department"
  },
  {
    id: 2,
    title: "Punjab Police Recruitment 2024",
    description: "Applications invited for 5000 Constable positions. Online registration starts from October 1st, 2024.",
    date: "2024-10-01",
    time: "12:00 PM",
    location: "Online Application",
    type: "Recruitment Notice",
    urgent: false,
    department: "Punjab Police"
  },
  {
    id: 3,
    title: "Skill Development Workshop",
    description: "Free certification program in Digital Marketing and Data Analytics for unemployed youth.",
    date: "2024-09-30",
    time: "09:00 AM",
    location: "Punjab Skill Development Mission",
    type: "Training Program",
    urgent: false,
    department: "Skill Development"
  },
  {
    id: 4,
    title: "Medical Officer Recruitment",
    description: "Punjab Health Department invites applications for 200 Medical Officer posts in government hospitals.",
    date: "2024-10-05",
    time: "11:00 AM",
    location: "Online Registration",
    type: "Recruitment",
    urgent: true,
    department: "Health Department"
  }
];

const latestNews = [
  {
    title: "Punjab Government Announces 10,000 New Jobs",
    date: "2024-09-20",
    category: "Policy Update"
  },
  {
    title: "Online Application System Upgraded",
    date: "2024-09-18",
    category: "System Update"
  },
  {
    title: "Career Fair in Ludhiana - Register Now",
    date: "2024-09-15",
    category: "Event"
  },
  {
    title: "New Skill Development Centers Opened",
    date: "2024-09-12",
    category: "Infrastructure"
  }
];

const Announcements = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Announcements */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-foreground flex items-center">
                <Megaphone className="w-8 h-8 mr-3 text-primary" />
                Latest Announcements
              </h2>
              <Button variant="outline">View All</Button>
            </div>

            <div className="space-y-6">
              {announcements.map((announcement) => (
                <Card key={announcement.id} className="border border-border hover:border-primary/20 transition-colors">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          {announcement.urgent && (
                            <Badge variant="destructive" className="text-xs">
                              Urgent
                            </Badge>
                          )}
                          <Badge variant="secondary" className="text-xs">
                            {announcement.type}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {announcement.department}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl font-semibold text-foreground">
                          {announcement.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {announcement.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2 text-primary" />
                        {new Date(announcement.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-2 text-primary" />
                        {announcement.time}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <Users className="w-4 h-4 mr-2 text-primary" />
                      {announcement.location}
                    </div>
                    
                    <Button className="w-full sm:w-auto">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Latest News */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <FileText className="w-5 h-5 mr-2 text-primary" />
                  Latest News
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {latestNews.map((news, index) => (
                    <div key={index} className="border-b border-border last:border-b-0 pb-4 last:pb-0">
                      <h4 className="font-medium text-foreground hover:text-primary transition-colors cursor-pointer">
                        {news.title}
                      </h4>
                      <div className="flex items-center justify-between mt-2">
                        <Badge variant="outline" className="text-xs">
                          {news.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {new Date(news.date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="w-4 h-4 mr-2" />
                    Download Application Form
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="w-4 h-4 mr-2" />
                    Register as Employer
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Career Counseling
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Help & Support
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-gradient-to-br from-primary/5 to-saffron/5">
              <CardHeader>
                <CardTitle className="text-xl">Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-medium">Helpline Number</div>
                    <div className="text-primary">1800-180-1551</div>
                  </div>
                  <div>
                    <div className="font-medium">Email Support</div>
                    <div className="text-primary">support@punjabgovtjobs.in</div>
                  </div>
                  <div>
                    <div className="font-medium">Office Hours</div>
                    <div className="text-muted-foreground">Mon-Fri: 9:00 AM - 6:00 PM</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Announcements;