import React, { useState } from "react";
import style from "./Cookie.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Cookie = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleAccept = () => {
        setIsVisible(false);
    };
    const handleDecline = () => {
        setIsVisible(false);
    };
    const handleClose = () => {
        setIsVisible(false);
    };


    return (
        isVisible && (
        <div className={style.cookieNotice}>
            <FontAwesomeIcon
                className={style.x_mark}
                icon={faXmark}
                onClick={handleClose}
            />
            <p>
                This website uses cookies to ensure you get the best experience on our
                website. They also allow us to analyze user behavior in order to
                constantly improve the website for you.
            </p>
            <div className={style.cookieButtons}>
                <button className={`${style.cookieBtn} ${style.cookieAcceptBtn}`} onClick={handleAccept}>Accept</button>
                <button className={`${style.cookieBtn} ${style.cookieDeclineBtn}`} onClick={handleDecline}>Decline</button>
            </div>
        </div>
        )
    );
    };

export default Cookie;