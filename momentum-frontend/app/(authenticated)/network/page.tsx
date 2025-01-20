import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import Grid from "@/components/common/Grid";
import PageHeader from "@/components/common/PageHeader";
import Text from "@/components/common/Text";

const NetworkPage = () => {
  return (
    <>
      {/* Header Section */}
      <PageHeader
        title="Network"
        subtitle="Connect with others, join groups, and stay updated on events."
      />

      {/* Search Bar */}

      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search for groups, events, or users"
          className="w-full px-4 py-2 text-lg border border-gray-200 rounded-lg"
        />
        <Button>Search</Button>
      </div>

      <Grid columns={3} gap={6} responsive>
        {/* Activity Feed Card */}
        <Card className="lg:col-span-2 lg:row-span-1">
          <Text type="subheading" className="font-semibold">
            Activity Feed
          </Text>
          <p>
            Avatar - Update name / Achievement
            <br />
            Goal name - Progress
            <br />
            Icons - Link - Comment - Share
            <br />
            Time ago
          </p>
        </Card>

        {/* Groups and Challenges Card */}
        <Card className="lg:col-span-1 lg:row-span-2">
          <Text type="subheading" className="font-semibold">
            Groups and Challenges
          </Text>
          <p>
            Group name
            <br />
            Description
            <br />
            Trending badge (members)
          </p>
          <Button>Join Group</Button>
        </Card>

        {/* Featured Goals Card */}
        <Card className="lg:col-span-1 lg:row-span-1">
          <Text type="subheading" className="font-semibold">
            Featured Goals
          </Text>
          <p>
            Avatar - User’s Goal: Goal Name
            <br />
            Task Name
          </p>
          <Button>Encourage</Button>
        </Card>

        {/* Knowledge Sharing Card */}
        <Card className="lg:col-span-1 lg:row-span-1">
          <Text type="subheading" className="font-semibold">
            Knowledge Sharing
          </Text>
          <p>
            Title of the post/resource
            <br />
            Thumbnail
            <br />
            Preview snippet
          </p>
          <Button>Read More</Button>
        </Card>

        {/* User Connections Card */}
        <Card className="lg:col-span-1 lg:row-span-1">
          <Text type="subheading" className="font-semibold">
            User Connections
          </Text>
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

        {/* Events Card */}
        <Card className="lg:col-span-2 lg:row-span-1">
          <Text type="subheading" className="font-semibold">
            Events
          </Text>
          <p>
            Event Title and Date
            <br />
            Description
          </p>
          <Button>RSVP</Button>
        </Card>
      </Grid>
    </>
  );
};

export default NetworkPage;
