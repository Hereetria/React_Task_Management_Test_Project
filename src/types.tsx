export interface Task {
  id: number;
  title: string;
  description: string;
}

export interface TaskShowProps {
  task: Task;
}

export interface TaskListProps {
  tasks: Task[];
}

export type TaskUpdateProps = {
  task: Task;
  onUpdate: (id:number, updatedTitle: string, updatedDescription: string) => void
}

export type SharedValuesAndMethods = {
  tasks: Task[];
  createTask: (title: string, description: string) => Promise<void>;
  fetchTasks: () => Promise<void>;
  deleteTaskById: (id: number) => Promise<void>;
  editTaskById: (id: number, updatedTitle: string, updatedDescription: string) => Promise<void>;
};