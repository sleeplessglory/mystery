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
     * @type {React.RefObject<HTMLButtonElement>} Initially is null.
     * @description A useRef() hook reference to a "blocks" button.
     * This reference is used to highlight the button while handling user clicks.
     */
    const blocksRef = useRef(null);

    /**
     * @type {React.RefObject<HTMLButtonElement>} Initially is null.
     * @description A useRef() hook reference to a "coins" button.
     * This reference is used to highlight the button while handling user clicks.
     */
    const coinsRef = useRef(null);

    /**
     * @type {React.RefObject<HTMLButtonElement>} Initially is null.
     * @description A useRef() hook reference to an "invites" button.
     * This reference is used to highlight the button while handling user clicks.
     */
    const invitesRef = useRef(null);

    /**
     * @type {React.RefObject<HTMLButtonElement>} Initially is null.
     * @description A useRef() hook reference to an "hour" button.
     * This reference is used to highlight the button while handling user clicks.
     */
    const hourRef = useRef(null);

    /**
     * @type {React.RefObject<HTMLButtonElement>} Initially is null.
     * @description A useRef() hook reference to a "day" button.
     * This reference is used to highlight the button while handling user clicks.
     */
    const dayRef = useRef(null);

    /**
     * @type {React.RefObject<HTMLButtonElement>} Initially is null.
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
            <div className="head">
                <div className="head__name">Rating</div>
                <button className="head__info">i</button>
            </div>
            <div className="leaders">
                <div className="leaders__first">
                    {/*<img src={getAvatar} />*/}
                    <img src={userAvatar} title="Winner" alt="Winner" />
                    <div className="leaders__place leaders__place--gold">1</div>
                    {/*<div className="name">{userName}</div>*/}
                    <div className="leaders__name leaders__name--gold">Amy Shepard</div>
                    {/*<div className="first-score">{totalScore}</div>*/}
                    <div className="leaders__score leaders__score--first">584</div>
                </div>
                <div className="leaders__second">
                    {/*<img src={getAvatar} />*/}
                    <img src={userAvatar} title="Winner" alt="Winner" />
                    <div className="leaders__place leaders__place--silver">2</div>
                    {/*<div className="name">{userName}</div>*/}
                    <div className="leaders__name leaders__name--silver">M4XXX_P4YN3</div>
                    {/*<div className="first-score">{totalScore}</div>*/}
                    <div className="leaders__score leaders__score--second">560</div>
                </div>
                <div className="leaders__third">
                    {/*<img src={getAvatar} />*/}
                    <img src={userAvatar} title="Winner" alt="Winner" />
                    <div className="leaders__place leaders__place--bronze">3</div>
                    {/*<div className="name">{userName}</div>*/}
                    <div className="leaders__name leaders__name--bronze">KevinBacon416</div>
                    {/*<div className="first-score">{totalScore}</div>*/}
                    <div className="leaders__score leaders__score--third">515</div>
                </div>
            </div>
            <div className="sort-info">
                <button className="sort-info__blocks"  ref={blocksRef}  onClick={handleInfoClick}>Blocks</button>
                <button className="sort-info__coins"   ref={coinsRef}   onClick={handleInfoClick}>Coins</button>
                <button className="sort-info__invites" ref={invitesRef} onClick={handleInfoClick}>Invites</button>
            </div>
            <div className="sort-time">
                <button className="sort-time__hour" ref={hourRef}  onClick={handleTimeClick}>Hour</button>
                <button className="sort-time__day"  ref={dayRef}   onClick={handleTimeClick}>Day</button>
                <button className="sort-time__week" ref={weekRef}  onClick={handleTimeClick}>Week</button>
            </div>
            <div className="results"></div>
            <div className="user-result">
                {/*<div className="grid__user-result place">{userPlace}</div>*/}
                <div className="user-result__place">100+</div>
                <div className="user-result__avatar">
                    {/*<img src={getAvatar} />*/}
                    <img src={userAvatar} title="User avatar" alt="User avatar"/>
                </div>
                <div className="user-result__name">You</div>
                {/**<div className="grid__user-result total">{totalScore}</div>*/}
                <div className="user-result__total">58</div>
            </div>
        </div>
    );
};