import styles from "../FriendListItem/FriendListItem.module.css";

export default function FriendListItem({ friend: { name, avatar, isOnline } }) {
  return (
    <div className={styles.FriendListItem}>
      <img src={avatar} alt={`${name}'s avatar`} width="48" />
      <p>{name}</p>
      <p
        className={`${styles.status} ${
          isOnline ? styles.online : styles.offline
        }`}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
