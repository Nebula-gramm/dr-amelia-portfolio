import React from "react";
import ImgAndTextSection from "../Components/ImgAndTextSection";
import ServiceSection from "../Components/ServiceSection";
import AboutSection from "../Components/AboutSection";
import ExperienceCard from "../Components/Cards/ExperienceCard";
import PostCard from "./../Components/Cards/PostCard";
import RatingCard from "../Components/Cards/RatingCard";

const Home = () => {
  return (
    <div className="w-full px-4 ">
      <div>
        <ImgAndTextSection />
      </div>
      <div>
        <ServiceSection />
      </div>
      <div>
        <AboutSection />
      </div>
      <div>
        <ExperienceCard />
      </div>
      <div className="max-w-7xl h-auto px-6 mx-auto my-4 ">
        <h1 className="text-3xl font-bold font-primary md:text-4xl">
          Latest News
        </h1>
        <PostCard />
      </div>
      <div className="max-w-7xl h-auto px-6 mx-auto my-4">
        <h1 className="text-3xl font-bold font-primary md:text-4xl">
          Patient Testimonials
        </h1>
        <p className="font-primary md:text-xl md:mt-2 text-[#637887]">
            Read What our patient have to say about their experience with Dr. Carter.
        </p>
        <div className="my-4 pl-4">
            <RatingCard/>
            <RatingCard/>
            <RatingCard/>
            <RatingCard/>
            <RatingCard/>
        </div>
      </div>
    </div>
  );
};

export default Home;
