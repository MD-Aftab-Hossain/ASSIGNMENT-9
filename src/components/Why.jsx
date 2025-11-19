import React from "react";
import { FaUsers, FaStar, FaHandshake, FaGraduationCap } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Why = () => {
    useEffect(() => {
        AOS.init({ 
            duration: 1000,
            once: false,
         });
        
    }, []);

    return (
        <section className="py-12 bg-gray-50">
            <div data-aos='zoom-in' className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-8 text-gray-800">
                    Why Choose SkillSwap?
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
                        <FaHandshake className="text-4xl text-blue-500 mx-auto mb-3" />
                        <h3 className="font-semibold text-lg">Best Skill Sharing</h3>
                    </div>

                    <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
                        <FaUsers className="text-4xl text-green-500 mx-auto mb-3" />
                        <h3 className="font-semibold text-lg">Verified Local Users</h3>
                    </div>

                    <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
                        <FaStar className="text-4xl text-yellow-500 mx-auto mb-3" />
                        <h3 className="font-semibold text-lg">Real Ratings & Reviews</h3>
                    </div>

                    <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
                        <FaGraduationCap className="text-4xl text-purple-500 mx-auto mb-3" />
                        <h3 className="font-semibold text-lg">Learn With Experts</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Why;
