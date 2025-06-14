import React from 'react';

const ExperienceCard = () => {
    return (
        <div className='max-w-7xl h-auto px-6 mx-auto my-4 font-primary '>
            <h1 className='text-3xl mb-6 font-bold md:text-4xl'>Experience</h1>
            <div className='md:text-xl'>
                <div className='flex gap-x-10 md:gap-x-0 border-t-1 py-3'>
                    <p className='text-[#637887] w-3/7 md:w-1/4'>Medical School</p>
                    <p>University of California, San Francisco School of Medicine</p>
                </div>
                <div className='flex gap-x-8 md:gap-x-0 border-t-1 py-3'>
                    <p className='text-[#637887] w-3/7 md:w-1/4'>Residency</p>
                    <p>Internal Medicine Residency, Stanford Health Care.</p>
                </div>
                <div className='flex  border-t-1 py-3 '>
                    <p className='text-[#637887] w-3/7 md:w-1/4 '>Board Certification</p>
                    <p>American Board of Internal Medicine</p>
                </div>
            </div>
            
        </div>
    );
};

export default ExperienceCard;