import PropTypes from "prop-types";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";

import styles from "./MenuUser.module.scss";
import Button from "../../../components/Button";

const cx = classNames.bind(styles);

function MenuUser({ children, menuList }) {
  const renderList = () => {
    return menuList.map((menuItem, index) => (
      <div className={cx("menuItem")} key={index}>
        <Button
          className={cx("menuItem__btn")}
          to={menuItem.to}
          outline
          leftIcon={<menuItem.icon />}
          onClick={menuItem.onClick}
        >
          {menuItem.title}
        </Button>
      </div>
    ));
  };

  return (
    <Tippy
      interactive
      trigger="click"
      placement="bottom-end"
      offset={[12, 8]}
      render={(attrs) => (
        <div className={cx("wrapper")} tabIndex="-1" {...attrs}>
          <div className={cx("menu-list")}>{renderList()}</div>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

MenuUser.propTypes = {
  children: PropTypes.node.isRequired,
  menuList: PropTypes.array,
};

export default MenuUser;
