import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import React from "react";

const Header = () => {
  return (
    <React.Fragment>
      <div className={styles.header}>
        <div>
          <Link to={`/`} className={styles.headerIcon}>
            <IoArrowBack className={styles.backIcon} />
          </Link>
        </div>
        <h2 className={styles.title}>마이 페이지</h2>
        <div className={styles.rightSpace}></div>
      </div>
      </React.Fragment>
      
  );
};
export default Header;
