import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, ArrowRight } from 'lucide-react';
import {useDispatch} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import axios from 'axios';
import { loginSuccess } from '../../src/Redux/authSlice.ts';
import logo from "../../src/images/Ssc.png"
import { t } from 'i18next';
import { Helmet } from 'react-helmet-async';
const Login = () => {


  const navigate =useNavigate();
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
const [error,setError] = useState<string | null>(null);
const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
   
    setSubmitted(true);
    setError(null);
     // Reset error message before making the API call

    // Prepare data for the API request
    const requestData = {
      email,
      password
    };

    try {
      // Make the API request to login the user
      const response = await axios.post(`${API_URL}/api/v1/login`, requestData); // Make sure the endpoint is correct

      // If login is successful, dispatch loginSuccess to update Redux store
      dispatch(loginSuccess({ user: response.data.user, token: response.data.token }));



      // Redirect to homepage after successful login
      setTimeout(() => {
        navigate('/admin');  // Navigate to home page after successful login
      }, 2000);
    } catch (error) {
      // If the request fails, set an error message
     console.log("invalid email or password");
     setError(t("InvalidEmailOrPassword"));
     
      setSubmitted(false); // Reset submitted state
    }

    // Reset form after submission
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
      setPassword('');
    }, 2000);
  };

  const toggleView = () => {
    setIsLogin(!isLogin);
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen flex flex-col">

<Helmet>
<title>{t("LoginHelmet")}</title>
        <meta name="description" content="Welcome to the home page of My Website" />
        <meta name="keywords" content="home, website, React, helmet" />
      


</Helmet>
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
                <img src={logo}></img>
           {t("caroselHeader")}
              </div>
              <div className="text-xl">
               
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="max-w-md w-full space-y-8 animate-fadeIn">
            {/* Logo and Back Link */}
            <div className="flex justify-between items-center">
          
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
               {t("BackHome")}
              </Link>
            </div>

            {/* Title */}
            <div>
              <h2 className="text-3xl font-bold">{t("Login")}</h2>
              
            </div>

            {/* Success Message (shown after form submission) */}
            {submitted && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-600 animate-fadeIn">
              {t("LoggingIn")}
              </div>
            )}

            {error&& (

<div className='p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 animate-fadeIn'> {error}</div>

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
                <Label htmlFor="email">  {t("Email")}</Label>
                <Input 
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder= {t("EnterYourEmail")}
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
          
                <div className="relative">
                  <Input 
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={t("EnterYourPassword")}
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
               {t("Login")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>

            {/* Toggle between Login and Signup */}
            <div className="text-center">
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
