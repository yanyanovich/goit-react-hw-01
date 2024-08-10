import clsx from "clsx";
import css from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <img className={clsx(css.img)} src={avatar} alt="Avatar" width="48" />
      <p className={clsx(css.name)}>{name}</p>
      <p className={clsx(css.status, { [css.online]: isOnline })}>{isOnline ? "Online" : "Offline"}</p>
    </>
  );
}
