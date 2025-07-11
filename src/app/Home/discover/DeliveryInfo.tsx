'use client'
import React from 'react'
import { motion } from 'framer-motion'
const DeliveryInfo = () => {
  return (
    <div className=" w-full h-20 shadow-2xl bg-zinc-100 flex flex-row justify-between items-center">
        <motion.div 
           whileHover={{ scale: 1.05 }}
           whileTap={{ scale: 0.95 }}
        className="pt-3 font-bold rounded-2xl ml-12 items-center text-center shadow-2xl bg-cyan-950 text-white  mt-4 w-[110px] h-[46px] hover:bg-cyan-900 transition-colors">free delivery
        </motion.div>
        <div className="pt-3 font-bold rounded-2xl  items-center text-center shadow-2xl bg-cyan-950 text-white  mt-4 w-[110px] h-[46px] hover:bg-cyan-900 transition-colors">our service</div>
        <div className="pt-3 font-bold rounded-2xl mr-12 items-center text-center shadow-2xl bg-cyan-950 text-white  mt-4 w-[110px] h-[46px] hover:bg-cyan-900 transition-colors">warranty</div>
    </div>
  )
}

export default DeliveryInfo
