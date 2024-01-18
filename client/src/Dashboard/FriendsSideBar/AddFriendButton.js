import React, { useState } from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import AddFreindDialogue from "./AddFreindDialogue";

const additionalStyles = {
  marginTop: "10px",
  marginLeft: "5px",
  width: "80%",
  height: "30px",
  background: "#3ba55d",
};

const AddFriendButton = () => {

    const [isDialogueOpen,setIsDialogueOpen] = useState(false)

  const handleOpenAddFriendDialogue = () => {
    setIsDialogueOpen(true)
  };

  const handleCloseAddFriendDialogue = () => {
    setIsDialogueOpen(false)
  }

  return (
    <>
      <CustomPrimaryButton
        additionalStyles={additionalStyles}
        label="Add Friend"
        onClick={handleOpenAddFriendDialogue}
      />
      <AddFreindDialogue 
        isDialogueOpen={isDialogueOpen}
        closeDialogueHandler={handleOpenAddFriendDialogue}
      />
    </>
  );
};

export default AddFriendButton;
