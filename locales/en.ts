export const translations = {
  sections: {
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    education: 'Education',
    services: 'Services',
    projects: 'Projects',
    insights: 'Insights',
    aitools: 'AI Tools',
    workshops: 'Workshops',
    future: 'Future',
    contact: 'Contact',
  },
  navbar: {
    toggleTheme: 'Toggle theme'
  },
  mobileNav: {
    home: 'Home',
    experience: 'Experience',
    projects: 'Projects',
    workshops: 'Workshops'
  },
  header: {
    name: 'Amit Sharma',
    tagline: 'Computer & Data Operator | AI Enthusiast',
    subTagline: 'Leveraging technical skills in data processing and computer science to drive efficiency and accuracy in dynamic organizations.',
    cta: {
      hire: 'Hire Me',
      workshop: 'Book a Workshop',
      resume: 'Download Resume'
    }
  },
  about: {
    title: 'Objective',
    stats: [
        { value: 50, suffix: '+', label: 'AI Assets Delivered' },
        { value: 2, suffix: '+', label: 'Years of Experience' },
        { value: 100, suffix: '+', label: 'Students Mentored' }
    ],
    p1: 'A dedicated and detail-oriented computer and data operator with a strong background in computer science and data processing. Seeking to leverage my technical skills and customer service experience to contribute to the efficiency and accuracy of data operations in a dynamic organization.',
    p2: 'Keen on developing business acumen to drive future organizational success. Passionate about exploring emerging technologies, coding, data analysis, and learning business strategy.',
    p3: 'Age: 21 | Location: Kanpur, UP | Passion: Empowering Students with Free AI Tools & Workshops',
    contactInfo: {
        title: 'Contact Info',
        email: 'Amitsharma99976@gmail.com',
        phone: '+91 6393741171',
        location: 'Kanpur, Uttar Pradesh',
        connectLink: "Let's Connect!"
    }
  },
  skills: {
    title: 'My Skills',
    categories: [
      {
        title: 'Data Management & Processing',
        skills: ['Data Entry & Processing', 'MS Excel', 'Google Sheets', 'Data Management Software', 'Attention to Detail & Accuracy'],
      },
      {
        title: 'Technical & Analytical',
        skills: ['Python (Basic)', 'AI Concepts', 'Problem-Solving', 'Analytical Abilities', 'Business Process Understanding'],
      },
      {
        title: 'Professional',
        skills: ['Effective Communication', 'Teamwork', 'Customer Service', 'Adaptability'],
      },
    ]
  },
  experience: {
    title: 'Work Experience',
    items: [
      {
        role: 'Data Processor',
        company: 'Constems-AI',
        period: 'Mar 2023 - Aug 2023',
        details: [
          'Accurately processed and managed large datasets.',
          'Developed and maintained data entry protocols to ensure consistency and accuracy.',
          'Utilized data management software to organize and retrieve data efficiently.',
        ],
      },
      {
        role: 'Data Tagging Executive',
        company: 'Parallel Dots Pvt Ltd',
        period: 'July 2022 - Feb 2023',
        details: [
          'Delivered exceptional customer service and support.',
          'Addressed customer inquiries and resolved issues promptly.',
          'Collaborated with team members to enhance customer satisfaction and retention.',
        ],
      },
    ]
  },
  education: {
    title: 'Education & Languages',
    academics: {
      title: 'Academics',
      items: [
        { title: 'Bachelor of Science in Computer Science', institution: 'CSJM University, Kanpur', period: '2022 - 2025' }
      ]
    },
    languages: {
      title: 'Languages',
      items: [
        { name: 'Hindi', proficiency: 'Native' },
        { name: 'English', proficiency: 'Professional Working Proficiency' }
      ]
    }
  },
  services: {
    title: 'Services I Offer',
    items: [
      { icon: 'sparkles', title: 'Data Processing', description: 'Efficiently handling large datasets with a focus on accuracy, consistency, and organization using modern tools.' },
      { icon: 'code', title: 'Process Automation', description: 'Developing Python scripts and leveraging tools to automate data entry, validation, and reporting, reducing manual effort.' },
      { icon: 'academic_cap', title: 'Customer Support', description: 'Providing exceptional customer service, resolving inquiries promptly, and enhancing customer satisfaction.' }
    ]
  },
  projects: {
      title: 'My Projects',
      items: [
        {
          id: 'p1',
          icon: '⚙️',
          title: 'Automated Data Management System',
          description: 'Designed and implemented an automated data management system using Python. Streamlined data entry and retrieval processes, reducing manual effort by 50%. Improved data accuracy and consistency through validation scripts and automated reporting.',
          tech: ['Python', 'Automation', 'Data Validation', 'Reporting'],
          link: '#',
          imageUrl: 'https://picsum.photos/seed/automation-system/500/300',
        },
      ],
      cta: {
        contact: 'Get in Touch',
        visit: 'Visit Tool'
      },
      demo: {
        title: 'Live Demo / Code',
        placeholder: 'A live interactive demo or code snippet would be embedded here.'
      }
  },
  insights: {
    title: 'Latest AI/IT Trends 2025 for Students',
    subtitle: 'Empowering students with actionable insights on emerging tech. Market projected to grow to $112B by 2034!',
    items: [
      { title: 'AI-Driven Personalized Learning', description: 'Systems adapt to your pace – 53% institutions report higher engagement. Start with free tools like Duolingo AI.', linkId: 'aitools' },
      { title: 'Gamification & VR/AR Immersion', description: 'Learn via games & virtual worlds. Trends show microcredentials booming for quick skills.', linkId: 'aitools' },
      { title: 'AI Literacy & Ethical AI', description: 'New standards in 2025: Understand multimodal AI & regulations. Students cautious but ready – build skills now!', linkId: 'aitools' },
      { title: 'Hybrid Learning & Workforce Pathways', description: 'Flexible models with AI security for safety. Focus on practical skills like Python for AI.', linkId: 'future' },
    ],
    learnMore: 'Learn More',
    dynamicQuote: {
        title: 'Wisdom from a Global Tech Leader',
        loading: 'Fetching inspiration...',
        error: 'Error: {error}. Could not fetch quote.',
    }
  },
  aitools: {
      title: 'Free AI Tools Guide 2025',
      subtitle: 'Best choices for students, creators, and freelancers. AI market value over $112 billion! Top tools in every category.',
      tableHeaders: ['Tool Name', 'Description', 'Free Tier', 'Use Case', 'Link', 'Demo'],
      visitLink: 'Visit',
      demoAction: 'Demo',
      demoModal: {
          title: 'Tool Demo',
          description: 'This is a placeholder for an interactive demo or a brief guide on how to effectively use {toolName}. For now, we recommend visiting the official site to explore its features.',
          cta: 'Visit Official Site'
      },
      categories: [
        {
            title: "1. Writing & Content Creation",
            tools: [
                { name: "ChatGPT", description: "Generate text, brainstorm ideas", freeTier: "Unlimited (basic)", useCase: "Essays/Proposals", link: "https://chat.openai.com" },
                { name: "Grammarly", description: "Check grammar, style", freeTier: "150k words/month", useCase: "Essay editing", link: "https://www.grammarly.com" },
                { name: "Quillbot", description: "Paraphrasing, summarizing", freeTier: "125 words/time", useCase: "Research rewrite", link: "https://quillbot.com" },
            ]
        },
        {
            title: "2. Image & Art Generation",
            tools: [
                { name: "Canva Magic Studio", description: "Text to visuals", freeTier: "50 uses/month", useCase: "Graphics", link: "https://www.canva.com/magic" },
                { name: "Midjourney", description: "Artistic images", freeTier: "25 free images", useCase: "Concept art", link: "https://www.midjourney.com" },
                { name: "GPT-4o", description: "Image generation", freeTier: "Daily limits", useCase: "Touch-ups", link: "https://chat.openai.com" },
            ]
        },
         {
            title: "3. Video & Audio",
            tools: [
                { name: "Synthesia", description: "Videos from AI avatars", freeTier: "36 mins/year", useCase: "Training videos", link: "https://www.synthesia.io" },
                { name: "Runway ML", description: "Text to video", freeTier: "125 credits", useCase: "Marketing clips", link: "https://runwayml.com" },
                { name: "Descript", description: "Edit from transcript", freeTier: "1 hour/month", useCase: "Podcasts", link: "https://www.descript.com" },
            ]
        }
    ]
  },
  workshops: {
      title: 'Student AI Workshop Ideas 2025',
      subtitle: 'AI workshops spark curiosity & skills for a $112B market. Tailored for high school/college – beginner to advanced. Join my sessions!',
      cta: 'Book a Workshop!',
      levels: [
        {
            title: "Beginner: AI Awareness (No Coding)",
            ideas: [
                { title: "1. AI Through Storytelling & Debates", description: "Role-play ethics debates with ChatGPT. Duration: 1hr | Tools: Grok free." },
                { title: "2. AI in Everyday Life Treasure Hunt", description: "Spot AI in apps via hunts. Duration: 90min | Tools: Smartphones." },
                { title: "3. Mock Career Interviews with AI", description: "Practice interviews & feedback. Duration: 1hr | Tools: ChatGPT." },
            ]
        },
        {
            title: "Intermediate: Hands-On Projects",
            ideas: [
                { title: "5. Build a Simple Chatbot Study Buddy", description: "Quiz bot for subjects. Duration: 2hr | Tools: Dialogflow." },
                { title: "6. Fake News Detector Challenge", description: "Train models to debunk news. Duration: 3hr | Tools: Google Colab." },
                { title: "7. AI-Powered Personalized Story Generator", description: "Co-create stories. Duration: 2hr | Tools: Hugging Face." },
            ]
        },
        {
            title: "Advanced: Deep Dives & Prototypes",
            ideas: [
                { title: "10. Resume Parser & Job Matcher", description: "NLP for career tech. Duration: 4hr | Tools: spaCy." },
                { title: "11. Generative AI Fashion Designer", description: "Sketches to designs. Duration: 3hr | Tools: Midjourney." },
                { title: "12. Pneumonia Detection from Images", description: "CNN for healthcare. Duration: 5hr | Tools: FastAI." },
            ]
        }
    ]
  },
  future: {
      title: 'Future Development & Management',
      subtitle: 'Planning to launch AI workshops for students in 2025, focusing on free tools integration. Managing projects with Agile, tracking trends like advanced virtual assistants.',
      plans: [
        'Develop AI-powered student resume builder',
        'Create content on ethical AI & hybrid education',
        'Mentor 100+ students on latest IT (VR/AR, Microcredentials)',
        'Explore Multimodal AI for creative freelancing',
      ],
      cta: 'Join My Workshops!'
  },
  contact: {
      title: 'Get In Touch',
      subtitle: "Ready for AI projects, web dev, or 2025 tech advice? Let's collaborate!",
      form: {
          name: 'Your Name',
          email: 'Your Email',
          message: 'Tell me about your project or tech query...',
          submit: 'Send Message & Start Now!',
          errors: {
            nameRequired: 'Name is required.',
            emailRequired: 'Email is required.',
            emailInvalid: 'Please enter a valid email address.',
            messageRequired: 'Message is required.'
          }
      },
      feedback: {
          success: {
              title: 'Thank You! 🚀',
              message: "Your message has been sent. I'll get back to you within 24 hours."
          }
      }
  },
  footer: {
      copyright: '© 2025 Amit Sharma. All Rights Reserved.',
      tagline: 'AI Expert | Web Developer | Student Tech Mentor'
  }
};