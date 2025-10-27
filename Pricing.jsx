import React, { useState } from 'react'

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly')

  return (
    <div className="min-h-screen bg-white py-24 px-4 sm:px-6 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Заголовок с переключателем */}
        <div className="flex flex-col items-center gap-6 mb-12">          
          {/* Переключение оплаты */}
          <div className="flex items-center gap-4 bg-gray-100 p-2 rounded-lg w-fit">
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                billingPeriod === 'yearly'
                  ? 'bg-purple-600 text-white'
                  : 'bg-transparent text-gray-600'
              }`}
            >
              Yearly
            </button>
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                billingPeriod === 'monthly'
                  ? 'bg-purple-600 text-white'
                  : 'bg-transparent text-gray-600'
              }`}
            >
              Monthly
            </button>
          </div>
        </div>

        {/* Ценовые карты */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-black mb-6">Starter</h3>
            <div className="mb-6">
              <span className="text-5xl font-bold text-black">Free</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="text-gray-600 text-lg">1 Website</li>
              <li className="text-gray-600 text-lg">5 GB Hosting</li>
              <li className="text-gray-600 text-lg">Limited Support</li>
            </ul>
            <button className="w-full bg-transparent border-2 border-purple-600 text-purple-600 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
              Get Started
            </button>
          </div>

          {/* Premium Plan - Highlighted */}
          <div className="bg-orange-500 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative">
            <h3 className="text-2xl font-bold text-white mb-6">Premium</h3>
            <div className="mb-6">
              <span className="text-5xl font-bold text-white">
                ${billingPeriod === 'yearly' ? '29' : '29'}/month
              </span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="text-white text-lg">10 Website</li>
              <li className="text-white text-lg">15 GB Hosting</li>
              <li className="text-white text-lg">Premium Support</li>
            </ul>
            <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
              Get Started
            </button>
          </div>

          {/* План предприятия */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-black mb-6">Enterprise</h3>
            <div className="mb-6">
              <span className="text-5xl font-bold text-black">
                ${billingPeriod === 'yearly' ? '49' : '49'}/month
              </span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="text-gray-600 text-lg">Unlimited Website</li>
              <li className="text-gray-600 text-lg">50 GB Hosting</li>
              <li className="text-gray-600 text-lg">Premium Support</li>
            </ul>
            <button className="w-full bg-transparent border-2 border-purple-600 text-purple-600 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing

