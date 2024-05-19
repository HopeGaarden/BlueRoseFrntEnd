import React from "react";
import EditContent from "../components/MyPageComponents/EditContent";
import Header from "../components/MyPageComponents/Header";
import ActContent from "../components/MyPageComponents/ActContent";
import CharacterContent from "../components/MyPageComponents/CharacterContent";
import styles from "./MyPage.module.css"
import Footer from "../layouts/Footer";
const myPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <EditContent />
      <ActContent />
      <CharacterContent />
      <Footer />
    </div>
  );
};

export default myPage;
