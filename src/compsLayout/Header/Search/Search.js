import classNames from "classnames/bind";
import { useEffect, useState } from "react";

import styles from "./Search.module.scss";
import ResultSearch from "./ResultSearch";
import { SearchIcon } from "../../../components/Icons";
// import useDebounce from "../../../hooks/useDebounce";

const cx = classNames.bind(styles);

function Search() {
  const [isShowHistory, setIsShowHistory] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  // const debouncedValue = useDebounce(searchValue, 500);

  useEffect(() => {
    setIsShowHistory(!searchValue);
  }, [searchValue]);

  const handleOnMouseDownSearch = (e) => {
    e.preventDefault();
  };

  const handleOnChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleOnFocus = () => {
    setIsShow(true);
    if (!searchValue) {
      setIsShowHistory(true);
    }
  };

  const handleClickOutside = () => {
    setIsShow(false);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("search-bar")}>
        <ResultSearch
          isShowHistory={isShowHistory}
          isShow={isShow}
          handleClickOutside={() => handleClickOutside()}
        >
          <input
            className={cx("search-input")}
            placeholder="Search manga..."
            spellCheck={false}
            value={searchValue}
            onChange={(e) => {
              handleOnChange(e);
            }}
            onFocus={() => {
              handleOnFocus();
            }}
          ></input>
        </ResultSearch>
      </div>
      <button className={cx("search-btn")} onMouseDown={(e) => handleOnMouseDownSearch(e)}>
        <SearchIcon id="search-icon" />
      </button>
    </div>
  );
}

export default Search;
