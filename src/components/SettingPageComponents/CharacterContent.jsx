import styles from "./CharacterContent.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { RiBearSmileFill } from "react-icons/ri";
const CharacterContent = () => {

  return (
    <div className={styles.subContainer}>
      <h3 className={styles.editTitle}>캐릭터</h3>
      <div className={styles.editContentContainer}>
        <p className={styles.editContent}>
          <span className={styles.editLetter}>캐릭터</span>
          <div>
          <RiBearSmileFill className={styles.characterIcon}/>
          <IoIosArrowForward className={styles.arrowIcon}/>
          </div>
        </p>
      </div>
    </div>
  );
};

export default CharacterContent;
