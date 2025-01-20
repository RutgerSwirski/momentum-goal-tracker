"use client";

import DashboardHeader from "@/app/(authenticated)/dashboard/components/DashboardHeader";
import DashboardTable from "@/app/(authenticated)/dashboard/components/DashboardTable";
import Card from "@/components/common/Card";
import axiosInstance from "@/utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const DashboardPage = () => {
  const { data: currentUser } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      return axiosInstance.get("/users/me");
    },
  });

  const badges = [
    {
      name: "Top Achiever",
      description: "Complete 10 goals",
      icon: "/icons/trophy.png",
      locked: false,
    },
    {
      name: "Consistency King",
      description: "Maintain a 7-day streak",
      icon: "/icons/fire.png",
      locked: false,
    },
    {
      name: "Goal Crusher",
      description: "Complete all tasks for the day",
      icon: "/icons/target.png",
      locked: true,
    },
  ];

  const leaderboard = [
    { name: "Rutger", goals: 12, level: 5 },
    { name: "Alice", goals: 10, level: 3 },
    { name: "Bob", goals: 8, level: 2 },
  ];

  const challenges = [
    {
      icon: "✅",
      title: "Complete 2 goals this week",
      description: "Focus on your most important goals to finish strong.",
      xp: 200,
    },
    {
      icon: "📚",
      title: "Read a productivity book",
      description: "Boost your knowledge and improve your workflow.",
      xp: 150,
    },
    {
      icon: "💡",
      title: "Schedule tasks every morning",
      description: "Plan your day for better focus and efficiency.",
      xp: 100,
    },
  ];

  return (
    <>
      {/* Header */}
      <DashboardHeader />

      {/* Dynamic Grid Layout */}
      {/* Dynamic Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <Card className="lg:col-span-2">
          <h3>Progress Tracker</h3>
          <div className="flex items-center gap-4">
            <span>icon</span>
            <div className="flex flex-col gap-2">
              <span>Graph</span>
              <span className="text-sm text-gray-600">
                3/5 goals completed this week, 60% completion rate
              </span>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold uppercase">Task of the Day</h3>
          <p className="text-xl">Plan and wireframe portfolio site - 2 hours</p>
          <p>"The secret of getting ahead is getting started."</p>
        </Card>

        <Card className="col-span-1">
          <h3 className="text-lg font-semibold uppercase">Daily Streak</h3>
          <p className="text-4xl font-bold">5</p>
          <span className="text-sm text-gray-600">
            Day streak, keep it going!
          </span>
        </Card>

        <div className="lg:col-span-2 md:col-span-2">
          <DashboardTable
            tasks={[
              { name: "Build Portfolio", goal: "Get a job", priority: "High" },
              {
                name: "Write Blog Post",
                goal: "Share knowledge",
                priority: "Medium",
              },
              {
                name: "Learn TypeScript",
                goal: "Get better at types",
                priority: "Low",
              },
            ]}
          />
        </div>

        <Card>
          <h3>Leaderboard</h3>
          <ul className="space-y-2">
            {leaderboard.map((user, index) => (
              <li key={index} className="flex justify-between">
                <span>{user.name}</span>
                <span className="bg-teal-500 text-white px-2 py-1 rounded">
                  Level {user.level}
                </span>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <h3>Achievements</h3>
          <div className="flex gap-2">
            {badges.map((badge, index) => (
              <div key={index} className="flex flex-col items-center">
                <img src={badge.icon} alt={badge.name} className="w-12 h-12" />
                <p>{badge.name}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3>Challenges</h3>
          <ul className="space-y-2">
            {challenges.map((challenge, index) => (
              <li key={index}>
                <p>{challenge.title}</p>
                <span className="bg-teal-100 px-2 py-1 rounded">
                  +{challenge.xp} XP
                </span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </>
  );
};

export default DashboardPage;
