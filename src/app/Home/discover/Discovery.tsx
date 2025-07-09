import React from 'react'

const Discovery = () => {
  return (
   <div className="flex flex-row justify-around items-center bg-amber-100 h-90">
    <div className="">image</div>
    <div className="w-64 h-[220px]  bg-zinc-100 flex flex-col  gap-2.5">
      <p className="text-sm ml-6">New arrivel</p>
      <h1 className="text-cyan-950 font-bold text-2xl ml-7"> Discover Our <br/>New Collection</h1>
      <p className="ml-7">all product collection si here</p>
      <button className="bg-cyan-950 text-center text-white rounded-2xl mt-6 ml-6 w-[100px] h-[30px]">Buy Now</button>
    </div>
   </div>
  )
}

export default Discovery
