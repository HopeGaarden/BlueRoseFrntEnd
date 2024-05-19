import { useState } from "react";
import styles from "./Writing.module.css";
import { IoClose, IoCloseCircle } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";

function Writing() {
  const { userID } = useParams();
  const { groupID } = useParams();
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");

  const handleTitleChange = (event) => {
    setInputTitle(event.target.value);
  };
  const handleContentChange = (event) => {
    setInputContent(event.target.value);
  };
  const clearInputTitle = () => {
    setInputTitle("");
  };

  const clearInputContent = () => {
    setInputContent("");
  };
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link to={`/mynote/`}>
          <IoClose size="24px" className={styles.icon} />
        </Link>
        <button>임시 저장</button>
        <button> 등록 </button>
      </header>
      <div className={styles.textareaContainer}>

        <div className={styles.inputContainer}>
        <textarea             type="text"
            placeholder="제목"
            className={styles.textareaTitle}
            value={inputTitle}
            onChange={handleTitleChange}/>
          {inputTitle && (
            <IoCloseCircle
              size="20px"
              className={styles.clearIcon}
              onClick={clearInputTitle}
            />
          )}
        </div>
        
        <div className={styles.inputContainer}>
          <textarea
            type="text"
            placeholder="내용을 입력하세요."
            className={styles.textareaContent}
            value={inputContent}
            onChange={handleContentChange}
          />
          {inputContent && (
            <IoCloseCircle
              size="20px"
              className={styles.clearIcon}
              onClick={clearInputContent}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Writing;
