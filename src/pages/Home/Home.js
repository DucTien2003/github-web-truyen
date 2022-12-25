import classNames from "classnames/bind";

import styles from "./Home.module.scss";
import Header from "../../compsLayout/Header";
import MenuHorizontal from "../../compsLayout/MenuHorizontal";
import Footer from "../../compsLayout/Footer/Footer";
import Pagination from "../../compsLayout/Pagination/Pagination";
import PayloadNew from "../../compsLayout/Payloads/PayloadNew";
import PayloadHome from "../../compsLayout/Payloads/PayloadHome";
import React, { useCallback, useState } from "react";

const cx = classNames.bind(styles);

const HeaderM = React.memo(Header);
const MenuHorizontalM = React.memo(MenuHorizontal);
const PaginationM = React.memo(Pagination);
const FooterM = React.memo(Footer);

function Home() {
  const [page, setPage] = useState("home");

  const clickHome = useCallback(() => {
    setPage("home");
  }, []);

  const clickNew = useCallback(() => {
    setPage("new");
  }, []);

  const clickTop = useCallback(() => {
    setPage("top");
  }, []);

  return (
    <div className={cx("wrapper")}>
      <HeaderM />
      <MenuHorizontalM clickHome={clickHome} clickNew={clickNew} clickTop={clickTop} />
      <div className={cx("body")}>
        {page === "home" && <PayloadHome />}
        {(page === "new" || page === "top") && <PayloadNew page={page} />}
        <div className={cx("pagination-total")}>
          <PaginationM />
        </div>
      </div>
      <FooterM />
    </div>
  );
}

export default Home;
