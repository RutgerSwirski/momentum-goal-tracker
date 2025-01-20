import PrimaryButton from "@/components/common/buttons/PrimaryButton";
import Modal from "@/components/common/Modal";
import axiosInstance from "@/utils/axiosInstance";
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
        <div className="p-4">
          <h2 className="text-lg font-semibold">Edit Goal</h2>
          <form className="flex flex-col space-y-4 mt-4">
            <input type="text" placeholder="Goal Name" />
            <input type="text" placeholder="Goal Description" />
            <input type="date" placeholder="Due Date" />
            <button type="submit">Edit Goal</button>
          </form>
        </div>
      </Modal>

      <button className="text-blue-500" onClick={() => setIsOpen(true)}>
        Edit Goal
      </button>
    </>
  );
};

export default EditGoalModal;
