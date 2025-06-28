import { useState } from "react";

const useSolutions = () => {
    const [solutions] = useState([
        {
            img: "/solutions/s1.avif",
            title: "Web & App Development",
            description: "We build custom websites and mobile applications that are fast, responsive, and tailored to meet your business or organizational goals."
        },
        {
            img: "/solutions/s2.avif",
            title: "Tech Training & Capacity Building",
            description: "We offer hands-on tech training for students, businesses, and individuals—covering coding, design, digital skills, and more."
        },
        {
            img: "/solutions/s3.avif",
            title: "IT Consulting & Digital Strategy",
            description: "Our experts provide strategic advice to help businesses leverage technology effectively—from infrastructure planning to digital transformation."
        }
    ]);

    return solutions;
};

export default useSolutions;