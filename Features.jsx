import React from 'react'

const Features = () => {
  return (
    <div className="min-h-screen bg-white py-24 px-4 sm:px-6 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold text-black mb-4 text-center">
          Features
        </h1>
        <p className="text-xl text-gray-600 mb-16 text-center">
          Discover what makes us the best choice for your subscription business
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {/* Feature 1 */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">Advanced Analytics</h3>
            <p className="text-gray-600 leading-relaxed">
              Get detailed insights into your subscription metrics with real-time analytics.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">Flexible Billing</h3>
            <p className="text-gray-600 leading-relaxed">
              Support for monthly, yearly, and custom billing cycles tailored to your needs.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">Secure Platform</h3>
            <p className="text-gray-600 leading-relaxed">
              Enterprise-grade security with encryption and compliance with industry standards.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-orange-600 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">Revenue Growth</h3>
            <p className="text-gray-600 leading-relaxed">
              Increase revenue with intelligent pricing strategies and churn reduction.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-pink-600 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">Customer Retention</h3>
            <p className="text-gray-600 leading-relaxed">
              Advanced tools to understand and improve customer retention rates.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-indigo-600 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">Subscription Index</h3>
            <p className="text-gray-600 leading-relaxed">
              Daily datasets to keep you updated on market trends and industry insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features

