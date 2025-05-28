import React from 'react'
import { NavLink } from 'react-router-dom'

function Register() {
  return (
   <>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#1db06a] to-[#0e8f7a] p-4">
    <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-8">
      <div className="flex justify-center mb-4">
        <i className="fas fa-user-plus text-[#1db06a] text-4xl"></i>
      </div>
      <h1 className="text-center text-gray-900 font-extrabold text-2xl mb-1">Create Your Account</h1>
      <p className="text-center text-gray-600 mb-6 text-sm">Join us and start selling your products locally.</p>
      <form>
        <label for="mobile" className="flex items-center text-gray-900 font-semibold mb-1 text-sm">
          <i className="fas fa-mobile-alt mr-1"></i> Mobile Number
        </label>
        <input
          id="mobile"
          type="text"
          placeholder="Enter your 10-digit mobile number"
          className="w-full border border-gray-300 rounded-md px-4 py-2 mb-6 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1db06a]"
        />
        <button
          type="submit"
          className="w-full bg-[#2563eb] hover:bg-[#1e40af] text-white font-normal py-3 rounded-md transition-colors duration-300"
        >
          Send OTP
        </button>
      </form>
      <p className="text-center text-gray-600 mt-6 text-sm">
        Already have an account?
        <NavLink to="/login" className="text-[#1db06a] font-semibold hover:underline">Log in</NavLink> 
      </p>
    </div>
  </div></>
  )
}

export default Register