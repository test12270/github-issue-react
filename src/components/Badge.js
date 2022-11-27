import styles from "./Badge.module.css";

export default function Badge({ name, color }) {
  return (
    <span className={styles.Badge} style={{ background: `#${color}` }}>
      {name}
    </span>
  );
}
