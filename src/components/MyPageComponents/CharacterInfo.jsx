import React, { useState } from "react";
import styles from "./CharacterInfo.module.css";
import { motion } from "framer-motion";
import ProgressBar from "./ProgressBar"; 

const CharacterInfo = () => {
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
          <motion.img
            src={`/images/level${level}.png`}
            alt="Character Image"
            className={styles.userCharacter}
            whileHover={hoverEffect}
            transition={transHover}
            whileTap={tapHover}
          />
          <div className={styles.text}>
            {`곧 블루로즈가 피어나요!`}
          </div>
          <div className={styles.level}>{`Lv ${level}`}</div>
        </div>
      </div>
      <div className={styles.progressContainer}>
        <ProgressBar level={level} score={score}/>
      </div>
    </>
  );
};

export default CharacterInfo;
