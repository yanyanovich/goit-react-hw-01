import clsx from "clsx";
import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={clsx(css.wrapper)}>
      <div className={clsx(css.about)}>
        <img className={clsx(css.img)} src={image} alt={name} />
        <p className={clsx(css["about-name"])}>{name}</p>
        <p className={clsx(css["about-text"])}>@{tag}</p>
        <p className={clsx(css["about-text"])}>{location}</p>
      </div>

      <ul className={clsx(css["stats-list"])}>
        <li className={clsx(css["stats-item"])}>
          <span className={clsx(css["stats-text"])}>Followers</span>
          <span className={clsx(css["stats-count"])}>{stats.followers}</span>
        </li>
        <li className={clsx(css["stats-item"])}>
          <span className={clsx(css["stats-text"])}>Views</span>
          <span className={clsx(css["stats-count"])}>{stats.views}</span>
        </li>
        <li className={clsx(css["stats-item"])}>
          <span className={clsx(css["stats-text"])}>Likes</span>
          <span className={clsx(css["stats-count"])}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
