import React from 'react';
import ImgAndTextSection from '../Components/ImgAndTextSection';
import ServiceSection from '../Components/ServiceSection';
import AboutSection from '../Components/AboutSection';

const Home = () => {
    return (
        <div className='w-full px-4 '>
            <div>
                <ImgAndTextSection/>
            </div>
            <div>
                <ServiceSection/>
            </div>
            <div>
                <AboutSection/>
            </div>
            <div>
                latest news section
            </div>
        </div>
    );
};

export default Home;