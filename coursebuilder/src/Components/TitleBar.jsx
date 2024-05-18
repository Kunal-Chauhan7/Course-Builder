import { IoIosAdd, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import ProfileDropDown from "./ProfileDropDown";


const TitleBar = ({ setTasks }) => {
  const [openProfile, setOpenProfile] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newTaskName, setNewTaskName] = useState('');
  const [newTaskUrl, setNewTaskUrl] = useState('');

  const toggleProfile = () => {
    setOpenProfile(prev => !prev);
    setShowAddForm(false); 
  };

  const toggleAddForm = () => {
    setShowAddForm(prev => !prev);
    setOpenProfile(false); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTaskId = Math.floor(Math.random() * 1000);
    const newTask = { id: newTaskId, Url: newTaskUrl, display_name: newTaskName };
    setTasks(prevTasks => [...prevTasks, newTask]);
    setNewTaskName('');
    setNewTaskUrl('');
    setShowAddForm(false);
  };

  return (
    <div className="flex justify-center gap-[500px] mt-5">
      <h1 className="font-bold">Course Builder</h1>
      <div className="relative">
        <div 
          className="flex items-center gap-1 bg-[rgb(175,39,62)] cursor-pointer text-white border rounded-lg p-2"
          onClick={toggleAddForm}
        >
          <IoIosAdd size={45}/>
          <h2>Add</h2>
          {showAddForm && <IoIosArrowUp size={25}/>}
          {!showAddForm && <IoIosArrowDown size={25}/>}       
        </div>
        {showAddForm && (
          <form onSubmit={handleSubmit} className="absolute top-10 right-0 bg-white p-4 border border-gray-300 rounded-lg shadow-lg z-10">
            <input
              type="text"
              placeholder="Task Name"
              value={newTaskName}
              onChange={(e) => setNewTaskName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Task URL"
              value={newTaskUrl}
              onChange={(e) => setNewTaskUrl(e.target.value)}
            />
            <button type="submit">Add Task</button>
          </form>
        )}
        {openProfile && <ProfileDropDown />}
      </div>
    </div>
  );
};

export default TitleBar;
