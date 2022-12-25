import classNames from "classnames/bind";

import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>Thông tin liên hệ: </div>
      <div className={cx("email")}>
        Email:{" "}
        <a href="ductien04102003@gmail.com" target={"blank"}>
          ductien04102003@gmail.com
        </a>
      </div>
      <div className={cx("phone")}>Phone: 0369513203</div>
      <div className={cx("face")}>
        Facebook:{" "}
        <a href="https://www.facebook.com/profile.php?id=100055239219530" target="blank">
          Đức Tiến
        </a>
      </div>
    </div>
  );
}

export default Footer;
