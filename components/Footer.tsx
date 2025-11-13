'use client'
import Link from "next/link";
import { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import CourseModal from "./CourseModal";

export const footerLinks = [
    { title: "Explore", links: ["Home", "About Us", "Tutorials", "Courses"] },
    { title: "Useful Links", links: ["Contact Us", "Join Us", "Hire from Us", "Terms & Condition", "Privacy policy"] }
];

export default function Footer() {
    const [isCourseModal, setCourseModal] = useState(false);

    return (
        <footer className="bg-[#231f3b] relative bottom-0 text-white px-8 pt-12 pb-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-13">
                <div>
                    <h2 className="text-xl font-serif font-stretch-150% font-bold mb-4">SNT Supernet Technologies Pvt. Ltd</h2>
                    <p className="text-sm leading-relaxed text-gray-300">We were incorporated as a Training Center with the motto of skilling the youth population and assuring them bright futures.</p>
                    <div className="flex gap-4 mt-6">
                        <Link href="https://www.facebook.com/SNTEducation20" target="_blank" className="bg-[#2e2a4d] p-3 rounded-md hover:bg-white hover:text-black transition"><FaFacebookF /></Link>
                        <Link href="https://x.com/snteducation" target="_blank" className="bg-[#2e2a4d] p-3 rounded-md hover:bg-white hover:text-black transition"><FaXTwitter /></Link>
                    </div>
                </div>
                <div className="md:pl-10">
                    <h4 className="text-xl font-semibold mb-4">Explore</h4>
                    <ul className="space-y-3 text-gray-300">
                        <li className="cursor-pointer hover:text-white duration-300"><Link href="/Main">Home</Link></li>
                        <li className="cursor-pointer hover:text-white duration-300"><Link href="/AboutUs">About Us</Link></li>
                        <li onClick={() => setCourseModal(true)} className="cursor-pointer hover:text-white duration-300">Courses</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
                    <ul className="space-y-4 text-gray-300 text-sm">
                        <li className="flex items-start gap-2">
                            <FiMapPin className="text-2xl" />
                            HQ: New Delhi, India
                        </li>
                        <li className="flex items-center gap-2">
                            <FiPhone /> +91-8261976429
                        </li>
                        <li className="flex items-center gap-2">
                            <FiMail /> info@snteducation.com
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-center text-sm mt-15 text-gray-400">
                <p>&copy; 2025 SNT Supernet Technologies Pvt. Ltd. All rights reserved</p>
            </div>
            {isCourseModal && <CourseModal onClose={() => setCourseModal(false)} />}
        </footer>
    )
}