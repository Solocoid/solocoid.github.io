// Personal Information Configuration
// Update this file to change your portfolio information

const config = {
    // Personal Details
    personal: {
        name: "Rohit Yadav",
        title: "Full Stack Developer",
        description: "Passionate Full Stack Developer with expertise in MERN stack development, creating scalable web applications and delivering impactful solutions. Experienced in both frontend and backend technologies with a focus on user-centric design and performance optimization.",
        location: "Howrah, West Bengal, India",
        email: "Rohity5450@gmail.com",
        phone: "+91 8777568647",
        github: "github.com/Solocoid",
    },

    // About Section
    about: {
        paragraphs: [
            "I'm a passionate Full Stack Developer with a strong foundation in MERN stack development, specializing in creating interactive web applications that serve millions of users. With experience in both frontend and backend technologies, I focus on delivering high-quality, scalable solutions that improve user experience and system performance.",
            "My expertise includes React.js, Node.js, MongoDB, and modern web technologies. I have successfully contributed to projects serving over 10,00,000 active users monthly, implemented CI/CD pipelines, and improved system performance by up to 40%."
        ]
    },

    // Work Experience
    experience: [
        {
            company: "Vanyam Travels",
            type: "Freelancing",
            location: "Lucknow",
            duration: "Full-Stack MERN",
            title: "Full Stack Developer",
            achievements: [
                "Built and deployed interactive web applications using ReactJS and Redux, serving over 10,00,000 active users monthly",
                "Participated in code reviews, contributing to a 15% improvement in overall code quality and adherence to best practices",
                "Created and maintained comprehensive technical documentation for front-end and back-end components, leading to a 40% reduction in onboarding time for new developers and a 25% decrease in support tickets"
            ]
        },
        {
            company: "The Techie Indians",
            type: "Internship",
            location: "Kolkata",
            duration: "JUL 2022 - Aug 2022",
            title: "Full Stack Developer & UI/UX Designer",
            achievements: [
                "Developed and optimized RESTful APIs using Express.js and Node.js, improving data exchange efficiency by 35% and reducing API response times by 40%",
                "Designed and implemented front-end components using React.js, Redux, and Material-UI, leading to a 20% improvement in load times",
                "Managed MongoDB databases, including schema design, data modelling, and query optimization, which improved data retrieval speeds by 40%"
            ]
        }
    ],

    // Skills
    skills: {
        "Languages": ["Python", "JavaScript", "TypeScript", "SQL"],
        "Frontend": ["React.js", "HTML5", "CSS3", "Material-UI", "Next.js", "Redux", "Hooks"],
        "Backend": ["Node.js", "Express.js", "MongoDB", "MySQL"],
        "Tools & DevOps": ["Git", "Docker", "Postman"],
        "Testing": ["Jest"]
    },

    // Projects
    projects: [
        {
            title: "Social Media Application",
            description: "Fully functional social media application using the MERN stack, enabling users to interact with others.",
            features: [
                "Infinite Scroll",
                "Adaptive bitrate Video stream",
                "Real-time chat",
                "Face detection",
                "Follow-unfollow functionality",
                "Tag friends",
                "Create-update-view-delete Posts and profiles",
                "Like-dislike-comments on Posts"
            ],
            technologies: ["MERN Stack", "3rd Party API"],
            github: "#",
            live: "#"
        },
        {
            title: "English Learning Application",
            description: "Fully functional English learning application helps you on your journey to improving your English.",
            features: [
                "Grammar checker (Like Grammarly)",
                "Video call functionality",
                "Grammar video lessons",
                "Adaptive bitrate Video stream"
            ],
            technologies: ["MERN Stack", "RESTful API", "3rd Party API"],
            github: "#",
            live: "#"
        }
    ],

    // Education
    education: [
        {
            institution: "Amity University, Kolkata",
            duration: "Aug 2019 - Jun 2023",
            degree: "B.Tech. in Artificial Intelligence",
            cgpa: "7.09"
        },
        {
            institution: "M.C Kejriwal School, Liluah",
            duration: "2019",
            degree: "Class 12"
        },
        {
            institution: "M.C Kejriwal School, Liluah",
            duration: "2017",
            degree: "Class 10"
        }
    ],

    // Blog Posts
    blog: [
        {
            title: "Building Scalable MERN Applications",
            excerpt: "Learn how to design and implement scalable MERN stack applications that can handle millions of users efficiently.",
            date: "Dec 15, 2024",
            category: "Development"
        },
        {
            title: "My Journey in Full Stack Development",
            excerpt: "Sharing my experience transitioning into full stack development and the lessons learned along the way.",
            date: "Dec 10, 2024",
            category: "Career"
        },
        {
            title: "10 Productivity Tips for MERN Developers",
            excerpt: "Discover tools and techniques that can significantly improve your MERN stack development workflow and productivity.",
            date: "Dec 5, 2024",
            category: "Tips"
        }
    ],

    // Social Links
    social: {
        github: "https://github.com/Solocoid",
        linkedin: "#",
        twitter: "#",
        instagram: "#"
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = config;
} else {
    window.portfolioConfig = config;
} 