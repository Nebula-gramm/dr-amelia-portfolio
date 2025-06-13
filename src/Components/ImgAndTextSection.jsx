import React from "react";
import { Link } from "react-router-dom";

const ImgAndTextSection = () => {
  return (
    <div className="max-w-7xl h-auto px-6 mx-auto my-4 md:flex md:gap-x-8 shadow-2xs">
      <div className="w-full h-80 md:h-[380px] align-middle md:w-3/7">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
      </div>
      <div className="md:w-4/7">
        <h1 className="text-4xl font-primary font-bold md:text-6xl md:font-extrabold md:my-3 ">
          Compassionate Care <br /> Personalized <br />
          Solution
        </h1>
        <p className="font-primary md:text-xl">
          Dr. Carter is dedicated to providing exceptional medical care tailored
          to each patient's unique needs. With a focus on holistic health and
          well-being, she combines expertise with empathy to ensure the best
          possible outcomes.
        </p>
        <button
          className=" hidden md:block my-2 md:my-8 w-full px-4 py-2 bg-[#1294EB] text-white rounded-xl font-bold cursor-pointer hover:bg-[#12A4EB] "
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          Book Appointment
        </button>
        <Link to='/register'>
          <button className=" md:hidden my-2 md:my-8 w-full px-4 py-2 bg-[#1294EB] text-white rounded-xl font-bold cursor-pointer hover:bg-[#12A4EB] ">
            Book Appointment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ImgAndTextSection;
