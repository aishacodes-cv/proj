import {
  MouseEvent,
  MutableRefObject,
  ReactNode,
  useEffect,
  useRef,
} from "react";
import CloseIcon from "../../atoms/vectors/CloseIcon";
// import { useClickAway } from "react-use";
import "./style.scss";

type ModalProps = {
  openModal: boolean;
  children: ReactNode;
  maxWidth?: string | number;
  closeModal: Function;
};

function Modal({openModal, children, closeModal, maxWidth = 656}: ModalProps) {
  const ref = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (openModal && ref.current && !ref.current.contains(e.target)) {
        closeModal();
      }
    };
    document.body.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.body.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [openModal]);

  return (
    <>
      {openModal && <div className="modal-overlay"></div>}
      <div
        style={{maxWidth: maxWidth}}
        ref={ref}
        className={openModal ? "open-modal modal-box" : "modal-box"}
      >
        <button className="close-btn" onClick={() => closeModal()}>
          <CloseIcon />
        </button>
        {children}
      </div>
    </>
  );
}

export default Modal;
