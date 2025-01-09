"use client";

import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Description,
} from "@headlessui/react";
import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean; // Controls the modal visibility
  onClose: () => void; // Function to close the modal
  title?: string; // Modal title
  description?: string; // Modal description
  children: ReactNode; // Content inside the modal
}

const Modal = ({
  isOpen,
  onClose,
  title,
  description,
  children,
}: ModalProps) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      transition
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30"
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Modal Content */}

      <div
        className="relative max-w-lg w-full "
        onClick={(e) => e.stopPropagation()}
      >
        <DialogPanel className="relative max-w-lg w-full rounded-lg bg-white p-6 shadow-lg">
          {/* Title */}
          {title && (
            <DialogTitle className="text-lg font-bold text-gray-900">
              {title}
            </DialogTitle>
          )}

          {/* Description */}
          {description && (
            <Description className="mt-2 text-sm text-gray-600">
              {description}
            </Description>
          )}

          {/* Modal Body */}
          <div>{children}</div>

          {/* Close Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();

              onClose();
            }}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default Modal;
