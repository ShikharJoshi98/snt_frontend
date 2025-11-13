'use client';
import Button from "@/components/Button";
import SelfPacedLearning from "@/components/SelfPacedLearning";
import SmallButton from "@/components/SmallButton";
import TestimonialCard from "@/components/TestimonialCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { aboutInfoArray, topCourses } from "@/constants/landingPageData";
import { useAppData } from "@/constants/useAppData";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { FaArrowRight, FaAward, FaBriefcase, FaClock, FaPhoneAlt, FaRupeeSign } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Main() {
    const { aboutCards, whyChooseUsArray } = useAppData();
    const sectionRef = useRef<HTMLDivElement>(null);

    const scrollToSection = () => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <section className='px-4 py-8 relative sm:py-12 bg-linear-to-b from-[#bbd2ff] via-[#ccd4df] to-[#e5e5e5]'>
                <div className='flex flex-col items-center gap-4 sm:gap-6'>
                    <p className='flex items-center font-semibold gap-2 py-1 px-4 bg-transparent border rounded-4xl w-fit text-[10px] text-center sm:text-sm'><FaAward className='text-[#525fe1]' />STEP INTO THE IT WORLD WITH SNT</p>
                    <h1 className='text-2xl urbanist_bold leading-tight mt-2 text-zinc-800 text-center sm:text-4xl lg:text-[56px]'>Building Job-Ready Digital Talent<br /><span className='urbanist_bold text-[#525fe1]'>for the Future of Tech.</span></h1>
                    <p className='text-center font-semibold text-gray-700 hidden sm:block sm:max-w-[525px] lg:max-w-[800px] text-[15px] md:text-lg'>Achieve your IT career goals with job-ready training and 100% job assistance. SNT ensures you master essential IT skills to succeed in today’s competitive world.</p>
                    <button onClick={scrollToSection} className='py-2 pl-4 font-semibold text-sm sm:text-lg cursor-pointer pr-2 text-white bg-[#525fe1] hover:bg-[#3c49e0] group duration-300 rounded-full flex items-center gap-2 mt-2'>Get Started Now <span className='bg-white group-hover:text-white group-hover:bg-black duration-300 text-black rounded-full p-2'><FaArrowRightLong /></span></button>
                </div>
            </section>
            <section className='bg-linear-to-b px-5 py-10 items-center flex flex-col-reverse lg:flex-row lg:gap-0 lg:justify-center gap-10 from-[#e5e5e5] w-full to-white'>
                <div>
                    <div className='flex flex-col sm:flex-row flex-wrap mx-auto lg:mx-0 max-w-[536px] lg:w-auto sm:justify-center lg:justify-start items-center gap-6'>
                        {
                            aboutInfoArray.map((info, index) => (
                                <div key={index} className='p-5 bg-white sm:w-52 flex flex-col gap-2 shadow-md items-center border border-[#525fe1] w-[90vw] rounded-2xl'>
                                    <p className='text-4xl sm:text-5xl urbanist_bold text-[#525fe1]'>{info?.title}</p>
                                    <p className='font-semibold'>{info?.desc}</p>
                                </div>
                            ))}
                    </div>
                </div>
                <TestimonialCard />
            </section>
            <h3 ref={sectionRef} className='text-[#7079df] urbanist_bold w-fit mx-auto mt-10 lg:mt-16 md:text-xl'>UNIQUE COURSES</h3>
            <h1 className='text-3xl urbanist_bold text-center md:text-4xl mt-3 w-fit mx-auto'>Our Featured <span className='urbanist_bold text-[#525fe1]'>Courses</span></h1>
            <section className="py-15">
                <div className='mx-auto flex flex-wrap gap-10 justify-center w-full px-4'>
                    {
                        topCourses.map((course, index) => (
                            <div key={index} className="bg-white shadow-md hover:shadow-xl hover:shadow-black/40 duration-300 rounded-lg pb-4 w-[90vw] sm:w-90 max-w-90 flex flex-col">
                                <Image src={course?.courseImage} alt={course?.course} height={270} width={370} className="w-full max-h-48 object-cover rounded-t-2xl" />
                                <h3 className="mt-5 pl-3 font-semibold text-lg">{course?.course}</h3>
                                <div className="flex items-center flex-wrap mt-5 justify-between px-3">
                                    <span className="flex items-center text-zinc-500 font-semibold gap-1"><FaClock className="text-[#525fe1]" />{course?.courseDuration}</span>
                                    <span className="flex items-center text-zinc-500 font-semibold gap-1"><FaRupeeSign className="text-[#525fe1]" />{course?.incomeRange}</span>
                                </div>
                                <span className="flex items-center mt-5 text-zinc-500 font-semibold gap-1 px-3"><FaBriefcase className="text-[#525fe1]" />{course?.jobOpportunities}</span>
                                <div className="w-[80%] h-[0.5px] my-5 bg-gray-400 mx-auto"></div>
                                <div className="flex items-center justify-between px-3 mt-auto">
                                    <Link href={`/Courses/${course?.id}`}><SmallButton text="Read More" /></Link>
                                    <Link href={`/Courses/${course?.id}`} className="relative group w-fit text-sm sm:text-base cursor-pointer duration-300 py-3 px-5 text-[#525fe1] flex items-center gap-3 font-semibold rounded-lg">Enroll Now <FaArrowRight /><span className="absolute left-5 bottom-2 h-0.5 w-0 bg-[#525fe1] transition-all duration-300 group-hover:w-[60%]"></span></Link>
                                </div>
                            </div>
                        ))}
                </div>
            </section>
            <h3 className='text-[#7079df] urbanist_bold w-fit mx-auto mt-10 lg:mt-16 md:text-xl'>WHO WE ARE</h3>
            <h1 className='text-3xl urbanist_bold text-center md:text-4xl mt-3 w-fit mx-auto'>About <span className='text-[#525fe1] urbanist_bold'>SNT</span></h1>
            <section className='py-10 mt-5 flex flex-col lg:flex-row items-center lg:justify-center lg:gap-10 xl:gap-15 gap-5'>
                <Image src='/about-image-09.jpg' alt='About Image' height={340} width={290} className='mx-auto lg:mx-0 rounded-t-full lg:h-[595px] lg:w-[363px] xl:h-[555px] xl:w-[463px] object-cover' />
                <div className='px-4'>
                    <div>
                        <div className='flex flex-col lg:grid lg:grid-cols-2 lg:gap-y-3 lg:w-fit items-center gap-5 text-zinc-600 mt-8 lg:mt-0'>
                            {aboutCards?.map((card, i: number) => (
                                <div key={i} className={`p-3 rounded-xl lg:h-44 w-[95vw] lg:max-w-[260px] shadow-sm ${card?.bg}`}>
                                    <span className='flex items-center gap-3'>
                                        <span className={`p-1 rounded-md ${card.color} text-white`}>{card?.icon}</span>
                                        <h5 className='font-semibold text-xl text-black'>{card?.title}</h5>
                                    </span>
                                    <p className='mt-5 text-sm'>{card?.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <ul className='list-none mt-10 flex flex-col sm:grid sm:grid-cols-2 sm:gap-x-38 sm:gap-y-5 lg:gap-x-8 gap-5 font-semibold mb-10'>
                        {(['Dedicated cloud and AI labs.', 'Learn from approved experts', 'Certification alignment', 'Boost your knowledge']).map((detail, index) => (
                            <li key={index} className="relative pl-10 before:content-['✔'] before:absolute before:left-0 before:top-1 before:bg-[#525fe1] before:text-white before:rounded-full before:w-5 before:h-5 before:flex before:items-center before:justify-center before:text-xs">{detail}</li>))}
                    </ul>
                    <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center'>
                        <Link href="/AboutUs"><Button text="Know More" /></Link>
                        <div className='flex items-center gap-4 mt-6 sm:mt-0 font-semibold'><span className='p-4 rounded-full bg-[#525fe1]/40'><FaPhoneAlt className='text-[#525fe1]' /></span><span className='text-lg hover:text-[#525fe1] duration-200 cursor-pointer'>+91-8261976429</span></div>
                    </div>
                </div>
            </section>
            <section className='bg-[#f3faff] px-5 py-15 mt-10 lg:mt-16'>
                <h3 className='text-[#7079df] w-fit urbanist_bold mx-auto md:text-xl'>OUR SERVICES</h3>
                <h1 style={{ fontFamily: 'Urbanist-bold' }} className='text-3xl text-center md:text-4xl mt-3 w-fit mx-auto'>Why Choose <span className='urbanist_bold text-[#525fe1]'>us?</span></h1>
                <div>
                    <div className='flex flex-col sm:flex-row items-center sm:flex-wrap sm:justify-center gap-8 mt-10'>
                        {
                            whyChooseUsArray.map((item, index) => (
                                <div key={index} className='flex group flex-col items-center shadow-md hover:shadow-lg gap-5 w-[80vw] sm:max-w-64 py-6 px-3.5 mx-auto sm:mx-0 h-72 rounded-lg bg-white hover:bg-[#525fe1] duration-300'>
                                    <span className='text-[#525fe1] group-hover:text-white text-5xl'>{item?.symbol}</span>
                                    <h3 className='text-center text-lg group-hover:text-white font-semibold text-zinc-800'>{item?.title}</h3>
                                    <p className='text-center group-hover:text-white text-zinc-700'>{item?.desc}</p>
                                </div>
                            ))}
                    </div>
                </div>
            </section>
            <section className='bg-linear-to-r py-15 from-[#fff3e7] via-[#f6f1f7] to-[#f6ebe7]'>
                <h3 className='text-[#7079df] urbanist_bold w-fit mx-auto md:text-xl'>SHAPING SUCCESS</h3>
                <h1 className='text-3xl urbanist_bold text-center md:text-4xl mt-3 w-fit mx-auto'>Student <span style={{ fontFamily: 'Urbanist-bold' }} className='text-[#525fe1]'>Testimonials</span></h1>
                <div className='flex flex-col items-center lg:px-10 lg:flex-row-reverse lg:items-start lg:justify-center lg:gap-10 xl:gap-16 lg:mt-14'>
                    <div className='px-4 lg:px-0 my-8 lg:my-4'>
                        <p className='text-zinc-600 font-semibold'>SNT empowers future developers through real-world coding, expert mentorship, and career-focused training .</p>
                        <ul className='list-none my-6 text-zinc-600 flex w-fit flex-col sm:grid sm:grid-cols-2 sm:gap-x-28 sm:gap-y-5 lg:gap-x-8 gap-5 font-semibold'>
                            {['Industry-relevant curriculum', '1-on-1 mentor support', 'Placement assistance & mock interviews', 'Access to industry mentors and global certifications']?.map((detail, index) => (
                                <li key={index} className="relative pl-10 before:content-['✔'] before:absolute before:left-0 before:top-1 before:bg-[#525fe1] before:text-white before:rounded-full before:w-5 before:h-5 before:flex before:items-center before:justify-center before:text-xs">{detail}</li>
                            ))}
                        </ul>
                    </div>
                    <TestimonialCarousel />
                </div>
            </section>
            <SelfPacedLearning />
        </>
    )
}