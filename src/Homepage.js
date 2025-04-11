import { ScrollProvider } from './scrollContext';
import React, { useState } from 'react';
import { ArrowRight, TrendingUp, Shield, Globe, LineChart } from 'lucide-react';

const HomePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    investmentType: '',
    amount: '',
    years: '',
    goal: ''
  });
  
  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState('');
  const [visible, setVisible] = useState(false);


  const showPopupForGetStarted = () => {
    setVisible(true);
    setTimeout(() => setVisible(false), 2000);
  };

  const showPopupForStart = () => {
    setVisible(true);
    setTimeout(() => setVisible(false), 2000);
  };

  const scrollOver = (tab)=>{
    const element = document.getElementById(tab);
    if(element){
      element.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'});
    }
  };
  
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      if (checked) {
        setFormData({
          ...formData,
          investmentType: name
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  
  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;
    
    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required';
      isValid = false;
    }
    
    if (!formData.age) {
      tempErrors.age = 'Age is required';
      isValid = false;
    } else if (isNaN(formData.age) || parseInt(formData.age) < 13) {
      tempErrors.age = 'Age must be at least 13';
      isValid = false;
    }
    
    if (!formData.investmentType) {
      tempErrors.investmentType = 'Please select an investment type';
      isValid = false;
    }
    
    if (!formData.amount) {
      tempErrors.amount = 'Investment amount is required';
      isValid = false;
    } else if (isNaN(formData.amount) || parseFloat(formData.amount) <= 0) {
      tempErrors.amount = 'Please enter a valid amount';
      isValid = false;
    }
    
    if (!formData.years) {
      tempErrors.years = 'Investment period is required';
      isValid = false;
    } else if (isNaN(formData.years) || parseInt(formData.years) <= 0) {
      tempErrors.years = 'Please enter a valid number of years';
      isValid = false;
    }
    
    if (!formData.goal.trim()) {
      tempErrors.goal = 'Future goal is required';
      isValid = false;
    }
    
    setErrors(tempErrors);
    return isValid;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    showPopupForStart()
    if (validateForm()) {
      //console.log('Form submitted:', formData);
      // Handle form submission
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d0d0d] via-[#6b42db] to-[#32312e]" id='Home_tab'>

   {/* Into section */}
   <div className="">
      {/* Navigation */}
      <nav className="z-10 top-0 container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold flex items-center text-white">
          <TrendingUp className="mr-2" />
          <span>Financial Blueprint</span>
        </div>
        
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#" onClick={()=>scrollOver('Home_tab')} className=" text-white hover:text-yellow-300 transition duration-300">Home</a>         
          <a href="#" onClick={()=>scrollOver('Footer_tab')} className=" text-white hover:text-yellow-300 transition duration-300">Contact</a>
          <button onClick={showPopupForGetStarted} className="bg-white text-indigo-700 px-4 py-2 rounded-lg font-medium hover:bg-indigo-100 transition duration-300">
            Get Started
          </button>

          {visible && (
            <>
              <div className="fixed inset-0 bg-black opacity-60 z-40"></div> {/* Dimmed background */}
              <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-100 text-black p-16 rounded-lg z-50 w-120 text-center"> {/* Larger popup */}
                <p className="text-xl font-semibold mb-4">Coming Soon!</p>
                <p>This feature is currently under development.</p>                
              </div>
            </>
            )}

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
            <button className="bg-indigo-200 hover:bg-green-400 px-6 py-2 rounded-lg font-medium transition duration-500 flex items-center justify-center" onClick={handleSubmit}>
              Start Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            {visible && (
            <>
              <div className="fixed inset-0 bg-black opacity-60 z-40"></div> {/* Dimmed background */}
              <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-100 text-black p-16 rounded-lg z-50 w-120 text-center"> {/* Larger popup */}
                <p className="text-xl font-semibold mb-4">Coming Soon!</p>
                <p>This feature is currently under development.</p>                
              </div>
            </>
            )}

          </form>
          <p className="text-gray-400 text-sm">Join use</p>
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
      </section>
      </div>
      
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 text-white text-center">
        <h1 className="text-5xl mb-6">Plan Your Financial Future</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Start your journey towards financial freedom by setting up your investment portfolio today.</p>
      </div>
      
      {/* Form Section */}
      <div id="form" className="container mx-auto px-4 py-8 mb-16">
        <div className="max-w-2xl mx-auto bg-white/15 backdrop-blur-sm rounded-xl shadow-2xl p-8 text-white font-light">
          <h2 className="text-3xl mb-6 text-center">Investment Form</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                className="text-black font-semibold w-full p-3 rounded-md bg-white/90 border border-white/30 focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-red-300 mt-1">{errors.name}</p>}
            </div>
            
            <div className="mb-4">
              <label className="block mb-2" htmlFor="age">Age</label>
              <input
                id="age"
                name="age"
                type="number"
                className="w-full p-3 rounded-md text-black font-semibold bg-white/90 border border-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Enter your age"
                value={formData.age}
                onChange={handleChange}
              />
              {errors.age && <p className="text-red-300 mt-1">{errors.age}</p>}
            </div>
            
            <div className="mb-4">
              <label className="block mb-2">Investment Type</label>
              <div className="flex space-x-6">
                <div className="flex items-center">
                  <input
                    id="oneTime"
                    name="oneTime"
                    type="checkbox"
                    className="appearance-none h-5 w-5 border rounded-full bg-gray-100 checked:border-transparent checked:bg-yellow-400 checked:after:content-['✓'] checked:after:text-sm checked:after:flex checked:after:justify-center checked:after:items-center"
                    checked={formData.investmentType === 'oneTime'}
                    onChange={handleChange}
                  />
                  <label htmlFor="oneTime" className="ml-2">One Time</label>
                </div>
                <div className="flex items-center">
                  <input
                    id="sip"
                    name="sip"
                    type="checkbox"
                    className="appearance-none h-5 w-5 border rounded-full bg-gray-100 checked:border-transparent checked:bg-yellow-400 checked:after:content-['✓'] checked:after:text-sm checked:after:flex checked:after:justify-center checked:after:items-center "
                    checked={formData.investmentType === 'sip'}
                    onChange={handleChange}
                  />
                  <label htmlFor="sip" className="ml-2">SIP</label>
                </div>
              </div>
              {errors.investmentType && <p className="text-red-300 mt-1">{errors.investmentType}</p>}
            </div>
            
            <div className="mb-4">
              <label className="block mb-2" htmlFor="amount">Amount Willing to Invest</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-white/90">$</span>
                </div>
                <input
                  id="amount"
                  name="amount"
                  type="number"
                  className="text-black font-semibold bg-white/90 w-full p-3 pl-8 rounded-md border-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Enter investment amount"
                  value={formData.amount}
                  onChange={handleChange}
                />
              </div>
              {errors.amount && <p className="text-red-300 mt-1">{errors.amount}</p>}
            </div>
            
            <div className="mb-4">
              <label className="block mb-2" htmlFor="years">Number of Years</label>
              <input
                id="years"
                name="years"
                type="number"
                className=" text-black font-semibold bg-white/90 w-full p-3 rounded-md border border-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Enter investment period"
                value={formData.years}
                onChange={handleChange}
              />
              {errors.years && <p className="text-red-300 mt-1">{errors.years}</p>}
            </div>
            
            <div className="mb-6">
              <label className="block mb-2" htmlFor="goal">Future Goal</label>
              <textarea
                id="goal"
                name="goal"
                className="text-black font-semibold bg-white/90 w-full p-3 rounded-md border border-white/30 focus:outline-none focus:ring-2 focus:ring-gray-500 h-24"
                placeholder="Describe your financial goal"
                value={formData.goal}
                onChange={handleChange}
              ></textarea>
              {errors.goal && <p className="text-red-300 mt-1">{errors.goal}</p>}
            </div>
            
            <button
              type="submit"
              className="w-full py-3 px-4 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-md shadow-lg transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      
      {/* Contact Section */}
      <div id="Footer_tab" className="bg-black/40 py-16">
        <div className="container mx-auto px-4 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p className="text-xl mb-4">Have questions? Reach out to below email</p>
          <p className="mb-4">abhishekdhotri4321@gmail.com</p>
          <p>+919512856662</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;