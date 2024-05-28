import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import styles from "./CriticalModal.module.css";

const CriticalModal = ({ isOpen, onRequestClose, number, title, content, onSave }) => {
  const [inputContent, setInputContent] = useState("");
  const criticalContent = "다른 사용자가 업데이트한 충돌 된 정보에요 참고하여 수정해주세요!";

  useEffect(() => {
    if (isOpen) {
      setInputContent(content);
    }
  }, [isOpen, content]);

  const handleContentChange = (event) => {
    setInputContent(event.target.value);
  };

  const handleCriticalSave = () => {
    onSave(number, inputContent); // 수정된 내용을 전달
    onRequestClose();
  };

  const handleCloseModal = () => {
    onRequestClose();
  };

  const clearInputContent = () => {
    setInputContent("");
  };

  return (
    <div className={styles.container}>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <div className={styles.titleContainer}>
          <div>
            {number}: {title}
          </div>
        </div>

        <div className={styles.inputContainer}>
          <textarea
            type="text"
            placeholder="내용을 입력하세요."
            className={styles.textareaContent}
            value={criticalContent}
            readOnly
          />
        </div>

        <div className={styles.inputContainer}>
          <textarea
            type="text"
            placeholder="내용을 입력하세요."
            className={styles.textareaContent}
            value={inputContent}
            onChange={handleContentChange}
          />
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.editButton} onClick={clearInputContent}>
            초기화
          </button>
          <div className={styles.editContainer}>
            <button onClick={handleCriticalSave} className={styles.modalButton}>
              등록
            </button>
            <button onClick={handleCloseModal} className={styles.modalButton}>
              닫기
            </button>
          </div>
        </div>
      </ReactModal>
    </div>
  );
};

export default CriticalModal;
