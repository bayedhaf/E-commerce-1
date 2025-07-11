'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import furn2 from '../../../../public/images/furn1.jpg'

const Discovery = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center bg-purple-100 h-auto md:h-[360px] py-10 px-6 gap-8">
      
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      >
        <Image
          src={furn2}
          alt="Furniture"
          width={500}
          height={500}

          className=" object-cover"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="w-full max-w-xs bg-zinc-100 flex flex-col gap-4 rounded-xl p-6 shadow-md"
      >
        <p className="text-xs text-gray-500 uppercase tracking-widest">New Arrival</p>
        <h1 className="text-cyan-950 font-bold text-3xl leading-snug">
          Discover Our <br /> New Collection
        </h1>
        <p className="text-gray-600 text-sm">All product collections are here.</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-cyan-950 text-white rounded-full mt-4 w-[110px] h-[36px] hover:bg-cyan-900 transition-colors"
        >
          Buy Now
        </motion.button>
      </motion.div>
    </div>
  )
}

export default Discovery
