"use client";

import Link from "next/dist/client/link";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [registerHover, setRegisterHover] = useState(false);
  const [loginHover, setLoginHover] = useState(false);

  return (
    <div className="relative flex h-screen items-center justify-center font-sans overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/fakevid1.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 text-center" style={{ marginTop: '-5rem' }}>
        <h1 className="font-bold text-white" style={{
          fontSize: 'clamp(4rem, 15vw, 12rem)',
          background: 'linear-gradient(to right, white, rgb(236, 72, 153))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          fontWeight: '900',
          letterSpacing: '-0.02em'
        }}>
          Anthem
        </h1>
        <p className="text-xl md:text-2xl relative z-20" style={{ 
          color: 'white', 
          marginTop: 'clamp(-2rem, -5vw, -10rem)' 
        }}>
          the most Anonymous site in the world ;)
        </p>
        <div className="flex flex-col md:flex-row justify-center mt-8 relative z-20 px-4 md:px-0" style={{ gap: '0.5rem' }}>
          <Link href="/pages/Register">
          <button 
            className="font-semibold rounded-full transition-all w-full md:w-auto"
            onMouseEnter={() => setRegisterHover(true)}
            onMouseLeave={() => setRegisterHover(false)}
            style={{
              backgroundColor: registerHover ? 'white' : 'rgba(255, 255, 255, 0.2)',
              color: registerHover ? 'black' : 'white',
              backdropFilter: 'blur(10px)',
              padding: '1rem 2rem',
              fontSize: '1.5rem'
            }}
          >
            Register
          </button>
          </Link>

          
         <Link href={"/pages/Login"}>
          <button 
            className="font-semibold rounded-full transition-all w-full md:w-auto"
            onMouseEnter={() => setLoginHover(true)}
            onMouseLeave={() => setLoginHover(false)}
            style={{
              backgroundColor: loginHover ? 'rgb(220, 38, 38)' : 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              backdropFilter: 'blur(10px)',
              padding: '1rem 2rem',
              fontSize: '1.5rem'
            }}
          >
            Log-In
          </button>
          </Link>
        </div>
        <div className="flex justify-center mt-6 relative z-20">
          <Image 
            src="/fakelogo.png" 
            alt="Logo" 
            width={80} 
            height={80}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
