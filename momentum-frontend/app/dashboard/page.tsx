"use client";

import Card from "@/components/dashboard/Card";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardTable from "@/components/dashboard/DashboardTable";
import AuthorizedLayout from "@/components/layout/AuthorizedLayout";

const DashboardPage = () => {
  return (
    <AuthorizedLayout>
      {/* Header */}
      <DashboardHeader />

      {/* Main Layout */}
      <div className="flex gap-8  mt-12">
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
              <p className=" text-4xl font-semibold">45%</p>
              <h3 className="text-lg">Community Progress</h3>
            </Card>

            <Card>
              <p className="text-4xl font-semibold">5</p>
              <h3 className="text-lg">Streaks</h3>
            </Card>
          </div>

          {/* Two Columns */}
          <div className="flex gap-8">
            <div className=" flex flex-col gap-8">
              <Card>
                <h3 className="text-xl font-semibold">Recent Activity</h3>
                <ul className="mt-4 space-y-2">
                  <li>✅ Completed Goal: Build Portfolio</li>
                  <li>➕ Added Task: Write Blog Post</li>
                  <li>🕒 Updated Deadline: Learn TypeScript</li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold">Tips for You</h3>
                <p className="mt-4">
                  "You're 80% done with your current goals! Keep it up!"
                </p>
              </Card>
            </div>

            <div className="grow">
              <Card>
                <h3 className="text-xl font-semibold">Progress</h3>
              </Card>
            </div>
          </div>
          {/* Table */}
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

        <div className="w-1/4 flex flex-col gap-8">
          <Card>
            <h3 className="text-lg font-semibold">Notifications</h3>
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

          <Card>
            <h3 className="text-lg font-semibold">Suggested Challenges</h3>
            <ul className="mt-4 space-y-2">
              <li>✅ Challenge: Complete 2 goals this week.</li>
              <li>📚 Suggested Goal: Read a productivity book.</li>
              <li>💡 Tip: Schedule tasks every morning.</li>
            </ul>
          </Card>
        </div>
      </div>
    </AuthorizedLayout>
  );
};

export default DashboardPage;
