"use client";

import PrimaryButton from "@/components/common/buttons/PrimaryButton";
import Modal from "@/components/common/Modal";
import axiosInstance from "@/utils/axiosInstance";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  description: yup.string().required("Description is required"),
  dueDate: yup.date().required("Due Date is required"),
  priority: yup.string().required("Priority is required"),
});

const NewTaskModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { mutate } = useMutation({
    mutationFn: (task: any) => {
      return axiosInstance.post("/tasks", task);
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      description: "",
      dueDate: "",
      priority: "low",
    },
  });

  return (
    <>
      <PrimaryButton onClick={() => setIsOpen(true)}>New Task</PrimaryButton>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="p-4">
          <h2 className="text-lg font-semibold">New Task</h2>
          <form className="flex flex-col space-y-4 mt-4">
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="Task Name"
                  className="input"
                />
              )}
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <textarea
                  {...field}
                  placeholder="Task Description"
                  className="input"
                />
              )}
            />
            {errors.description && (
              <span className="text-red-500 text-sm">
                {errors.description.message}
              </span>
            )}
            <Controller
              name="dueDate"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="date"
                  placeholder="Due Date"
                  className="input"
                />
              )}
            />
            {errors.dueDate && (
              <span className="text-red-500 text-sm">
                {errors.dueDate.message}
              </span>
            )}
            <Controller
              name="priority"
              control={control}
              render={({ field }) => (
                <select {...field} className="input">
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              )}
            />
            {errors.priority && (
              <span className="text-red-500 text-sm">
                {errors.priority.message}
              </span>
            )}
            <PrimaryButton
              onClick={handleSubmit((data) => {
                mutate(data);
                reset();
                setIsOpen(false);
              })}
              type="button"
            >
              Create Task
            </PrimaryButton>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default NewTaskModal;
