import React, {useRef} from 'react';
/**
 * @component
 * @function Sort
 * @returns {JSX.Element} All the elements of the "Sort" grid section of "Rating".
 * @description Contains all the elements of the "Sort" layout.
 */
export default function Sort() {
    /**
     * @type {React.RefObject<null | HTMLButtonElement>} Initially is null.
     * @description A useRef() hook reference to a "blocks" button.
     * This reference is used to highlight the button while handling user clicks.
     */
    const blocksRef = useRef(null);

    /**
     * @type {React.RefObject<null | HTMLButtonElement>} Initially is null.
     * @description A useRef() hook reference to a "coins" button.
     * This reference is used to highlight the button while handling user clicks.
     */
    const coinsRef = useRef(null);

    /**
     * @type {React.RefObject<null | HTMLButtonElement>} Initially is null.
     * @description A useRef() hook reference to an "invites" button.
     * This reference is used to highlight the button while handling user clicks.
     */
    const invitesRef = useRef(null);

    /**
     * @type {React.RefObject<null | HTMLButtonElement>} Initially is null.
     * @description A useRef() hook reference to an "hour" button.
     * This reference is used to highlight the button while handling user clicks.
     */
    const hourRef = useRef(null);

    /**
     * @type {React.RefObject<null | HTMLButtonElement>} Initially is null.
     * @description A useRef() hook reference to a "day" button.
     * This reference is used to highlight the button while handling user clicks.
     */
    const dayRef = useRef(null);

    /**
     * @type {React.RefObject<null | HTMLButtonElement>} Initially is null.
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
                blocksRef.current.classList.add("active-sort");
                coinsRef.current.classList.remove("active-sort");
                invitesRef.current.classList.remove("active-sort");
                break;
            case event.target === coinsRef.current:
                coinsRef.current.classList.add("active-sort");
                blocksRef.current.classList.remove("active-sort");
                invitesRef.current.classList.remove("active-sort");
                break;
            case event.target === invitesRef.current:
                invitesRef.current.classList.add("active-sort");
                blocksRef.current.classList.remove("active-sort");
                coinsRef.current.classList.remove("active-sort");
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
                hourRef.current.classList.add("active-sort");
                dayRef.current.classList.remove("active-sort");
                weekRef.current.classList.remove("active-sort");
                break;
            case event.target === dayRef.current:
                dayRef.current.classList.add("active-sort");
                hourRef.current.classList.remove("active-sort");
                weekRef.current.classList.remove("active-sort");
                break;
            case event.target === weekRef.current:
                weekRef.current.classList.add("active-sort");
                dayRef.current.classList.remove("active-sort");
                hourRef.current.classList.remove("active-sort");
                break;
        }
    }
    return(
        <>
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
        </>
    );
};