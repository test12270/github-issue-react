import styles from "./ListContainer.module.css";
import Listitem from "./components/Listitem";
import { useState } from "react";
import ListitemLayout from "./components/ListitemLayout";
import Pagination from "./components/Pagination";
import ListFilter from "./ListFilter";
import OpenClosedFilters from "./OpenClosedFilters";
import IssueButton from "./components/IssueButton";
import axios from "axios";
import { useEffect } from "react";
import { GITHUB_API } from "./api";

export default function ListContainer() {
  const [inputValue, setInputValue] = useState("is:pr is:open");
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [checked, setChecked] = useState(false);
  const [isOpenMode, setIsOpenMode] = useState(true);
  const [params, setParams] = useState();
  const maxPage = 10;

  async function getData(params) {
    const { data } = await axios.get(
      `${GITHUB_API}/repos/facebook/react/issues`,
      { params: params }
    );
    setList(data);
    console.log(data);
  }
  useEffect(() => {
    getData({ page, state: isOpenMode ? "open" : "closed", ...params });
  }, [page, isOpenMode, params]);

  return (
    <>
      <div className={styles.listContainer}>
        <div className={styles.topSection}>
          <input
            className={styles.input}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          ></input>
          <IssueButton>New Issue</IssueButton>
        </div>
        <OpenClosedFilters
          isOpenMode={isOpenMode}
          onClickMode={setIsOpenMode}
        />
        <ListitemLayout className={styles.listFilter}>
          <ListFilter
            onChangeFilter={(params) => {
              setParams(params);
            }}
          />
        </ListitemLayout>
        <div className={styles.container}>
          {list.map((item) => (
            <Listitem
              key={item.id}
              data={item}
              checked={checked}
              onChangeCheckBox={() => setChecked((checked) => !checked)}
            />
          ))}
        </div>
      </div>
      <div className={styles.paginationContainer}>
        <Pagination
          maxPage={maxPage}
          currentPage={page}
          onClickPageButton={(number) => setPage(number)}
        />
      </div>
    </>
  );
}
