export interface OverviewContainerProps {
  title: string;
  social: string;
  dailyTotal: number | string;
  dailyChange: number;
  icon: string;
  isAudienceLost?: boolean;
}