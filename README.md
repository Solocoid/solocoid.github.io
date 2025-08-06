# Rohit Yadav - Portfolio & Blog Website

A modern, responsive portfolio website showcasing Rohit Yadav's skills, experience, and projects. Built with HTML, CSS, and JavaScript.

## ✨ Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Easy Configuration**: Update content through config.js file
- **GitHub Integration**: Live GitHub contribution graph
- **Web3 Focus**: Showcases blockchain and Web3 development journey
- **Certificate Display**: Professional certificate showcase
- **Blog Section**: Ready for content management

## 🚀 Getting Started

1. **Clone or Download** the repository
2. **Open `index.html`** in your browser to view locally
3. **Customize content** by editing `config.js`
4. **Deploy** using any of the methods below

## 📝 Easy Updates with config.js

All content is centralized in `config.js` for easy updates:

```javascript
// Update personal information
personal: {
    name: "Rohit Yadav",
    title: "Full Stack Developer",
    email: "Rohity5450@gmail.com",
    phone: "+91 8777568647",
    location: "Howrah, West Bengal, India",
    github: "github.com/Solocoid"
}

// Update skills
skills: {
    "Languages": ["Python", "JavaScript", "TypeScript", "SQL"],
    "Frontend": ["React.js", "HTML5", "CSS3", "Material-UI"],
    // ... more categories
}

// Update experience
experience: [
    {
        company: "Vanyam Travels",
        type: "Freelancing",
        location: "Lucknow",
        duration: "Full-Stack MERN",
        title: "Full Stack Developer",
        achievements: ["Built applications serving 10M+ users", "..."]
    }
]
```

## 🌐 Deployment Options

### **Option 1: GitHub Pages (Free & Easy)**

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose "main" branch
   - Save

3. **Add Custom Domain**
   - In Pages settings, add your domain
   - Create CNAME file in repository root
   - Update DNS settings with your domain provider

### **Option 2: Netlify (Free & Professional)**

1. **Deploy via Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag & drop your portfolio folder
   - Or connect your GitHub repository

2. **Custom Domain Setup**
   - In Netlify dashboard → Domain settings
   - Add your custom domain
   - Update DNS records as instructed

### **Option 3: Vercel (Free & Fast)**

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Add Custom Domain**
   - In Vercel dashboard → Domains
   - Add your domain and follow DNS instructions

### **Option 4: Traditional Web Hosting**

1. **Choose a Hosting Provider**
   - Hostinger ($2-4/month)
   - Bluehost ($3-7/month)
   - SiteGround ($4-10/month)

2. **Upload Files**
   - Use FTP client (FileZilla)
   - Or use cPanel File Manager
   - Upload all files to `public_html` folder

3. **Domain Configuration**
   - Point domain to hosting nameservers
   - Or create A record pointing to hosting IP

## 🔧 DNS Configuration

### **For GitHub Pages:**
```
Type: CNAME
Name: @
Value: yourusername.github.io
```

### **For Netlify:**
```
Type: CNAME
Name: @
Value: yoursite.netlify.app
```

### **For Traditional Hosting:**
```
Type: A
Name: @
Value: [Your hosting IP address]
```

## 📱 Current Portfolio Information

### **Personal Details**
- **Name**: Rohit Yadav
- **Title**: Full Stack Developer → Web3 Developer
- **Education**: BTech (AI) from Amity University
- **Location**: Howrah, West Bengal, India
- **Contact**: Rohity5450@gmail.com

### **Skills**
- **Languages**: Python, JavaScript, TypeScript, SQL
- **Frontend**: React.js, HTML5, CSS3, Material-UI, Next.js, Redux
- **Backend**: Node.js, Express.js, MongoDB, MySQL
- **Tools**: Git, Docker, Postman
- **Testing**: Jest
- **Web3**: Rust, Substrate, Smart Contracts (Learning)

### **Experience**
- **Vanyam Travels**: Full Stack Developer (Freelancing)
- **The Techie Indians**: Full Stack Developer & UI/UX Designer (Internship)

### **Projects**
- **Social Media Application**: MERN stack with real-time features
- **English Learning Application**: Educational platform with video calls

### **Education**
- **Amity University**: BTech in Artificial Intelligence (CGPA: 7.09)
- **M.C Kejriwal School**: Class 12 (2019)
- **M.C Kejriwal School**: Class 10 (2017)

### **Certificates**
- **PBA-X**: Polkadot Blockchain Academy (Web3 Foundation)

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
├── config.js           # Content configuration
└── README.md           # This file
```

## 🎨 Customization

### **Colors & Styling**
Edit `styles.css` to change:
- Color scheme
- Typography
- Layout spacing
- Animations

### **Content Updates**
Edit `config.js` to update:
- Personal information
- Skills and experience
- Projects and education
- Contact details

### **Adding New Sections**
1. Add HTML structure in `index.html`
2. Add CSS styles in `styles.css`
3. Add content in `config.js` (if dynamic)

## 🚀 Quick Updates Guide

### **Update Personal Info**
```javascript
// In config.js
personal: {
    name: "Your Name",
    title: "Your Title",
    email: "your@email.com",
    // ... other details
}
```

### **Add New Skills**
```javascript
// In config.js
skills: {
    "New Category": ["Skill 1", "Skill 2", "Skill 3"],
    // ... existing categories
}
```

### **Add New Experience**
```javascript
// In config.js
experience: [
    {
        company: "New Company",
        type: "Full-time",
        location: "City, Country",
        duration: "Jan 2024 - Present",
        title: "Job Title",
        achievements: ["Achievement 1", "Achievement 2"]
    },
    // ... existing experience
]
```

### **Add New Projects**
```javascript
// In config.js
projects: [
    {
        title: "New Project",
        description: "Project description",
        features: ["Feature 1", "Feature 2"],
        tech: ["Technology 1", "Technology 2"],
        github: "github-link",
        live: "live-link"
    },
    // ... existing projects
]
```

## 🔍 SEO Optimization

### **Meta Tags** (Already included)
- Title and description
- Open Graph tags
- Twitter Card tags

### **Performance**
- Optimized images
- Minified CSS/JS
- Fast loading times

## 📞 Support

For content updates, edit `config.js` - no HTML knowledge required!

For technical issues or customizations:
- Check the file structure above
- Review the customization section
- Contact for additional help

---

**Built with ❤️ for showcasing Web3 development journey** 