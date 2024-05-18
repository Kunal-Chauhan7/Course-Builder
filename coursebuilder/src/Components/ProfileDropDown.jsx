import { GrDatabase } from "react-icons/gr";
import { FaLink } from "react-icons/fa6";
import { HiUpload } from "react-icons/hi";
import './ProfileDropDown.css';

const ProfileDropDown = () => {
    return (
        <div className="dropdownmenu absolute left-0 mt-2 bg-white p-6 border border-gray-300 rounded-lg shadow-lg z-10">
            <ul className="flex flex-col gap-6">
                <li className="hover:bg-[rgb(242,242,242)] cursor-pointer">
                    <div className="flex items-center gap-2 ">
                        <GrDatabase /> Create Module
                    </div>
                </li>
                <li className="hover:bg-[rgb(242,242,242)] cursor-pointer">
                    <div className="flex items-center gap-2">
                        <FaLink /> Add a link
                    </div>
                </li>
                <li className="hover:bg-[rgb(242,242,242)] cursor-pointer">
                    <div className="flex items-center gap-2">
                        <HiUpload /> Upload
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default ProfileDropDown;
