#!/bin/bash

echo "🚀 Building Eporfina website for production..."

# Build the project
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Production files are in the 'dist' directory"
    echo ""
    echo "🌐 You can now deploy the website by:"
    echo "   1. Uploading the 'dist' folder to your hosting service"
    echo "   2. Using Netlify: drag and drop the 'dist' folder"
    echo "   3. Using Vercel: connect your GitHub repository"
    echo "   4. Using GitHub Pages: deploy from the 'dist' branch"
    echo ""
    echo "📊 Build size:"
    du -sh dist/
    echo ""
    echo "🎉 Ready for deployment!"
else
    echo "❌ Build failed!"
    exit 1
fi
