import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    message: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, message }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-calm-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                <h2 className="text-xl font-bold mb-4">{title}</h2>
                <p>{message}</p>
                <button
                    onClick={onClose}
                    className="mt-4 bg-calm-brown text-white px-4 py-2 rounded hover:bg-black"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
