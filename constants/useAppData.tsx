import { FaBriefcase, FaChalkboardTeacher, FaGlobe, FaHandshake } from "react-icons/fa";
import { CgSandClock } from "react-icons/cg";
import { GiStairsGoal } from "react-icons/gi";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdScience } from "react-icons/md";
export function useAppData() {

    const aboutCards = [
        {
            title: "Our Journey",
            desc: "Our journey began as a New-Delhi-based IT training and product engineering company focused on building job-ready digital talent",
            color: "bg-green-500",
            icon: <CgSandClock size={25} />,
            bg: "bg-[#E4FEEF]",
        },
        {
            title: "Centre of Excellence",
            desc: "We help universities and institutes establish co-branded Centers of Excellence that promote innovation and applied learning.",
            color: "bg-yellow-400",
            icon: <FaGlobe size={25} />,
            bg: "bg-[#fffae5]",
        },
        {
            title: "Learning Approach",
            desc: "Our programs combine live instructor sessions with hands-on lab work and mentored projects.",
            color: "bg-pink-400",
            icon: <GiStairsGoal size={25} />,
            bg: "bg-[#f6edec]",
        },
        {
            title: "Our Faculty",
            desc: "Guided by industry professionals with 8–15 years of experience in software development, data engineering, cloud infrastructure, and cybersecurity.",
            color: "bg-purple-400",
            icon: <BsGraphUpArrow size={25} />,
            bg: "bg-[#F3F0FF]",
        },
    ];

    const whyChooseUsArray = [
        { symbol: <FaBriefcase />, title: "Job Assured Courses", desc: "Our programs are crafted to be job-focused, achieving a 60–75% placement or internship conversion rate within 3–6 months" },
        { symbol: <FaChalkboardTeacher />, title: "Expert Instructors", desc: "Guided by industry professionals with 8–15 years of experience in software development, data engineering, cloud infrastructure, and cybersecurity" },
        { symbol: <FaGlobe />, title: "Global Collaboration", desc: "SNT is expanding its partnerships with universities and enterprises across India, Kenya, and the Middle East" },
        { symbol: <MdScience />, title: "Hands-On Learning", desc: "Our programs combine live instructor sessions with hands-on lab work and mentored projects" },
    ];

    return { aboutCards, whyChooseUsArray };
}