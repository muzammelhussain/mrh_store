# MRH Store - Next.js Item Marketplace

A modern, responsive web application built with Next.js 15 and MongoDB that allows users to browse, view, and manage items in a marketplace setting.

## 🚀 Features

### Core Features
- **Landing Page**: Comprehensive homepage with 7 sections including hero, features, statistics, how it works, testimonials, and call-to-action
- **Authentication**: Mock login system with hardcoded credentials (admin@example.com / password123)
- **Item Listing**: Public page displaying all available items with search and filtering capabilities
- **Item Details**: Detailed view of individual items with full specifications
- **Protected Routes**: Add item functionality restricted to authenticated users
- **Responsive Design**: Mobile-first design that works on all devices

### Additional Features
- **Toast Notifications**: User feedback for actions like login and item creation
- **Loading States**: Smooth loading indicators for better UX
- **Error Handling**: Comprehensive error handling with user-friendly messages
- **Modern UI**: Clean, professional design using Tailwind CSS

## 🛠 Technologies Used

- **Frontend**: Next.js 15 (App Router), React 18, TypeScript
- **Backend**: Express.js API server (optional), Next.js API Routes
- **Database**: MongoDB with Mongoose ODM
- **Styling**: Tailwind CSS
- **Authentication**: Custom mock authentication with cookies
- **State Management**: React Context API
- **Notifications**: React Hot Toast
- **Images**: Next.js Image optimization
- **Icons**: Heroicons (SVG)

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nextjs-item-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   NEXTAUTH_SECRET=your_secret_key
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

6. **Optional: Run the Express.js API server**
   ```bash
   npm run server
   ```
   The API server will run on [http://localhost:3001](http://localhost:3001)

7. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🗺 Route Summary

| Route | Access | Description |
|-------|--------|-------------|
| `/` | Public | Landing page with 7 sections |
| `/login` | Public | Authentication page |
| `/items` | Public | List of all items |
| `/items/[id]` | Public | Individual item details |
| `/add-item` | Protected | Form to add new items (requires login) |

## 🔐 Authentication

The application uses a mock authentication system for demonstration purposes:

- **Email**: `admin@example.com`
- **Password**: `password123`

Authentication state is managed using React Context and stored in browser cookies.

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🎨 UI Components

### Reusable Components
- **Navbar**: Navigation with authentication state
- **Footer**: Site-wide footer with links and information
- **ItemCard**: Reusable item display component
- **ProtectedRoute**: HOC for route protection

### Pages
- **HomePage**: Landing page with marketing sections
- **LoginPage**: Authentication form
- **ItemsPage**: Item listing with grid layout
- **ItemDetailPage**: Individual item view
- **AddItemPage**: Protected item creation form

## 🔧 Development

### MongoDB Integration

The application uses MongoDB for data persistence:
- **Database**: MongoDB Atlas
- **ODM**: Mongoose for schema validation and queries
- **API Routes**: Next.js API routes handle CRUD operations
- **Connection**: Optimized connection pooling for serverless environments

### API Endpoints

- `GET /api/items` - Fetch all items
- `GET /api/items/:id` - Fetch item by ID
- `POST /api/items` - Create new item
- `PUT /api/items/:id` - Update item
- `DELETE /api/items/:id` - Delete item

### Express.js API Server

The project includes an optional Express.js server in the `server/` directory that provides:
- GET `/api/items` - Fetch all items
- GET `/api/items/:id` - Fetch item by ID  
- POST `/api/items` - Create new item

To use the Express server instead of mock data:
1. Run `npm run server` to start the API server
2. Update the API calls in `src/lib/api.ts` to use `http://localhost:3001`

### Project Structure
```
src/
├── app/                 # Next.js App Router pages
│   ├── api/            # API routes for MongoDB operations
├── components/          # Reusable React components
├── context/            # React Context providers
├── lib/                # Utility functions and database connection
├── models/             # Mongoose schemas
└── types/              # TypeScript type definitions
```

### Key Files
- `src/lib/mongodb.ts` - MongoDB connection handler
- `src/models/Item.ts` - Item schema and model
- `src/models/User.ts` - User schema and model
- `src/app/api/items/route.ts` - Items API endpoints
- `src/lib/auth.ts` - Authentication utilities
- `src/context/AuthContext.tsx` - Authentication context
- `src/types/index.ts` - TypeScript interfaces

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Prepare for deployment**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel**
   
   **Option A: Using Vercel CLI**
   ```bash
   npm install -g vercel
   vercel login
   vercel --prod
   ```
   
   **Option B: Using Vercel Dashboard**
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure environment variables (see below)
   - Deploy

3. **Environment Variables Setup**
   
   In your Vercel dashboard, add these environment variables:
   ```
   MONGODB_URI=mongodb+srv://mrh_store:MJy57897eGI6N1y8@keramot.mqb48yw.mongodb.net/mrh_store?retryWrites=true&w=majority&appName=Keramot
   NEXTAUTH_SECRET=your-production-secret-key-here
   NEXTAUTH_URL=https://your-vercel-domain.vercel.app
   ```

4. **Post-deployment**
   - Your app will be available at `https://your-project-name.vercel.app`
   - Run the seed command if needed: `npm run seed`

### Other Deployment Options

**Netlify**
```bash
npm run build
# Deploy the .next folder
```

**Docker**
```bash
docker build -t mrh-store .
docker run -p 3000:3000 mrh-store
```

## 🔮 Future Enhancements

- NextAuth.js for social authentication
- Advanced search and filtering
- Shopping cart functionality
- Payment integration
- User profiles and favorites
- Admin dashboard
- Email notifications
- Image upload to cloud storage

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support, email support@mrhstore.com or create an issue in the repository.