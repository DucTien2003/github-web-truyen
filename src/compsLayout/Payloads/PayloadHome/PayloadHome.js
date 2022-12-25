import classNames from "classnames/bind";

import styles from "./PayloadHome.module.scss";
import images from "../../../assets/images";
import StoryItemChap from "../../../components/StoryItem/StoryItemChap";

const cx = classNames.bind(styles);

const listStory = [
  {
    coverStory: images.coverStoryHome,
    name: "Darling In The Franxx ",
    chaps: [
      {
        chap: 60.5,
        time: "20 minutes ago",
      },
      {
        chap: 60,
        time: "30 minutes ago",
      },
      {
        chap: 59,
        time: "3 days ago",
      },
    ],
  },
  {
    coverStory: images.coverStoryHome,
    name: "Darling In The Franxx ",
    chaps: [
      {
        chap: 60.5,
        time: "20 minutes ago",
      },
      {
        chap: 60,
        time: "30 minutes ago",
      },
      {
        chap: 59,
        time: "3 days ago",
      },
    ],
  },
  {
    coverStory: images.coverStoryHome,
    name: "Darling In The Franxx ",
    chaps: [
      {
        chap: 60.5,
        time: "20 minutes ago",
      },
      {
        chap: 60,
        time: "30 minutes ago",
      },
      {
        chap: 59,
        time: "3 days ago",
      },
    ],
  },
  {
    coverStory: images.coverStoryHome,
    name: "Darling In The Franxx ",
    chaps: [
      {
        chap: 60.5,
        time: "20 minutes ago",
      },
      {
        chap: 60,
        time: "30 minutes ago",
      },
      {
        chap: 59,
        time: "3 days ago",
      },
    ],
  },
  {
    coverStory: images.coverStoryHome,
    name: "Darling In The Franxx ",
    chaps: [
      {
        chap: 60.5,
        time: "20 minutes ago",
      },
      {
        chap: 60,
        time: "30 minutes ago",
      },
      {
        chap: 59,
        time: "3 days ago",
      },
    ],
  },
  {
    coverStory: images.coverStoryHome,
    name: "Darling In The Franxx ",
    chaps: [
      {
        chap: 60.5,
        time: "20 minutes ago",
      },
      {
        chap: 60,
        time: "30 minutes ago",
      },
      {
        chap: 59,
        time: "3 days ago",
      },
    ],
  },
  {
    coverStory: images.coverStoryHome,
    name: "Darling In The Franxx ",
    chaps: [
      {
        chap: 60.5,
        time: "20 minutes ago",
      },
      {
        chap: 60,
        time: "30 minutes ago",
      },
      {
        chap: 59,
        time: "3 days ago",
      },
    ],
  },
  {
    coverStory: images.coverStoryHome,
    name: "Darling In The Franxx ",
    chaps: [
      {
        chap: 60.5,
        time: "20 minutes ago",
      },
      {
        chap: 60,
        time: "30 minutes ago",
      },
      {
        chap: 59,
        time: "3 days ago",
      },
    ],
  },
  {
    coverStory: images.coverStoryHome,
    name: "Darling In The Franxx ",
    chaps: [
      {
        chap: 60.5,
        time: "20 minutes ago",
      },
      {
        chap: 60,
        time: "30 minutes ago",
      },
      {
        chap: 59,
        time: "3 days ago",
      },
    ],
  },
  {
    coverStory: images.coverStoryHome,
    name: "Darling In The Franxx ",
    chaps: [
      {
        chap: 60.5,
        time: "20 minutes ago",
      },
      {
        chap: 60,
        time: "30 minutes ago",
      },
      {
        chap: 59,
        time: "3 days ago",
      },
    ],
  },
  {
    coverStory: images.coverStoryHome,
    name: "Darling In The Franxx ",
    chaps: [
      {
        chap: 60.5,
        time: "20 minutes ago",
      },
      {
        chap: 60,
        time: "30 minutes ago",
      },
      {
        chap: 59,
        time: "3 days ago",
      },
    ],
  },
  {
    coverStory: images.coverStoryHome,
    name: "Darling In The Franxx ",
    chaps: [
      {
        chap: 60.5,
        time: "20 minutes ago",
      },
      {
        chap: 60,
        time: "30 minutes ago",
      },
      {
        chap: 59,
        time: "3 days ago",
      },
    ],
  },
  {
    coverStory: images.coverStoryHome,
    name: "Darling In The Franxx ",
    chaps: [
      {
        chap: 60.5,
        time: "20 minutes ago",
      },
      {
        chap: 60,
        time: "30 minutes ago",
      },
      {
        chap: 59,
        time: "3 days ago",
      },
    ],
  },
  {
    coverStory: images.coverStoryHome,
    name: "Darling In The Franxx ",
    chaps: [
      {
        chap: 60.5,
        time: "20 minutes ago",
      },
      {
        chap: 60,
        time: "30 minutes ago",
      },
      {
        chap: 59,
        time: "3 days ago",
      },
    ],
  },
  {
    coverStory: images.coverStoryHome,
    name: "Darling In The Franxx ",
    chaps: [
      {
        chap: 60.5,
        time: "20 minutes ago",
      },
      {
        chap: 60,
        time: "30 minutes ago",
      },
      {
        chap: 59,
        time: "3 days ago",
      },
    ],
  },
  {
    coverStory: images.coverStoryHome,
    name: "Darling In The Franxx ",
    chaps: [
      {
        chap: 60.5,
        time: "20 minutes ago",
      },
      {
        chap: 60,
        time: "30 minutes ago",
      },
      {
        chap: 59,
        time: "3 days ago",
      },
    ],
  },
];

function PayloadHome() {
  return (
    <div className={cx("grid")}>
      {listStory.map((itemStory, index) => {
        return (
          <div className={cx("item-story--pc")} key={index}>
            <StoryItemChap itemStory={itemStory} />
          </div>
        );
      })}
    </div>
  );
}

export default PayloadHome;
