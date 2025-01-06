import React from 'react';
import { CheckCircle } from 'lucide-react';

const ProgressIndicator = ({ currentStep, isProfileCompleted,setActiveSection,validateSection }) => {
    const steps = [
        'Personal Details',
        'KYC Details',
        'Job Profile',
        'Education Details'
    ];

    const canActivate=(index)=>{
        let activate = false

        for(let i=0;i<index;i++){
            if(validateSection(i)){
                activate = true
            }else{
                activate = false
            }
        }
        return activate
    }
    
    return (
        <div className="mb-8">
            {/* Profile completion indicator */}
            {isProfileCompleted && (
                <div className="flex items-center justify-center mb-4 text-green-500">
                    <CheckCircle className="w-6 h-6 mr-2" />
                    <span className="font-medium">Profile Completed</span>
                </div>
            )}

            {/* Steps progress bar */}
            <div className="flex items-center justify-center">
                {steps.map((step, index) => (
                    <React.Fragment key={step}>
                        {/* Step circle */}
                        <div className="flex flex-col items-center" onClick={() => { if(index<currentStep || canActivate(index)) { setActiveSection(index); } }}>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                index <= currentStep 
                                    ? 'bg-orange-500 text-white' 
                                    : 'bg-gray-200'
                            }`}>
                                {index + 1}
                            </div>
                            <span className="text-xs mt-1">{step}</span>
                        </div>

                        {/* Connecting line between steps */}
                        {index < steps.length - 1 && (
                            <div className={`w-16 h-1 mx-2 ${
                                index < currentStep 
                                    ? 'bg-orange-500' 
                                    : 'bg-gray-200'
                            }`} />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default ProgressIndicator;