import { IoSearch } from "react-icons/io5"
import styles from "./SearchTab.module.css"

const SearchTab = () => {
  return(
    <div className={styles.searchContainer}>
    <IoSearch className={styles.searchIcon} />
    <input className={styles.input} placeholder="Search" />
  </div>
  )
}
export default SearchTab