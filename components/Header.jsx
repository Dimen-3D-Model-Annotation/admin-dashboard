import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

export default function Header() {
  return (
    <div className="hidden sm:block">
      <div className="flex items-center justify-end px-4 py-2">
        <div className="header_top__icon_wrapper">
          <IoIosNotifications />
        </div>
        <div className="header_top__icon_wrapper">
          <CgProfile />
        </div>
        <div className="header_top__icon_wrapper">
          Main Account
        </div>
      </div>
    </div>
  );
}