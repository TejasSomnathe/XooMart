import React from 'react'
import "tailwindcss";


function Login() {
  return (
   <>
    
   
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#3b6ef8] to-[#4f63f7] px-4">
    <div class="bg-white rounded-xl p-8 max-w-sm w-full shadow-lg">
      <div class="flex justify-center mb-4">
        <i class="fas fa-sign-in-alt text-[#3b6ef8] text-4xl"></i>
      </div>
      <h1 class="text-center font-extrabold text-2xl text-gray-900 mb-1">Welcome Back!</h1>
      <p class="text-center text-gray-500 mb-6">Login to manage your store and products.</p>
      <form>
        <label for="mobile" class="block text-xs font-semibold text-gray-900 mb-1">
          <i class="fas fa-mobile-alt mr-1"></i> Mobile Number
        </label>
        <input
          id="mobile"
          type="text"
          placeholder="Enter your 10-digit mobile number"
          class="w-full border border-gray-300 rounded-md px-3 py-2 mb-6 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3b6ef8]"
        />
        <button
          type="submit"
          class="w-full bg-[#3b6ef8] text-white py-3 rounded-md font-normal text-sm hover:bg-[#345edb] transition-colors"
        >
          Send OTP
        </button>
      </form>
      <p class="text-center text-gray-600 mt-6 text-xs">
        Don't have an account?
        <a href="#" class="text-[#3b6ef8] font-semibold hover:underline">Sign up</a>
      </p>
    </div>
  </div>
 
   </>
  )
}

export default Login