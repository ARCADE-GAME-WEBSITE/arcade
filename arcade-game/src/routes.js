import GamePlayed from "views/GamePlayed.js";
import GamePostHis from "views/GamePostHis.js";
import Record from "views/Record";
import ListFriend from "views/ListFriend.js";
import UserProfile from "views/UserProfile.js";
var routes = [
  {
    path: "/user-profile",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/record",
    name: "Record",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-puzzle-10",
    component: Record,
    layout: "/admin",
  },
  {
    path: "/game-played",
    name: "Game played",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: GamePlayed,
    layout: "/admin",
  },
  {
    path: "/list-friend",
    name: "List Friends",
    rtlName: "طباعة",
    icon: "tim-icons icon-align-center",
    component: ListFriend,
    layout: "/admin",
  },
  {
    path: "/game-posting-history",
    name: "Game posting history",
    rtlName: "خرائط",
    icon: "tim-icons icon-pin",
    component: GamePostHis,
    layout: "/admin",
  },
];
export default routes;
