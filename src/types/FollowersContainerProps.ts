export interface FollowersContainerProps {
  social: string;
  username: string;
  totalFollowers: number | string;
  dailyChange: number;
  icon: string;
  audience: string;
  borderTop: string;
  borderImage?: string;
  borderImageSlice?: string;
  isAudienceLost?: boolean;
}