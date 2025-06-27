import React from 'react';
import useFeatures from '../hooks/useFeatures';
import "../styles/Features.css";

function Features() {
    const features = useFeatures();

    return (
        <div className='Block featuresBlock' id='features'>
            <center><p className='subHead'>Features</p></center>
            <center><p className="heading blockHeading">It’s packed with all you need</p></center>
            <center>
                <p className="desc blockDesc">
                    From interactive coding lessons to project-based learning and real-time progress tracking, explore the tools and resources that make tech learning fun and engaging for secondary school students.
                </p>
            </center>

            <div className="features">
                {features.map((feature, index) => (
                    <div className="feature" key={index}>
                        <div>
                            <p className="featureHead">{feature.title}</p>
                            <p className="featureDesc">{feature.description}</p>
                        </div>
                        <div className="featureImg">
                            <img src={feature.image} alt={feature.title} style={{ width: "100%" }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Features;