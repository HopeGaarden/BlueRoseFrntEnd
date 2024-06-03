import styles from "./Note.module.css";
import { useRef, useState, useEffect } from "react";
import SegmentedControl from "../components/NoteComponents/SegmentedControl";
import Feed from "../components/NoteComponents/Feed";
import BlueWiki from "../components/NoteComponents/BlueWiki";
import FreeBoard from "../components/NoteComponents/FreeBoard";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Footer from "../layouts/Footer";
import Header from "../components/NoteComponents/Header";
import SearchTab from "../components/NoteComponents/SearchTab";
import { motion } from "framer-motion"; 

function Note() {
  const [selectedValue, setSelectedValue] = useState("질병일기");
  const [selectedSegment, setSelectedSegment] = useState("질병일기");
  const { groupID } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  
  const animationVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const savedValue = searchParams.get("selectedValue");
    if (savedValue) {
      setSelectedValue(savedValue);
      setSelectedSegment(savedValue);
    }
  }, [location.search]);

  const handleChange = (val) => {
    setSelectedValue(val);
    setSelectedSegment(val);
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("selectedValue", val);
    navigate(`?${searchParams.toString()}`);
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
          callback={handleChange}
          controlRef={useRef()}
          segments={[
            {
              label: "질병일기",
              value: "질병일기",
              ref: useRef(),
              selected: selectedSegment === "질병일기",
            },
            {
              label: "블루위키",
              value: "블루위키",
              ref: useRef(),
              selected: selectedSegment === "블루위키",
            },
            {
              label: "자유게시판",
              value: "자유게시판",
              ref: useRef(),
              selected: selectedSegment === "자유게시판",
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
      <Footer userID={new URLSearchParams(location.search).get("userID")} groupID={groupID} />
    </div>
  );
}

export default Note;
