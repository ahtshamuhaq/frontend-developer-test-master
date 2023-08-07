import React from "react";
import sideNavIcon1 from "../assests/Asset.png";
import sideNavIcon2 from "../assests/home.png";
import sideNavIcon3 from "../assests/nft listing.png";
import sideNavIcon4 from "../assests/settings.png";
import sideNavIcon5 from "../assests/notifications padding.png";

const SideNav = () => {
  return (
    <div className="flex h-full flex-col justify-between  py-4  items-center">
      <div className="">
        <img className=" w-full mt-3" src={sideNavIcon1} alt="" />
      </div>
      <div className="w-[108px] ">
        <div>
          <img src={sideNavIcon2} alt="" />
        </div>
        <div>
          <img src={sideNavIcon3} alt="" />
        </div>
        <div>
          <img src={sideNavIcon4} alt="" />
        </div>
      </div>
      <div>
        <img src={sideNavIcon5} alt="" />
      </div>
    </div>
  );
};

export default SideNav;
