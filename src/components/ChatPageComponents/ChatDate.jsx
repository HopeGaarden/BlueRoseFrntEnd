import styles from './ChatDate.module.css'

const defaultDate = '2024년 06월 01일 토요일'
const ChatDate = () => {
  return(
    <div className={styles.container}>
      <div className={styles.date
      }>
{defaultDate}
</div>
    </div>
  )
}

export default ChatDate;