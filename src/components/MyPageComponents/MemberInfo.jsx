import styles from "./MemberInfo.module.css"
const MemberInfo = () =>{
  return(
    <>
          <div className={styles.feedInfoContainer}>
        <div className={styles.todayFeedContainer}></div>
        <div className={styles.attendanceContainer}></div>
        <div className={styles.consecutiveAttendanceContainer}></div>
      </div>
    </>
  )
}

export default MemberInfo;