import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../layouts/Footer";
import styles from "./Home.module.css";
import { IoMenu, IoPersonSharp } from "react-icons/io5";
import { motion } from "framer-motion";

function Home() {
  // const [loading, setLoading] = useState(true);
  const [nickname, setNickname] = useState("미라클");
  const [score, setScore] = useState(5);
  const [userID, setUserID] = useState(0);
  const [groupID, setGroupID] = useState(0);
  const [feedID, setFeedID] = useState(0);

  const hoverEffect = {
    scale: 1.1,
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <IoMenu className={styles.menuIcon} />
        </div>
        <h2 className={styles.title}>블루로즈</h2>
        <div className={styles.myPage}>
          <IoPersonSharp className={styles.myPageIcon} />
        </div>
      </div>
      <div>      
        
        <div className={styles.profile}>
        <h3 className={styles.welcome}>{`환영합니다. ${nickname} 님`} </h3>
        <img
          src={`/images/level${score}.png`}
          alt="Character Image"
          className={styles.userCharacter}
        />
        <h3 className={styles.userScore}>{`Lv ${score}`}</h3>
      </div>
      </div>


      <div className={styles.iconsContainer}>
        <div className={styles.icons}>
          <Link to={`/mynote/`}>
          <motion.button className={styles.homeButton} whileHover={hoverEffect}>
              <img src={`/images/HomeIcon/mynote.png`}></img>
            </motion.button>
          </Link>
        </div>
        <div className={styles.icons}>
          <Link to={`/ranking/`}>
          <motion.button className={styles.homeButton}  whileHover={hoverEffect}>
              <img src={`/images/HomeIcon/ranking.png`}></img>
            </motion.button>
          </Link>
        </div>
        <div className={styles.icons}>
          <Link to={`/group/`}>
            <motion.button className={styles.homeButton}  whileHover={hoverEffect}>
              <img src={`/images/HomeIcon/group.png`}></img>
            </motion.button>
          </Link>
        </div>
        <div className={styles.icons}>
          <Link to={`/chat/`}>
          <motion.button className={styles.homeButton}  whileHover={hoverEffect}>
              <img src={`/images/HomeIcon/chat.png`}></img>
            </motion.button>
          </Link>
        </div>
      </div>

      <ul className={styles.feed}>
        <h3 className={styles.popularFeed}>{`인기 게시글`}</h3>
        <li className={styles.entireButton}>
          <Link to={`/popularfeed/detail/${feedID}`}>
            <motion.button whileHover={hoverEffect}>전체 보기</motion.button>
          </Link>
        </li>
        <li>
          <Link to={`/popularfeed/${feedID}`}></Link>
        </li>
      </ul>

      <Footer userID={userID} groupID={groupID} />
    </div>
  );
}

export default Home;
