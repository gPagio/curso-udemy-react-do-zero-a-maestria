// CSS
import styles from "./TaskForm.module.css";

// Hooks
import { useState, useEffect } from "react";

// Types
import type { ChangeEvent, FormEvent } from "react";
import type { ITask } from "../interfaces/ITask";

type Props = {
  btnText: string;
};

const TaskForm = ({ btnText }: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  const handleAddTask = () => {};

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") setTitle(e.target.value);
    if (e.target.name === "difficulty") setDifficulty(parseInt(e.target.value));
  };

  return (
    <form className={styles.form} onSubmit={handleAddTask}>
      <div className={styles.input_container}>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          name="title"
          placeholder="Título da tarefa"
          onChange={handleChange}
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="difficulty">Dificuldade: </label>
        <input
          type="number"
          name="difficulty"
          placeholder="Dificuldade da tarefa"
          onChange={handleChange}
        />
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;
