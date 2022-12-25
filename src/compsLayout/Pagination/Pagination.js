import classNames from "classnames/bind";

import styles from "./Pagination.module.scss";
import { DoubleLeftIcon, DoubleRightIcon, LeftIcon, RightIcon } from "../../components/Icons";
import { useState } from "react";

const cx = classNames.bind(styles);

const total = 3643;
const last = Math.ceil(total / 16);

function Pagination() {
  const [mid, setMid] = useState(3);

  const handleClickFirst = (e) => {
    if (document.querySelector(`.${cx("selected")}`)) {
      document.querySelector(`.${cx("selected")}`).classList.remove(cx("selected"));
    }
    document.querySelector(`.${cx("first-page")}`).classList.add(cx("selected"));
    setMid(3);
  };

  const handleClickLast = (e) => {
    if (document.querySelector(`.${cx("selected")}`)) {
      document.querySelector(`.${cx("selected")}`).classList.remove(cx("selected"));
    }
    document.querySelector(`.${cx("last-page")}`).classList.add(cx("selected"));
    setMid(last - 2);
  };

  const handleClickDLeft = (e) => {
    if (mid > 10) {
      setMid((pre) => pre - 10);
    } else if (mid > 3) {
      setMid(3);
    }
  };

  const handleClickDRight = (e) => {
    if (mid < last - 11) {
      setMid((pre) => pre + 10);
    } else if (mid < last) {
      setMid(last - 2);
    }
  };

  const handleClickLeft = (e) => {
    if (mid > 3) {
      setMid((pre) => pre - 1);
    }
  };

  const handleClickRight = (e) => {
    if (mid < last - 2) {
      setMid((pre) => pre + 1);
    }
  };

  const handleClick = (e) => {
    if (document.querySelector(`.${cx("selected")}`)) {
      document.querySelector(`.${cx("selected")}`).classList.remove(cx("selected"));
    }
    if (+e.target.textContent > 3 && +e.target.textContent < last - 2) {
      setMid(+e.target.textContent);
      document.querySelector(`.${cx("mid-page")}`).classList.add(cx("selected"));
    } else {
      e.target.classList.add(cx("selected"));
    }
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("total")}>Total: {total} STORIES</div>
      <div className={cx("pagination")}>
        <div
          className={cx("leap", "page")}
          style={{ margin: 0 }}
          onClick={(e) => handleClickFirst(e)}
        >
          First
        </div>
        <div className={cx("page")} title="-10" onClick={(e) => handleClickDLeft(e)}>
          <DoubleLeftIcon />
        </div>
        <div className={cx("page")} onClick={(e) => handleClickLeft(e)}>
          <LeftIcon />
        </div>
        <div className={cx("page", "selected", "first-page")} onClick={(e) => handleClick(e)}>
          {mid - 2}
        </div>
        <div className={cx("page")} onClick={(e) => handleClick(e)}>
          {mid - 1}
        </div>
        <div className={cx("page", "mid-page")} onClick={(e) => handleClick(e)}>
          {mid}
        </div>
        <div className={cx("page")} onClick={(e) => handleClick(e)}>
          {mid + 1}
        </div>
        <div className={cx("page", "last-page")} onClick={(e) => handleClick(e)}>
          {mid + 2}
        </div>
        <div className={cx("page")} onClick={(e) => handleClickRight(e)}>
          <RightIcon />
        </div>
        <div className={cx("page")} title="+10" onClick={(e) => handleClickDRight(e)}>
          <DoubleRightIcon />
        </div>
        <div className={cx("leap", "page")} onClick={(e) => handleClickLast(e)}>
          Last
        </div>
      </div>
    </div>
  );
}

export default Pagination;
