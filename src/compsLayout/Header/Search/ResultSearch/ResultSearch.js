import PropTypes from "prop-types";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";

import styles from "./ResultSearch.module.scss";
import images from "../../../../assets/images";
import Button from "../../../../components/Button";

const cx = classNames.bind(styles);

const historyList = [
  {
    title: "history search",
  },
  {
    title: "history search",
  },
  {
    title: "history search",
  },
  {
    title: "history search",
  },
];

const suggestList = [
  {
    img: images.logo,
    name: "name manga1",
    chap: "11",
  },
  {
    img: images.logo,
    name: "name manga2",
    chap: "12",
  },
  {
    img: images.logo,
    name: "name manga3",
    chap: "13",
  },
  {
    img: images.logo,
    name: "name manga4",
    chap: "14",
  },
  {
    img: images.logo,
    name: "name manga5",
    chap: "15",
  },
  {
    img: images.logo,
    name: "name manga6",
    chap: "16",
  },
  {
    img: images.logo,
    name: "name manga9",
    chap: "1090",
  },
];

function ResultSearch({ children, isShow, isShowHistory, handleClickOutside }) {
  const renderHistory = (historyList) => {
    return (
      <div className={cx("historyList")}>
        {historyList.map((historyItem, index) => (
          <Button className={cx("historyItem")} key={index}>
            {historyItem.title}
          </Button>
        ))}
      </div>
    );
  };

  const renderSuggest = (suggestList) => {
    return (
      <div className={cx("suggestList")}>
        {suggestList.map((suggestItem, index) => {
          return (
            <Button className={cx("suggestItem")} key={index}>
              <img className={cx("suggestItem__img")} src={suggestItem.img} alt="Logo" />
              <div className={cx("suggestItem__container")}>
                <div className={cx("suggestItem__name")}>{suggestItem.name}</div>
                <div className={cx("suggestItem__chap")}> chap {suggestItem.chap}</div>
              </div>
            </Button>
          );
        })}
      </div>
    );
  };

  return (
    <Tippy
      interactive
      placement="bottom"
      visible={isShow}
      offset={[0, 3]}
      render={(attrs) => (
        <div className={cx("wrapper")}>
          {isShow && (isShowHistory ? renderHistory(historyList) : renderSuggest(suggestList))}
        </div>
      )}
      onClickOutside={() => {
        handleClickOutside();
      }}
    >
      {children}
    </Tippy>
  );
}

ResultSearch.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ResultSearch;
