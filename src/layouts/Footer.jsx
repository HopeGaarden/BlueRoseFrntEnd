import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";
import { FaPencilAlt, FaTrophy } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { IoHomeSharp, IoChatbubbleEllipses } from "react-icons/io5";
import { motion } from "framer-motion";
import React from "react";
function Footer({ userID, groupID }) {
  const hoverEffect = {
    scale: 1.1,
  };
  console.log('Rendering Footer');
  return (
    <React.Fragment>
      <div className={styles.footer}>
        <NavLink
          to={`/note/`}
          className={({ isActive }) =>
            isActive ? styles.active : styles.inactive
          }
        >
          <motion.div whileHover={hoverEffect}>
            <div>
              <FaPencilAlt className={styles.footerIcon} alt="note" />
            </div>
            <span>게시글</span>
          </motion.div>
        </NavLink>

        <NavLink
          to={`/ranking/`}
          className={({ isActive }) =>
            isActive ? styles.active : styles.inactive
          }
        >
          <motion.div whileHover={hoverEffect}>
            <div>
              <FaTrophy className={styles.footerIcon} alt="ranking" />{" "}
            </div>
            랭킹
          </motion.div>
        </NavLink>
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? styles.active : styles.inactive
          }
        >
          <motion.div whileHover={hoverEffect}>
            <div>
              <IoHomeSharp className={styles.footerIcon} alt="home" />
            </div>
            홈
          </motion.div>
        </NavLink>
        <NavLink
          to={`/group/`}
          className={({ isActive }) =>
            isActive ? styles.active : styles.inactive
          }
        >
          <motion.div whileHover={hoverEffect}>
            <div>
              <FaUserGroup className={styles.footerIcon} alt="group" />{" "}
            </div>
            그룹 채널
          </motion.div>
        </NavLink>

        <NavLink
          to={`/chat/`}
          className={({ isActive }) =>
            isActive ? styles.active : styles.inactive
          }
        >
          <motion.div whileHover={hoverEffect}>
            <div>
              <IoChatbubbleEllipses className={styles.footerIcon} alt="chat" />
            </div>
            소통
          </motion.div>
        </NavLink>
      </div>
    </React.Fragment>
  );
}

export default Footer;
