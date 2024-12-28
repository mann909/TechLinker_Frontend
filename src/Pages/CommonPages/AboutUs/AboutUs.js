import React from 'react';
import About from './Components/About';
import VisionMission from './Components/VisionMission';
import OurValues from './Components/OurValues';
import PerfectMatch from './Components/Perfectmatch';
import WhyChooseUs from '../Components/WhyChooseUs';

const AboutUs = () => {
    return (
        <div>
            <About />
            <VisionMission/>
            <OurValues/>
            <PerfectMatch/>
            <WhyChooseUs/>
        </div>
    );
};

export default AboutUs;