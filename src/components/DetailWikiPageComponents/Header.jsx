import { FaPenToSquare } from "react-icons/fa6";
import { IoArrowBack } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const navigate = useNavigate();

  const goBackPageHandler = () => {
    navigate(-1);
  };

  return (
    <>
      <div className={styles.header}>
        <div>
          <IoArrowBack className={styles.backIcon} onClick={goBackPageHandler} />
        </div>
        <h2 className={styles.title}>블루위키 </h2>
        <div className={styles.rightSpace}></div>
      </div>
      <div className={styles.headerBorder}></div>
    </>
  );
};

export default Header;
