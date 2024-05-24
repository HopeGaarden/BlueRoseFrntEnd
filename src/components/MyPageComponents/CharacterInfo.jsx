import React, { useState } from "react";
import styles from "./CharacterInfo.module.css";
import { motion } from "framer-motion";
import ProgressBar from "./ProgressBar"; 

const CharacterInfo = () => {
  const [nickname, setNickname] = useState("미라클");
  const [level, setLevel] = useState(5);
  const [score, setScore] = useState(123);

  const hoverEffect = {
    scale: 1.1,
  };
  const transHover = {
    type: "spring",
    stiffness: 400,
    damping: 10,
  };
  const tapHover = {
    scale: 0.9,
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.characterContainer}>
          <h4 className={styles.nickname}>{`${nickname}`}</h4>
          <motion.img
            src={`/images/level${level}.png`}
            alt="Character Image"
            className={styles.userCharacter}
            whileHover={hoverEffect}
            transition={transHover}
            whileTap={tapHover}
          />
          <p className={styles.level}>
            {`곧 블루로즈가 피어나요!`} <br />
            {`Lv ${level}`}
          </p>
        </div>
        <p className={styles.score}></p>
      </div>
      <div className={styles.progressContainer}>
        <ProgressBar level={level} score={score}/>
      </div>
    </>
  );
};

export default CharacterInfo;
