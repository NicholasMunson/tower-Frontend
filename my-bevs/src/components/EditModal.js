import React, { useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import EditBeverage from "./EditBeverage";
import "../styles/modal.css";

const EditModal = ({
  show,
  onHide,
  type,
  currentBeverage,
  handleChange,
  handleUpdate,
  handleDisplayChangeBack,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdate(event, currentBeverage.id);
    onHide(); // Close modal after successful update
  };

  const handleBack = () => {
    onHide(); // Close modal
  };

  // Handle body overflow when modal opens/closes
  useEffect(() => {
    if (show) {
      // Store the current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }

    // Cleanup on unmount
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
    };
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onHide}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">Edit your {type === "beer" ? "Beer" : "Wine"}</h4>
          <button className="modal-close-button" onClick={onHide}>
            ×
          </button>
        </div>
        <div className="modal-body">
          <EditBeverage
            type={type}
            currentBeverage={currentBeverage}
            handleChange={handleChange}
            handleUpdate={handleSubmit}
            handleDisplayChangeBack={handleBack}
          />
        </div>
      </div>
    </div>
  );
};

export default EditModal;
