import React, { useContext } from 'react'
import TaskShow from './TaskShow'
import TasksContext from '../context/task'

const TaskList: React.FC = () => {
  const { tasks } = useContext(TasksContext)
  return (
    <div className="task-list">
        {tasks.map((task, index) => (
            <TaskShow
              key={index}
              task={task}
              />
        ))}

    </div>
  )
}

export default TaskList