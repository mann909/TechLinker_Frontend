import React from 'react';
import GradientBanner from '../../../Components/GradientBanner';
import ExporeJobsCards from '../Components/ExporeJobsCards';

const Jobs = () => {
    return (
        <div>
            <GradientBanner title={'Find Jobs'}/>
            <ExporeJobsCards/>
        </div>
    );
};

export default Jobs;