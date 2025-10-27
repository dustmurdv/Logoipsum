import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path
  const isHomePage = location.pathname === '/'

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
     {/* Header */}
      <header className="px-4 sm:px-6 lg:px-24 py-4 sm:py-6 flex items-center justify-between relative z-10">
        {/* Top Left */}
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-3">
            <h1 className="text-xl sm:text-2xl font-bold text-black">Logoipsum</h1>
          </Link>
        </div>

        {/* Навигация по рабочему столу */}
        <nav className="hidden lg:flex gap-6 items-center">
          <Link 
            to="/" 
            className={`pb-1 font-medium transition-colors ${
              isActive('/') 
                ? 'text-black border-b-2 border-blue-500' 
                : 'text-gray-600 hover:text-black'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/features" 
            className={`pb-1 font-medium transition-colors ${
              isActive('/features') 
                ? 'text-black border-b-2 border-blue-500' 
                : 'text-gray-600 hover:text-black'
            }`}
          >
            Features
          </Link>
          <Link 
            to="/pricing" 
            className={`pb-1 font-medium transition-colors ${
              isActive('/pricing') 
                ? 'text-black border-b-2 border-blue-500' 
                : 'text-gray-600 hover:text-black'
            }`}
          >
            Pricing
          </Link>
          <Link 
            to="/blog" 
            className={`pb-1 font-medium transition-colors ${
              isActive('/blog') 
                ? 'text-black border-b-2 border-blue-500' 
                : 'text-gray-600 hover:text-black'
            }`}
          >
            Blog
          </Link>
        </nav>

        {/* Top Right Elements */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button className="hidden sm:block bg-orange-500 text-white px-4 sm:px-6 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors text-sm sm:text-base">
            Get Started
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-16 left-0 right-0 bg-white border-t border-gray-200 z-20 transition-all duration-300 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <nav className="flex flex-col px-4 py-4 space-y-3">
          <Link 
            to="/" 
            className={`text-lg pb-1 font-medium ${
              isActive('/') 
                ? 'text-black border-b-2 border-blue-500' 
                : 'text-gray-600 hover:text-black'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/features" 
            className={`text-lg pb-1 font-medium ${
              isActive('/features') 
                ? 'text-black border-b-2 border-blue-500' 
                : 'text-gray-600 hover:text-black'
            }`}
          >
            Features
          </Link>
          <Link 
            to="/pricing" 
            className={`text-lg pb-1 font-medium ${
              isActive('/pricing') 
                ? 'text-black border-b-2 border-blue-500' 
                : 'text-gray-600 hover:text-black'
            }`}
          >
            Pricing
          </Link>
          <Link 
            to="/blog" 
            className={`text-lg pb-1 font-medium ${
              isActive('/blog') 
                ? 'text-black border-b-2 border-blue-500' 
                : 'text-gray-600 hover:text-black'
            }`}
          >
            Blog
          </Link>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors mt-4 text-center">
            Get Started
          </button>
        </nav>
      </div>

      {/* Основное содержание */}
      {children}
    </div>
  )
}

export default Layout

