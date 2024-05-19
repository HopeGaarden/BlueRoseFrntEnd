import styles from "./ActContent.module.css";
import { FaClipboard, FaComment } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoRose } from "react-icons/io5";
const ActContent = () => {

  return (
    <div className={styles.subContainer}>
      <h3 className={styles.editTitle}>나의 활동</h3>
      <div className={styles.editContentContainer}>
        <p className={styles.editContent}>
          <span className={styles.editLetter}>게시물</span>
          <div>
          <FaClipboard className={styles.clipIcon}/>
          <IoIosArrowForward className={styles.arrowIcon}/>
          </div>
        </p>
        <p className={styles.editContent}>
        <span className={styles.editLetter}>좋아요</span>
          <div>
          <IoRose className={styles.roseIcon}/>
          <IoIosArrowForward className={styles.arrowIcon}/>
          </div>
        </p>
        <p className={styles.editContent}>
        <span className={styles.editLetter}>댓글</span>
          <div>
          <FaComment className={styles.commentIcon}/>
          <IoIosArrowForward className={styles.arrowIcon}/>
          </div>
        </p>
      </div>
    </div>
  );
};

export default ActContent;
