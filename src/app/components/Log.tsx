"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Log = () => {
  const [showWarning, setShowWarning] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setShowWarning(true);
    } else {
      setShowWarning(false);
      // Handle login logic here
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/pinklogin.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 w-full max-w-md px-6">
        <div className="rounded-[2rem] p-10 shadow-2xl" style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)'
        }}>
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <div className="rounded-full p-3" style={{
              backgroundColor: 'rgba(255, 20, 147, 0.1)'
            }}>
              <Image 
                src="/fakelogo.png" 
                alt="Logo" 
                width={60} 
                height={60}
                className="object-contain"
              />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-4xl font-bold text-center mb-2" style={{
            background: 'linear-gradient(to right, #FF1493, #FF69B4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Login
          </h2>
          <p className="text-gray-600 text-center mb-8 text-sm">
            Welcome back to the community
          </p>

          {/* Warning Message */}
          {showWarning && (
            <div className="mb-4 p-3 rounded-xl text-center" style={{
              backgroundColor: 'rgba(220, 38, 38, 0.2)',
              border: '2px solid rgb(220, 38, 38)',
              color: 'rgb(220, 38, 38)',
              fontWeight: 'bold'
            }}>
              Please sign in or register
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Username */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2 ml-1">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-5 py-3.5 rounded-2xl placeholder-gray-400 focus:outline-none transition-all"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 1)',
                  border: '2px solid #FFB6C1',
                  color: '#FF1493'
                }}
                placeholder="Enter your username"
                onFocus={(e) => e.target.style.border = '2px solid #FF1493'}
                onBlur={(e) => e.target.style.border = '2px solid #FFB6C1'}
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2 ml-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-5 py-3.5 rounded-2xl placeholder-gray-400 focus:outline-none transition-all"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 1)',
                  border: '2px solid #FFB6C1',
                  color: '#FF1493'
                }}
                placeholder="Enter your password"
                onFocus={(e) => e.target.style.border = '2px solid #FF1493'}
                onBlur={(e) => e.target.style.border = '2px solid #FFB6C1'}
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full rounded-full font-bold transition-all hover:scale-[1.02] active:scale-95 mt-6 text-white"
              style={{
                background: 'linear-gradient(to right, #FF1493, #FF69B4)',
                boxShadow: '0 10px 30px rgba(255, 20, 147, 0.3)',
                padding: '1.25rem',
                fontSize: '1.5rem'
              }}
            >
              Log-In
            </button>
          </form>

          {/* Register Section */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm mb-3">
              To create an account
            </p>
            <Link href={'/pages/Register'}>
            <button
              type="button"
              className="w-full rounded-full font-semibold transition-all hover:scale-[1.02] active:scale-95"
              style={{
                backgroundColor: 'white',
                border: '2px solid #FF1493',
                color: '#FF1493',
                padding: '0.875rem',
                fontSize: '1.125rem'
              }}
            >
              Register
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Log
