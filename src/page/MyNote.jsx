import { IoArrowBack, IoSearch } from "react-icons/io5";
import { FaPenToSquare } from "react-icons/fa6";
import styles from "./MyNote.module.css";
import { useRef, useState } from "react";
import SegmentedControl from "../components/SegmentedControl";
import Feed from "../components/Feed";
import { Link, useParams, useSearchParams } from "react-router-dom";
import Footer from "../layouts/Footer";

function MyNote() {
  const [selectedValue, setSelectedValue] = useState("질병일기");
  const { userID } = useSearchParams;
  const { groupID } = useParams();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <Link to={`/`} className={styles.headerIcon}>
            <IoArrowBack className={styles.backIcon} />
          </Link>
        </div>
        <h2 className={styles.title}>질병 일기</h2>
        <div>
          <Link to={`/writing/`} className={styles.headerIcon}>
            <FaPenToSquare className={styles.writingIcon} />
          </Link>
        </div>
      </div>

      <div>
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
      </div>

      <div className={styles.searchContainer}>
        <IoSearch className={styles.searchIcon} />
        <input className={styles.input} placeholder="Search"/>
      </div>

      <div className={styles.feeds}>
        <Feed />
      </div>

      <div>
        <Footer userID={userID} groupID={groupID} />
      </div>
    </div>
  );
}
export default MyNote;
