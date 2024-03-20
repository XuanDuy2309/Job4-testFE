import React from 'react';
import classNames from "classnames/bind";
import Styles from './Modal.model.scss'

const cx = classNames.bind(Styles);

function Modal({ isModalOpen, onClick,onClose }) {
    if (isModalOpen !== true) {
        return null;
    }
    return (
        <section className="modal">
            <article className="modal-content">
                <main className="modal-mainContents">
                    <span className="modalText">Delete this Object</span>
                    <div className="modal-button">
                        <button onClick={onClose} type={"button"}>Close</button>
                        <button onClick={onClick} type={"button"}>Delete</button>
                    </div>
                </main>
            </article>
        </section>
    );
}

export default Modal;