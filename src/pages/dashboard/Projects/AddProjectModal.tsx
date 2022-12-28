import { Dispatch, useState } from "react";
import IconButton from "../../../atoms/Button/IconButton";
import SquarePlus from "../../../atoms/vectors/SquarePlus";
import Button from "../../../atoms/forms/Button";
import Input from "../../../atoms/forms/Input";
import TextBox from "../../../atoms/forms/TextBox";
import Modal from "../../../molecules/Modal";
import TagInput from "../../../atoms/forms/TagInput";

function AddProjectModal({
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
        <h1 className="heading-1">Create New Project</h1>
        <Input placeholder="Task name" />
        <Input placeholder="Key" />
        <TagInput tags={tags} setTags={setTags} placeholder="Add Tags" />
        <Input type={"date"} placeholder="Due date" />
        <TextBox placeholder="Add more details to this task..." />

        <div className="btn-wrap justify-end">
          <Button type="reset" onClick={() => setOpenModal(false)} outlined>
            Cancel
          </Button>
          <Button>Create Project</Button>
        </div>
      </form>
    </Modal>
  );
}

export default AddProjectModal;
