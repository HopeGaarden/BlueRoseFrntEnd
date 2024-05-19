import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../layouts/Footer";
import styles from "./Home.module.css";
import { IoMenu, IoPersonSharp } from "react-icons/io5";
import { motion } from "framer-motion";

function Home() {
  const navigate = useNavigate();
  // const [loading, setLoading] = useState(true);
  const [nickname, setNickname] = useState("미라클");
  const [score, setScore] = useState(5);
  const [userID, setUserID] = useState(0);
  const [groupID, setGroupID] = useState(0);
  const [feedID, setFeedID] = useState(0);

  const hoverEffect = {
    scale: 1.1,
  };
  const transHover = {
    type: "spring", stiffness: 400, damping: 10
  }
  const tapHover = {
    scale: 0.9
  }
  const goMyPageHandler =() => {
    navigate(`/mypage`)
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <IoMenu className={styles.menuIcon} />
        </div>
        <h2 className={styles.title}>블루로즈</h2>
        <div className={styles.myPage}>
          <IoPersonSharp className={styles.myPageIcon} onClick={goMyPageHandler}/>
        </div>
      </div>
      <div>      
        
        <div className={styles.profile}>
        <h3 className={styles.welcome}>{`환영합니다. ${nickname} 님`} </h3>
        <motion.img
          src={`/images/level${score}.png`}
          alt="Character Image"
          className={styles.userCharacter}
          whileHover={hoverEffect}
          transition={transHover}
          whileTap={tapHover}
        />
        <h3 className={styles.userScore}>{`Lv ${score}`}</h3>
      </div>
      </div>


      <div className={styles.iconsContainer}>
        <div className={styles.icons}>
          <Link to={`/note/`}>
          <motion.button className={styles.homeButton} whileHover={hoverEffect}>
              <img src={`/images/HomeIcon/note.png`}></img>
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

      <div className={styles.feed}>
        <h3 className={styles.popularFeed}>{`인기 게시글`}</h3>
        <div>
          <Link to={`/popularfeed/detail/${feedID}`} className={styles.link}>
            <motion.button className={styles.entireButton}whileHover={hoverEffect}>전체 보기</motion.button>
          </Link>
        </div>
        <div>
          <Link to={`/popularfeed/${feedID}`}></Link>
        </div>
      </div>

      <Footer userID={userID} groupID={groupID} />
    </div>
  );
}

export default Home;
