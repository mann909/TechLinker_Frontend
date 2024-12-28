import React from 'react';
import JobCards from './Components/JobCards';
import PopularJobCategories from './Components/PopularJobCategories';
import OurServices from './Components/OurServices';
import UniqueAdvantage from './Components/UniqueAdvantage';
import WhyChooseUs from './Components/WhyChooseUs';
import BackgroundTab from './Components/BackgroundTab';

const LandingPage = () => {
    return (
        <div>
            <BackgroundTab/>
            <JobCards/>
            <PopularJobCategories/>
            <OurServices/>
            <UniqueAdvantage/>
            <WhyChooseUs/>
        </div>
    );
};

export default LandingPage;