import { createContext, useState } from "react";
import { SharedValuesAndMethods, Task } from "../types";
import axios from "axios";

const TasksContext = createContext<SharedValuesAndMethods>({
    tasks: [],
    createTask: async () => {},
    fetchTasks: async () => {},
    deleteTaskById: async () => {},
    editTaskById: async () => {}
  });

const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const apiPath = "http://localhost:3000/";
    const [tasks, setTasks] = useState<Task[]>([]);
  
    const createTask = async (title: string, description: string): Promise<void> => {
      const response = await axios.post(`${apiPath}tasks`,{
        title,
        description
      });
      const createdTasks: Task[] = [
        ...tasks,
        response.data
      ];
      setTasks(createdTasks);
    };
  
    const fetchTasks = async (): Promise<void> => {
      const response = await axios.get(`${apiPath}tasks`)
      setTasks(response.data);
    }
    
    const deleteTaskById = async (id: number): Promise<void> => {
        await axios.delete(`${apiPath}tasks/${id}`)
        const afterDeletingTasks = tasks.filter((task) => task.id !== id);
        setTasks(afterDeletingTasks);
      };
    
      const editTaskById = async (id: number, updatedTitle: string, updatedDescription: string): Promise<void> => {
        await axios.put(`${apiPath}tasks/${id}`, {
          title: updatedTitle,
          description: updatedDescription
        })
        const  updatedTasks = tasks.map((task) =>
          task.id === id ? { id, title: updatedTitle, description: updatedDescription } : task
        );
        setTasks(updatedTasks);
      };
    
      const sharedValuesAndMethods: SharedValuesAndMethods = {
        tasks,
        createTask,
        fetchTasks,
        deleteTaskById,
        editTaskById
      };
    
      return (
        <TasksContext.Provider value={sharedValuesAndMethods}>
          {children}
        </TasksContext.Provider>
      );
    };

export {Provider}
export default TasksContext;