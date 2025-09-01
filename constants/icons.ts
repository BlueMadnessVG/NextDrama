import arrow from "@/assets/icons/arrow.png";
import home from "@/assets/icons/house.png";
import play from "@/assets/icons/play.png";
import search from "@/assets/icons/search.png";
import user from "@/assets/icons/user.png";

import home_focus from "@/assets/icons/house_focus.png";
import search_focus from "@/assets/icons/search_focus.png";
import user_focus from "@/assets/icons/user_focus.png";

export type IconType = "home" | "arrow" | "search" | "user" | "play";

export const icons: Record<IconType, any> = {
  home: home,
  arrow: arrow,
  search: search,
  user: user,
  play: play,
};

export const focusedIcons = {
  home: home_focus,
  arrow: arrow,
  search: search_focus,
  user: user_focus,
  play: play,
};
