import React, { useState } from "react";
import styles from "./WikiContent.module.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaPenToSquare } from "react-icons/fa6";
import EditModal from "../../layouts/EditModal";

const WikiContent = ({ diseaseContent }) => {
  const [isOpen, setIsOpen] = useState([true, true, true, true]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ number: 0, title: "", content: "" });

  const sections = [
    { number: 1, title: "검사기준", content: diseaseContent },
    { number: 2, title: "증상", content: "아직 등록된 정보가 없어요. 정보를 입력해주세요!" },
    { number: 3, title: "치료", content: "아직 등록된 정보가 없어요. 정보를 입력해주세요!" },
    { number: 4, title: "기타", content: "아직 등록된 정보가 없어요. 정보를 입력해주세요!" },
  ];

  const [sectionContent, setSectionContent] = useState(sections);

  const toggleSection = (index) => {
    setIsOpen((prevState) =>
      prevState.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  const handleModalOpen = (number, title, content) => {
    setModalContent({ number, title, content });
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleSave = (number, content) => {
    setSectionContent((prevContent) =>
      prevContent.map((section) =>
        section.number === number ? { ...section, content } : section
      )
    );
  };

  return (
    <>
      {sectionContent.map((section, index) => (
        <div key={section.number}>
          <div className={styles.titleContainer}>
            <div onClick={() => toggleSection(index)}>
              {isOpen[index] ? (
                <IoIosArrowDown className={styles.icons} />
              ) : (
                <IoIosArrowUp className={styles.icons} />
              )}
              {section.number}:
              <span className={styles.title}>{section.title}</span>
            </div>
            <FaPenToSquare
              className={styles.icons}
              onClick={() => handleModalOpen(section.number, section.title, section.content)}
            />
          </div>
          {isOpen[index] && (
            <p className={styles.contentContainer}>{section.content}</p>
          )}
        </div>
      ))}

      <EditModal
        isOpen={modalOpen}
        onRequestClose={handleModalClose}
        number={modalContent.number}
        title={modalContent.title}
        content={modalContent.content}
        onSave={handleSave}
      />
      
    </>
  );
};

export default WikiContent;
