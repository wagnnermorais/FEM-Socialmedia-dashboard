import type { FollowersContainerProps } from "../types/FollowersContainerProps";
import styles from "../styles/FollowersContainer.module.css";

export default function ({
  social,
  username,
  totalFollowers,
  dailyChange,
  icon,
  audience,
  borderTop,
  borderImage,
  borderImageSlice,
  isAudienceLost = false,
}: FollowersContainerProps) {
  return (
    <div
      className={styles.container}
      style={{
        borderTop: borderTop,
        borderImage: borderImage,
        borderImageSlice: borderImageSlice,
      }}
    >
      <div className={styles.socials}>
        <img src={social} alt={`${social} icon`} />
        <small className={styles.username}>{username}</small>
      </div>
      <h2 className={styles.totalFollowers}>{totalFollowers}</h2>
      <p className={styles.audience}>{audience}</p>
      <div className={styles.dailyChange}>
        <img src={icon} alt="Icon" />
        <p
          style={{
            color: isAudienceLost ? "var(--red-500)" : "var(--green-500)",
          }}
        >
          {dailyChange} Today
        </p>
      </div>
    </div>
  );
}
