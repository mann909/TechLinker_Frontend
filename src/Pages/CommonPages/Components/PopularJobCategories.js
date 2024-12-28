import React from 'react';

const jobCategories = [
    { name: 'Full Stack Developer ', link: '/jobs/software-development' },
    { name: 'Backend Developer', link: '/jobs/data-science' },
    { name: 'Graphic Designer', link: '/jobs/product-management' },
    { name: 'Senior Accountant', link: '/jobs/marketing' },
    { name: 'UI-UX Designer', link: '/jobs/sales' },
    { name: 'TeleCaller', link: '/jobs/human-resources' },
    { name: 'Senior Graphic Designer', link: '/jobs/finance' },
    { name: 'DTP Operator', link: '/jobs/operations' },
];

const PopularJobCategories = () => {
    return (
        <div className="flex flex-col items-center p-4 mt-40">
            <h1 className="text-4xl font-bold mb-4">Popular Job Categories</h1>
            <div className="flex flex-wrap justify-center max-w-6xl mt-10">
                {jobCategories.map((category, index) => (
                    <a
                        key={index}
                        href={category.link}
                        className="m-2 py-4 px-6 text-lg text-black bg-yellow-100 rounded-full hover:bg-yellow-300 transition-colors duration-300"
                    >
                        {category.name}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default PopularJobCategories;