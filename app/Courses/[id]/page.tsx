'use client'
import SelfPacedLearning from "@/components/SelfPacedLearning";
import { courses } from "@/constants/Courses";
import { useParams } from "next/navigation"
import { useRef, useState } from "react";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { GiStairsGoal } from "react-icons/gi";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { TbCertificate } from "react-icons/tb";

const Course = () => {
    const params = useParams();
    const id = typeof params.id === "string" ? Number(params.id) : "";
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [isEnrollModalOpen, setEnrollModalOpen] = useState<boolean>(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const enrollSectionRef = useRef<HTMLDivElement>(null);
    const [submit, setSubmit] = useState(false);
    const [termsChecked, setTermsChecked] = useState(false);
    const [error, setError] = useState("");
    const groups = [
        { title: "Java Developers", desc: "Develop stronger testing foundations for real-world Java applications." },
        { title: "Spring Boot Developers", desc: "Improve your ability to test APIs, services, and microservices effectively." },
        { title: "Testing / QA Engineers", desc: "Master modern testing frameworks and become industry-ready." },
        { title: "Automation Engineers", desc: "Enhance automation workflows with proper unit and integration testing skills." },
        { title: "Students Preparing for IT Jobs", desc: "Gain practical testing expertise that helps you stand out in interviews." },
        { title: "Anyone Seeking Strong Testing Foundations", desc: "Build a deep understanding of testing tools, patterns, and best practices." },
    ];
    const scrollToSection = () => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const course = courses.find((course: any) => course.id === id);
    return (
        <section className="bg-linear-to-b from-[#bbd2ff] via-[#ccd4df] to-[#e5e5e5]">
            <div className="relative h-[420px] flex items-center justify-center bg-center bg-cover bg-[url('/coursesBanner.png')]">
                <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/60"></div>
                <h1 className="relative text-white text-4xl md:text-5xl lg:text-6xl urbanist_bold px-6 text-center drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">{course?.course}</h1>
            </div>
            <section className="flex flex-col items-center mt-20 gap-12 text-gray-700">
                <div className="w-full max-w-5xl flex flex-col items-center">
                    <p className="text-lg md:text-xl leading-relaxed font-semibold text-gray-800 max-w-7xl">
                        {course?.description}
                    </p>
                    <h3 className="text-xl md:text-3xl mt-12 font-semibold text-gray-900 text-center">
                        Benefits of this course include:
                    </h3>
                </div>
            </section>
            <div className="flex flex-col sm:flex-row items-center sm:flex-wrap sm:justify-center text-white gap-8 mt-10 md:mt-20">
                {course?.heroPoints?.map((detail, index) => (
                    <div key={index} className='flex group flex-col items-center justify-between shadow-md shadow-gray-600 bg-[#525fe1] gap-5 w-[80vw] sm:max-w-64 md:h-42 py-6 px-3.5 mx-auto sm:mx-0 rounded-lg duration-300'>
                        <p className="font-semibold"><detail.icon size={48} /></p>
                        <p className="text-center text-lg font-semibold">{detail.desc}</p>
                    </div>
                ))}
            </div>
            <h1 className="text-3xl md:text-5xl text-center mt-24 urbanist_bold text-gray-900">WHY <span className="text-[#525fe1] urbanist_bold">THIS COURSE</span></h1>
            <section className="w-full flex flex-col px-20 max-w-7xl mx-auto text-gray-800">
                <p className="text-lg md:text-2xl font-semibold text-center mt-12  text-gray-700">
                    {course?.quoteText}
                </p>
                <p className="text-base md:text-lg mt-8 leading-relaxed">
                    {course?.coursePointsText}
                </p>


                <ul className="mt-6 max-w-3xl w-full flex flex-col gap-4 text-lg font-semibold text-gray-800">
                    {course?.coursePoints?.map((p, i) => (
                        <li
                            key={i}
                            className="relative pl-12 flex items-start"
                        >
                            <span className="absolute left-0 top-1 w-7 h-7 rounded-full bg-[#525fe1] text-white flex items-center justify-center text-sm font-bold shadow-md">
                                ✔
                            </span>
                            {p}
                        </li>
                    ))}
                </ul>
                <p className="text-lg md:text-xl font-semibold text-center mt-10 text-gray-900">
                    {course?.whyText}
                </p>
            </section>
            <section className="w-full mt-16 px-6 flex flex-col items-center text-gray-800">
                <h1 className="text-3xl md:text-5xl text-center urbanist_bold text-gray-900">WHO <span className="text-[#525fe1] urbanist_bold">THIS COURSE IS FOR</span></h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl w-full">
                    {course?.targetAudience?.map((item, idx) => (
                        <div
                            key={idx}
                            className="rounded-2xl border border-gray-200 shadow-sm p-6 bg-white/80 backdrop-blur-md hover:shadow-md transition-all"
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-base text-gray-600 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
            <h1 className="text-3xl md:text-5xl text-center mt-18 urbanist_bold text-gray-900">Course <span className="text-[#525fe1] urbanist_bold">Curriculum</span></h1>
            <div ref={sectionRef} className="bg-white mb-20 shadow-lg w-[95vw] max-w-6xl mx-auto mt-10 md:mt-14 text-white p-6 rounded-lg space-y-6">
                <div className="hidden md:grid grid-cols-2 gap-6">
                    <div className="flex flex-col gap-4">
                        {course?.curriculum?.map((item: any, index: number) => (
                            <div key={index} onClick={() => { setSelectedIndex(index); scrollToSection() }} className={`cursor-pointer shadow-md rounded-md p-4 border ${index === selectedIndex ? "bg-gray-200 border-gray-600" : "border-transparent hover:bg-gray-100"}`}>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <p className="text-[#525fe1] font-semibold">{(index + 1) < 10 ? `0${index + 1}` : `${index + 1}`}</p>
                                        <h4 className={`${index === selectedIndex ? "font-bold" : "font-semibold"} text-zinc-800`}>{item?.topic}</h4>
                                    </div>
                                    <FaChevronRight className={`${index === selectedIndex ? "font-bold text-zinc-800" : "font-semibold text-zinc-400"}`} />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bg-gray-100 shadow-md rounded-md p-6 overflow-auto">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-semibold text-lg text-zinc-800 ">Topic</h3>
                        </div>
                        <ul className="list-disc pl-5 space-y-2 text-zinc-600 font-semibold text-sm md:text-base">
                            {course?.curriculum[selectedIndex]?.subTopic?.length ? (
                                course.curriculum[selectedIndex]?.subTopic.map((topic, i) => (
                                    <li key={i}>{topic}</li>
                                ))
                            ) : (<li>Topic details not available.</li>)}
                        </ul>
                    </div>
                </div>
                <div className="md:hidden space-y-4">
                    {course?.curriculum.map((item, index) => (
                        <div key={index} className="border  border-gray-700 rounded-md overflow-hidden">
                            <div onClick={() => toggleAccordion(index)} className="flex justify-between items-start p-4 cursor-pointer">
                                <div>
                                    <p className="text-[#525fe1] font-semibold text-sm">{index < 10 ? `0${index + 1}` : `${index + 1}`}</p>
                                    <h4 className="font-semibold text-zinc-800">{item?.topic}</h4>
                                </div>
                                <FaChevronDown className={`mt-1 text-zinc-800 transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
                            </div>
                            {openIndex === index && (
                                <div className="bg-gray-100 p-4 border-t border-gray-700">
                                    <ul className="list-disc pl-5 text-zinc-700 space-y-2 text-sm">
                                        {course.curriculum[selectedIndex]?.subTopic?.length ? (
                                            course.curriculum[selectedIndex]?.subTopic.map((topic, i) => <li key={i}>{topic}</li>)
                                        ) : (<li>Topic details not available.</li>)}
                                    </ul>
                                </div>)}
                        </div>
                    ))}
                </div>
            </div>
            <SelfPacedLearning />
        </section >
    )
}

export default Course