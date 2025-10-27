
import { NavLink, SkillCategory, ExperienceItem, Project, Insight, AIToolCategory, WorkshopLevel, WorkshopSummary } from './types';

export const sections: NavLink[] = [
  { id: 'about', title: 'About' },
  { id: 'skills', title: 'Skills' },
  { id: 'experience', title: 'Experience' },
  { id: 'projects', title: 'Projects' },
  { id: 'insights', title: 'Insights' },
  { id: 'aitools', title: 'AI Tools' },
  { id: 'workshops', title: 'Workshops' },
  { id: 'future', title: 'Future' },
  { id: 'contact', title: 'Contact' },
];

export const skillsData: SkillCategory[] = [
  {
    title: 'AI & Digital Creation',
    skills: ['AI Image Generation', 'AI Video Creation', 'Midjourney / DALL-E', 'Runway ML', 'Stable Diffusion'],
  },
  {
    title: 'Web Development',
    skills: ['HTML5 / CSS3', 'JavaScript / ES6+', 'React.js / TypeScript', 'Frontend Development', 'Responsive & UI/UX Design'],
  },
  {
    title: 'Data & Programming',
    skills: ['Python Programming', 'Data Processing & AI', 'MS Excel / Sheets Automation', 'Data Management', 'Scripting for Tech Trends'],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    role: 'Freelance AI & Web Developer',
    company: 'Self-employed',
    period: '2023 - Present (2+ Years)',
    details: [
      'AI Image and Video Creation for 50+ clients',
      'Frontend Website Development projects with React',
      'Digital content creation, editing & student mentoring',
    ],
  },
  {
    role: 'Data Processor',
    company: 'Constems AI',
    period: 'Mar 2023 - Aug 2023 (6 Months)',
    details: [
      'Processed and managed large AI datasets',
      'Developed data entry protocols for ML models',
      'Utilized data management software & automation',
    ],
  },
  {
    role: 'Data Tagging Executive',
    company: 'Parallel Dots',
    period: '2022 - 2023 (1 Year)',
    details: [
      'Customer service and AI data support',
      'Data tagging and annotation for computer vision',
      'Team collaboration on AI projects',
    ],
  },
];

export const projectsData: Project[] = [
  {
    id: 'p1',
    icon: '🖼️',
    title: 'AI Image Gallery 2025',
    description: 'AI-generated artwork using latest models like Stable Diffusion 3.0. Helping students create portfolios.',
    tech: ['Stable Diffusion', 'Midjourney', 'React'],
    link: 'https://www.craiyon.com/',
    imageUrl: 'https://picsum.photos/seed/ai-image/500/300',
  },
  {
    id: 'p2',
    icon: '🎥',
    title: 'AI Video Projects',
    description: 'Dynamic videos with Runway ML Gen-3. Tutorials for students on video editing with AI.',
    tech: ['Runway ML', 'AI Editing', 'Premiere Pro'],
    link: 'https://runwayml.com/',
    imageUrl: 'https://picsum.photos/seed/ai-video/500/300',
  },
  {
    id: 'p3',
    icon: '🌐',
    title: 'Interactive Portfolios',
    description: 'Modern React sites with AI integrations. Custom designs for freelancers & students.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    link: '#contact',
    imageUrl: 'https://picsum.photos/seed/ai-portfolio/500/300',
  },
];

export const insightsData: Insight[] = [
  { title: 'AI-Driven Personalized Learning', description: 'Systems adapt to your pace – 53% institutions report higher engagement. Start with free tools like Duolingo AI.', linkId: 'aitools' },
  { title: 'Gamification & VR/AR Immersion', description: 'Learn via games & virtual worlds. Trends show microcredentials booming for quick skills.', linkId: 'aitools' },
  { title: 'AI Literacy & Ethical AI', description: 'New standards in 2025: Understand multimodal AI & regulations. Students cautious but ready – build skills now!', linkId: 'aitools' },
  { title: 'Hybrid Learning & Workforce Pathways', description: 'Flexible models with AI security for safety. Focus on practical skills like Python for AI.', linkId: 'future' },
];

export const aiToolsData: AIToolCategory[] = [
    {
        title: "1. राइटिंग एंड कंटेंट क्रिएशन",
        tools: [
            { name: "ChatGPT", description: "टेक्स्ट जनरेट, आइडियाज ब्रेनस्टॉर्म", freeTier: "अनलिमिटेड (बेसिक)", useCase: "एस्से/प्रपोजल्स", link: "https://chat.openai.com" },
            { name: "Grammarly", description: "ग्रामर, स्टाइल चेक", freeTier: "150k वर्ड्स/मंथ", useCase: "एस्से एडिटिंग", link: "https://www.grammarly.com" },
            { name: "Quillbot", description: "पैराफ्रेजिंग, समरी", freeTier: "125 वर्ड्स/टाइम", useCase: "रिसर्च रीवाइट", link: "https://quillbot.com" },
        ]
    },
    {
        title: "2. इमेज एंड आर्ट जनरेशन",
        tools: [
            { name: "Canva Magic Studio", description: "टेक्स्ट से विजुअल्स", freeTier: "50 यूजेस/मंथ", useCase: "ग्राफिक्स", link: "https://www.canva.com/magic" },
            { name: "Midjourney", description: "आर्टिस्टिक इमेजेस", freeTier: "25 फ्री इमेजेस", useCase: "कॉन्सेप्ट आर्ट", link: "https://www.midjourney.com" },
            { name: "GPT-4o", description: "इमेज जनरेशन", freeTier: "डेली लिमिट्स", useCase: "टच-अप्स", link: "https://chat.openai.com" },
        ]
    },
     {
        title: "3. वीडियो एंड ऑडियो",
        tools: [
            { name: "Synthesia", description: "AI अवतार्स से वीडियोज", freeTier: "36 मिनट्स/ईयर", useCase: "ट्रेनिंग वीडियोज", link: "https://www.synthesia.io" },
            { name: "Runway ML", description: "टेक्स्ट से वीडियो", freeTier: "125 क्रेडिट्स", useCase: "मार्केटिंग क्लिप्स", link: "https://runwayml.com" },
            { name: "Descript", description: "ट्रांसक्रिप्ट से एडिट", freeTier: "1 घंटा/मंथ", useCase: "पॉडकास्ट", link: "https://www.descript.com" },
        ]
    }
];

export const workshopsData: WorkshopLevel[] = [
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
];

export const workshopSummaryData: WorkshopSummary[] = [
    { level: "Beginner", ideas: "1-4", groupSize: "10-20 students", cost: "Free (online tools)" },
    { level: "Intermediate", ideas: "5-9", groupSize: "8-15 students", cost: "$0-50 (cloud credits)" },
    { level: "Advanced", ideas: "10-15", groupSize: "5-10 students", cost: "$50-200 (kits/software)" },
];
