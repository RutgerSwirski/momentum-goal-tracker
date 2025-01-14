import Card from "@/components/card/Card";
import PillLabelValue from "@/components/labelValue/PillLabelValue";
import BadgeLabelValue from "@/components/labelValue/BadgeLabelValue";
import AlertLabelValue from "@/components/labelValue/AlertLabelValue";
import LabelValue from "@/components/labelValue/LabelValue";

const GoalMetadata = ({ goal, goalIsLoading }) => {
  const daysLeft = Math.max(
    0,
    Math.floor(
      (new Date(goal.dueDate).getTime() - new Date().getTime()) /
        (1000 * 60 * 60 * 24)
    )
  );

  if (goalIsLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Card title="Goal Metadata">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <PillLabelValue label="Priority" value={goal.priority} />
        <BadgeLabelValue label="Status" value={goal.status} />
        <LabelValue label="Category" value={goal.category} />
        <LabelValue
          label="Created At"
          value={new Date(goal.created_at).toDateString()}
        />
        <LabelValue
          label="Due Date"
          value={new Date(goal.dueDate).toDateString()}
        />
        {daysLeft <= 3 ? (
          <AlertLabelValue label="Days Left" value={`${daysLeft} days`} />
        ) : (
          <LabelValue label="Days Left" value={`${daysLeft} days`} />
        )}
      </div>
    </Card>
  );
};

export default GoalMetadata;
