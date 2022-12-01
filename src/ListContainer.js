import styles from "./ListContainer.module.css";
import { useSearchParams } from "react-router-dom";
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
import { Link } from "react-router-dom";

export default function ListContainer() {
  const [inputValue, setInputValue] = useState("is:pr is:open");
  const [list, setList] = useState([]);

  const [checked, setChecked] = useState(false);
  const [isOpenMode, setIsOpenMode] = useState(true);
  const [params, setParams] = useState();
  const maxPage = 10;

  const [searchParams, setSearchParams] = useSearchParams();

  const page = parseInt(searchParams.get("page") ?? 1, 10);
  const state = searchParams.get("state");

  async function getData(params) {
    const { data } = await axios.get(
      `${GITHUB_API}/repos/facebook/react/issues`,
      { params: params }
    );
    setList(data);
  }
  useEffect(() => {
    getData(searchParams);
  }, [searchParams]);

  return (
    <>
      <div className={styles.listContainer}>
        <div className={styles.topSection}>
          <input
            className={styles.input}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          ></input>
          <Link to="/new" className={styles.Link}>
            <IssueButton>New Issue</IssueButton>
          </Link>
        </div>
        <OpenClosedFilters
          isOpenMode={state !== "closed"}
          onClickMode={(state) => setSearchParams({ state })}
        />
        <ListitemLayout className={styles.listFilter}>
          <ListFilter
            onChangeFilter={(params) => {
              setSearchParams(params);
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
          onClickPageButton={(pageNumber) =>
            setSearchParams({ page: pageNumber })
          }
        />
      </div>
    </>
  );
}
