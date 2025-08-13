import Header from "./components/Header";
import FollowersContainer from "./components/FollowersContainer";
import OverviewContainer from "./components/OverviewContainer";
import styles from "./styles/App.module.css";

function App() {
  return (
    <main className={styles.container}>
      <Header followers={23.004} />
      <section className={styles.followersSection}>
        <FollowersContainer
          social="/images/icon-facebook.svg"
          username="@nathanf"
          totalFollowers={1987}
          audience="Followers"
          icon="/images/icon-up.svg"
          dailyChange={12}
          borderTop="5px solid var(--blue-600-facebook)"
        />
        <FollowersContainer
          social="/images/icon-twitter.svg"
          username="@nathanf"
          totalFollowers={1044}
          audience="Followers"
          icon="/images/icon-up.svg"
          dailyChange={99}
          borderTop="5px solid var(--blue-500-twitter)"
        />
        <FollowersContainer
          social="/images/icon-instagram.svg"
          username="@realnathanf"
          totalFollowers={"11k"}
          audience="Followers"
          icon="/images/icon-up.svg"
          dailyChange={1099}
          borderTop="5px solid transparent"
          borderImage="var(--instagram-gradient) 1"
          borderImageSlice="1"
        />
        <FollowersContainer
          social="/images/icon-youtube.svg"
          username="Nathan F."
          totalFollowers={8239}
          audience="Subscribers"
          icon="/images/icon-down.svg"
          dailyChange={144}
          borderTop="5px solid var(--red-700-youtube)"
          isAudienceLost
        />
      </section>
      <h2 className={styles.overviewTitle}>Overview - Today</h2>
      <section className={styles.overviewSection}>
        <OverviewContainer
          title="Page Views"
          social="/images/icon-facebook.svg"
          dailyTotal={87}
          icon="/images/icon-up.svg"
          dailyChange={3}
        />
        <OverviewContainer
          title="Likes"
          social="/images/icon-facebook.svg"
          dailyTotal={52}
          icon="/images/icon-down.svg"
          dailyChange={2}
          isAudienceLost
        />
        <OverviewContainer
          title="Likes"
          social="/images/icon-instagram.svg"
          dailyTotal={5462}
          icon="/images/icon-up.svg"
          dailyChange={2257}
        />
        <OverviewContainer
          title="Profile Views"
          social="/images/icon-instagram.svg"
          dailyTotal={"52k"}
          icon="/images/icon-up.svg"
          dailyChange={1375}
        />
        <OverviewContainer
          title="Retweets"
          social="/images/icon-twitter.svg"
          dailyTotal={117}
          icon="/images/icon-up.svg"
          dailyChange={303}
        />
        <OverviewContainer
          title="Likes"
          social="/images/icon-twitter.svg"
          dailyTotal={507}
          icon="/images/icon-up.svg"
          dailyChange={553}
        />
        <OverviewContainer
          title="Likes"
          social="/images/icon-youtube.svg"
          dailyTotal={107}
          icon="/images/icon-down.svg"
          dailyChange={19}
          isAudienceLost
        />
        <OverviewContainer
          title="Total Views"
          social="/images/icon-youtube.svg"
          dailyTotal={1407}
          icon="/images/icon-up.svg"
          dailyChange={12}
        />
      </section>
    </main>
  );
}

export default App;
