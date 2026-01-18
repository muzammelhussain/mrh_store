import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section with Professional Gradient */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-indigo-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-7xl font-extrabold mb-8 animate-fade-in-up bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
            MRH Store
          </h1>
          <p className="text-2xl mb-10 max-w-3xl mx-auto animate-fade-in-up animation-delay-200 text-slate-200 font-light leading-relaxed">
            Experience the future of digital commerce with our premium marketplace platform designed for modern businesses and discerning customers.
          </p>
          <div className="space-x-6 animate-fade-in-up animation-delay-400">
            <Link
              href="/items"
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 hover:shadow-2xl shadow-lg"
            >
              Explore Collection
            </Link>
            <Link
              href="/login"
              className="inline-block border-2 border-white/30 backdrop-blur-sm text-white px-10 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section with Modern Cards */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-800 mb-6">Why Choose MRH Store?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              Discover the advantages that set us apart in the digital marketplace landscape
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="group text-center bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-slate-100">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">Smart Discovery</h3>
              <p className="text-slate-600 leading-relaxed">Advanced AI-powered search and intelligent filtering system that understands your preferences and delivers personalized results.</p>
            </div>
            
            <div className="group text-center bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-slate-100 animation-delay-200">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">Enterprise Security</h3>
              <p className="text-slate-600 leading-relaxed">Bank-level encryption and multi-layered security protocols ensure your data and transactions remain completely protected.</p>
            </div>
            
            <div className="group text-center bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-slate-100 animation-delay-400">
              <div className="bg-gradient-to-br from-violet-500 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">Lightning Performance</h3>
              <p className="text-slate-600 leading-relaxed">Built on cutting-edge technology stack with global CDN and optimized infrastructure for sub-second loading times.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section with Professional Design */}
      <section className="py-20 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Trusted by Thousands</h2>
            <p className="text-xl text-slate-300">Join our growing community of satisfied customers</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-110 transition-transform duration-300 p-6 rounded-xl bg-white/5 backdrop-blur-sm">
              <div className="text-6xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">25K+</div>
              <div className="text-slate-300 text-lg font-medium">Active Users</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300 p-6 rounded-xl bg-white/5 backdrop-blur-sm">
              <div className="text-6xl font-bold mb-3 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">150K+</div>
              <div className="text-slate-300 text-lg font-medium">Items Listed</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300 p-6 rounded-xl bg-white/5 backdrop-blur-sm">
              <div className="text-6xl font-bold mb-3 bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">99.9%</div>
              <div className="text-slate-300 text-lg font-medium">Uptime</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300 p-6 rounded-xl bg-white/5 backdrop-blur-sm">
              <div className="text-6xl font-bold mb-3 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">24/7</div>
              <div className="text-slate-300 text-lg font-medium">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-800 mb-6">Explore Categories</h2>
            <p className="text-xl text-slate-600 font-light">Discover our curated collection across diverse product categories</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Electronics', icon: '💻', color: 'from-blue-500 to-indigo-600', bg: 'bg-blue-50' },
              { name: 'Fashion', icon: '👔', color: 'from-pink-500 to-rose-600', bg: 'bg-pink-50' },
              { name: 'Home & Kitchen', icon: '🏠', color: 'from-emerald-500 to-teal-600', bg: 'bg-emerald-50' },
              { name: 'Sports', icon: '⚽', color: 'from-orange-500 to-amber-600', bg: 'bg-orange-50' },
            ].map((category, index) => (
              <Link
                key={category.name}
                href="/items"
                className={`group relative overflow-hidden ${category.bg} rounded-3xl p-10 text-center transform hover:scale-105 transition-all duration-500 hover:shadow-2xl border border-slate-100`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-6xl mb-6 group-hover:scale-125 transition-transform duration-300">{category.icon}</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{category.name}</h3>
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl`}></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-800 mb-6">How It Works</h2>
            <p className="text-xl text-slate-600 font-light">Get started with our streamlined three-step process</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: '01', title: 'Discover', desc: 'Browse our extensive catalog of premium items across multiple categories with advanced filtering options.' },
              { step: '02', title: 'Connect', desc: 'Create your account to unlock personalized features, save favorites, and access exclusive member benefits.' },
              { step: '03', title: 'Manage', desc: 'List your own items, manage inventory, and connect with a global community of buyers and sellers.' }
            ].map((item, index) => (
              <div key={item.step} className="relative text-center group" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="relative inline-block mb-8">
                  <div className="bg-gradient-to-br from-slate-700 to-slate-900 text-white w-24 h-24 rounded-2xl flex items-center justify-center mx-auto text-2xl font-bold shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110">
                    {item.step}
                  </div>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-slate-300 to-slate-200"></div>
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-800 mb-6">Customer Stories</h2>
            <p className="text-xl text-slate-600 font-light">Hear from our satisfied customers worldwide</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mr-6 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  SJ
                </div>
                <div>
                  <h4 className="font-bold text-xl text-slate-800">Sarah Johnson</h4>
                  <p className="text-slate-600">CEO, TechStart Inc.</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-700 text-lg leading-relaxed italic">&ldquo;MRH Store has transformed our procurement process. The platform&apos;s intuitive design and powerful features have streamlined our operations significantly.&rdquo;</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-purple-100 animation-delay-200">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mr-6 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  MC
                </div>
                <div>
                  <h4 className="font-bold text-xl text-slate-800">Michael Chen</h4>
                  <p className="text-slate-600">Professional Collector</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-700 text-lg leading-relaxed italic">&ldquo;The discovery features are exceptional. I&apos;ve found rare items I never knew existed, and the community aspect makes collecting even more enjoyable.&rdquo;</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">Stay Connected</h2>
          <p className="text-xl mb-10 text-slate-300 font-light">Subscribe to receive exclusive updates, insider deals, and product launches</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-8 py-4 rounded-xl text-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-500/50 shadow-lg font-medium"
            />
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-80 h-80 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float animation-delay-2000"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">Ready to Begin?</h2>
          <p className="text-2xl mb-12 text-slate-200 font-light max-w-3xl mx-auto leading-relaxed">Join thousands of professionals who trust MRH Store for their business needs and personal collections.</p>
          <Link
            href="/login"
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-12 py-5 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 hover:shadow-2xl text-xl shadow-lg"
          >
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
  );
}