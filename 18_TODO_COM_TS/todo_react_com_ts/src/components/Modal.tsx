// CSS
import styles from "./Modal.module.css";

type Props = { children: React.ReactNode };

const Modal = ({ children }: Props) => {
  const handleCloseModal = (): void => {
    const modal = document.querySelector("#modal");
    modal!.classList.add("hide");
  };

  return (
    <div id="modal" className="hide">
      <div className={styles.fade} onClick={handleCloseModal}></div>
      <div className={styles.modal}>
        <h2>Texto Modal</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
