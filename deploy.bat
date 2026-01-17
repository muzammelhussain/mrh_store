@echo off
echo 🚀 MRH Store Deployment Script
echo ================================

REM Check if we're in the right directory
if not exist "package.json" (
    echo ❌ Error: package.json not found. Please run this script from the project root.
    pause
    exit /b 1
)

REM Install dependencies
echo 📦 Installing dependencies...
call npm install

REM Run build
echo 🔨 Building project...
call npm run build

if %errorlevel% equ 0 (
    echo ✅ Build successful!
    echo.
    echo 🌐 Ready for deployment!
    echo.
    echo Next steps:
    echo 1. Push your code to GitHub
    echo 2. Connect your GitHub repo to Vercel
    echo 3. Set environment variables in Vercel dashboard
    echo 4. Deploy!
    echo.
    echo Environment variables needed:
    echo - MONGODB_URI
    echo - NEXTAUTH_SECRET
    echo - NEXTAUTH_URL
) else (
    echo ❌ Build failed. Please fix the errors and try again.
    pause
    exit /b 1
)

pause