import { useState } from "react";
import styles from "./MemberInfo.module.css";
import { FaClipboard, FaComment } from "react-icons/fa";
import { IoRose } from "react-icons/io5";

const MemberInfo = () => {
  const [feed, setFeed] = useState(102);
  const [good, setGood] = useState(122);
  const [comment, setComment] = useState(142);

  return (
    <>
      <div className={styles.feedInfoContainer}>
        <div className={styles.FeedCountContainer}>
          <span className={styles.TitleText}>게시물</span>
          <div className={styles.IconContainer}>
            <FaClipboard className={styles.clipIcon} />
          </div>
          <span className={styles.countText}>{feed}개</span>
        </div>
        <div className={styles.VerticalLine}></div>
        <div className={styles.GoodCountContainer}>
          <span className={styles.TitleText}>좋아요</span>
          <div className={styles.IconContainer}>
            <IoRose className={styles.roseIcon} />
          </div>
          <span className={styles.countText}>{good}개</span>
        </div>
        <div className={styles.VerticalLine}></div>
        <div className={styles.CommentCountContainer}>
          <span className={styles.TitleText}>댓글</span>
          <div className={styles.IconContainer}>
            <FaComment className={styles.commentIcon} />
          </div>
          <span className={styles.countText}>{comment}개</span>
        </div>
      </div>
    </>
  );
};

export default MemberInfo;
