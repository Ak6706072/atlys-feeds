import React, { useRef } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  className,
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const getModal = () => {
    return (
      <div
        className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center"
        onClick={(e) => {
          if (
            modalRef.current &&
            !modalRef.current.contains(e.target as Node)
          ) {
            onClose(); // Clicked outside the modal
          }
        }}
      >
        <div
          ref={modalRef}
          className={`${className} bg-white rounded-md shadow-lg relative`}
        >
          {title && (
            <div className="flex justify-between items-center m-[12px] pb-[4px] border-b">
              <div className="text-[16px] font-semibold opacity-80">
                {title}
              </div>
              <div>
                <button
                  onClick={onClose}
                  className="font-bold text-gray-700 hover:text-black"
                >
                  ✕
                </button>
              </div>
            </div>
          )}
          <div className="h-full w-full">{children}</div>
        </div>
      </div>
    );
  };

  return createPortal(getModal(), document.body);
};

export default React.memo(Modal);
