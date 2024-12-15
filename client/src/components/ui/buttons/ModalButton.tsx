import React from "react";
import "./ModalButton.css";

interface ModalButtonProps {
  name: string;
  onClick: () => void;
}

const ModalButton: React.FC<ModalButtonProps> = (props) => {
  return (
    <div>
      <button className="ModalButton" onClick={props.onClick}>
        {props.name}
      </button>
    </div>
  );
};

export default ModalButton;
