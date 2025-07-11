'use client'

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import furn1 from '../../../../public/images/furn1.jpg'
import furn2 from '../../../../public/images/furn2.jpg'
import furn3 from '../../../../public/images/furn3.jpg'

const ProductView = () => {
  return (
    <div className="flex flex-col items-center justify-around py-12 bg-gradient-to-b from-white to-slate-100">
   
      <div className="flex flex-col items-center gap-3 text-center">
        <h1 className="text-4xl font-extrabold text-cyan-900">Inspiration Collection</h1>
        <p className="text-gray-500 text-base">All materials are available</p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-10 px-6 w-full max-w-7xl">
        {[furn1, furn2, furn3].map((imgSrc, index) => (
          <Link key={index} href="/" className="group">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 + index * 0.2 }}
              className="overflow-hidden rounded-3xl shadow-lg bg-white hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <Image
                src={imgSrc}
                alt={`Furniture ${index + 1}`}
                width={400}
                height={250}
                className="object-cover group-hover:opacity-90 transition-opacity duration-300"
              />
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ProductView
