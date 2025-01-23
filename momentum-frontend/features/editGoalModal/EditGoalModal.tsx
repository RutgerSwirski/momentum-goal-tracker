import PrimaryButton from "@/components/common/buttons/PrimaryButton";
import Description from "@/components/common/Description";
import Input from "@/components/common/Input";
import Modal from "@/components/common/Modal";
import Textarea from "@/components/common/Textarea";
import axiosInstance from "@/utils/axiosInstance";
import { DialogTitle, Fieldset } from "@headlessui/react";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

const EditGoalModal = ({ goal }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { mutate } = useMutation({
    mutationFn: (goal: any) => {
      return axiosInstance.post("/goals", goal);
    },
  });

  return (
    <>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <DialogTitle className="text-lg font-bold text-gray-900">
          Edit Goal
        </DialogTitle>
        <Description>Update the details of your goal</Description>

        <Fieldset>
          <Input
            label="Goal Name"
            placeholder="Enter the name of your goal"
            value={goal.name}
            onChange={(e) => {
              goal.name = e.target.value;
            }}
          />
          <Textarea
            label="Goal Description"
            placeholder="Enter the description of your goal"
            value={goal.description}
            onChange={(e) => {
              goal.description = e.target.value;
            }}
          />
          <PrimaryButton
            onClick={() => {
              mutate(goal);
              setIsOpen(false);
            }}
          >
            Save
          </PrimaryButton>
        </Fieldset>
      </Modal>

      <button className="text-blue-500" onClick={() => setIsOpen(true)}>
        Edit Goal
      </button>
    </>
  );
};

export default EditGoalModal;
