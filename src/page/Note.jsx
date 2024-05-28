import styles from "./Note.module.css";
import { useRef, useState } from "react";
import SegmentedControl from "../components/NoteComponents/SegmentedControl";
import Feed from "../components/NoteComponents/Feed";
import BlueWiki from "../components/NoteComponents/BlueWiki";
import FreeBoard from "../components/NoteComponents/FreeBoard";
import { useParams, useSearchParams } from "react-router-dom";
import Footer from "../layouts/Footer";
import Header from "../components/NoteComponents/Header";
import SearchTab from "../components/NoteComponents/SearchTab";
import { motion } from "framer-motion"; 

function Note() {
  const [selectedValue, setSelectedValue] = useState("질병일기");
  const [searchParams] = useSearchParams();
  const { groupID } = useParams();
  const animationVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
  };

  let ContentComponent;
  switch (selectedValue) {
    case "블루위키":
      ContentComponent = BlueWiki;
      break;
    case "자유게시판":
      ContentComponent = FreeBoard;
      break;
    default:
      ContentComponent = Feed;
  }

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.contentContainer}>
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
      <motion.div
        variants={animationVariants}
        initial="initial"
        animate="animate"
      >
        <ContentComponent className={styles.feeds} />
      </motion.div>
      </div>
      <Footer userID={searchParams.get("userID")} groupID={groupID} />
    </div>
  );
}

export default Note;
