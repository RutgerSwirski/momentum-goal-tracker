import Card from "@/components/card/Card";
import NextStepLink from "./NextStepLink";
import ActionButton from "@/components/buttons/ActionButton";

const NextStep = ({ nextStep }) => (
  <Card title="Next Actionable Step">
    <div>
      <NextStepLink
        label="Step"
        href={`/steps/${nextStep.step.stepId}`}
        name={nextStep.step.name}
      />
      <NextStepLink
        label="Task"
        href={`/tasks/${nextStep.task.taskId}`}
        name={nextStep.task.name}
      />
    </div>
    <ActionButton
      text="Complete Step"
      onClick={() => console.log("Complete step clicked!")}
    />
  </Card>
);

export default NextStep;
