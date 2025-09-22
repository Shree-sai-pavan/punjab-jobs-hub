import React from 'react';
import { Button } from '@/components/ui/button';
import { Search, Menu, User, Bell, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

const Header = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const handleLogout = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <header className="bg-primary text-primary-foreground shadow-medium">
      {/* Top Bar */}
      <div className="border-b border-primary-foreground/20">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <span>भारत सरकार | Government of India</span>
              <span>पंजाब राज्य | Punjab State</span>
            </div>
            <div className="flex items-center space-x-4">
              <select className="bg-transparent border-none text-primary-foreground focus:outline-none">
                <option value="en">English</option>
                <option value="hi">हिंदी</option>
                <option value="pa">ਪੰਜਾਬੀ</option>
              </select>
              <span className="text-xs">A+ | A | A-</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-saffron rounded-full flex items-center justify-center">
              <span className="text-xl font-bold text-saffron-foreground">PJ</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Punjab Jobs Portal</h1>
              <p className="text-sm opacity-90">Government of Punjab Employment Exchange</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
              <Bell className="w-4 h-4 mr-2" />
              Notifications
            </Button>
            {user ? (
              <>
                <span className="text-sm text-primary-foreground/80">
                  Welcome, {user.email}
                </span>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-primary-foreground hover:bg-primary-foreground/10"
                  onClick={handleLogout}
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-primary-foreground hover:bg-primary-foreground/10"
                  onClick={() => navigate('/login')}
                >
                  <User className="w-4 h-4 mr-2" />
                  Login
                </Button>
                <Button 
                  variant="secondary" 
                  size="sm"
                  onClick={() => navigate('/register')}
                >
                  Register
                </Button>
              </>
            )}
          </div>

          <Button variant="ghost" size="sm" className="md:hidden text-primary-foreground">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-primary/90 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-8 py-3">
            <Link to="/" className="text-primary-foreground hover:text-saffron transition-colors font-medium">
              Home
            </Link>
            <Link to="/jobs" className="text-primary-foreground hover:text-saffron transition-colors font-medium">
              All Jobs
            </Link>
            <Link to="/jobs" className="text-primary-foreground hover:text-saffron transition-colors font-medium">
              Government Jobs
            </Link>
            <Link to="/jobs" className="text-primary-foreground hover:text-saffron transition-colors font-medium">
              Walk-in Interviews
            </Link>
            <Link to="/skill-development" className="text-primary-foreground hover:text-saffron transition-colors font-medium">
              Skill Development
            </Link>
            <Link to="/skill-development" className="text-primary-foreground hover:text-saffron transition-colors font-medium">
              Career Guidance
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;