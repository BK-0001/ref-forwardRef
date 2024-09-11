import { ReactNode, useRef } from "react";
import { createPortal } from "react-dom";

type Props = {
  title: ReactNode;
  children: ReactNode;
  onClose?: () => void;
};
export function Modal({ title, children, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleModalOpen = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const handleModalClose = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
    onClose?.();
  };

  return (
    <>
      <button onClick={handleModalOpen}>Open</button>

      {createPortal(
        <dialog ref={dialogRef}>
          <h1>{title}</h1>
          <div>{children}</div>

          <button onClick={handleModalClose}>x</button>
        </dialog>,
        document.getElementById("modal") as HTMLDivElement
      )}
    </>
  );
}
