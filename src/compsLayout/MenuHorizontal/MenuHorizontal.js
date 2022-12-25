import classNames from "classnames/bind";
import React from "react";
import { useState } from "react";

import styles from "./MenuHorizontal.module.scss";
import DropDown from "./DropDown";
import Button from "../../components/Button";
import { HomeIcon, CaretDownIcon } from "../../components/Icons";

const cx = classNames.bind(styles);

const DropDownM = React.memo(DropDown, (prevProps, nextProps) => {
  return prevProps.list !== nextProps.list;
});

const ButtonM = React.memo(Button, (prevProps, nextProps) => {
  return prevProps.rightIcon === nextProps.rightIcon;
});

const menuList = [
  {
    title: "Home",
    icon: HomeIcon,
    clicked: "clicked",
  },
  {
    title: "New",
  },
  {
    title: "Top",
  },
  {
    title: "Genres",
    icon: CaretDownIcon,
    dropDown: [
      { title: "Action" },
      { title: "Adventure" },
      { title: "Cars" },
      { title: "Comedy" },
      { title: "Dementia" },
      { title: "Demons" },
      { title: "Doujinshi" },
      { title: "Drama" },
      { title: "Ecchi" },
      { title: "Fantasy" },
      { title: "Game" },
      { title: "Gender Bender" },
      { title: "Harem" },
      { title: "Hentai" },
      { title: "Historical" },
      { title: "Horror" },
      { title: "Josei" },
      { title: "Kids" },
      { title: "Magic" },
      { title: "Martial Arts" },
      { title: "Mecha" },
      { title: "Military" },
      { title: "Music" },
      { title: "Mystery" },
      { title: "Parody" },
      { title: "Police" },
      { title: "Psychological" },
      { title: "Romance" },
      { title: "Samurai" },
      { title: "School" },
      { title: "Sci-Fi" },
      { title: "Seinen" },
      { title: "Shoujo" },
      { title: "Shoujo Ai" },
      { title: "Shounen" },
      { title: "Shounen Ai" },
      { title: "Slice of Life" },
      { title: "Space" },
      { title: "Sports" },
      { title: "Super Power" },
      { title: "Supernatural" },
      { title: "Thriller" },
      { title: "Vampire" },
      { title: "Yaoi" },
      { title: "Yuri" },
    ],
    amount: true,
  },
];

function MenuHorizontal({ clickHome, clickNew, clickTop }) {
  const [genresArr, setGenresArr] = useState([]);

  const handleOnClick = (e) => {
    const elementClicked = document.querySelector(`.${cx("menu-item__btn")}.${cx("clicked")}`);
    if (!!elementClicked) {
      elementClicked.classList.remove(cx("clicked"));
    }
    e.target.classList.add(cx("clicked"));
    if (e.target.textContent === "Home") {
      clickHome();
    } else if (e.target.textContent === "New") {
      clickNew();
    } else if (e.target.textContent === "Top") {
      clickTop();
    }
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("menu-list")}>
        {menuList.map((menuItem, index) => {
          const icon = menuItem.icon ? <menuItem.icon /> : "";

          return (
            <DropDownM
              list={menuItem.dropDown ? menuItem.dropDown : []}
              key={index}
              changeGenresArr={setGenresArr}
            >
              <div className={cx("menu-item")} key={index}>
                <ButtonM
                  className={cx("menu-item__btn", menuItem.clicked ? menuItem.clicked : "")}
                  rightIcon={
                    genresArr.length > 0 ? (
                      <div className={cx("amount-filter")}>{genresArr.length}</div>
                    ) : (
                      icon
                    )
                  }
                  onClick={(e) => {
                    handleOnClick(e);
                  }}
                >
                  {menuItem.title}
                </ButtonM>
              </div>
            </DropDownM>
          );
        })}
      </div>
    </div>
  );
}

export default MenuHorizontal;
