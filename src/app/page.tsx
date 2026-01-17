import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section with Gradient Animation */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl font-bold mb-6 animate-fade-in-up">
            Welcome to MRH Store
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Discover amazing products, manage your inventory, and connect with a community of item enthusiasts.
          </p>
          <div className="space-x-4 animate-fade-in-up animation-delay-400">
            <Link
              href="/items"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 hover:shadow-xl"
            >
              Browse Items
            </Link>
            <Link
              href="/login"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section with Cards Animation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Why Choose MRH Store?</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Experience the future of online shopping with our cutting-edge features
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group text-center bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Discovery</h3>
              <p className="text-gray-600">Find exactly what you're looking for with our intuitive search and filtering system.</p>
            </div>
            
            <div className="group text-center bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animation-delay-200">
              <div className="bg-gradient-to-br from-green-400 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Platform</h3>
              <p className="text-gray-600">Your data and transactions are protected with enterprise-grade security.</p>
            </div>
            
            <div className="group text-center bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animation-delay-400">
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Built with modern technology for blazing fast performance and user experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section with Counter Animation */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold mb-2 animate-pulse">10K+</div>
              <div className="text-blue-100">Active Users</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold mb-2 animate-pulse animation-delay-200">50K+</div>
              <div className="text-blue-100">Items Listed</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold mb-2 animate-pulse animation-delay-400">99.9%</div>
              <div className="text-blue-100">Uptime</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold mb-2 animate-pulse animation-delay-600">24/7</div>
              <div className="text-blue-100">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Shop by Category</h2>
          <p className="text-center text-gray-600 mb-12">Explore our diverse range of products</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Electronics', icon: '💻', color: 'from-blue-400 to-blue-600' },
              { name: 'Fashion', icon: '👔', color: 'from-pink-400 to-pink-600' },
              { name: 'Home & Kitchen', icon: '🏠', color: 'from-green-400 to-green-600' },
              { name: 'Sports', icon: '⚽', color: 'from-orange-400 to-orange-600' },
            ].map((category, index) => (
              <Link
                key={category.name}
                href="/items"
                className={`group relative overflow-hidden bg-gradient-to-br ${category.color} rounded-2xl p-8 text-white text-center transform hover:scale-105 transition-all duration-300 hover:shadow-2xl`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl mb-3 group-hover:scale-125 transition-transform duration-300">{category.icon}</div>
                <h3 className="text-xl font-semibold">{category.name}</h3>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-center text-gray-600 mb-12">Get started in three simple steps</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Browse Items', desc: 'Explore our vast collection of items across different categories.' },
              { step: '2', title: 'Create Account', desc: 'Sign up to unlock advanced features and start managing your items.' },
              { step: '3', title: 'Add & Manage', desc: 'List your own items and manage your inventory with ease.' }
            ].map((item, index) => (
              <div key={item.step} className="relative text-center group" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="relative inline-block">
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12">
                    {item.step}
                  </div>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section with Slide Animation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">What Our Users Say</h2>
          <p className="text-center text-gray-600 mb-12">Join thousands of satisfied customers</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mr-4 flex items-center justify-center text-white text-2xl font-bold">
                  SJ
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Sarah Johnson</h4>
                  <p className="text-gray-600 text-sm">Small Business Owner</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic">"MRH Store has revolutionized how I manage my inventory. The interface is intuitive and the features are exactly what I needed."</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animation-delay-200">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mr-4 flex items-center justify-center text-white text-2xl font-bold">
                  MC
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Mike Chen</h4>
                  <p className="text-gray-600 text-sm">Collector</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic">"I love how easy it is to discover new items and connect with other collectors. The platform is fast and reliable."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8">Subscribe to our newsletter for exclusive deals and updates</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-4 focus:ring-purple-300"
            />
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 hover:shadow-xl">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Trusted By Industry Leaders</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="bg-gray-200 h-20 rounded-lg flex items-center justify-center text-gray-400 font-bold text-xl">
                  BRAND {i}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Parallax Effect */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-xl opacity-20 animate-float"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-xl opacity-20 animate-float animation-delay-2000"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Join thousands of users who trust MRH Store for their item management needs.</p>
          <Link
            href="/login"
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 hover:shadow-2xl text-lg"
          >
            Sign Up Today
          </Link>
        </div>
      </section>
    </div>
  );
}