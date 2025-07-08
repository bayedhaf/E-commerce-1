"use client"

import React from 'react'
import Link from 'next/link'

const login = () => {
  return (
    <div className='bg-stone-100 h-lvh text-stone-800 flex items-center justify-center'>
      <div className="pt-20">
        <div className="bg-white w-[300px] text-center p-6 rounded-lg shadow-lg">
          <form action="" className="space-y-4">
            <h1 className="text-stone-800 text-2xl font-bold mb-4">Login</h1>
            <div className="text-left space-y-3">
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input 
                type="text" 
                className="w-full p-2 rounded bg-stone-200 text-stone-800 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-600"
                id="email" 
                name="email" 
                required 
                placeholder="Enter your email..."
              />

              <label htmlFor="password" className="block text-sm font-medium">Password:</label>
              <input 
                type="password" 
                className="w-full p-2 rounded bg-stone-200 text-stone-800 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-600"
                id="password" 
                name="password" 
                required 
                placeholder="Enter your password ..."
              />

              <input 
                type="submit" 
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded cursor-pointer transition-colors duration-200"
                value="Submit"
              />

              <p className="text-sm text-stone-600">Dont have an account?</p>
              <Link href="/" className="text-amber-700 hover:text-amber-800 text-sm underline">Register</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default login
