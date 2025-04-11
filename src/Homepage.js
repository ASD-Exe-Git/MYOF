import React, { useState } from 'react';
import Intro from './Intro'

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
    if (validateForm()) {
      //console.log('Form submitted:', formData);
      // Handle form submission
      alert('Form submitted successfully!This page will some be fully functional');
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d0d0d] via-[#6b42db] to-[#32312e]">
    {<Intro/>}
      {/* Navbar */}
      
      
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
                    className="appearance-none h-5 w-5 border rounded-full bg-gray-100 checked:border-transparent checked:bg-yellow-600 checked:after:content-['✓'] checked:after:text-sm checked:after:flex checked:after:justify-center checked:after:items-center "
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
                    className="h-5 w-5 text-gray-600 focus:ring-gray-500 rounded"
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
      <div id="contact" className="bg-black/40 py-16">
        <div className="container mx-auto px-4 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p className="text-xl mb-4">Have questions? Reach out to our team</p>
          <p className="mb-4">contact@myof.example.com</p>
          <p>+1 (555) 123-4567</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;