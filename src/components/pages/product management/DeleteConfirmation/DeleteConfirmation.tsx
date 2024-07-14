/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";

type TDmodal = {
  isOpen: ReactNode | any;
  onClose: ReactNode | any;
  onConfirm: ReactNode | any;
};

const DeleteConfirmation = ({ isOpen, onClose, onConfirm }: TDmodal) => {
  return (
    <div className={`modal ${isOpen ? "modal-open" : "modal-closed"}`}>
      <div className="modal-box">
        <p className="text-lg font-semibold mb-4">
          Are you sure you want to delete this product?
        </p>
        <div className="flex justify-end">
          <button onClick={onClose} className="btn btn-secondary mr-2">
            Cancel
          </button>
          <button onClick={onConfirm} className="btn btn-danger">
            Confirm Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
