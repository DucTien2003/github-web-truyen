import classNames from "classnames/bind";

import styles from "./StoryItemChap.module.scss";

const cx = classNames.bind(styles);

function StoryItemChap({ itemStory }) {
  return (
    <div className={cx("wrapper")}>
      <img className={cx("cover-story")} src={itemStory.coverStory} alt="cover story" />
      <div className={cx("body")}>
        <div className={cx("name")}>{itemStory.name}</div>
        <div className={cx("list-chap")}>
          {itemStory.chaps.map((chap, index) => {
            return (
              <div className={cx("item-chap")} key={index}>
                <div className={cx("chap")}>chap: {chap.chap}</div>
                <div className={cx("time")}>{chap.time}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default StoryItemChap;
