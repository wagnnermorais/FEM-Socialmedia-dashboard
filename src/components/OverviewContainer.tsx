import type { OverviewContainerProps } from "../types/OverviewContainerProps";
import styles from "../styles/OverviewContainer.module.css";

export default function ({
  title,
  social,
  dailyTotal,
  dailyChange,
  icon,
  isAudienceLost = false,
}: OverviewContainerProps) {
  return (
    <div className={styles.overviewContainer}>
      <div className={styles.overviewHeader}>
        <p className={styles.title}>{title}</p>
        <img src={social} alt={`${social} logo`} />
      </div>
      <div className={styles.overviewContent}>
        <h3 className={styles.dailyTotal}>{dailyTotal}</h3>
        <div className={styles.variation}>
          <img src={icon} alt="Icon" />
          <small
            className={styles.dailyChange}
            style={{
              color: isAudienceLost ? "var(--red-500)" : "var(--green-500)",
            }}
          >
            {dailyChange}%
          </small>
        </div>
      </div>
    </div>
  );
}
