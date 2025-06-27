// useFaqToggle.js
import { useState } from "react";

function useFaqToggle() {
    const questions = [
        { 
            question: "What is this platform about?", 
            answer: "Our platform is dedicated to teaching secondary school students various technology skills, from basic computer literacy to web development, graphic design, and coding." 
        },
        { 
            question: "Do I need prior experience to join the courses?", 
            answer: "Not at all! Our courses are designed for beginners. Whether you’ve never touched a computer before or have some experience, there’s something for you." 
        },
        { 
            question: "What courses are available?", 
            answer: "We offer courses in Web Development, Graphic Design, Coding (Python & JavaScript), Robotics, and Digital Marketing. More courses are being added regularly." 
        },
        { 
            question: "Is there any certificate after completing a course?", 
            answer: "Yes, after completing a course and passing the assessments, you will receive a certificate of completion to showcase your new skills." 
        },
        { 
            question: "How do I get started?", 
            answer: "Simply sign up on our website, choose a course, and begin learning. Our friendly support team is also available to guide you if you need help." 
        },
    ];

    const [openFaqs, setOpenFaqs] = useState({});

    const toggleFaq = (index) => {
        setOpenFaqs((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return { questions, openFaqs, toggleFaq };
}

export default useFaqToggle;
