import { useEffect, useState } from "react";
import styles from "./FeedSummary.module.css";

function FeedSummary({ feed }) {
  const [loading, setLoading] = useState(true);
  const [feeds, setFeeds] = useState([]);
  const getFeeds = () => {
    setFeeds(feed);
    setLoading(false);
  };
  useEffect(() => {
    getFeeds();
  }, []);
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.feedContainer}>
          {feeds.map((feed, index) => (
            <div key={index} className={styles.feedItem}>
              <img src={feed.imgUrl} alt="Feed" className={styles.feedImage} />
              <div className={styles.feedContent}>
                <div className={styles.feedHeader}>
                <div className={styles.feedDate}>{feed.date}</div>
                <div className={styles.feedTitle}>{feed.title}</div>
                </div>
                <div className={styles.feedText}>{feed.content}</div>
              </div>
            </div>
          ))}
          <div> <img src="/images/Feed/bottomImage.png" className={styles.bottomImage}/>
            </div>
        </div>
      )}
    </div>
  );
}

export default FeedSummary;
