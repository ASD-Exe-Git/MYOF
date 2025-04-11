import React, { useState } from 'react';
import { ArrowRight, TrendingUp, Shield, Globe, LineChart } from 'lucide-react';

export default function InvestmentLandingPage() {
  const [email, setEmail] = useState('');
  
  return (
    <div className="">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold flex items-center text-white">
          <TrendingUp className="mr-2" />
          <span>Financial Blueprint</span>
        </div>
        
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#" className=" text-white hover:text-yellow-300 transition duration-300">Home</a>         
          <a href="#" className=" text-white hover:text-yellow-300 transition duration-300">Contact</a>
          <button className="bg-white text-indigo-700 px-4 py-2 rounded-lg font-medium hover:bg-indigo-100 transition duration-300">
            Get Started
          </button>
        </div>
        
        <button className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </nav>
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-white">
            Your Future Deserves <span className="text-yellow-400">Better Investments</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Don't just dream about financial freedom. Build it, one smart investment at a time.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 mb-8 w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white flex-grow"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="bg-indigo-200 hover:bg-green-400 px-6 py-2 rounded-lg font-medium transition duration-500 flex items-center justify-center">
              Start Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </form>
          <p className="text-gray-400 text-sm">Join 10,000+ investors already building their future</p>
        </div>
        
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-yellow-300 to-indigo-500 rounded-xl blur opacity-155"></div>
            <div className=" -5 relative bg-gray-900 p-6 rounded-2xl">
              <LineChart className="h-64 w-64 text-gray-100" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl text-white md:text-4xl font-bold text-center mb-16">Why Choose WealthVision</h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="bg-gray-800 bg-opacity-50 p-8 rounded-xl hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
            <div className="p-4 bg-indigo-600 inline-block rounded-lg mb-4">
              <TrendingUp className="h-8 w-8" />
            </div>
            <h3 className="text-white text-xl font-bold mb-4">Strategic Growth</h3>
            <p className="text-gray-300">
              Our data-driven approach identifies opportunities for maximizing returns while managing risk effectively.
            </p>
          </div>
          
          <div className="bg-gray-800 bg-opacity-50 p-8 rounded-xl hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
            <div className="p-4 bg-indigo-600 inline-block rounded-lg mb-4">
              <Shield className="h-8 w-8" />
            </div>
            <h3 className="text-white text-xl font-bold mb-4">Protected Investments</h3>
            <p className="text-gray-300">
              Advanced security measures and diversification strategies to safeguard your financial future.
            </p>
          </div>
          
          <div className="bg-gray-800 bg-opacity-50 p-8 rounded-xl hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
            <div className="p-4 bg-indigo-600 inline-block rounded-lg mb-4">
              <Globe className="h-8 w-8" />
            </div>
            <h3 className="text-white text-xl font-bold mb-4">Global Opportunities</h3>
            <p className="text-gray-300">
              Access international markets and emerging sectors with our worldwide investment network.
            </p>
          </div>
        </div>
      </section></div>
      );
    }