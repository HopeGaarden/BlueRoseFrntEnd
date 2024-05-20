import styles from "./ConfirmInput.module.css";
import { LuClipboardSignature } from "react-icons/lu";
import { IoCameraOutline } from "react-icons/io5";
const ConfirmInput = () => {
  return (
    <div className={styles.container}>
      <LuClipboardSignature className={styles.clipboardIcon} />
      <button className={styles.overlayButton}>
        <IoCameraOutline className={styles.cameraIcon} />
      </button>
    </div>
  );
};

export default ConfirmInput;
