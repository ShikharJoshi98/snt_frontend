import Button from '@/components/Button'
import { useAppData } from '@/constants/useAppData';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa';

const AboutUs = () => {
    const { aboutCards, whyChooseUsArray } = useAppData();

    return (
        <div>
            <div className="sm:h-56 h-36 w-full bg-[url(/aboutUsBanner.jpg)] bg-cover bg-no-repeat">
                <h1 className='text-3xl max-w-6xl mx-auto text-white md:text-5xl p-14 urbanist_bold'>About Us</h1>
            </div>
            <h3 className='text-[#7079df] urbanist_bold w-fit mx-auto mt-10 lg:mt-16 md:text-xl'>WHO WE ARE</h3>
            <h1 className='text-3xl urbanist_bold text-center md:text-4xl mt-3 w-fit mx-auto'>About <span className='text-[#525fe1] urbanist_bold'>SNT</span></h1>
            <p className='text-justify px-10 max-w-7xl mx-auto py-14 leading-loose text-lg'>
                Founded in 2011, SNT Supernet Technologies Pvt. Ltd. is a New-Delhi-based IT training and product engineering company focused on building job-ready digital talent. We work with universities, institutes, and enterprises to design and deliver industry-aligned programs in Cloud-Native Engineering, DevOps, Full-Stack Development, Data Science, GenAI, Cybersecurity, Networking, and Quantum Computing. Our goal is to bridge the gap between academic learning and real-world engineering through hands-on labs, modern curricula, and measurable outcomes.
            </p>
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
                        <div className='flex items-center gap-4 mt-6 sm:mt-0 font-semibold'><span className='p-4 rounded-full bg-[#525fe1]/40'><FaPhoneAlt className='text-[#525fe1]' /></span><span className='text-lg hover:text-[#525fe1] duration-200 cursor-pointer'>+91-8261976429</span></div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs