import axiosInstance from "@/utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const DashboardHeader = () => {
  const level = 80;
  const xp = 50;
  const xpToNextLevel = 100;
  const xpProgress = Math.round((xp / xpToNextLevel) * 100);

  const { data: currentUser } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      return axiosInstance.get("/users/me");
    },
  });

  return (
    <div className="flex flex-wrap items-start justify-between gap-6">
      {/* Welcome Section */}
      <div className="flex flex-col items-start gap-2 w-full lg:w-auto">
        <h1 className="text-2xl md:text-4xl font-semibold text-neutral_charcoal">
          Welcome Back, {currentUser?.data?.firstName}!
        </h1>
        <h2 className="text-sm md:text-lg font-normal text-neutral_dark_grey">
          Let’s see what’s on your plate today and how we can achieve your
          goals.
        </h2>
      </div>

      {/* Level and XP Section */}
      <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
        {/* Level Display */}
        <div className="flex flex-col items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-teal-100 text-teal-700 font-bold">
          <span className="text-xl md:text-2xl">{level}</span>
          <span className="text-xs md:text-sm">Level</span>
        </div>

        {/* XP Progress Section */}
        <div className="flex-1">
          <p className="text-xs md:text-sm text-gray-600 mb-2">
            You're crushing it! Complete{" "}
            <span className="font-bold">{xpToNextLevel - xp} more XP</span> to
            reach Level {level + 1}.
          </p>
          <div className="w-full bg-gray-200 rounded-full h-3 md:h-4">
            <div
              className="bg-teal-500 h-3 md:h-4 rounded-full"
              style={{ width: `${xpProgress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
