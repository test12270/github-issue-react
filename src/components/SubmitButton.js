import styles from "./IssueButton.module.css";

export default function IssueButton({ children, disabled }) {
  return (
    <button type="submit" className={styles.IssueButton} disabled={disabled}>
      {children}
    </button>
  );
}
