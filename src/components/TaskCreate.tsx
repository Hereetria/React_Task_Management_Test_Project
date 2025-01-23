import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';
import TasksContext from '../context/task';

const TaskCreate: React.FC = () => {
  const { createTask } = useContext(TasksContext);

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    createTask(title, description);

    setTitle("");
    setDescription("");
  };

  return (
        <div className="task-create">
          <h3>Lütfen Task Ekleyiniz!</h3>
          <form className="task-form">
            <label className="task-label">Başlık</label>
            <input
              value={title}
              onChange={handleTitleChange}
              className="task-input"
            />
            <label className="task-label">Task Giriniz!</label>
            <textarea
              value={description}
              onChange={handleDescriptionChange}
              className="task-input"
              rows={5}
            />
            <button className="task-button" onClick={handleSubmit}>
              Oluştur
            </button>
          </form>
        </div>
  );
};

export default TaskCreate;
