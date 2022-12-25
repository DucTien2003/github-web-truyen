import classNames from "classnames/bind";
import Header from "../../compsLayout/Header/Header";

import styles from "./Profile.module.scss";

const cx = classNames.bind(styles);

function Profile() {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <h2>Profile</h2>
    </div>
  );
}

export default Profile;
