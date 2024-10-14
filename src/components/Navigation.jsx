import navIcon from '../assets/main.jpg';
import React, {useRef} from 'react';
/**
 * @component
 * @function Navigation
 * @returns {JSX.Element} All the elements of the navigation bar section.
 * @description Contains all the sections of the game users can switch to.
 */
export default function Navigation() {
    /**
     * @type {React.RefObject<null | HTMLDivElement>} Initially is null.
     * @description A useRef() hook reference to a "shop" section.
     * This reference is used to keep track of this section in order to apply dynamic classes with animations to it.
     */
    const shopRef = useRef(null);

    /**
     * @type {React.RefObject<null | HTMLDivElement>} Initially is null.
     * @description A useRef() hook reference to a "friends" section.
     * This reference is used to keep track of this section in order to apply dynamic classes with animations to it.
     */
    const friendsRef = useRef(null);

    /**
     * @type {React.RefObject<null | HTMLDivElement>} Initially is null.
     * @description A useRef() hook reference to a "main" section.
     * This reference is used to keep track of this section in order to apply dynamic classes with animations to it.
     */
    const mainRef = useRef(null);

    /**
     * @type {React.RefObject<null | HTMLDivElement>} Initially is null.
     * @description A useRef() hook reference to an "earn" section.
     * This reference is used to keep track of this section in order to apply dynamic classes with animations to it.
     */
    const earnRef = useRef(null);

    /**
     * @type {React.RefObject<null | HTMLDivElement>} Initially is null.
     * @description A useRef() hook reference to a "rating" section.
     * This reference is used to keep track of this section in order to apply dynamic classes with animations to it.
     */
    const ratingRef = useRef(null);

    /**
     * @type {React.RefObject<null | HTMLDivElement>} Initially is null.
     * @description A useRef() hook reference to the latest clicked navigation bar section.
     * This reference is used to keep track of the latest clicked section in order to apply animations properly.
     */
    const prevRef = useRef(null);

    /**
     * @function handleNavClick
     * @param {Event} event The click event on a navigation bar section triggered by users.
     * @description Handles user clicks on the navigation bar sections to add or remove dynamic animation classes.
     */
    function handleNavClick(event) {
        switch(true) {
            case event.currentTarget === shopRef.current || event.currentTarget === prevRef.current:
                break;
            case prevRef.current === null:
                prevRef.current = event.currentTarget;
                event.currentTarget.classList.add("active-nav");
                break;
            default:
                friendsRef.current.classList.remove("prev-nav");
                mainRef.current.classList.remove("prev-nav");
                earnRef.current.classList.remove("prev-nav");
                ratingRef.current.classList.remove("prev-nav");
                prevRef.current.classList.remove("active-nav");
                prevRef.current.classList.add("prev-nav");
                event.currentTarget.classList.add("active-nav");
                prevRef.current = event.currentTarget;
        }
    }
    return(
        <div className="nav">
            <div className="nav__shop" ref={shopRef}  onClick={handleNavClick}>
                <div className="nav__text nav__text--shop">Shop</div>
                <img src={navIcon} className="nav__img nav__img--shop" />
                <div className="nav__soon">Coming soon</div>
            </div>
            <div className="nav__friends" ref={friendsRef}  onClick={handleNavClick}>
                <div className="nav__text">Friends</div>
                <img src={navIcon} />
            </div>
            <div className="nav__main" ref={mainRef}  onClick={handleNavClick}>
                <div className="nav__text">Main</div>
                <img src={navIcon} className="nav__img nav__img--main" />
            </div>
            <div className="nav__earn" ref={earnRef}  onClick={handleNavClick}>
                <div className="nav__text">Earn</div>
                <img src={navIcon} />
            </div>
            <div className="nav__rating" ref={ratingRef}  onClick={handleNavClick}>
                <div className="nav__text">Rating</div>
                <img src={navIcon} />
            </div>
        </div>
    );
};