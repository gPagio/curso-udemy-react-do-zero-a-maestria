// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Modal from "./components/Modal";

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
  };

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal");

    if (display) {
      modal!.classList.remove("hide");
    } else {
      modal!.classList.add("hide");
    }
  };

  const handleEditTask = (): void => {
    hideOrShowModal(true);
  }

  return (
    <div>
      <Modal
        children={<TaskForm btnText="Editar Tarefa" taskList={taskList} />}
      />
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
          <TaskList taskList={taskList} handleDeleteTask={handleDeleteTask} handleEditTask={handleEditTask}/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
