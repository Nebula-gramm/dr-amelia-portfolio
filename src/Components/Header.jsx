import { NavLink } from "react-router-dom";
import Drawer from "./Drawer";
import BookAppointmentModal from "./BookAppointmentModal";

const Header = () => {
  return (
    <div className="w-full h-14 flex justify-between items-center px-4 md:px-12 text-[#121417] border-b-1 border-solid border-[#E5E8EB] font-primary">
      <div>
        <p className="font-bold text-xl text-[#111518]">Dr. Sathi Akter</p>
      </div>
      <div>
        <div className="hidden md:block font-primary">
          <ul className="flex gap-x-7 justify-center items-center h-full cursor-pointer">
            <li className="hover:underline">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "underline" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li className="hover:underline">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? "underline" : ""
                }
              >
                Services
              </NavLink>
            </li>
            <li className="hover:underline">
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "underline" : ""
                }
              >
                Blog
              </NavLink>
            </li>
            <li className="hover:underline">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "underline" : ""
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <button className="px-4 py-2 bg-[#1294EB] text-white rounded-xl font-bold cursor-pointer hover:bg-[#12A4EB] " onClick={()=>document.getElementById('my_modal_3').showModal()}>
                Book Appointment
              </button>
              <BookAppointmentModal/>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <Drawer />
        </div>
      </div>
    </div>
  );
};

export default Header;
