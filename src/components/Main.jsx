import React, {useRef} from 'react';
import userAvatar from '../assets/bird.jpg';
/**
 * @component
 * @function Main
 * @returns {JSX.Element} All the elements of the main game layout accordingly.
 * @description Contains the main game layout for navigation bar sections.
 */
export default function Main() {
    /**
     * @type {React.RefObject<HTMLButtonElementl>} Initially is null.
     * @description A useRef() hook reference to a "blocks" button.
     * This reference is used to highlight the button while handling user clicks.
     */
    const blocksRef = useRef(null);

    /**
     * @type {React.RefObject<HTMLButtonElementl>} Initially is null.
     * @description A useRef() hook reference to a "coins" button.
     * This reference is used to highlight the button while handling user clicks.
     */
    const coinsRef = useRef(null);

    /**
     * @type {React.RefObject<HTMLButtonElementl>} Initially is null.
     * @description A useRef() hook reference to an "invites" button.
     * This reference is used to highlight the button while handling user clicks.
     */
    const invitesRef = useRef(null);

    /**
     * @type {React.RefObject<HTMLButtonElementl>} Initially is null.
     * @description A useRef() hook reference to an "hour" button.
     * This reference is used to highlight the button while handling user clicks.
     */
    const hourRef = useRef(null);

    /**
     * @type {React.RefObject<HTMLButtonElementl>} Initially is null.
     * @description A useRef() hook reference to a "day" button.
     * This reference is used to highlight the button while handling user clicks.
     */
    const dayRef = useRef(null);

    /**
     * @type {React.RefObject<HTMLButtonElementl>} Initially is null.
     * @description A useRef() hook reference to a "week" button.
     * This reference is used to highlight the button while handling user clicks.
     */
    const weekRef = useRef(null);

    /**
     * @function handleInfoClick
     * @param {Event} event The click event triggered by users.
     * @description Handles user clicks on the buttons of the first sorting bar. Highlights the clicked button.
     */
    function handleInfoClick(event) {
        switch(true) {
            case event.target === blocksRef.current:
                blocksRef.current.classList.add("active");
                coinsRef.current.classList.remove("active");
                invitesRef.current.classList.remove("active");
                break;
            case event.target === coinsRef.current:
                coinsRef.current.classList.add("active");
                blocksRef.current.classList.remove("active");
                invitesRef.current.classList.remove("active");
                break;
            case event.target === invitesRef.current:
                invitesRef.current.classList.add("active");
                blocksRef.current.classList.remove("active");
                coinsRef.current.classList.remove("active");
                break;
        }
    }

    /**
     * @function handleTimeClick
     * @param {Event} event The click event triggered by users.
     * @description Handles user clicks on the buttons of the second sorting bar. Highlights the clicked button.
     */
    function handleTimeClick(event) {
        switch(true) {
            case event.target === hourRef.current:
                hourRef.current.classList.add("active");
                dayRef.current.classList.remove("active");
                weekRef.current.classList.remove("active");
                break;
            case event.target === dayRef.current:
                dayRef.current.classList.add("active");
                hourRef.current.classList.remove("active");
                weekRef.current.classList.remove("active");
                break;
            case event.target === weekRef.current:
                weekRef.current.classList.add("active");
                dayRef.current.classList.remove("active");
                hourRef.current.classList.remove("active");
                break;
        }
    }
    return(
        <div className="grid">
            <div className="grid__head">
                <div className="grid__head name">Rating</div>
                <button className="grid__head info">i</button>
            </div>
            <div className="grid__leaders">

            </div>
            <div className="grid__info">
                <button className="grid__info blocks"  ref={blocksRef}  onClick={handleInfoClick}>Blocks</button>
                <button className="grid__info coins"   ref={coinsRef}   onClick={handleInfoClick}>Coins</button>
                <button className="grid__info invites" ref={invitesRef} onClick={handleInfoClick}>Invites</button>
            </div>
            <div className="grid__time">
                <button className="grid__time hour" ref={hourRef}  onClick={handleTimeClick}>Hour</button>
                <button className="grid__time day"  ref={dayRef}   onClick={handleTimeClick}>Day</button>
                <button className="grid__time week" ref={weekRef}  onClick={handleTimeClick}>Week</button>
            </div>
            <div className="grid__results"></div>
            <div className="grid__user-result">
                {/**<div className="grid__user-result place">{userPlace}</div>*/}
                <div className="grid__user-result place">100+</div>
                <div className="grid__user-result avatar">
                    <img src={userAvatar} title="User avatar" alt="User avatar"/>
                </div>
                <div className="grid__user-result name">You</div>
                {/**<div className="grid__user-result total">{totalScore}</div>*/}
                <div className="grid__user-result total">58</div>
            </div>
        </div>
    );
};