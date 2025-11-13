import { testimonial } from "@/constants/landingPageData";
import { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { LiaStarSolid } from "react-icons/lia";

export default function TestimonialCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonial.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonial.length - 1 ? 0 : prevIndex + 1
        );
    };

    const student = testimonial[currentIndex];

    return (
        <div className="flex flex-col items-center gap-6">
            <div className="flex items-center justify-between w-full max-w-[600px]">
                <div className="flex flex-col items-start gap-5 bg-white shadow-lg p-8 lg:max-w-[574px] rounded-md w-[90vw] transition-all duration-300">
                    <div className="flex items-center gap-1 text-yellow-400 text-lg">
                        {[...Array(5)].map((_, index) => (
                            <LiaStarSolid key={index} />
                        ))}
                    </div>
                    <p className="text-gray-700 urbanist_bold">"{student?.testimonial}"</p>
                    <div className="flex items-center gap-4">
                        <p className="urbanist_bold">{student?.studentName}</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-6">
                <button onClick={handlePrev} className="p-2 rounded-full cursor-pointer border"><FaArrowLeftLong /></button>
                <button onClick={handleNext} className="p-2 rounded-full cursor-pointer border"><FaArrowRightLong /></button>
            </div>
        </div>
    );
}