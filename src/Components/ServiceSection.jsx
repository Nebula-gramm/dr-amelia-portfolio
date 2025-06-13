import { TbStethoscope } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { BiSolidCapsule } from "react-icons/bi";

const ServiceSection = () => {
    return (
        <div className='max-w-7xl h-auto mx-auto px-6'>
            <h1 className='text-3xl md:text-4xl font-bold font-primary'>Services</h1>
            <div className="font-bold font-primary md:flex gap-x-16">
                <div className="flex py-2 border-1 w-3/4 md:w-2/4 px-3 gap-x-2 rounded-[5px] my-2 "><TbStethoscope className="mt-1"/> <p>General Check-ups</p></div>
                <div className="flex py-2 border-1 w-3/4 md:w-2/4 px-3 gap-x-2 rounded-[5px] my-2"><CiHeart className="mt-1"/> <p>Cardiology Consultations</p></div>
                <div className="flex py-2 border-1 w-3/4 md:w-2/4 px-3 gap-x-2 rounded-[5px] my-2"><BiSolidCapsule className="mt-1"/> <p>Medication Managements</p></div>
            </div>
            
        </div>
    );
};

export default ServiceSection;