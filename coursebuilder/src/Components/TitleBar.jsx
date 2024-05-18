import { IoIosAdd } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import ProfileDropDown from "./ProfileDropDown";
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
const TitleBar = () => {
  const [openProfile, setProfile] = useState(false);

  return (
    <div className="flex justify-center gap-[500px] mt-5">
      <h1 className="font-bold">Course Builder</h1>
      <div className="relative">
        <div 
          className="flex items-center gap-1 bg-[rgb(175,39,62)] cursor-pointer text-white border rounded-lg p-2"
          onClick={() => setProfile(prev => !prev)}
        >
          <IoIosAdd size={45}/>
          <h2>Add</h2>
          {openProfile?<IoIosArrowUp size={25}/>:<IoIosArrowDown size={25}/>}       
        </div>
        {openProfile && <ProfileDropDown />}
      </div>
    </div>
  );
};

export default TitleBar;
