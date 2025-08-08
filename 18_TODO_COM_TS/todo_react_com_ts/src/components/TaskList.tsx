// CSS
import styles from "./TaskList.module.css";

// Types
import type { ITask } from "../interfaces/ITask";

type Props = {
  taskList: ITask[];
};

const TaskList = ({ taskList }: Props) => {
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
              <i className="bi bi-pencil"></i>
              <i className="bi bi-trash"></i>
            </div>
          </div>
        ))
      ) : (
        <p>Não tem tarefa cadastrada</p>
      )}
    </>
  );
};

export default TaskList;
