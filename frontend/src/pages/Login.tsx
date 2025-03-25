import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    // This would typically connect to a backend, but we're keeping it frontend-only
    console.log(isLogin ? 'Login attempt' : 'Signup attempt', {
      email,
      name: !isLogin ? name : undefined
    });

    // Reset form after submission
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
      setPassword('');
      setName('');
    }, 2000);
  };

  const toggleView = () => {
    setIsLogin(!isLogin);
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1 w-full">
        {/* Image Section */}
        <div className="hidden lg:block lg:w-1/2 relative">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
            alt="Syrian students" 
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/30 backdrop-blur-sm"></div>
          
          <div className="absolute inset-0 flex items-center justify-center p-12">
            <div className="max-w-md text-white z-10">
              <div className="mb-6 text-4xl font-bold">
                Syrian Students Club
              </div>
              <div className="text-xl">
                Join our community of Syrian students at FSM University to connect, collaborate, and celebrate our shared heritage.
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="max-w-md w-full space-y-8 animate-fadeIn">
            {/* Logo and Back Link */}
            <div className="flex justify-between items-center">
              <Link to="/" className="text-xl font-bold">
                <span className="text-primary">Syrian</span> Students Club
              </Link>
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                ← Back to Home
              </Link>
            </div>

            {/* Title */}
            <div>
              <h2 className="text-3xl font-bold">{isLogin ? 'Welcome Back' : 'Join Our Club'}</h2>
              <p className="mt-2 text-muted-foreground">
                {isLogin 
                  ? 'Sign in to access your account and club resources' 
                  : 'Create an account to become a member of our community'}
              </p>
            </div>

            {/* Success Message (shown after form submission) */}
            {submitted && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-600 animate-fadeIn">
                {isLogin 
                  ? 'Login successful! Redirecting...' 
                  : 'Registration successful! Please check your email to verify your account.'}
              </div>
            )}

            {/* Form */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    required
                    className="h-12"
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  {isLogin && (
                    <a href="#" className="text-sm text-primary hover:text-primary/80 transition-colors">
                      Forgot password?
                    </a>
                  )}
                </div>
                <div className="relative">
                  <Input 
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                    className="h-12 pr-10"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 rounded-full text-base"
                disabled={submitted}
              >
                {isLogin ? 'Sign In' : 'Create Account'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>

            {/* Toggle between Login and Signup */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <button
                  type="button"
                  onClick={toggleView}
                  className="text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  {isLogin ? 'Sign Up' : 'Sign In'}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
