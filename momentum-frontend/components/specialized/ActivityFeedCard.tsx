import {
  ChatBubbleLeftIcon,
  HandThumbUpIcon,
  LinkIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import Avatar from "../common/Avatar";
import Card from "../common/Card";
import ProgressBar from "../common/ProgressBar";
import Text from "../common/Text";

type RecentActivity = {
  id: string;
  avatar: string;
  name: string;
  achievement: string;
  goal: string;
  progress: string;
  timeAgo: string;
};

type ActivityFeedCardProps = {
  recentActivities: RecentActivity[];
};
const ActivityFeedCard: React.FC<ActivityFeedCardProps> = ({
  recentActivities,
}) => {
  return (
    <div
      className="space-y-6 
    md:col-span-1
    "
    >
      <Text type="subheading" className="font-semibold text-2xl">
        Activity Feed
      </Text>
      <div className="space-y-4">
        {recentActivities.map((activity) => (
          <Card key={activity.id}>
            <div
              key={activity.id}
              className="flex items-center gap-4 border-b pb-4 last:border-b-0 last:pb-0"
            >
              <Avatar
                src={activity.avatar}
                alt={activity.name}
                className=""
                size="lg"
              />
              <div className="flex-1 ">
                <Text type="body" className="font-medium ">
                  {activity.name} achieved: {activity.achievement}
                </Text>
                <div className="flex items-center justify-between ">
                  <Text type="bodySmall" className="text-gray-500 ">
                    Goal: {activity.goal}
                  </Text>
                </div>
                <Text type="bodySmall" className="text-gray-400 ">
                  {activity.timeAgo}
                </Text>
              </div>
              <div className="flex gap-4 text-gray-500 ">
                <HandThumbUpIcon className="cursor-pointer hover:text-gray-700 w-6 h-6" />
                <ChatBubbleLeftIcon className="cursor-pointer hover:text-gray-700 w-6 h-6" />
                <ShareIcon className="cursor-pointer hover:text-gray-700 w-6 h-6" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeedCard;
