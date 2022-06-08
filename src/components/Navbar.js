import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import React, { useEffect } from "react";
import { AiOutlineMenu, AiOutlineNotification } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { MdArrowDownward } from "react-icons/md";
import { RiNotification3Line } from "react-icons/ri";
import { useStateContext } from "../contexts/ContextProvider";
import avatar from "../data/avatar.jpg";
import Cart from "./Cart";
import Chat from "./Chat";
import Notification from "./Notification";
import UserProfile from "./UserProfile";
const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);
const Navbar = () => {
  const {
    activeLink,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    setScreenSize,
    screenSize,
  } = useStateContext();
  useEffect(() => {
    const handleSize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color="blue"
        icon={<AiOutlineMenu />}
        dotColor=""
      />
      <div className="flex">
        <NavButton
          title="Cart"
          customFunc={() => handleClick("cart")}
          color="blue"
          icon={<FiShoppingCart />}
          dotColor=""
        />
        <NavButton
          title="Chat"
          customFunc={() => handleClick("chat")}
          color="blue"
          icon={<BsChatLeft />}
          dotColor="#03C9D7"
        />
        <NavButton
          title="Notifications"
          customFunc={() => handleClick("notification")}
          color="blue"
          icon={<RiNotification3Line />}
          dotColor=""
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <img src={avatar} alt="" className="rounded-full w-8 h-8" />
            <p>
              <span className="text-gray-400 text-14 ">Hi, </span>
              {""}
              <span className="text-gray-400 font-bold ml-1 text-14">
                Michael
              </span>
            </p>
            <MdArrowDownward className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
