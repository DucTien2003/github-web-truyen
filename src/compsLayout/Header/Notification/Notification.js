import PropTypes from "prop-types";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";

import Button from "../../../components/Button";
import styles from "./Notification.module.scss";
import images from "../../../assets/images";

const cx = classNames.bind(styles);

const notifiList = [
  {
    img: images.logo,
    content:
      "Gentle Songs to Start Your Day (Lyric Video) ~  Playlist for study, working, relax & travel Playlist for study, working, relax & travel",
    time: "2 hours ago",
  },
  {
    img: images.logo,
    content:
      "Gentle Songs to Start Your Day (Lyric Video) ~  Playlist for study, working, relax & travel Playlist for study, working, relax & travel",
    time: "2 hours ago",
  },
  {
    img: images.logo,
    content: "notification",
    time: "2 hours ago",
  },
  {
    img: images.logo,
    content: "notification",
    time: "2 hours ago",
  },
  {
    img: images.logo,
    content: "notification",
    time: "2 hours ago",
  },
  {
    img: images.logo,
    content: "notification",
    time: "2 hours ago",
  },
];

function Notification({ children }) {
  const renderList = () => {
    return notifiList.map((notifiItem, index) => (
      <Button className={cx("notifiItem")} key={index}>
        <div className={cx("notifiItem__container")}>
          <img className={cx("notifiItem__avatar")} src={notifiItem.img} alt="Avatar" />
          <div className={cx("notifiItem__body")}>
            <div className={cx("notifiItem__content")}>{notifiItem.content}</div>
            <div className={cx("notifiItem__time")}>{notifiItem.time}</div>
          </div>
        </div>
      </Button>
    ));
  };

  return (
    <span>
      <Tippy
        interactive
        placement="bottom-end"
        offset={[40, 8]}
        trigger="click"
        render={(attrs) => (
          <div className={cx("wrapper")} tabIndex="-1" {...attrs}>
            <div className={cx("header")}>
              <h3>Notification</h3>
            </div>
            <div className={cx("notifiList")}>{renderList()}</div>
          </div>
        )}
      >
        {children}
      </Tippy>
    </span>
  );
}

Notification.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Notification;
