import { FaPenToSquare } from "react-icons/fa6";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <>
    <div className={styles.header}>
      <div>
        <Link to={`/home`} className={styles.headerIcon}>
          <IoArrowBack className={styles.backIcon} />
        </Link>
      </div>
      <h2 className={styles.title}>마이 페이지</h2>
      <div>
        <Link to={`/writing/`} className={styles.headerIcon}>
          <FaPenToSquare className={styles.writingIcon} />
        </Link>
      </div>
    </div>
    <div className={styles.headerBorder}></div>
</>
  );
};
export default Header;
