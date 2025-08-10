export interface FollowersContainerProps {
  social: string;
  username: string;
  totalFollowers: number | string;
  dailyChange: number;
  icon: string;
  audience: string;
  isAudienceLost?: boolean;
}