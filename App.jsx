import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

// Lazy load page components
const Home = lazy(() => import('./pages/Home'))
const Features = lazy(() => import('./pages/Features'))
const Pricing = lazy(() => import('./pages/Pricing'))
const Blog = lazy(() => import('./pages/Blog'))

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Suspense fallback={<LoadingSpinner />}><Home /></Suspense></Layout>} />
        <Route path="/features" element={<Layout><Suspense fallback={<LoadingSpinner />}><Features /></Suspense></Layout>} />
        <Route path="/pricing" element={<Layout><Suspense fallback={<LoadingSpinner />}><Pricing /></Suspense></Layout>} />
        <Route path="/blog" element={<Layout><Suspense fallback={<LoadingSpinner />}><Blog /></Suspense></Layout>} />
      </Routes>
    </Router>
  )
}

// Загрузка компонента счетчика
const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  )
}

export default App