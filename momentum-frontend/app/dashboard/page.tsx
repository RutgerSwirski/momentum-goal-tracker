"use client";

import Card from "@/components/dashboard/Card";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardTable from "@/components/dashboard/DashboardTable";
import AuthorizedLayout from "@/components/layout/AuthorizedLayout";

const DashboardPage = () => {
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
    <AuthorizedLayout>
      {/* Header */}
      <DashboardHeader />

      {/* Main Layout */}
      <div className="flex gap-8  mt-8">
        {/* Main Content */}
        <div className="w-3/4 flex flex-col gap-8">
          {/* Row of 4 Cards */}
          <div className="flex gap-8">
            <Card>
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
              <h3 className="text-lg font-semibold uppercase">
                Task of the Day
              </h3>

              <div className="flex items-center gap-4">
                <span>icon</span>

                <div className="flex flex-col gap-2">
                  <p className="text-xl font-semibold">
                    Plan and wireframe portfolio site - 2 hours
                  </p>

                  <p>Description</p>

                  {/* motivational quote */}
                  <div className="flex items-center gap-2">
                    <span>icon</span>
                    <p className="text-sm">
                      "The secret of getting ahead is getting started."
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <span className="text-sm text-red-500 bg-red-100 px-2 py-1 rounded-full w-fit font-semibold">
                  High priority task, due by 5pm
                </span>
                {/* task is a part of creating portfolio */}
                <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded-full text-sm">
                  build portfolio
                </span>

                {/* task is part of getting a job */}
                <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded-full text-sm">
                  get a job
                </span>
              </div>

              <button>
                <span className="text-sm text-green-600">Complete</span>
              </button>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold uppercase">Daily Streak</h3>

              <div className="flex items-center gap-4">
                <span>icon</span>
                <p className="text-4xl font-semibold">5</p>
              </div>
              <span className="text-sm text-gray-600">
                Day streak, come back tomorrow to keep it going!
              </span>

              <span className="text-sm font-semibold text-green-500">
                19% more productive than last week
              </span>
            </Card>
          </div>
          <div className="flex gap-8">
            <Card>
              <h3 className="text-xl font-semibold">Leaderboard</h3>
              <ul className="space-y-0">
                {leaderboard.map((user, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between bg-gray-50 p-4 rounded-md shadow-sm hover:bg-gray-100 transition-colors"
                  >
                    {/* Ranking Medal */}
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">
                        {index === 0
                          ? "🥇"
                          : index === 1
                          ? "🥈"
                          : index === 2
                          ? "🥉"
                          : `${index + 1}.`}
                      </span>

                      {/* User Info */}
                      <div>
                        <p className="font-bold">{user.name}</p>
                        <p className="text-sm text-gray-600">
                          {user.goals} goals
                        </p>
                      </div>
                    </div>

                    {/* Level Badge */}
                    <div className="flex items-center gap-2">
                      <span className="bg-teal-500 text-white px-2 py-1 rounded-full text-sm">
                        Level {user.level}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              <button className="text-teal-500 hover:underline">See All</button>
            </Card>
            <DashboardTable
              tasks={[
                {
                  name: "Build Portfolio",
                  goal: "Get a job",
                  priority: "High",
                },
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
            <h3 className="text-xl font-semibold">Community Feed</h3>

            <div className="flex flex-col gap-4">
              <div className="flex  flex-col gap-4 border-b py-4">
                <div className="flex gap-4">
                  <span className="text-2xl">🎉</span>
                  <p>
                    <span className="font-semibold">Alice</span> just completed
                    10 goals! 🏆
                  </p>
                </div>

                <div className="flex gap-4">
                  <button>
                    <span className="text-sm text-gray-600">Like</span>
                  </button>

                  <button>
                    <span className="text-sm text-gray-600">Comment</span>
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-2xl">🔥</span>
                <p>
                  <span className="font-semibold">Bob</span> is on a 7-day
                  streak!
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-2xl">🎯</span>
                <p>
                  <span className="font-semibold">Charlie</span> just set a new
                  goal to learn React!
                </p>
              </div>
            </div>

            <button className="text-teal-500 hover:underline">View All</button>
          </Card>
        </div>

        <div className="w-1/4 flex flex-col gap-8">
          <Card>
            <h3 className="text-lg font-semibold">Achievements</h3>

            <div className="flex gap-4 flex-wrap">
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                  title={badge.description}
                >
                  <img
                    src={badge.icon}
                    alt={badge.name}
                    className="w-12 h-12"
                  />
                  <p className="text-sm mt-2">{badge.name}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h3>Challenges</h3>

            <ul className="flex flex-col gap-2">
              {challenges.map((challenge, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 justify-between p-2 bg-gray-50 rounded-md shadow-sm hover:bg-gray-100 transition-colors"
                >
                  {/* Left: Icon and Details */}
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <span className="text-2xl">{challenge.icon}</span>

                    {/* Challenge Details */}
                    <div>
                      <p className="font-bold">{challenge.title}</p>
                      <p className="text-sm text-gray-600">
                        {challenge.description}
                      </p>
                    </div>
                  </div>

                  {/* Right: XP Reward */}
                  <div className="flex items-center gap-2">
                    <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                      +{challenge.xp} XP
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold">Quick Actions</h3>
            <div className="mt-4 flex flex-col gap-2">
              <button className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600">
                ➕ Add New Goal
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                📈 Review Progress
              </button>
              <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
                🕒 Schedule Daily Tasks
              </button>
            </div>
          </Card>
        </div>
      </div>
    </AuthorizedLayout>
  );
};

export default DashboardPage;
