import Header from "../components/MyPageComponents/Header";
import MemberInfo from "../components/MyPageComponents/MemberInfo";
import CharacterInfo from "../components/MyPageComponents/CharacterInfo";
import styles from "./MyPage.module.css";
import Footer from "../layouts/Footer";
import { motion } from "framer-motion";

const MyPage = () => {
  const animationVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <motion.div
          variants={animationVariants}
          initial="initial"
          animate="animate"
        >
          <div className={styles.characterContainer}>
            <CharacterInfo />
          </div>
          <MemberInfo />
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default MyPage;
