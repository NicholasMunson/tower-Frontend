import React from "react";
import "../styles/modal.css";

const DeleteConfirmationModal = ({
  show,
  onHide,
  onConfirm,
  beverageName,
  beverageType,
}) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onHide}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <button className="modal-close-button" onClick={onHide}>
            ×
          </button>
        </div>
        <div className="modal-body">
          <div className="delete-confirmation-content">
            <h3 className="delete-title">Confirm Delete</h3>
            <p className="delete-message">
              Are you sure you want to delete this {beverageType}?
            </p>
            <p className="beverage-name">"{beverageName}"</p>
            <p className="delete-warning">This action cannot be undone.</p>
            <div className="delete-buttons">
              <button className="btn btn-secondary" onClick={onHide}>
                Cancel
              </button>
              <button className="btn btn-danger" onClick={onConfirm}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
