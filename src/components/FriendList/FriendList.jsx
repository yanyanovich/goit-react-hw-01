import clsx from "clsx";
import css from "./FriendList.module.css";

import FriendListItem from "../FriendListItem/FriendListItem";

export default function FriendList({ friends }) {
  return (
    <ul className={clsx(css.list)}>
      {friends.map((friend) => {
        return (
          <li className={clsx(css.item)} key={friend.id}>
            <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} />
          </li>
        );
      })}
    </ul>
  );
}
