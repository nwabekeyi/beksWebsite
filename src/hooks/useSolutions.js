import { useState } from "react";

const useSolutions = () => {
    const [solutions] = useState([
        {
            img: "/solutions/s1.avif",
            title: "Coding for Beginners",
            description: "We introduce students to coding with beginner-friendly languages like Python and JavaScript, making programming fun and easy to understand."
        },
        {
            img: "/solutions/s2.avif",
            title: "Web Design & Development",
            description: "Students learn how to build real websites from scratch using HTML, CSS, and JavaScript, preparing them for future tech careers."
        },
        {
            img: "/solutions/s3.avif",
             title: "Graphics & Digital Design",
            description: "Unlock creativity with design tools like Canva and Photoshop, teaching students to create stunning digital graphics and social media content."
        },
        {
            img: "/solutions/s3.avif",
            title: "Robotics and STEM",
            description: "Hands-on robotics and STEM projects that build problem-solving and engineering skills in a fun, engaging way."
        },
        {
            img: "/solutions/s3.avif",
            title: "Digital Marketing for Teens",
            description: "We teach students the basics of digital marketing, social media management, and content creation to prepare them for modern business trends."
        }
    ]);

    return solutions;
};

export default useSolutions;