# Deployment Configuration

This project includes configuration files for different hosting platforms to handle SPA (Single Page Application) routing.

## Configuration Files

### For Netlify
- **File**: `public/_redirects`
- This file is automatically used by Netlify
- Redirects all routes to `index.html` for client-side routing

### For Vercel
- **File**: `vercel.json`
- This file is automatically used by Vercel
- Rewrites all routes to `index.html` for client-side routing

### For Apache Servers
- **File**: `public/.htaccess`
- Copy this file to your server's public directory
- Enables mod_rewrite to handle SPA routing

### For Nginx
Add this to your Nginx configuration:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### For Other Platforms
Ensure your server is configured to:
1. Serve `index.html` for all routes that don't match actual files
2. Return a 200 status code (not 404) for SPA routes

## After Deployment

1. **Rebuild your project**: `npm run build`
2. **Deploy the `dist` folder** to your hosting platform
3. **Verify routing works** by refreshing pages on different routes

## Troubleshooting

If pages still don't load on refresh:
1. Check that the appropriate configuration file is in place
2. Verify your hosting platform supports the configuration
3. Check browser console for any JavaScript errors
4. Ensure all assets are loading correctly


