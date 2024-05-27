import styles from './WikiTitle.module.css'

const WikiTitle =({diseaseName, diseaseCode})=>{
  return(
    <>
    <div className={styles.titleContainer}>
      {`${diseaseName}: `}
      <span className={styles.diseaseCode}>{diseaseCode}</span>
    </div>
    <div className={styles.editDate}>최근 수정 날짜:</div>
    </>
  )
}
export default WikiTitle;