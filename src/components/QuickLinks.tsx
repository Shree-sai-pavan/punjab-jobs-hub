import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  GraduationCap, 
  Shield, 
  Stethoscope, 
  Sprout, 
  Monitor, 
  Building, 
  Users, 
  Heart,
  FileText,
  Phone,
  BookOpen,
  Award
} from 'lucide-react';

const quickLinks = [
  {
    title: "Education Jobs",
    description: "Teaching and academic positions",
    icon: GraduationCap,
    count: "450+",
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    title: "Police & Security",
    description: "Law enforcement opportunities",
    icon: Shield,
    count: "200+",
    color: "text-red-600",
    bgColor: "bg-red-50"
  },
  {
    title: "Health & Medical",
    description: "Healthcare and medical roles",
    icon: Stethoscope,
    count: "300+",
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    title: "Agriculture",
    description: "Agricultural and rural development",
    icon: Sprout,
    count: "150+",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50"
  },
  {
    title: "IT & Technology",
    description: "Technology and digital roles",
    icon: Monitor,
    count: "120+",
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    title: "Public Works",
    description: "Infrastructure and engineering",
    icon: Building,
    count: "180+",
    color: "text-orange-600",
    bgColor: "bg-orange-50"
  }
];

const specialCategories = [
  {
    title: "Women Employment",
    description: "Special opportunities for women",
    icon: Users,
    color: "text-pink-600",
    bgColor: "bg-pink-50"
  },
  {
    title: "Disabled Persons",
    description: "Accessible employment opportunities",
    icon: Heart,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50"
  },
  {
    title: "Ex-Servicemen",
    description: "Opportunities for armed forces veterans",
    icon: Award,
    color: "text-teal-600",
    bgColor: "bg-teal-50"
  }
];

const services = [
  {
    title: "Application Status",
    description: "Track your job applications",
    icon: FileText,
    color: "text-blue-600"
  },
  {
    title: "Career Counseling",
    description: "Get expert career guidance",
    icon: Phone,
    color: "text-green-600"
  },
  {
    title: "Skill Development",
    description: "Training and certification programs",
    icon: BookOpen,
    color: "text-purple-600"
  }
];

const QuickLinks = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Department Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Browse by Department
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <Card key={index} className="group hover:shadow-medium transition-all duration-300 cursor-pointer border border-border hover:border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg ${link.bgColor}`}>
                        <IconComponent className={`w-6 h-6 ${link.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {link.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {link.description}
                        </p>
                        <div className="text-sm font-medium text-primary mt-2">
                          {link.count} open positions
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Special Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Special Employment Categories
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {specialCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="group hover:shadow-medium transition-all duration-300 cursor-pointer border border-border hover:border-primary/20">
                  <CardContent className="p-6 text-center">
                    <div className={`inline-flex p-4 rounded-full ${category.bgColor} mb-4`}>
                      <IconComponent className={`w-8 h-8 ${category.color}`} />
                    </div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="group hover:shadow-medium transition-all duration-300 cursor-pointer border border-border hover:border-primary/20">
                  <CardContent className="p-6 text-center">
                    <IconComponent className={`w-12 h-12 ${service.color} mx-auto mb-4`} />
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;