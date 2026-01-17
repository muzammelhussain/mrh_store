export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">MRH Store</h3>
            <p className="text-gray-300">
              Your one-stop shop for amazing items and products.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="/items" className="text-gray-300 hover:text-white">Items</a></li>
              <li><a href="/login" className="text-gray-300 hover:text-white">Login</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-300">Email: info@mrhstore.com</p>
            <p className="text-gray-300">Phone: (555) 123-4567</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 MRH Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}