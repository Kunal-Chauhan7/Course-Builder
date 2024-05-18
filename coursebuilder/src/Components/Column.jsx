import React from 'react';
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import Task from './Task';

export const Column = ({ tasks }) => {
  return (
    <div className="column">
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {tasks.map((task) => (
          <Task id={task.id} displayName={task.display_name} key={task.id} />
        ))}
      </SortableContext>
    </div>
  );
};
