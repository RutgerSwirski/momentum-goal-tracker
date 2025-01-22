import React from "react";
import Card from "../common/Card";
import Text from "../common/Text";
import ProgressBar from "../common/ProgressBar";
import Avatar from "../common/Avatar";
import Button from "../common/Button";

type Goal = {
  id: string;
  userAvatar: string;
  userName: string;
  title: string;
  category?: string; // Optional category for the goal
  progress: number; // Progress as a percentage
};

type FeaturedGoalsProps = {
  goals: Goal[];
};

const FeaturedGoals: React.FC<FeaturedGoalsProps> = ({ goals }) => {
  return (
    <div className="space-y-6">
      <Text type="subheading" className="font-semibold text-2xl">
        Featured Goals
      </Text>

      {/* Spotlight Section */}
      <div className="bg-blue-100 p-6 rounded-lg flex items-center gap-6">
        <Avatar
          src={goals[0].userAvatar}
          alt={goals[0].userName}
          className="w-20 h-20 rounded-full"
        />
        <div>
          <Text type="body" className="font-semibold text-xl">
            {goals[0].title}
          </Text>
          <Text type="bodySmall" className="text-gray-500 mt-2">
            By {goals[0].userName}
          </Text>
          <ProgressBar value={goals[0].progress} className="mt-4" />
          <Text type="bodySmall" className="text-gray-500 mt-1">
            Progress: {goals[0].progress}%
          </Text>
          <div className="mt-4">
            <Button>Encourage</Button>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Section */}
      <div className="flex space-x-4 overflow-x-auto">
        {goals.slice(1).map((goal) => (
          <div
            key={goal.id}
            className="min-w-[250px] bg-white p-4 rounded-lg shadow-lg"
          >
            <Text type="body" className="font-semibold">
              {goal.title}
            </Text>
            <Text type="bodySmall" className="text-gray-500 mt-2">
              By {goal.userName}
            </Text>
            <ProgressBar value={goal.progress} className="mt-4" />
            <Text type="bodySmall" className="text-gray-500 mt-1">
              Progress: {goal.progress}%
            </Text>
            <div className="mt-4">
              <Button>Encourage</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedGoals;
