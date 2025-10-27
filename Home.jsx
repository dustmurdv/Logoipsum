import React from 'react'

const Home = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Main Hero Section */}
      <main className="px-4 sm:px-6 lg:px-24 pb-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-8 lg:gap-12 min-h-[400px] lg:min-h-[600px] mt-4 sm:mt-8">
          {/* Left Content */}
          <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 w-full lg:max-w-xl relative order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight text-center lg:text-left">
              Grow your subscription business
            </h2>
            
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-center lg:text-left">
              Outcome-centered products that reduce churn, optimize pricing, and grow your subscription business end-to-end.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 relative">
              <button className="bg-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-purple-700 transition-colors shadow-lg w-full sm:w-auto">
                Get Started
              </button>
              
              <button className="w-14 h-14 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Правильный контент — иллюстрация камеры */}
          <div className="relative shrink-0 w-full lg:w-auto order-1 lg:order-2">
            <img 
              src="/98499ffc1b3fba0c358d817c234014c0df076478.png" 
              alt="Man" 
              className="w-full lg:w-auto h-auto lg:h-[600px] object-contain max-h-[400px] lg:max-h-none" 
            />
          </div>
        </div>
      </main>

      {/* Раздел индекса подписки */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-24 xl:px-48 py-12 sm:py-16 lg:py-24 relative bg-white z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 sm:gap-12 min-h-[400px] lg:min-h-[500px]">
          {/* Левая часть — символ и круговая диаграмма */}
          <div className="relative w-full lg:w-1/2 flex justify-center order-1 lg:order-1">
            {/* 3D-персонаж с калькулятором и карандашом */}
            <div className="relative">
              <img 
                src="/0ab1242ac4a180174cf6c50570fb18ce40e8dcd1.png" 
                alt="3D Character with Calculator" 
                className="h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-contain w-full ml-24" 
              />
              
              {/* Круговая диаграмма — расположена рядом с символом */}
              <div className="absolute top-8 left-0 sm:top-16 sm:-left-8 lg:-left-12 lg:top-16">
                <img 
                  src="/fce5259a0de262038624256f6e202d8075460f3b.png" 
                  alt="Pie Chart" 
                  className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-40 object-contain" 
                />
              </div>
            </div>
          </div>

          {/* Правая часть — текстовое содержимое */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-6 lg:pt-8 xl:pt-16 relative order-2 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight text-center lg:text-left">
              Subscription index
            </h2>
            
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-center lg:text-left">
              A daily dataset to keep you up to date on subscription market trends and what's happening in your vertical.
            </p>
            
            <a href="#" className="text-blue-600 underline font-medium text-base sm:text-lg hover:text-blue-700 transition-colors inline-block w-fit mx-auto lg:mx-0">
              Learn more →
            </a>
          </div>
        </div>
      </section>

      {/* Раздел углубленных метрик */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-24 xl:px-48 py-12 sm:py-16 lg:py-24 relative bg-white z-10">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 min-h-[400px] lg:min-h-[600px] relative z-10">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-6 lg:pt-8 xl:pt-16 relative order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight text-center lg:text-left">
              In-depth metrics
            </h2>       
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-center lg:text-left">
              Accurate, real-time reporting at your fingertips. Getting data has never been easier.
            </p>    
            <a href="#" className="text-blue-600 font-medium text-base sm:text-lg hover:text-blue-700 transition-colors inline-block w-fit mx-auto lg:mx-0">
              Learn more
            </a>
          </div>

          {/* Правая часть — 3D-персонаж с гистограммой */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end order-1 lg:order-2">
            <img 
              src="/b1a98a5ec18fc58cc0a4a99c23b3bcc5cf61baeb.png" 
              alt="3D Character with Data Visualization" 
              className="h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-contain w-full" 
            />
          </div>
          <div className="absolute top-8 right-0 sm:top-16 sm:-right-8 lg:-right-12 xl:top-8 mr-24 z-20">
            <img 
              src="/d00ee13d521da49f062512d1acf5c94fdfabe7ed (1).png" 
              alt="Chart" 
              className="w-24 h-24 sm:w-24 sm:h-32 lg:w-48 lg:h-64" 
            />
          </div>
          
        </div>

        {/* Bottom Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 relative z-10">
          {/* Benchmarks Card */}
          <div className="flex flex-col gap-4">
            <div className="w-32 h-24 rounded-lg flex items-center justify-center">
              <img 
                src="/5798edd4e6ead9ff54aaad4374e4c8d51be0b155.png" 
                alt="Credit Card Icon" 
                className="w-48 h-48 object-contain" 
              />
            </div>
            <h3 className="text-2xl font-bold text-black">Benchmarks</h3>
            <p className="text-gray-600 leading-relaxed">
              See how you stack up against comparable companies in similar stages.
            </p>
          </div>

          {/* Pricing Audit Card */}
          <div className="flex flex-col gap-4">
            <div className="w-32 h-24 rounded-lg flex items-center justify-center">
              <img 
                src="/63e99acf9f819a06b62de9c905d7094140b239b0.png" 
                alt="Calculator Icon" 
                className="w-48 h-48 object-contain" 
              />
            </div>
            <h3 className="text-2xl font-bold text-black">Pricing Audit</h3>
            <p className="text-gray-600 leading-relaxed">
              Benchmark the health of your monetization and pricing strategy.
            </p>
          </div>

          {/* Retention Audit Card */}
          <div className="flex flex-col gap-4">
            <div className="w-32 h-24 rounded-lg flex items-center justify-center">
              <img 
                src="/30430051051f30f3fc58f9a4e5c7c957aeef5a09.png" 
                alt="Package Icon" 
                className="w-48 h-48 object-contain" 
              />
            </div>
            <h3 className="text-2xl font-bold text-black">Retention Audit</h3>
            <p className="text-gray-600 leading-relaxed">
              Audit where revenue leakage exists and where you can increase retention.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

