import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    personalInfo: {
        name: "Neerali Jadav",
        title: "Software Developer",
        bio: "I craft end-to-end solutions with 6+ years of experience building scalable applications and leading development teams.",
        email: "ca.neeralijadav@gmail.com",
        github: "https://github.com/N-Jadav",
        linkedin: "https://www.linkedin.com/in/neerali-jadav/",
        quotes: [
            "Building cool things at the speed of caffeine.",
            "I write code that future me definitely won’t understand.",
            "Currently shipping features and dodging meetings.",
            "Living on the edge… of a deployment.",
            "Turning chaos into clean commits (most days).",
            "Your favorite app’s favorite developer.",
            "Running on TypeScript and vibes.",
            "I break things so you don’t have to.",
            "Coding like the internet depends on it (sometimes it does).",
            "AI-assisted, human-approved.",
            "Crafting software with precision and a bit of magic.",
            "Where ideas become shipped features.",
            "Designing systems that just work.",
            "Engineering the future, one commit at a time.",
            "99% coding, 1% Googling… okay maybe the other way around.",
            "If it works, don’t touch it.",
            "Debugging my own decisions daily."
        ],
        heroTags: [
            { name: "Node.js", color: "rgba(59, 130, 246, 0.2)", border: "rgba(59, 130, 246, 0.5)" },
            { name: "Express.js", color: "rgba(139, 92, 246, 0.2)", border: "rgba(139, 92, 246, 0.5)" },
            { name: "React.js", color: "rgba(16, 185, 129, 0.2)", border: "rgba(16, 185, 129, 0.5)" },
            { name: "Java", color: "rgba(59, 130, 246, 0.2)", border: "rgba(59, 130, 246, 0.5)" },
            { name: "Kafka", color: "rgba(236, 72, 153, 0.2)", border: "rgba(236, 72, 153, 0.5)" }
        ]
    },
    skills: [
        {
            title: "Backend Development",
            color: "#a855f7",
            items: ["Node.js", "Express.js", "PostgreSQL", "GraphQL", "Docker", "AWS", "Java"]
        },
        {
            title: "Frontend Development",
            color: "#3b82f6",
            items: ["React.js", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "Angular"]
        },
        {
            title: "Tools",
            color: "#10b981",
            items: ["Git", "IntelliJ", "Copilot", "VS Code", "Jira", "Jest", "CI/CD", "Confluence"]
        }
    ],
    experience: [
        {
            id: 1,
            role: "Senior Software Developer",
            company: "Pluralsight",
            location: "Bengaluru, India",
            period: "Feb 2025 - Present",
            description: "Led high-impact projects by aligning team strengths, accelerating delivery, and driving clear communication with leadership. Engineered large-scale data migration using Kafka and Node.js for fast, reliable processing of massive datasets.",
            technologies: ["Express.js", "Node.js", "TypeScript", "Kafka", "Jest"]
        },
        {
            id: 2,
            role: "Software Developer",
            company: "ThoughtsWin Systems",
            location: "Toronto, Canada",
            period: "Aug 2023 - Nov 2024",
            description: "Developed dynamic dashboards and automated data analysis tools that boosted stakeholder decision-making and increased productivity by 34%. Streamlined complex data-migration workflows with custom transformation logic, significantly reducing manual effort and accelerating report delivery.",
            technologies: ["React.js", "Node.js", "PostgreSQL", "AWS",]
        },
        {
            id: 3,
            role: "Software Developer",
            company: "Clik2pay",
            location: "Toronto, Canada",
            period: "Mar 2023 - Aug 2023",
            description: "Developed the user management functionality for merchants to add and delete users, which helped onboarding new clients that includes 407 ETR which in turn increased the revenue by 83%.",
            technologies: ["React.js", "Node.js", "New Relic", "Network Security",]
        },

        {
            id: 4,
            role: "Software Developer",
            company: "SHJ International",
            location: "Indore, India",
            period: "Nov 2020 - Dec 2022",
            description: "Architected and deployed a cutting-edge truck tracking and route planning platform that directly achieved a 20% increase in operational efficiency and minimized delivery times. Engineered advanced optimization algorithms to maximize load distribution, enhancing resource utilization by 12%.",
            technologies: ["Typescript", "Express.js", "PostgreSQL", "Javascript"]
        },
        {
            id: 4,
            role: "Software Developer",
            company: "Actonate IT Solutions",
            location: "Vadodara, India",
            period: "Jul 2018 - Nov 2020",
            description: "Launched a full-featured online medical consultation platform (appointment booking, chat, image uploads) that rapidly onboarded 120 doctors and served hundreds of patients daily within the first week of release.",
            technologies: ["React.js", "Node.js", "Typescript", "Elasticsearch"]
        }
    ]
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
});

export const selectPersonalInfo = (state) => state.profile.personalInfo;
export const selectSkills = (state) => state.profile.skills;
export const selectExperience = (state) => state.profile.experience;

export default profileSlice.reducer;
