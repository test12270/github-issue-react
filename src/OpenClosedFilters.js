import styles from "./OpenClosedFilters.module.css";
import cx from "clsx";

export default function OpenClosedFilters({ isOpenMode, onClickMode }) {
  // const openModeDataSize = 1;
  // const closeModeDataSize = 2;
  return (
    <>
      <OpenClosedFilter
        // size={openModeDataSize}
        state="Open"
        selected={isOpenMode}
        onClick={() => onClickMode("open")}
      />
      <OpenClosedFilter
        // size={closeModeDataSize}
        state="Closed"
        selected={!isOpenMode}
        onClick={() => onClickMode("closed")}
      />
    </>
  );
}
function OpenClosedFilter({ size, state, onClick, selected }) {
  return (
    <span
      className={cx(styles.textFilter, { [styles.selected]: selected })}
      onClick={onClick}
    >
      {size} {state}
    </span>
  );
}
