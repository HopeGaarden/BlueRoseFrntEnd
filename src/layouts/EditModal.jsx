import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import styles from "./EditModal.module.css";
import { IoCloseCircle } from "react-icons/io5";
import CheckModal from "./CheckModal"; // CheckModal 컴포넌트 임포트
import CriticalModal from "./CriticalModal";

const EditModal = ({ isOpen, onRequestClose, number, title, content, onSave }) => {
  const [inputContent, setInputContent] = useState(content);
  const [isCheckModalOpen, setIsCheckModalOpen] = useState(false);
  const [isCriticalModalOpen, setIsCriticalModalOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setInputContent(content);
    }
  }, [isOpen, content]);

  const handleContentChange = (event) => {
    setInputContent(event.target.value);
  };

  const handleSave = () => {
    if (number === 4) {
      setIsCriticalModalOpen(true);
    } else {
      setIsCheckModalOpen(true);
    }
  };
  const handleCriticalModalClose = () => {
    setIsCriticalModalOpen(false);
    onRequestClose();
  };

  const handleConfirmSave = () => {
    onSave(number, inputContent); // 콘텐츠를 주어진 번호와 함께 저장
    setIsCheckModalOpen(false);
    onRequestClose();
  };
  const handleCriticalSave = (number, inputContent) => {
    onSave(number, inputContent); // 콘텐츠를 주어진 번호와 함께 저장
    setIsCriticalModalOpen(false);
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
            value={inputContent}
            onChange={handleContentChange}
          />
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.editButton} onClick={clearInputContent}>
            초기화
          </button>
          <div className={styles.editContainer}>
            <button onClick={handleSave} className={styles.modalButton}>
              등록
            </button>
            <button onClick={handleCloseModal} className={styles.modalButton}>
              닫기
            </button>
          </div>
        </div>
      </ReactModal>

      <CheckModal
        isOpen={isCheckModalOpen}
        onRequestClose={() => setIsCheckModalOpen(false)}
        onConfirm={handleConfirmSave}
        message="내용을 저장하시겠습니까?"
      />
      <CriticalModal
        isOpen={isCriticalModalOpen}
        onRequestClose={handleCriticalModalClose}
        number={number}
        title={title}
        content={inputContent}
        onSave={handleCriticalSave}
      />
    </div>
  );
};

export default EditModal;
