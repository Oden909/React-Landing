import style from './Modal.module.css';
import { FormElem } from '../FormElem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

export function Modal(props) {
    const { setActive, active } = props;

    const infoText = `By submitting this form you are agreeing to Budss’s
        <a href='/PrivacyPolicy' class="${style.underlined}">Privacy Policy</a> 
        and <a href='/TermsofUse' class="${style.underlined}">Terms of Use</a>`;

    useEffect(() => {
        function escapeModal(event) {
            if (event.key === "Escape" && active) {
                setActive(false);
            }
        }

        window.addEventListener("keydown", escapeModal);

        return () => {
            window.removeEventListener("keydown", escapeModal);
        };
    }, [active, setActive]);

    return (
        <div className={`${style.modal} ${active && style.active}`}>
            <div className={`${style.modal_content} ${active && style.active}`}>
                <FontAwesomeIcon
                    className={style.x_mark}
                    onClick={() => setActive(false)}
                    icon={faXmark}
                />
                <FormElem
                    button={{ submit: "Contact sales" }}
                    infoText={infoText}
                    active={active}
                    onClose={() => setActive(false)}
                />
            </div>
        </div>
    );
}

export default Modal;
