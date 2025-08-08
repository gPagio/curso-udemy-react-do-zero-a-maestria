// CSS
import styles from "./TaskList.module.css";

// Types
import type { ITask } from "../interfaces/ITask";

type Props = {
  taskList: ITask[];
  handleDeleteTask(id: number): void;
  handleEditTask(task: ITask): void;
};

const TaskList = ({ taskList, handleDeleteTask, handleEditTask }: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task, index) => (
          <div
            className={styles.task}
            key={index + task.id + task.title + task.difficulty}
          >
            <div className={styles.details}>
              <h4>{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className={styles.actions}>
              <i
                className="bi bi-pencil"
                onClick={() => handleEditTask(task)}
              ></i>
              <i
                className="bi bi-trash"
                onClick={() => handleDeleteTask(task.id)}
              ></i>
            </div>
          </div>
        ))
      ) : (
        <p>Parabéns, você concluiu todas as suas tarefas!</p>
      )}
    </>
  );
};

export default TaskList;
