import { Fragment, useState } from "react";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Link } from "react-router-dom";

import { BellIcon, BookmarkIcon, PlusIcon } from "../../components/Icons";
import { UserIcon, LogOutIcon, BoxIcon } from "../../components/Icons";

import images from "../../assets/images";
import Search from "./Search";
import styles from "./Header.module.scss";
import Button from "../../components/Button/Button";
import MenuUser from "./MenuUser";
import Notification from "./Notification";
import pathRoutes from "../../routes/pathRoutes/pathRoutes";

const cx = classNames.bind(styles);

function Header() {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogOut = () => {
    setIsLogin(false);
  };

  const handleLogIn = () => {
    setIsLogin(true);
  };

  const menuListUser = [
    { icon: UserIcon, title: "Profile", to: pathRoutes.profile },
    { icon: BoxIcon, title: "Storage" },
    { icon: LogOutIcon, title: "Log out", onClick: handleLogOut },
  ];

  return (
    <header className={cx("wrapper")}>
      <div className={cx("container")}>
        <Link className={cx("brand")}>
          <img src={images.logo} alt="Logo" className={cx("brand__logo")} />

          <div className={cx("brand__name")}>
            Duc<span>Tien</span>
          </div>
        </Link>

        <Search />

        <div className={cx("action")}>
          {isLogin ? (
            <>
              <Tippy content="Up manga" placement="bottom">
                <button className={cx("action-btn")}>
                  <PlusIcon className={cx("action-icon")} />
                </button>
              </Tippy>
              <Tippy content="Bookmark" placement="bottom">
                <button className={cx("action-btn")}>
                  <BookmarkIcon className={cx("action-icon")} />
                </button>
              </Tippy>
              <Notification>
                <Tippy content="Notification" placement="bottom">
                  <button className={cx("action-btn")}>
                    <BellIcon className={cx("action-icon")} />
                    <div className={cx("amount-notification")}>6</div>
                  </button>
                </Tippy>
              </Notification>
              <MenuUser menuList={menuListUser}>
                <div className={cx("user")}>
                  <img className={cx("user-avatar")} src={images.logo} alt="Avatar" />
                </div>
              </MenuUser>
            </>
          ) : (
            <>
              <Button className={cx("action__login")} normal outline sizeM onClick={handleLogIn}>
                Log in
              </Button>
              <Button className={cx("action__register")} normal outline sizeM>
                Register
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
