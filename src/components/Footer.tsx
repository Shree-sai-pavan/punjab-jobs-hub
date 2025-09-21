import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube,
  ExternalLink,
  Shield,
  FileText,
  Users,
  HelpCircle
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-saffron rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-saffron-foreground">PJ</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Punjab Jobs Portal</h3>
                <p className="text-sm opacity-80">Government of Punjab</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed mb-4">
              Official employment portal of Punjab Government. Connecting job seekers 
              with government opportunities across all departments.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-saffron transition-colors flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  All Jobs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-saffron transition-colors flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  Government Jobs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-saffron transition-colors flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  Application Status
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-saffron transition-colors flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Walk-in Interviews
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-saffron transition-colors flex items-center">
                  <HelpCircle className="w-4 h-4 mr-2" />
                  Career Guidance
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-saffron transition-colors">
                  Job Search
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-saffron transition-colors">
                  Resume Builder
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-saffron transition-colors">
                  Skill Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-saffron transition-colors">
                  Career Counseling
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-saffron transition-colors">
                  Employer Registration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-saffron transition-colors">
                  Training Programs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 text-saffron" />
                <div>
                  <p>Employment Exchange</p>
                  <p>Sector 17-A, Chandigarh</p>
                  <p>Punjab - 160017</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-saffron" />
                <span>1800-180-1551</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-saffron" />
                <span>support@punjabgovtjobs.in</span>
              </div>
            </div>

            <div className="mt-6">
              <h5 className="font-medium mb-2">Office Hours</h5>
              <p className="text-sm opacity-90">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-sm opacity-90">Saturday: 9:00 AM - 1:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm opacity-90">
              © 2024 Punjab Government Jobs Portal. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="hover:text-saffron transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-saffron transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-saffron transition-colors">
                Accessibility
              </a>
              <a href="#" className="hover:text-saffron transition-colors">
                RTI
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;