import styles from "../Profile/Profile.module.css";

export default function Profile({
  userData: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) {
  return (
    <div className={styles.profileCard}>
      <div className={styles.profileInfo}>
        <img src={avatar} alt="User avatar" />
        <p className={styles.username}>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={styles.statsList}>
        <li>
          <span>Followers</span>
          <span>{followers}</span>
        </li>

        <li>
          <span>Views</span>
          <span>{views}</span>
        </li>

        <li>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
