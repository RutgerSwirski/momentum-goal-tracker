import Modal from "@/components/modal/Modal";
import { Button, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";

const NewStepModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <Button onClick={openModal}>+ New Step</Button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <DialogPanel>
          <DialogTitle>New Step</DialogTitle>
          <form
            className="flex flex-col space-y-4 mt-4"
            onSubmit={(e) => {
              e.preventDefault();
              closeModal();
            }}
          >
            <input type="text" placeholder="Step Name" />
            <input type="text" placeholder="Step Description" />
            <input type="date" placeholder="Due Date" />
            <button type="submit">Create Step</button>
          </form>
        </DialogPanel>
      </Modal>
    </div>
  );
};

export default NewStepModal;
