'use client';
import { testimonial } from "@/constants/landingPageData";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function TestimonialCard() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        if (testimonial && testimonial.length > 0) {
            const interval = setInterval(() => {
                setFade(false);

                setTimeout(() => {
                    setCurrentIndex((prevIndex) =>
                        prevIndex === testimonial.length - 1 ? 0 : prevIndex + 1
                    );
                    setFade(true);
                }, 500);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [testimonial]);


    const student = testimonial[currentIndex];

    return (
        <div className="flex justify-center items-center">
            <div className={`w-[90vw] max-w-[536px] min-h-64 space-y-3 text-white bg-[#145aed] p-5 rounded-2xl transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"
                }`}
            >
                <div className="flex items-center gap-6">
                    <Image
                        src={student?.studentImage || '/user.png'}
                        alt="testimonial image"
                        height={4500}
                        width={3000}
                        className="rounded-full w-16 h-16 object-cover border border-white"
                    />
                    <h3 className="font-semibold text-2xl text-white">{student?.studentName}</h3>
                </div>
                <div className="sm:text-lg text-[#fffffe] font-semibold">
                    {student?.oldJobRole ?? 'Sample Old Job Role'} <span className="mx-2">➤➤➤</span> {student?.newJobRole || 'Sample New Job Role'}
                </div>
                <div className="italic text-[#fdfdfe] leading-relaxed">
                    {`"${student?.testimonial ?? "Sample Testimonial"}"`}
                </div>
            </div>
        </div>
    );
}