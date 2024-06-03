import React, { useState, version } from "react";
import styles from "./WikiContent.module.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaPenToSquare } from "react-icons/fa6";
import EditModal from "../../layouts/EditModal";

const WikiContent = ({ id,diseaseStandard, diseaseSymptom, diseaseTherapy, diseaseEtc,diseaseVersion}) => {
  const [isOpen, setIsOpen] = useState([true, true, true, true]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ number: 0, title: "", content: "",version: 0 });

  const sections = [
    { number: 1, title: "검사기준", content: diseaseStandard, version: diseaseVersion },
    { number: 2, title: "증상", content: diseaseSymptom, version: diseaseVersion },
    { number: 3, title: "치료", content: diseaseTherapy, version: diseaseVersion },
    { number: 4, title: "기타", content: diseaseEtc, version: diseaseVersion },
  ];

  const [sectionContent, setSectionContent] = useState(sections);

  const toggleSection = (index) => {
    setIsOpen((prevState) =>
      prevState.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  const handleModalOpen = (number, title, content,version) => {
    setModalContent({ number, title, content, version });
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
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
              onClick={() => handleModalOpen(section.number, section.title, section.content, section.version)}
            />
          </div>
          <p className={styles.contentContainer}>
            {section.content.length > 50 ? `${section.content.substring(0, 50)}...` : section.content}
          </p>
        </div>
      ))}

      <EditModal
        isOpen={modalOpen}
        onRequestClose={handleModalClose}
        id={id}
        number={modalContent.number}
        title={modalContent.title}
        content={modalContent.content}
        version={modalContent.version}
      />
      
    </>
  );
};

export default WikiContent;
