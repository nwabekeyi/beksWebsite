// useFeatures.js
import { useState } from 'react';

const useFeatures = () => {
    const [features] = useState([
        {
            title: "Interactive Learning",
            description: "Students enjoy hands-on lessons with interactive coding challenges, quizzes, and projects designed to make learning technology fun and engaging.",
            image: "/features/f1.avif"
        },
        {
            title: "Beginner-Friendly Content",
            description: "No prior tech experience? No problem! Our content starts from the basics and gradually builds up, making it perfect for students with little or no background in technology.",
            image: "/features/f2.avif"
        },
        {
            title: "Progress Tracking and Certification",
            description: "Students can track their progress, earn badges along the way, and receive certificates after completing each course—great for building their tech portfolio.",
            image: "/features/f3.avif"
        }
        
    ]);

    return features;
};

export default useFeatures;