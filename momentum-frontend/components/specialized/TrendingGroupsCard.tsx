import Button from "../common/Button";
import Card from "../common/Card";
import Text from "../common/Text";

type Group = {
  id: string;
  name: string;
  description: string;
  trendingBadge: string;
  isTrending: boolean;
  memberCount: number;
};

type TrendingGroupsCard = {
  groups: Group[];
};

const TrendingGroupsCard = ({ groups }: TrendingGroupsCard) => {
  return (
    <div className="space-y-6 col-span-1">
      <Text type="subheading" className="font-semibold text-2xl">
        Trending Groups
      </Text>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((group) => (
          <Card key={group.id} className="p-4">
            <div className="flex justify-between items-center">
              <Text type="body" className="font-semibold text-lg">
                {group.name}
              </Text>
              {group.isTrending && (
                <span className="text-sm text-white bg-red-500 px-2 py-1 rounded-full">
                  Trending
                </span>
              )}
            </div>
            <Text type="bodySmall" className="text-gray-500 mt-2">
              {group.description}
            </Text>
            <Text type="bodySmall" className="text-gray-400 mt-2">
              {group.memberCount} members
            </Text>
            <div className="mt-4">
              <Button>Join Group</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TrendingGroupsCard;
