import React from 'react';
import GradientBanner from '../../../Components/GradientBanner';
import JobCards from '../Components/JobCards';

const FindJobs = () => {
    return (
        <div>
            <GradientBanner title={'Find Jobs'}/>
            <JobCards/>
        </div>
    );
};

export default FindJobs;