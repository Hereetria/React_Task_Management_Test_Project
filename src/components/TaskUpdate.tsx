import React, { ChangeEvent, useEffect, useState } from 'react'
import { TaskUpdateProps } from '../types'

const TaskUpdate: React.FC<TaskUpdateProps> = ({ task, onUpdate }) => {
  const [title, setTitle] = useState<string>(task.title);
    const [description, setDescription] = useState<string>(task.description);
  
    const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setTitle(event.target.value);
    };

    useEffect(() => {
      setTitle(task.title);
      setDescription(task.description);
    }, [task]);
  
    const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      setDescription(event.target.value);
    };

    const handleFormSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onUpdate(task.id, title, description);
    };
    
  return (
    <div className="task-update">
    <h3>Lütfen Taskı Düzenleyiniz!</h3>
    <form className="task-form" onSubmit={handleFormSubmit}>
      <label className="task-label">Başlığı Düzenleyiniz</label>
      <input
        value={title}
        onChange={handleTitleChange}
        className="task-input"
      />
      <label className="task-label">Taskı Düzenleyiniz!</label>
      <textarea
        value={description}
        onChange={handleDescriptionChange}
        className="task-input"
        rows={5}
      />
      <button
        className="task-button update-button"
      >
        Düzenle
      </button>
    </form>
  </div>
  )
}

export default TaskUpdate