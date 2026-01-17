# MRH Store - Vercel Deployment Guide

## 📋 Pre-Deployment Checklist

- [ ] MongoDB Atlas database is set up and accessible
- [ ] Environment variables are configured
- [ ] Project builds successfully locally (`npm run build`)
- [ ] All dependencies are installed
- [ ] Code is pushed to GitHub repository

## 🚀 Step-by-Step Deployment

### Method 1: Vercel Dashboard (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your `mrh-store` repository
   - Configure project settings:
     - Framework Preset: Next.js
     - Root Directory: `./` (default)
     - Build Command: `npm run build` (default)
     - Output Directory: `.next` (default)

3. **Environment Variables**
   In the Vercel dashboard, add these environment variables:
   
   | Name | Value |
   |------|-------|
   | `MONGODB_URI` | `mongodb+srv://mrh_store:MJy57897eGI6N1y8@keramot.mqb48yw.mongodb.net/mrh_store?retryWrites=true&w=majority&appName=Keramot` |
   | `NEXTAUTH_SECRET` | Generate a secure random string |
   | `NEXTAUTH_URL` | Your Vercel domain (e.g., `https://mrh-store.vercel.app`) |

4. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete
   - Your app will be live at `https://your-project-name.vercel.app`

### Method 2: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   cd nextjs-item-app
   vercel --prod
   ```

4. **Set Environment Variables**
   ```bash
   vercel env add MONGODB_URI
   vercel env add NEXTAUTH_SECRET
   vercel env add NEXTAUTH_URL
   ```

## 🔧 Post-Deployment

### 1. Seed the Database
After deployment, you can seed your production database:
```bash
# Set your production MongoDB URI in .env.local temporarily
npm run seed
```

### 2. Test Your Application
- [ ] Homepage loads correctly
- [ ] Items page displays products
- [ ] Login functionality works
- [ ] Add item feature works (when logged in)
- [ ] Individual item pages load
- [ ] All animations and styles work

### 3. Custom Domain (Optional)
1. Go to your Vercel project dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update DNS records as instructed
5. Update `NEXTAUTH_URL` environment variable

## 🐛 Troubleshooting

### Common Issues:

**Build Errors:**
- Check TypeScript errors: `npm run build`
- Verify all imports are correct
- Ensure all dependencies are in package.json

**Database Connection Issues:**
- Verify MongoDB URI is correct
- Check MongoDB Atlas network access (allow all IPs: 0.0.0.0/0)
- Ensure database user has read/write permissions

**Environment Variables:**
- Make sure all required env vars are set in Vercel
- Restart deployment after adding env vars
- Check env var names match exactly (case-sensitive)

**Images Not Loading:**
- Verify image domains are configured in `next.config.ts`
- Check if external image URLs are accessible

## 📊 Monitoring

After deployment, monitor your application:
- Check Vercel Analytics
- Monitor MongoDB Atlas metrics
- Set up error tracking (optional: Sentry)

## 🔄 Continuous Deployment

Vercel automatically redeploys when you push to your main branch:
```bash
git add .
git commit -m "Update feature"
git push origin main
# Vercel will automatically deploy
```

## 📞 Support

If you encounter issues:
1. Check Vercel deployment logs
2. Review MongoDB Atlas logs
3. Test locally first
4. Check environment variables
5. Verify all dependencies are installed