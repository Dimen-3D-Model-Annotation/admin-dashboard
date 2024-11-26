import { IoIosNotifications } from "react-icons/io";

export default function Header() {
  return (
    <div className="hidden sm:block">
      <div className="flex items-center justify-end px-4 py-2">
        <div className="header_top__icon_wrapper">
          <IoIosNotifications className='w-8 h-8 mr-2'/>
        </div>
        <div className="header_top__icon_wrapper">
          <img className='w-8 h-8 rounded-full mr-2' src="/assets/images/admin_profile.png" alt="Admin Profile"/>
        </div>
        <div className="header_top__icon_wrapper">
          Main Account
        </div>
      </div>
    </div>
  );
}