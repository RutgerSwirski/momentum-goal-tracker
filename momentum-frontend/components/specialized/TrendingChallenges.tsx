import React from "react";
import Card from "../common/Card";
import Text from "../common/Text";
import Button from "../common/Button";
import ProgressBar from "../common/ProgressBar";

type Challenge = {
  id: string;
  title: string;
  description: string;
  participants: number;
  progress?: number; // Optional progress for personal challenges
  startDate: string;
  endDate: string;
  isTrending: boolean;
};

type TrendingChallengesProps = {
  challenges: Challenge[];
};

const TrendingChallenges: React.FC<TrendingChallengesProps> = ({
  challenges,
}) => {
  return (
    <div className="space-y-6 col-span-2 row-span-1">
      {/* Section Title */}
      <Text type="subheading" className="font-semibold text-2xl">
        Trending Challenges
      </Text>

      {/* Grid Layout for Challenges */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {challenges.map((challenge) => (
          <Card key={challenge.id} className="p-4">
            <div className="flex justify-between items-center">
              {/* Challenge Title */}
              <Text type="body" className="font-semibold text-lg">
                {challenge.title}
              </Text>
              {/* Trending Badge */}
              {challenge.isTrending && (
                <span className="text-sm text-white bg-red-500 px-2 py-1 rounded-full">
                  Trending
                </span>
              )}
            </div>

            {/* Challenge Description */}
            <Text type="bodySmall" className="text-gray-500 mt-2">
              {challenge.description}
            </Text>

            {/* Participants */}
            <Text type="bodySmall" className="text-gray-400 mt-2">
              {challenge.participants} participants
            </Text>

            {/* Dates */}
            <Text type="bodySmall" className="text-gray-400 mt-2">
              {challenge.startDate} - {challenge.endDate}
            </Text>

            {/* Progress Bar (if applicable) */}
            {challenge.progress !== undefined && (
              <div className="mt-2">
                <ProgressBar value={challenge.progress} className="mt-2" />
                <Text type="bodySmall" className="text-gray-500">
                  Progress: {challenge.progress}%
                </Text>
              </div>
            )}

            {/* Action Button */}
            <div className="mt-4">
              <Button>Join Challenge</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TrendingChallenges;
