
import styles from "./Note.module.css";
import { useRef, useState } from "react";
import SegmentedControl from "../components/Segment/SegmentedControl";
import Feed from "../components/NoteComponents/Feed";
import { useParams, useSearchParams } from "react-router-dom";
import Footer from "../layouts/Footer";
import Header from "../components/NoteComponents/Header";
import SearchTab from "../components/NoteComponents/SearchTab";
import { motion } from "framer-motion"; 

function Note() {
  const [selectedValue, setSelectedValue] = useState("질병일기");
  const { userID } = useSearchParams;
  const { groupID } = useParams();
  const animationVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0,},
};
  return (
    <div className={styles.container}>
      <Header />
      <SegmentedControl
        className={styles.segmentedControl}
        callback={(val) => setSelectedValue(val)}
        controlRef={useRef()}
        segments={[
          {
            label: "질병일기",
            value: "질병일기",
            ref: useRef(),
          },
          {
            label: "블루위키",
            value: "블루위키",
            ref: useRef(),
          },
          {
            label: "자유게시판",
            value: "자유게시판",
            ref: useRef(),
          },
        ]}
      />
      <SearchTab />
      <motion.div variants={animationVariants}
                        initial="initial"
                        animate="animate"><Feed className={styles.feeds}/></motion.div>
        <Footer userID={userID} groupID={groupID} />
    </div>
  );
}
export default Note;
