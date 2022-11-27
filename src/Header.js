import styles from "./Header.module.css";
import Space from "./components/Space";
import Tabs from "./components/Tab";
import HeaderButton from "./components/HeaderButton";

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.buttonContainer}>
          <HeaderButton>Watch</HeaderButton>
          <Space />
          <HeaderButton>
            Fork <div className={styles.circle}>5</div>
          </HeaderButton>
          <Space />
          <HeaderButton>Star</HeaderButton>
        </div>
      </div>
      <Tabs title="title" number={5} />
    </>
  );
}
