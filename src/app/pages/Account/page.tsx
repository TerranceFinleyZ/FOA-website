import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6" style={{ backgroundColor: 'black' }}>
      <div className="max-w-3xl text-center">
        <p className="text-2xl leading-relaxed" style={{ color: 'white' }}>
          Due to recent policies enacted in your state, this <span style={{ color: '#FF69B4', fontWeight: 'bold' }}>adult</span> site cannot accept new accounts without first verifying your information. This measure is in place to ensure the safety and security of both you and other users.
          <br /><br />
          Please make sure all the information you provide is accurate and up to date when creating your account.
          <br /><br />
          <span style={{ color: '#00BFFF', fontWeight: 'bold' }}>Thank you for your understanding.</span>
        </p>
        <Link href="/pages/Register">
          <button 
            className="mt-8 rounded-full font-bold transition-all hover:scale-105"
            style={{
              background: 'linear-gradient(to right, #FF0000, #DC143C)',
              color: 'white',
              padding: '1rem 3rem',
              fontSize: '1.25rem'
            }}
          >
            Try Again
          </button>
        </Link>
      </div>
    </div>
  )
}

export default page
