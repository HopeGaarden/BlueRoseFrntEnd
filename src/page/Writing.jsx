import { useState } from "react";
import styles from "./Writing.module.css";
import { IoClose, IoCloseCircle } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPaperclip } from "react-icons/fa";

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
  const goClipBoard = () => {};
  const hoverEffect = {
    scale: 1.1,
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link to={`/note/`}>
          <IoClose className={styles.icon} />
        </Link>
        <motion.button whileHover={hoverEffect} className={styles.button}>
          임시 저장
        </motion.button>
        <motion.button whileHover={hoverEffect} className={styles.button}>
          {" "}
          등록{" "}
        </motion.button>
      </header>
      <div className={styles.inputContainer}>
        <textarea
          type="text"
          placeholder="제목"
          className={styles.textareaTitle}
          value={inputTitle}
          onChange={handleTitleChange}
        />
        {!inputTitle && (
          <FaPaperclip className={styles.clipIcon} onClick={goClipBoard} />
        )}

        {inputTitle && (
          <IoCloseCircle
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
            className={styles.clearIcon}
            onClick={clearInputContent}
          />
        )}
      </div>
    </div>
  );
}

export default Writing;
