import pathRoutes from "./pathRoutes";
import Home from "../pages/Home";
import Bookmark from "../pages/Bookmark";
import Hot from "../pages/Hot";
import New from "../pages/New";
import Profile from "../pages/Profile";

const publicRoutes = [
  { path: pathRoutes.home, component: Home },
  { path: pathRoutes.new, component: New },
  { path: pathRoutes.hot, component: Hot },
  { path: pathRoutes.profile, component: Profile },
];

const privateRoutes = [{ path: pathRoutes.bookmark, component: Bookmark }];

export { publicRoutes, privateRoutes };
