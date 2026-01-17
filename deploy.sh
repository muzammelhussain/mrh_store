#!/bin/bash

echo "🚀 MRH Store Deployment Script"
echo "================================"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Run build
echo "🔨 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "🌐 Ready for deployment!"
    echo ""
    echo "Next steps:"
    echo "1. Push your code to GitHub"
    echo "2. Connect your GitHub repo to Vercel"
    echo "3. Set environment variables in Vercel dashboard"
    echo "4. Deploy!"
    echo ""
    echo "Environment variables needed:"
    echo "- MONGODB_URI"
    echo "- NEXTAUTH_SECRET"
    echo "- NEXTAUTH_URL"
else
    echo "❌ Build failed. Please fix the errors and try again."
    exit 1
fi