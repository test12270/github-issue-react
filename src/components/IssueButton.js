import styles from "./IssueButton.module.css";

export default function IssueButton({ children }) {
  return <button className={styles.IssueButton}>{children}</button>;
}
