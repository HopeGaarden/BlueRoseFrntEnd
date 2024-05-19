import FeedSummary from "./FeedSummary";

function Feed() {
  const feeds = [
    {
      imgUrl: "/images/Feed/Feed.png",
      date: "5/1",
      title: "마라탕후루 챌린지는 뭐냐",
      content: "그런 것좀 하지 마라탕탕후루후루 탕탕 후루루루룰~~",
    },
    {
      imgUrl: "/images/Feed/Feed(2).png",
      date: "5/2",
      title: "1일차 제주도",
      content:
        "1일차 제주도",
    },
    {
      imgUrl: "/images/Feed/Feed(3).png",
      date: "5/3",
      title: "범죄도시4 ",
      content:
        "같이 보러 갈 사람 ㅠ",
    },
    {
      imgUrl: "/images/Feed/Feed(4).png",
      date: "5/4",
      title: "오운완",
      content:
        "운동 71일차",
    },
  ];

  return (
    // 부모 컴포넌트에서 FeedSummary 컴포넌트 렌더링
    <FeedSummary feed={feeds} />
  );
}

export default Feed;
