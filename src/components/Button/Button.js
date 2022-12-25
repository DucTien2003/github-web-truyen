import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({
  children,
  id,
  className,
  to,
  href,
  onClick,
  outline = false,
  rounded = false,
  normal = false,
  sizeS = false,
  sizeM = false,
  sizeL = false,
  leftIcon = false,
  rightIcon = false,
  ...subProps
}) {
  let TypeBtn = "button";
  const classes = cx("wrapper", {
    outline,
    rounded,
    normal,
    sizeS,
    sizeM,
    sizeL,
    [className]: className,
    leftIcon,
    rightIcon,
  });
  const props = { onClick, ...subProps };

  if (to) {
    TypeBtn = Link;
    props.to = to;
  } else if (href) {
    TypeBtn = "a";
    props.href = href;
  }

  return (
    <TypeBtn className={cx(classes)} id={id} {...props}>
      {leftIcon && <span className={cx("left-icon", "icon")}>{leftIcon}</span>}
      {children}
      {rightIcon && <span className={cx("right-icon", "icon")}>{rightIcon}</span>}
    </TypeBtn>
  );
}

export default Button;
