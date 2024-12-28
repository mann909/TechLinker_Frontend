import React from 'react';
import GradientBanner from '../../../Components/GradientBanner';
import ContactForm from './Components/ContactForm';

const ContactUs = () => {
    return (
        <div>
            <GradientBanner title={'Contact Us'}/>
            <ContactForm/>
        </div>
    );
};

export default ContactUs;