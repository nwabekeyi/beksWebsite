// useFeatures.js
import { useState } from 'react';

const useFeatures = () => {
    const [features] = useState([
        {
            title: "Custom Website & App Development",
            description: "We design and build responsive websites and mobile applications tailored to your business goals, user needs, and industry trends.",
            image: "/features/f1.avif"
        },
        {
            title: "Coding Training Programs",
            description: "From coding bootcamps for students to corporate digital upskilling workshops, we offer hands-on training for all levels of learners.",
            image: "/features/f2.avif"
        },
        {
            title: "IT & Tech Consulting",
            description: "Our expert consultants help businesses navigate digital transformation,improve IT processes, and choose the right technology solutions.",
            image: "/features/f3.avif"
        },
        {
            title: "Project Management & Support",
            description: "We provide end-to-end project management and ongoing technical support to ensure your projects are delivered on time and perform efficiently.",
            image: "/features/f4.avif"
        }
    ]);

    return features;
};

export default useFeatures;