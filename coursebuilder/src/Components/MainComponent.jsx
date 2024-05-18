import React, { useState } from 'react';
import { DndContext, closestCorners } from '@dnd-kit/core'; 
import { Column } from './Column'; 
import { arrayMove } from '@dnd-kit/sortable';
import TitleBar from './TitleBar';

const MainComponent = () => {
  const [tasks, setTasks] = useState([
    { id: 1, Url: "Hello World!", display_name: "Hello World1" },
    { id: 2, Url: "Hello World!", display_name: "Hello World2" },
    { id: 3, Url: "Hello World!", display_name: "Hello World3" },
  ]);

  const getTaskpos = id => tasks.findIndex(task => task.id === id); 
  const handleDragEnd = e => {
    const { active, over } = e;
    if (!active || !over || active.id === over.id) return; 
    setTasks(tasks => {
      const originalPos = getTaskpos(active.id);
      const newPos = getTaskpos(over.id);
      return arrayMove(tasks, originalPos, newPos);
    });
  };

  return (
    <div>
      <TitleBar setTasks={setTasks} />
      <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
        <Column tasks={tasks} />
      </DndContext>
    </div>
  );
};

export default MainComponent;
