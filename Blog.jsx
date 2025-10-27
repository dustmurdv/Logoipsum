import React from 'react'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Grow Your Subscription Business in 2024",
      excerpt: "Discover the latest strategies and trends for building a successful subscription business this year.",
      category: "Business",
      date: "January 15, 2024",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Understanding Churn Rate and How to Reduce It",
      excerpt: "Learn about churn rate metrics and actionable strategies to improve customer retention.",
      category: "Analytics",
      date: "January 12, 2024",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Pricing Strategies That Increase Revenue",
      excerpt: "Explore proven pricing strategies that can help you maximize revenue for your subscription service.",
      category: "Revenue",
      date: "January 10, 2024",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "The Future of Subscription Models",
      excerpt: "Looking ahead at emerging trends and innovations in the subscription economy.",
      category: "Trends",
      date: "January 8, 2024",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "Customer Success Metrics You Should Track",
      excerpt: "Identify and track the key metrics that indicate customer success and satisfaction.",
      category: "Success",
      date: "January 5, 2024",
      readTime: "5 min read"
    },
    {
      id: 6,
      title: "Building a Subscription Index Dashboard",
      excerpt: "Step-by-step guide to creating comprehensive dashboards for subscription analytics.",
      category: "Tools",
      date: "January 3, 2024",
      readTime: "9 min read"
    }
  ]

  return (
    <div className="min-h-screen bg-white py-24 px-4 sm:px-6 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Blog
          </h1>
          <p className="text-xl text-gray-600">
            Insights, tips, and strategies for your subscription business
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                <svg className="w-16 h-16 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-2 group-hover:text-purple-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                  <button className="text-purple-600 font-semibold hover:text-purple-700 flex items-center gap-2">
                    Read more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Кнопка «Загрузить больше» */}
        <div className="text-center mt-12">
          <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
            Load More Articles
          </button>
        </div>

        {/* Раздел новостной рассылки */}
        <div className="mt-24 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-lg opacity-90 mb-6 max-w-xl mx-auto">
            Get the latest insights, tips, and strategies delivered to your inbox weekly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-black outline-none"
            />
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog

