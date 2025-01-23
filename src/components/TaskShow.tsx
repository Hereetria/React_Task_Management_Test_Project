import React, { useContext, useState } from 'react';
import { TaskShowProps } from '../types';
import TasksContext from '../context/task';
import TaskUpdate from './TaskUpdate';

const TaskShow: React.FC<TaskShowProps> = ({ task }) => {
  const { deleteTaskById, editTaskById } = useContext(TasksContext);
  const [showEdit, setShowEdit] = useState<boolean>(false);

  const handleDeleteClick = () => {
    deleteTaskById(task.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id: number, updatedTitle: string, updatedDescription: string) => {
    setShowEdit(false);
    editTaskById(id, updatedTitle, updatedDescription);
  };


  return (
    <div className="task-show">
      {showEdit ? (
        <TaskUpdate
          task={task}
          onUpdate={handleSubmit}
        />
      ) : (
        <div>
          <h3 className="task-title">Göreviniz</h3>
          <p>{task.title}</p>
          <h3 className="task-title">Yapılacaklar</h3>
          <p>{task.description}</p>
          <div>
            <button className="task-delete" onClick={handleDeleteClick}>
              Sil
            </button>
            <button className="task-edit" onClick={handleEditClick}>
              Güncelle
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskShow;
