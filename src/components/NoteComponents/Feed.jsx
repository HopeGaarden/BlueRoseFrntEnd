import React, { useEffect, useState } from "react";
import styles from "./Feed.module.css";
import { HiDotsVertical } from "react-icons/hi";
import { motion } from "framer-motion";
import { FaRegComment } from "react-icons/fa";
function Feed() {
  const dummyFeeds = [
    //demo data
    {
      profilImg: "/images/Feed/profil.png",
      nickname: "102th_fitness",
      imgUrl: "/images/Feed/cake.png",
      date: "5/1",
      title: "다이어트 1일차",
      content: "실패! 내일 부터 다시 1일",
      comments: ["한입만", "어디임?", "ㅋㅋㅋ"],
    },
    {
      profilImg: "/images/Feed/cat.png",
      nickname: "I_love_you_cats",
      imgUrl: "/images/Feed/tiger.png",
      date: "5/1",
      title: "1일차 제주도",
      content: "1일차 사파리",
      comments: ["키우고싶다", "니 닮았음"],
    },
    {
      profilImg: "/images/Feed/defaulprofil.png",
      nickname: "picture_man",
      imgUrl: "/images/Feed/colorful.png",
      date: "5/6",
      title: "역대급 으로 잘 찍었다",
      content: "감성있네",
      comments: ["느낌있네"],
    },
    {
      profilImg: "/images/Feed/defaulprofil.png",
      nickname: "fall_in_love",
      imgUrl: "/images/Feed/flower.png",
      date: "5/8",
      title: "봄이 왔네",
      content: "소풍 가기 좋은 날씨",
      comments: [""],
    },
  ];
  const [loading, setLoading] = useState(true);
  const [feeds, setFeeds] = useState([]);
  const getFeeds = () => {
    setFeeds(dummyFeeds);
    setLoading(false);
  };
  useEffect(() => {
    getFeeds();
  }, []);
  const hoverEffect = {
    scale: 1.1,
  };
  return (
    <React.Fragment>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.feedContainer}>
          {feeds.map((feed, index) => (
            <div key={index} className={styles.feedItem}>
              <p className={styles.profilContainer}>
                <motion.button
                  whileHover={hoverEffect}
                  className={styles.profilButton}
                >
                  <img
                    src={feed.profilImg}
                    className={styles.profilImg}
                    alt="profil"
                  />
                </motion.button>
                <div className={styles.nickname}>{feed.nickname}</div>
                <HiDotsVertical className={styles.dots} />
              </p>

              <p className={styles.titleContainer}>
                <div className={styles.feedTitle}>{feed.title}</div>
                <div className={styles.feedDate}>{feed.date}</div>
              </p>

              <div className={styles.feedContent}>
                <img
                  src={feed.imgUrl}
                  alt="Feed"
                  className={styles.feedImage}
                />
                <motion.button
                  whileHover={hoverEffect}
                  className={styles.roseContainer}
                >
                  <img
                    src="/images/Feed/rose.png"
                    alt="good"
                    className={styles.roseIcon}
                  />
                </motion.button>
                <motion.button
                  whileHover={hoverEffect}
                  className={styles.commentContainer}
                >
                  <FaRegComment className={styles.commentIcon} />
                </motion.button>
                <div className={styles.feedText}>{feed.content}</div>
                
              </div>
              <div className={styles.commentContainer}>
                {feed.comments.length > 1 ? (
                  <div className={styles.comment}>
                    {feed.comments[0]}
                    <div className={styles.commentDetail}>
                      {`... ${feed.comments.length}개의 댓글`}{" "}
                    </div>
                  </div>
                ) : (
                  feed.comments.map((comment, index) => (
                    <div key={index} className={styles.comment}>
                      {comment}
                    </div>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </React.Fragment>
  );
}

export default Feed;
