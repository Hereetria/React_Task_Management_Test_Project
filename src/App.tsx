import { useContext, useEffect } from "react";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import TasksContext from "./context/task";

const App: React.FC = () => {
  const { fetchTasks } = useContext(TasksContext);

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="App">
      <TaskCreate/>
      <h1>Gorevler</h1>
      <TaskList />
    </div>
  );
};

export default App;
