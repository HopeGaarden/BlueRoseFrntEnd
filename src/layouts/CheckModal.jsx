// CheckModal.js
import React from "react";
import ReactModal from "react-modal";
import styles from "./CheckModal.module.css";
import { FaRegSquareCheck } from "react-icons/fa6";
const CheckModal = ({ isOpen, onRequestClose, message, onConfirm }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <h2>확인</h2>
          <FaRegSquareCheck className={styles.checkIcon}/>
        </div>

        <p>{message}</p>
        <div className={styles.buttonContainer}>
          <button onClick={onConfirm} className={styles.editButton}>
            확인
          </button>
          <button onClick={onRequestClose} className={styles.editButton}>
            취소
          </button>
        </div>
      </div>
    </ReactModal>
  );
};

export default CheckModal;
