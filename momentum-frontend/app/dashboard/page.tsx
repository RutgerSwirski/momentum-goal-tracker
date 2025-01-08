"use client";

import Card from "@/components/dashboard/Card";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardTable from "@/components/dashboard/DashboardTable";
import AuthorizedLayout from "@/components/layout/AuthorizedLayout";

const DashboardPage = () => {
  const level = 5;
  const xp = 400;
  const xpToNextLevel = 1000;
  const xpProgress = Math.round((xp / xpToNextLevel) * 100);

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
    { name: "John", goals: 6, level: 2 },
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
              <p className="text-4xl font-semibold">12</p>
              <h3 className="text-lg">Goals Completed</h3>
            </Card>
            <Card>
              <p className="text-4xl font-semibold">3</p>
              <h3 className="text-lg">Goals in Progress</h3>
            </Card>

            <Card>
              <p className=" text-4xl font-semibold">
                80th <span className="text-base">out of 1000+ users</span>
              </p>
              <h3 className="text-lg ">Rank in Community Leaderboard</h3>
            </Card>

            <Card>
              <p className="text-4xl font-semibold">
                5 <span className="text-base">days</span>
              </p>
              <h3 className="text-lg">Streak</h3>
              <h4 className="text-sm text-gray-600">
                Keep it up! Your current highscore is 12 days.
              </h4>
            </Card>
          </div>
          <div className="flex gap-8">
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
            </Card>
          </div>

          {/* Two Columns */}
          <div className="flex gap-8">
            <div className=" flex flex-col gap-8">
              <Card>
                <h3 className="text-xl font-semibold">Tips for You</h3>
                <p className="mt-4">
                  "You're 80% done with your current goals! Keep it up!"
                </p>

                <button className="text-sm">
                  Next Tip <span>➡️</span>
                </button>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold">Recent Activity</h3>
                <ul className="mt-4 space-y-2">
                  <li>✅ Completed Goal: Build Portfolio</li>
                  <li>➕ Added Task: Write Blog Post</li>
                  <li>🕒 Updated Deadline: Learn TypeScript</li>
                </ul>
              </Card>
            </div>

            <Card>
              <h3 className="text-lg font-semibold mb-4">Your Badges</h3>
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
                      className={`w-16 h-16 ${
                        badge.locked ? "opacity-50 grayscale" : ""
                      }`}
                    />
                    <p className="text-sm mt-2">{badge.name}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        <div className="w-1/4 flex flex-col gap-8">
          <Card>
            <h3 className="text-lg font-semibold">Suggested Challenges</h3>
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
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Notifications</h3>
              <span className="text-sm">mark all as read</span>
            </div>
            <ul className="mt-4 space-y-2">
              <li>⚠️ Your goal 'Build Portfolio' is due tomorrow.</li>
              <li>⏳ You haven’t logged progress for 'Learn TypeScript'.</li>
              <li>🛑 2 tasks are overdue. Catch up today!</li>
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
