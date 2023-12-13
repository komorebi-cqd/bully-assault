import { useState } from "react";
import Deploy from "@/components/home-make/Deploy";
import Mint from "@/components/home-make/Mint";
import Transfer from "@/components/home-make/Transfer";

const navList = [
  { label: "Deploy", tabIndex: "1" },
  { label: "Mint", tabIndex: "2" },
  { label: "Transfer", tabIndex: "3" },
]

const Home = () => {
  const [currentTab, setCurrentTab] = useState("1");

  //切换
  const handleSwitchTab = (tab) => {
    setCurrentTab(tab);
  }


  return (
    <div className="max-w-[87.5rem] mx-auto">
      <ul className="flex items-center justify-center w-full h-16 gap-x-32 bg-[#F8F8F8]">
        {navList.map(nav =>
        (<li key={nav.tabIndex}
          onClick={() => handleSwitchTab(nav.tabIndex)}
          className={`flex items-center h-full text-onsurface hover:text-primary transition duration-150 ease-in-out relative after:absolute after:h-[2px] after:transition-all after:bottom-0 hover:after:bg-primary hover:after:left-0 hover:after:right-0 ${nav.tabIndex === currentTab  ? "after:left-0 after:right-0 after:bg-primary text-primary" : "after:left-1/2 after:right-1/2"} cursor-pointer`}>
          {nav.label}
        </li>))}
      </ul>
      <div className="w-full flex flex-col gap-y-7 pr-24 py-20 text-xl text-onsurface mt-16 h-[60vh] rounded-2xl shadow-[0_3px_16px_rgba(47,83,109,0.12)]">
        {currentTab === "1" && <Deploy />}
        {currentTab === "2" && <Mint />}
        {currentTab === "3" && <Transfer />}

      </div>
    </div>
  )
}

export default Home;
