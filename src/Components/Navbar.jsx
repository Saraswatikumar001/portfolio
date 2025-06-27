import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className="bg-white rounded-full shadow-md py-3 px-6 flex items-center justify-between mx-auto mt-4 max-w-6xl">
                <div className="flex items-center space-x-2">
                    <div className="bg-orange-500 text-white font-bold w-10 h-10 flex items-center justify-center rounded-full">
                        SK
                    </div>
                    <span className="text-2xl font-semibold text-orange-500">Saraswati</span>
                </div>
                <ul className="hidden md:flex space-x-6 text-sm font-medium text-black">
                    <li className="hover:text-orange-500 cursor-pointer">Home</li>
                    <li className="hover:text-orange-500 cursor-pointer">Services</li>
                    <li className="hover:text-orange-500 cursor-pointer">Portfolio</li>
                    <li className="text-orange-500 cursor-pointer font-semibold">About</li>
                    <li className="hover:text-orange-500 cursor-pointer">Contact</li>
                    <li className="hover:text-orange-500 cursor-pointer">Pages ▾</li>
                </ul>
                <button className="bg-orange-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow hover:bg-orange-600 transition">
                    Let's Talk →
                </button>
            </div>
        </>
    )
}

export default Navbar
