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
          <div key={index + task.id + task.title + task.difficulty}>
            <p>{task.title}</p>
          </div>
        ))
      ) : (
        <p>Não tem tarefa cadastrada</p>
      )}
    </>
  );
};

export default TaskList;
