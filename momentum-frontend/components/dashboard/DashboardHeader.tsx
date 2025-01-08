const DashboardHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-4xl font-semibold text-neutral_charcoal">
          Welcome Back, Rutger!
        </h1>
        <h2 className="text-lg font-normal text-neutral_dark_grey">
          Let’s see what’s on your plate today and how we can achieve your
          goals.
        </h2>
      </div>
      <ul className="flex items-center justify-between gap-8">
        <li>Calendar</li>
        <li>Messages</li>
        <li>Notifications</li>

        <li>Profile</li>
      </ul>
    </div>
  );
};

export default DashboardHeader;
