import axiosInstance from "@/utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const DashboardHeader = () => {
  const level = 80;
  const xp = 50;
  const xpToNextLevel = 100;
  const xpProgress = Math.round((xp / xpToNextLevel) * 100);

  const { data: currentUser } = useQuery({
    // et current user data
    queryKey: ["user"],
    queryFn: async () => {
      return axiosInstance.get("/users/me");
    },
  });

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-4xl font-semibold text-neutral_charcoal">
          Welcome Back, {currentUser?.data?.firstName}!
        </h1>
        <h2 className="text-lg font-normal text-neutral_dark_grey">
          Let’s see what’s on your plate today and how we can achieve your
          goals.
        </h2>
      </div>

      <div className="flex items-center gap-4">
        {/* Level Display */}
        <div className="flex flex-col items-center justify-center w-20 h-20 rounded-full bg-teal-100 text-teal-700 font-bold">
          <span className="text-2xl">{level}</span>
          <span className="text-sm">Level</span>
        </div>

        {/* XP Progress Section */}
        <div className="flex-1">
          <p className="text-sm text-gray-600 mb-2">
            You're crushing it! Complete{" "}
            <span className="font-bold">{xpToNextLevel - xp} more XP</span> to
            reach Level {level + 1}.
          </p>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-teal-500 h-4 rounded-full"
              style={{ width: `${xpProgress}%` }}
            ></div>
          </div>
        </div>
      </div>
      {/* <ul className="flex items-center justify-between gap-8">
        <li>Calendar</li>
        <li>Messages</li>
        <li>Notifications</li>

        <li>Profile</li>
      </ul> */}
    </div>
  );
};

export default DashboardHeader;
