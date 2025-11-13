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

    const scrollToSection = () => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const course = courses.find((course: any) => course.id === id);
    return (
        <section className="bg-linear-to-b from-[#bbd2ff] via-[#ccd4df] to-[#e5e5e5]">
            <div className="bg-[#525fe1] py-10">
                <h1 className="text-4xl md:text-5xl underline underline-offset-8 text-center text-white urbanist_bold px-5 lg:px-0 py-10">{course?.course}</h1>
            </div>
            <div className="flex mt-20 flex-col items-center gap-10 text-[#4a4a4a]">
                <h1 className="text-3xl md:text-5xl urbanist_bold text-gray-900">Course <span className="text-[#525fe1] urbanist_bold">Overview</span></h1>
                <p className="text-base md:text-lg leading-relaxed font-semibold w-[90vw] max-w-6xl">{course?.description}</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:flex-wrap sm:justify-center text-white gap-8 mt-10 md:mt-20">
                <div className='flex group flex-col items-center justify-between shadow-md shadow-gray-600 bg-[#525fe1] gap-5 w-[80vw] sm:max-w-64 md:h-42 py-6 px-3.5 mx-auto sm:mx-0 rounded-lg duration-300'>
                    <p className="font-semibold"><BsGraphUpArrow size={48} /></p>
                    <p className="text-center">Comprehensive Training</p>
                </div>
                <div className='flex group flex-col items-center justify-between shadow-md shadow-gray-600 bg-[#525fe1] gap-5 w-[80vw] sm:max-w-64 md:h-42 py-6 px-3.5 mx-auto sm:mx-0 rounded-lg duration-300'>
                    <p className="font-semibold"><LiaLaptopCodeSolid size={54} /></p>
                    <p className="text-center">Real-World Project Experience</p>
                </div>
                <div className='flex group flex-col items-center justify-between shadow-md shadow-gray-600 bg-[#525fe1] gap-5 w-[80vw] sm:max-w-64 md:h-42 py-6 px-3.5 mx-auto sm:mx-0 rounded-lg duration-300'>
                    <p className="font-semibold"><TbCertificate size={48} /></p>
                    <p className="text-center">Industry-Recognized Certification</p>
                </div>
                <div className='flex group flex-col items-center justify-between shadow-md shadow-gray-600 bg-[#525fe1] gap-5 w-[80vw] sm:max-w-64 md:h-42 py-6 px-3.5 mx-auto sm:mx-0 rounded-lg duration-300'>
                    <p className="font-semibold"><GiStairsGoal size={48} /></p>
                    <p className="text-center">Empowering Career Growth & Success</p>
                </div>
            </div>
            <h1 className="text-3xl md:text-5xl text-center mt-24 urbanist_bold text-gray-900">Course <span className="text-[#525fe1] urbanist_bold">Curriculum</span></h1>
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