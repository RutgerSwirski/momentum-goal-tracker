import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import Grid from "@/components/common/Grid";
import PageHeader from "@/components/common/PageHeader";
import Text from "@/components/common/Text";
import ActivityFeedCard from "@/components/specialized/ActivityFeedCard";
import FeaturedGoals from "@/components/specialized/FeaturedGoals";
import TrendingChallenges from "@/components/specialized/TrendingChallenges";
import TrendingGroupsCard from "@/components/specialized/TrendingGroupsCard";

const NetworkPage = () => {
  return (
    <>
      {/* Header Section */}
      <PageHeader
        title="Network"
        subtitle="Connect with others, join groups, and stay updated on events."
      />

      {/* Search Bar */}

      <div className="flex justify-center gap-12">
        <input
          type="text"
          placeholder="Search for groups, events, or users"
          className="w-full px-4 py-2 text-lg border border-gray-200 rounded-lg"
        />
        <Button>Search</Button>
      </div>

      <Grid columns={3} gap={6} responsive>
        <ActivityFeedCard
          recentActivities={[
            {
              id: "1",
              avatar: "https://randomuser.me/api/portraits/men/15.jpg",
              name: "John Doe",
              achievement: "Completed 30-day coding challenge",
              goal: "Coding",
              progress: "100",
              timeAgo: "2 hours ago",
            },
            {
              id: "2",
              avatar: "https://randomuser.me/api/portraits/women/15.jpg",
              name: "Jane Doe",
              achievement: "Meditated for 30 minutes",
              goal: "Meditation",
              progress: "50",
              timeAgo: "3 hours ago",
            },
            {
              id: "3",
              avatar: "https://randomuser.me/api/portraits/men/16.jpg",
              name: "Random User",
              achievement: "Completed 30-day coding challenge",
              goal: "Coding",
              progress: "100",
              timeAgo: "2 hours ago",
            },
          ]}
        />

        <TrendingGroupsCard
          groups={[
            {
              id: "1",
              name: "Group 1",
              description: "Description 1",
              trendingBadge: "Trending badge 1",
            },
            {
              id: "2",
              name: "Group 2",
              description: "Description 2",
              trendingBadge: "Trending badge 2",
            },
            {
              id: "3",
              name: "Group 3",
              description: "Description 3",
              trendingBadge: "Trending badge 3",
            },
          ]}
        />

        {/* Challenges Card */}
        <TrendingChallenges
          challenges={[
            {
              id: "1",
              title: "Challenge 1",
              description: "Description 1",
              participants: 10,
              startDate: "2021-10-01",
              endDate: "2021-10-31",
              progress: 50,
              isTrending: true,
            },
            {
              id: "2",
              title: "Challenge 2",
              description: "Description 2",
              participants: 20,
              startDate: "2021-10-01",
              endDate: "2021-10-31",
              progress: 75,
              isTrending: false,
            },
            {
              id: "3",
              title: "Challenge 3",
              description: "Description 3",
              participants: 30,
              startDate: "2021-10-01",
              endDate: "2021-10-31",
              progress: 100,
              isTrending: true,
            },
          ]}
        />

        {/* Featured Goals Card */}
        <FeaturedGoals
          goals={[
            {
              id: "1",
              userAvatar: "https://randomuser.me/api/portraits",
              userName: "John Doe",
              title: "Goal 1",
              category: "Category 1",
              progress: 50,
            },
            {
              id: "2",
              userAvatar: "https://randomuser.me/api/portraits",
              userName: "Jane Doe",
              title: "Goal 2",
              category: "Category 2",
              progress: 75,
            },
            {
              id: "3",
              userAvatar: "https://randomuser.me/api/portraits",
              userName: "Random User",
              title: "Goal 3",
              category: "Category 3",
              progress: 100,
            },
            {
              id: "4",
              userAvatar: "https://randomuser.me/api/portraits",
              userName: "Random User",
              title: "Goal 4",
              category: "Category 4",
              progress: 100,
            },
            {
              id: "5",
              userAvatar: "https://randomuser.me/api/portraits",
              userName: "Random User",
              title: "Goal 5",
              category: "Category 5",
              progress: 100,
            },
          ]}
        />

        {/* Knowledge Sharing Card */}
        {/* <div>
          <Text type="subheading" className="font-semibold text-2xl">
            Knowledge Sharing
          </Text>
          <Card className="lg:col-span-1 lg:row-span-1">
            <p>
              Title of the post/resource
              <br />
              Thumbnail
              <br />
              Preview snippet
            </p>
            <Button>Read More</Button>
          </Card>
        </div> */}

        {/* User Connections Card */}
        <div>
          <Text type="subheading" className="font-semibold text-2xl">
            User Connections
          </Text>
          <Card className="lg:col-span-1 lg:row-span-1">
            <p>
              Avatar - Name - Bio
              <br />
              Shared Goals: Coding, Meditation
            </p>
            <div className="flex gap-2">
              <Button>Follow</Button>
              <Button>Message</Button>
            </div>
          </Card>
        </div>

        <div>
          {/* Events Card */}
          <Text type="subheading" className="font-semibold text-2xl">
            Events
          </Text>
          <Card className="lg:col-span-2 lg:row-span-1">
            <p>
              Event Title and Date
              <br />
              Description
            </p>
            <Button>RSVP</Button>
          </Card>
        </div>
      </Grid>
    </>
  );
};

export default NetworkPage;
