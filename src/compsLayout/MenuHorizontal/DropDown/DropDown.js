import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import React from "react";

import styles from "./DropDown.module.scss";

const cx = classNames.bind(styles);

function DropDown({ children, list, changeGenresArr }) {
  const handleClick = (e) => {
    if (e.target.classList.contains(cx("filter"))) {
      changeGenresArr((pre) => pre.filter((preItem) => preItem !== e.target.textContent));
      e.target.classList.remove(cx("filter"));
    } else {
      changeGenresArr((pre) => [...pre, e.target.textContent]);
      e.target.classList.add(cx("filter"));
    }
  };

  const renderList = () => {
    return list.map((item, index) => (
      <div className={cx("item")} key={index}>
        <div className={cx("item__title")} onClick={(e) => handleClick(e)}>
          {item.title}
        </div>
      </div>
    ));
  };

  return (
    <Tippy
      interactive
      appendTo={() => document.body}
      trigger="click"
      placement="bottom"
      render={(attrs) => (
        <div className={cx("wrapper")} tabIndex="-1" {...attrs}>
          <div className={cx("list")}>{renderList()}</div>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default DropDown;
