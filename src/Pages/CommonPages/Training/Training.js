import React from 'react';
import GradientBanner from '../../../Components/GradientBanner';
import TrainingCards from './Components/TrainingCards';

const Training = () => {
    return (
        <div>
            <GradientBanner title={'Training'}/>
            <TrainingCards/>
        </div>
    );
};

export default Training;