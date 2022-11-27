import styles from "./HeaderButton.module.css";

export default function HeaderButton({ children }) {
  return <button className={styles.button}>{children}</button>;
}
