import { IoReorderThreeOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Drawer = () => {
  return (
    <div>
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="text-2xl"
          >
            <IoReorderThreeOutline />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
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
            <li className="hover:underline">
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive ? "underline" : ""
                }
              >
                Book Appointment
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
