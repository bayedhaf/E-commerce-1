"use client"

import React from 'react'


const login = () => {
  return (
    <div className='bg-black text-white '>
      <div className="">
        <div className="">
          <form action="" className="">
            <h1 className="text-">Login</h1>
            <div className="">
              <label htmlFor="">Email</label><br/>
              <input type="text" className="" id="email" name="email" required placeholder="Enter your email..."/>
              <br/>
              <label htmlFor="">Password:</label><br/>
              <input type="text" className="" id="password" name="password" required placeholder="Enter your password ..."/>
              <br/>
              <input type="submit" className="" placeholder="Submit"/>
            </div>
          </form>
        </div>
      </div>
      
    </div>
  )
}

export default login
