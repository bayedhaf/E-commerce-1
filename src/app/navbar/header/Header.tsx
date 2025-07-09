'use client'

import React, { useState } from 'react'
import Link from 'next/link';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/" },
        { name: "Doctors", href: "/" },
        { name: "Products", href: "/" },
        { name: "Gallery", href: "/" },
        { name: "Login", href: "/auth/login" },
        { name: "Create ", href: "/" },
    ];

    return (
        <header className="bg-amber-950 text-white py-4 px-8 shadow-md">
            <nav className="flex justify-between items-center">
                <div className="font-bold text-xl">FURNITURE APP</div>

             
                <div className="sm:hidden">
                    <button
                        className="focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

              
                <ul className={`flex flex-col sm:flex-row gap-3 sm:gap-7 justify-around absolute sm:static top-16 left-0 right-0 bg-amber-950 sm:bg-transparent p-5 sm:p-0 transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'} sm:flex`}>
                    {navLinks.map((link) => (
                        <li key={link.href} className="hover:text-amber-300 transition-colors">
                            <Link href={link.href}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header
