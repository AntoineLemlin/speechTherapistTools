import { FormEventHandler, ReactNode, useRef } from "react";
import { Cog6ToothIcon } from "@heroicons/react/20/solid";

const Modal = ({
  onSave,
  children,
}: {
  onSave: FormEventHandler<HTMLFormElement>;
  children: ReactNode;
}) => {
  const openModalRef = useRef<HTMLDialogElement>(null);
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button className="btn" onClick={() => openModalRef.current?.showModal()}>
        <Cog6ToothIcon className="w-6 h-6" />{" "}
      </button>
      <dialog ref={openModalRef} id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog" onSubmit={onSave}>
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            {children}
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
