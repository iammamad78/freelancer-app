import React from "react";
import { HiOutlineX } from "react-icons/hi";

function Modal({ open, onClose, title, children }) {
  return (
    open && (
      <div className="backdrop-blur-sm fixed top-0 left-0 w-full h-screen bg-secondary-800 bg-opacity-30 z-50">
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary-0 rounded-lg shadow-lg p-4 transition-all duration-500 ease-out w-64">
          <div className="flex items-center justify-between border-b border-b-secondary-300 pb-2 mb-6">
            <p className="text-primary-700 font-bold text-base">{title}</p>
            <button onClick={onClose}>
              <HiOutlineX className="w-5 h-5 text-secondary-500 hover:text-error" />
            </button>
          </div>
          {children}
        </div>
      </div>
    )
  );
}

export default Modal;
