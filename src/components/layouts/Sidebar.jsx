import { NavLink } from "react-router-dom";
import logo from "../../assets/image/logo.png";
import {
  SquaresPlusIcon,
  Cog6ToothIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  UserCircleIcon,
  ArchiveBoxIcon,
} from "@heroicons/react/24/solid";

const Sidebar = () => {
  return (
    <div className="h-screen sticky top-0 border-r-2 border-secondary/20">
      <div className="flex flex-col items-center gap-5 h-full py-5">
        <img src={logo} alt="logo" />
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active-nav" : "non-active-nav group"
          }
        >
          <SquaresPlusIcon className="h-7 w-7 group-hover:text-white" />
        </NavLink>
        <NavLink
          to="/archive"
          className={({ isActive }) =>
            isActive
              ? "p-2 rounded-2xl bg-primary text-white cursor-pointer"
              : "p-2 rounded-2xl group hover:bg-primary text-secondary/40 cursor-pointer transition-all"
          }
        >
          <ArchiveBoxIcon className="h-7 w-7 group-hover:text-white" />
        </NavLink>
        <NavLink
          to="/chat"
          className={({ isActive }) =>
            isActive ? "active-nav" : "non-active-nav group"
          }
        >
          <ChatBubbleOvalLeftEllipsisIcon className="h-7 w-7 group-hover:text-white " />
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? "active-nav" : "non-active-nav group"
          }
        >
          <Cog6ToothIcon className="h-7 w-7 group-hover:text-white " />
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "active-nav mt-auto" : "non-active-nav group mt-auto"
          }
        >
          <UserCircleIcon className="h-7 w-7 group-hover:text-white " />
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
