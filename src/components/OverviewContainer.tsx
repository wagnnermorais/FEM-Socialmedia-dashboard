import type { OverviewContainerProps } from "../types/OverviewContainerProps";

export default function ({
  title,
  social,
  dailyTotal,
  dailyChange,
  icon,
}: OverviewContainerProps) {
  return (
    <div>
      <div>
        <p>{title}</p>
        <img src={social} alt={`${social} logo`} />
      </div>
      <div>
        <h3>{dailyTotal}</h3>
        <div>
          <img src={icon} alt="Icon" />
          <small>{dailyChange}%</small>
        </div>
      </div>
    </div>
  );
}
