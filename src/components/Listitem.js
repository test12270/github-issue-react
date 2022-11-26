import Badge from "./Badge";
import styles from "./Listitem.module.css";
import ListitemLayout from "./ListitemLayout";

export default function Listitem({
  checked,
  onChangeCheckBox,
  onClickTitle,
  badges,
}) {
  return (
    <ListitemLayout>
      <div>
        <div role="button" onClick={onClickTitle} className={styles.title}>
          Issue Example
          {badges &&
            badges.map((badgeProps, idx) => (
              <Badge key={idx} {...badgeProps} />
            ))}
        </div>
        <div className={styles.description}># Description</div>
      </div>
    </ListitemLayout>
  );
}
