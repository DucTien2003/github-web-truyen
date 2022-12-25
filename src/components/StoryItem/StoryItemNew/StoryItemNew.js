import classNames from "classnames/bind";
import { ViewIcon } from "../../Icons";

import styles from "./StoryItemNew.module.scss";

const cx = classNames.bind(styles);

function StoryItemNew({ itemStory }) {
  return (
    <div className={cx("wrapper")}>
      <img className={cx("cover-story")} src={itemStory.coverStory} alt="cover story" />
      <div className={cx("body")}>
        <div className={cx("name")}>{itemStory.name}</div>
        <div className={cx("chap")}>
          <span>Chap: </span>
          {itemStory.chap}
        </div>
        <div className={cx("views")}>
          <div>Views: </div>
          <div className={cx("views__amount")}>{itemStory.views}</div>
          <ViewIcon />
        </div>
        <div className={cx("description")}>{itemStory.description}</div>
      </div>
    </div>
  );
}

export default StoryItemNew;
