// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

// CSS
import styles from "./App.module.css";
import { useState } from "react";

// Types
import type { ITask } from "./interfaces/ITask";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);

  const handleDeleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );

    console.log(id);
  };

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>Oque você vai fazer?</h2>
          <TaskForm
            btnText="Criar Tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList taskList={taskList} handleDeleteTask={handleDeleteTask} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
