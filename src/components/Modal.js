import styles from "./Modal.module.css";
import cx from "clsx";
import { useEffect, useState } from "react";
export default function Modal({
  opened,
  title,
  onClose,
  placeholder,
  searchDataList,
  onClickcell,
}) {
  const [serachValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState(searchDataList);

  useEffect(() => {
    setFilteredData(searchDataList);
  }, [searchDataList]);
  useEffect(() => {
    if (serachValue !== "") {
      const filteredSearchList = searchDataList.filter((item) =>
        item.name.toLowerCase().includes(serachValue.toLowerCase())
      );

      setFilteredData(filteredSearchList);
    } else {
      setFilteredData(searchDataList);
    }
    // setFilteredData(searchDataList.filter((item) => item.some("...")));
    // setFilteredData(["Apple"]);
    // setFilteredData(searchDataList.filter((item) => item === serachValue));
  }, [searchDataList, serachValue]);

  return (
    <div className={cx(styles.modal, { [styles.opened]: opened })}>
      <div className={styles.header}>
        <span>Filter by {title}</span>
        <button onClick={onClose}>X</button>
      </div>
      <div className={styles.input}>
        <input
          placeholder={placeholder}
          value={serachValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className={styles.list}>
        {filteredData.map((data) => (
          <div
            onClick={() => {
              const isLabel = title.toLowerCase() === "label";
              const paramKey = isLabel ? "labels" : title.toLowerCase();
              onClickcell({ [paramKey]: data.name });
            }}
            key={data.name}
            role="button"
            className={styles.item}
          >
            {data.name}
          </div>
        ))}
      </div>
    </div>
  );
}
