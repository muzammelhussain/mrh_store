# MRH Store - Next.js Item Marketplace

A modern, responsive web application built with Next.js and MongoDB that allows users to browse, view, and manage items in a marketplace setting.

## 🚀 Features

### Core Features
- **Landing Page**: Comprehensive homepage with hero section, features showcase, and call-to-action
- **Authentication**: Secure login system with session management
- **Item Listing**: Public page displaying all available items with responsive grid layout
- **Item Details**: Detailed view of individual items with full specifications
- **Protected Routes**: Add item functionality restricted to authenticated users
- **Responsive Design**: Mobile-first design that works seamlessly on all devices

### Additional Features
- **Toast Notifications**: Real-time user feedback for actions and operations
- **Loading States**: Smooth loading indicators for enhanced user experience
- **Error Handling**: Comprehensive error handling with user-friendly messages
- **Modern UI**: Clean, professional design using Tailwind CSS
- **SEO Optimized**: Proper meta tags and structured data
- **PWA Ready**: Progressive Web App capabilities with manifest

## 🛠 Technologies Used

- **Frontend**: Next.js 16 (App Router), React 19, TypeScript
- **Database**: MongoDB with Mongoose ODM
- **Styling**: Tailwind CSS v4
- **Authentication**: Custom authentication with secure cookies
- **State Management**: React Context API
- **Notifications**: React Hot Toast
- **Images**: Next.js Image optimization with remote patterns
- **Icons**: Custom SVG icons and Heroicons

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mrh-store
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   NEXTAUTH_SECRET=your_secure_secret_key
   NEXTAUTH_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Seed the database (optional)**
   ```bash
   npm run seed
   ```
   This will populate your MongoDB database with sample items.

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🗺 Application Routes

| Route | Access Level | Description |
|-------|-------------|-------------|
| `/` | Public | Landing page with marketing sections |
| `/login` | Public | User authentication page |
| `/items` | Public | Browse all available items |
| `/items/[id]` | Public | Individual item details page |
| `/add-item` | Protected | Create new items (authentication required) |

## 🔐 Authentication

The application features a secure authentication system:

- Session-based authentication with HTTP-only cookies
- Protected routes for sensitive operations
- Automatic session management and cleanup
- Secure logout functionality

**Note**: Contact the administrator for login credentials.

## 📱 Responsive Design

Fully responsive design optimized for:
- **Mobile**: 320px and up
- **Tablet**: 768px and up  
- **Desktop**: 1024px and up
- **Large Screens**: 1280px and up

## 🎨 Component Architecture

### Reusable Components
- **Navbar**: Responsive navigation with authentication state
- **Footer**: Site-wide footer with branding and links
- **ItemCard**: Reusable item display with hover effects
- **ProtectedRoute**: Higher-order component for route protection

### Page Components
- **HomePage**: Marketing landing page with multiple sections
- **LoginPage**: Authentication form with validation
- **ItemsPage**: Item listing with grid layout and animations
- **ItemDetailPage**: Detailed item view with image optimization
- **AddItemPage**: Protected item creation form

## 🔧 Development

### Database Integration

- **MongoDB Atlas**: Cloud-hosted MongoDB database
- **Mongoose ODM**: Schema validation and query optimization
- **Connection Pooling**: Optimized for serverless environments
- **Data Validation**: Server-side validation for all operations

### API Architecture

RESTful API endpoints using Next.js App Router:

- `GET /api/items` - Retrieve all items
- `GET /api/items/[id]` - Retrieve specific item
- `POST /api/items` - Create new item (protected)

### Project Structure
```
src/
├── app/                 # Next.js App Router
│   ├── api/            # API routes
│   ├── items/          # Item-related pages
│   ├── login/          # Authentication pages
│   └── add-item/       # Protected pages
├── components/          # Reusable React components
├── context/            # React Context providers
├── lib/                # Utilities and database connection
├── models/             # Mongoose schemas
└── types/              # TypeScript definitions
```

### Key Configuration Files
- `next.config.ts` - Next.js configuration with image domains
- `tailwind.config.js` - Tailwind CSS customization
- `tsconfig.json` - TypeScript configuration
- `eslint.config.mjs` - ESLint rules and settings


## 🔮 Future Enhancements

- **Advanced Search**: Full-text search with filters and sorting
- **User Profiles**: Personal dashboards and preferences
- **Shopping Cart**: Add to cart and checkout functionality
- **Payment Integration**: Secure payment processing
- **Admin Dashboard**: Content management and analytics
- **Email Notifications**: Automated user communications
- **Image Upload**: Direct image upload to cloud storage
- **Social Features**: Reviews, ratings, and sharing

## 🛡️ Security Features

- **Input Validation**: Server-side validation for all inputs
- **CSRF Protection**: Cross-site request forgery prevention
- **Secure Headers**: Security headers for production
- **Environment Variables**: Sensitive data protection
- **Session Security**: Secure cookie configuration

## 📊 Performance Optimizations

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting and lazy loading
- **Caching**: Optimized caching strategies
- **Bundle Analysis**: Webpack bundle optimization
- **Database Indexing**: Optimized database queries

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -m 'Add new feature'`)
4. Push to branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📞 Support

For technical support or questions, please create an issue in the repository or contact the development team.