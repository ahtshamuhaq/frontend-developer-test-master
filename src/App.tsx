import React from "react";
import SideNav from "./components/SideNav";
import DashBoard from "./components/DashBoard";

function App() {
  return (
    <div className="">
      <div className="bg-black h-full w-[98%] flex mx-auto pl-2">
        <div className="w-1/12">
          <SideNav />
        </div>
        <div className="w-full bg-gray rounded-t-[32px] rounded-b-[32px]">
          <DashBoard />
        </div>
      </div>
    </div>
  );
}

export default App;
