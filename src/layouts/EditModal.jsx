import React, { useState, useEffect, version } from "react";
import ReactModal from "react-modal";
import styles from "./EditModal.module.css";
import { IoCloseCircle } from "react-icons/io5";
import CheckModal from "./CheckModal"; // CheckModal 컴포넌트 임포트
import CriticalModal from "./CriticalModal";
import axios from "axios";

const EditModal = ({ isOpen, onRequestClose, id, number, title, content, version }) => {
  const [inputContent, setInputContent] = useState(content);
  const [isCheckModalOpen, setIsCheckModalOpen] = useState(false);
  const [isCriticalModalOpen, setIsCriticalModalOpen] = useState(false);
  const accessToken = JSON.parse(sessionStorage.getItem("accesstoken"));
  const grantType = 'Bearer';
  const [criticalContent, setCriticalContent] = useState({});

  useEffect(() => {
    if (isOpen) {
      setInputContent(content);
    }
  }, [isOpen, content]);

  const handleContentChange = (event) => {
    setInputContent(event.target.value);
  };

  const handleSave = () => {
    const data = {
      disease_wiki_id: Number(id.wiki_id),
      section:  parseInt(number-1, 10),
      content: inputContent,
      version: parseInt(version)
    };
    console.log(data);
    axios.patch('http://localhost:8080/wiki', data, {
      withCredentials: true,
      headers: { 'Content-Type': 'application/json',
                  Authorization: `${grantType} ${accessToken}` }
    })
    .then(response => {
      console.log(response.data);
      if (response.data.res_code === 200) {
        window.location.reload();
      }
      else if(response.data.res_code === 400){
        axios.post('http://localhost:8080/wiki/conflict', data, {
          withCredentials: true,
          headers: { 'Content-Type': 'application/json',
                      Authorization: `${grantType} ${accessToken}` }
        })
        .then(response => {
          console.log(response.data);
          setCriticalContent(response.data.res_obj);  // 서버에서 반환된 충돌 내용을 저장
          setIsCriticalModalOpen(true);  // CriticalModal을 열기
          onRequestClose();
        })
        .catch(error => {
          console.error(error);
        });
      }
    })
    .catch(error => {  
      console.error(error);
      }
    );
  };

  const handleCriticalModalClose = () => {
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
        message="내용을 저장하시겠습니까?"
      />
      <CriticalModal
        isOpen={isCriticalModalOpen}
        onRequestClose={handleCriticalModalClose}
        id={id}
        number={number}
        title={title}
        content={criticalContent}
        version={version}
      />
    </div>
  );
};

export default EditModal;
