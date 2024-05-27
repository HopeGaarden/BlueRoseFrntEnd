import styles from "./WikiContent.module.css";
import { IoIosArrowDown } from "react-icons/io";
import { FaPenToSquare } from "react-icons/fa6";

const WikiContent = ({ diseaseContent }) => {
  return (
    <>
      <p className={styles.titleContainer}>
        <div>
          <IoIosArrowDown className={styles.icons}/>
          1:
          <span className={styles.title}>개요</span>
        </div>
        <FaPenToSquare className={styles.icons}/>
      </p>
      <p className={styles.contentContainer}>{diseaseContent}</p>
      <p className={styles.titleContainer}>
        <div>
          <IoIosArrowDown className={styles.icons}/>
          2:
          <span className={styles.title}>증상</span>
        </div>
        <FaPenToSquare className={styles.icons}/>
      </p>
      <p className={styles.contentContainer}>{diseaseContent}</p>
      <p className={styles.titleContainer}>
        <div>
          <IoIosArrowDown className={styles.icons}/>
          3:
          <span className={styles.title}>치료</span>
        </div>
        <FaPenToSquare className={styles.icons}/>
      </p>
      <p className={styles.contentContainer}>{diseaseContent}</p>
      <p className={styles.titleContainer}>
        <div>
          <IoIosArrowDown className={styles.icons}/>
          4:
          <span className={styles.title}>기타</span>
        </div>
        <FaPenToSquare className={styles.icons}/>
      </p>
      <p className={styles.contentContainer}>{diseaseContent}</p>
    </>
  );
};
export default WikiContent;
