import { Dispatch, useState } from "react";
import IconButton from "../../../atoms/Button/IconButton";
import Button from "../../../atoms/forms/Button";
import Input from "../../../atoms/forms/Input";
import TagInput from "../../../atoms/forms/TagInput";
import TextBox from "../../../atoms/forms/TextBox";
import SquarePlus from "../../../atoms/vectors/SquarePlus";
import Modal from "../../../molecules/Modal";

function AddTaskModal({
  openModal,
  setOpenModal,
}: {
  openModal: boolean;
  setOpenModal: Dispatch<React.SetStateAction<boolean>>;
}) {
  const [tags, setTags] = useState<string[]>([]);

  return (
    <Modal closeModal={() => setOpenModal(false)} openModal={openModal}>
      <form className="form-modal">
        <h1 className="heading-1">Add New Task</h1>
        <Input placeholder="Task name" />
        <TagInput tags={tags} setTags={setTags} placeholder="Add Tags" />

        <Input type={"date"} placeholder="Due date" />
        <TextBox placeholder="Add more details to this task..." />

        <div className="btn-wrap justify-end">
          <Button type="reset" onClick={() => setOpenModal(false)} outlined>
            Cancel
          </Button>
          <Button>Add Task</Button>
        </div>
      </form>
    </Modal>
  );
}

export default AddTaskModal;
