import React from "react";
import EditContent from "../components/SettingPageComponents/EditContent";
import Header from "../components/SettingPageComponents/Header";
import ActContent from "../components/SettingPageComponents/ActContent";
import CharacterContent from "../components/SettingPageComponents/CharacterContent";
import styles from "./SettingPage.module.css";
import Footer from "../layouts/Footer";
const SettingPage = () => {
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

export default SettingPage;
