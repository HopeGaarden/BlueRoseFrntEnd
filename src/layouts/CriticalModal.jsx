import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import styles from "./CriticalModal.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const CriticalModal = ({ isOpen, onRequestClose,id,number, title, content, version }) => {
  const accessToken = JSON.parse(sessionStorage.getItem("accesstoken"));
  const grantType = 'Bearer';
  const [isCriticalModalOpen, setIsCriticalModalOpen] = useState(false); // 새로운 모달의 열림 여부 상태
  const [inputContent, setInputContent] = useState("");
  const [criticalContent, setCriticalContent] = useState({});

  useEffect(() => {
    if (isOpen) {
      setInputContent(content.new_content);
      setCriticalContent(content);
    }
  }, [isOpen, content]);

  const handleContentChange = (event) => {
    setInputContent(event.target.value);
  };

  const handleCriticalSave = () => {
    const data = {
      disease_wiki_id: Number(id.wiki_id),
      section:  parseInt(number-1, 10),
      content: inputContent,
      version: parseInt(version+1)
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
        <div className={styles.original}>
          <text>원본</text>
        </div>
        <div className={styles.inputContainer}>
          <textarea
            type="text"
            className={styles.textareaContent}
            value={criticalContent.original_content}
            readOnly
          />
        <div className={styles.original}>
          <text>바뀐문구</text>
        </div>
        {criticalContent.diffs && criticalContent.diffs.map((diff, index) => (
        <div key={index}>
          {diff.original_lines.map((line, lineIndex) => (
            <textarea
              key={lineIndex}
              type="text"
              placeholder="내용을 입력하세요."
              className={styles.textContent}
              value={`${diff.original_position + lineIndex + 1}번째 줄\n${line}`}
              readOnly
            />
          ))}
        </div>
      ))}
        </div>
        <div className={styles.original}>
          <text>수정본</text>
        </div>
        <div className={styles.inputContainer}>
          <textarea
            type="text"
            placeholder="내용을 입력하세요."
            className={styles.textareaContent}
            value={inputContent}
            onChange={handleContentChange}
          />
          <div className={styles.original}>
          <text>바뀐문구</text>
        </div>
        {criticalContent.diffs && criticalContent.diffs.map((diff, index) => (
        <div key={index}>
          {diff.new_lines.map((line, lineIndex) => (
            <textarea
              key={lineIndex}
              type="text"
              placeholder="내용을 입력하세요."
              className={styles.textContent}
              value={`${diff.new_position + lineIndex + 1}번째 줄\n${line}`}
              readOnly
            />
          ))}
        </div>
      ))}
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
