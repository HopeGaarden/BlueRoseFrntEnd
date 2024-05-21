import styles from "./EditContent.module.css";
import { FaUserEdit, FaLock } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoLogOutSharp } from "react-icons/io5";
const EditContent = () => {

  return (
    <div className={styles.subContainer}>
      <h3 className={styles.editTitle}>정보 수정</h3>
      <div className={styles.editContentContainer}>
        <p className={styles.editContent}>
          <span className={styles.editLetter}>회원 정보 수정</span>
          <div>
          <FaUserEdit className={styles.memberIcon}/>
          <IoIosArrowForward className={styles.arrowIcon}/>
          </div>
        </p>
        <p className={styles.editContent}>
        <span className={styles.editLetter}>로그아웃</span>
          <div>
          <IoLogOutSharp className={styles.logoutIcon}/>
          <IoIosArrowForward className={styles.arrowIcon}/>
          </div>
        </p>
        <p className={styles.editContent}>
        <span className={styles.editLetter}>공유 범위 설정</span>
          <div>
          <FaLock className={styles.lockIcon}/>
          <IoIosArrowForward className={styles.arrowIcon}/>
          </div>
        </p>
      </div>
    </div>
  );
};

export default EditContent;
