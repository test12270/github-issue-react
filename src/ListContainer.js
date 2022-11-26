import styles from "./ListContainer.module.css";
import Button from "./components/Button";
import Listitem from "./components/Listitem";
import { useState } from "react";
import ListitemLayout from "./components/ListitemLayout";
import cx from "clsx";
import Modal from "./components/Modal";

export default function ListContainer() {
  const [inputValue, setInputValue] = useState("is:pr is:open");

  return (
    <div className={styles.listContainer}>
      <div className={styles.topSection}>
        <input
          className={styles.input}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <Button
          style={{ fontSize: "14px", backgroundColor: "green", color: "white" }}
        >
          New Issue
        </Button>
      </div>
      <OpenClosedFilters />
      <ListitemLayout className={styles.listFilter}>
        <ListFilter />
      </ListitemLayout>
      <div className={styles.container}>
        <Listitem
          badges={[
            {
              color: "red",
              title: "bug",
            },
          ]}
        />
      </div>
    </div>
  );
}

function ListFilter() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className={styles.filterLists}>
        <ListFilterItem onClick={() => setShowModal(true)}>
          Author
        </ListFilterItem>
        <ListFilterItem>Label</ListFilterItem>
        <ListFilterItem>Projects</ListFilterItem>
        <ListFilterItem>Milestones</ListFilterItem>
        <ListFilterItem>Assignee</ListFilterItem>
        <ListFilterItem>Sort</ListFilterItem>
      </div>
      <Modal opened={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}

function ListFilterItem({ onClick, children }) {
  return (
    <span role="button" onClick={onClick}>
      {children} ▼
    </span>
  );
}

function OpenClosedFilters({ data }) {
  const [isOpenMode, setIsOpenMode] = useState(true);

  const openModeDataSize = 1;
  const closeModeDataSize = 2;
  return (
    <>
      <OpenClosedFilter
        size={openModeDataSize}
        state="Open"
        selected={isOpenMode}
        onClick={() => setIsOpenMode(true)}
      />
      <OpenClosedFilter
        size={closeModeDataSize}
        state="Closed"
        selected={!isOpenMode}
        onClick={() => setIsOpenMode(false)}
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
