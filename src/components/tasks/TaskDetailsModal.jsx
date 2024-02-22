import React from "react";
import Modal from "../ui/Modal";
import { useSelector } from "react-redux";

const TaskDetailsModal = ({ isOpen, setIsOpen,id }) => {
  const {tasks}=useSelector(state=>state.tasksSlice);
  const task=tasks.find(item=>item.id==id);
  const onCancel = () => {
    setIsOpen(false);
  };
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={"Task Details"}>
      <div className="my-4">
        <p>{task?.title}</p>
        <p>{task?.description}</p>
        <p>{task?.priority}</p>
        <p>{task?.date}</p>
      </div>
      <button
        onClick={() => onCancel()}
        type="button"
        className="btn btn-danger "
      >
        Cancel
      </button>
    </Modal>
  );
};

export default TaskDetailsModal;
