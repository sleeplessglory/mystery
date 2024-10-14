import React, {useRef, useEffect} from 'react';
import userAvatar from '../../assets/bird.jpg';
/**
 * @component
 * @function Results
 * @returns {JSX.Element} All the elements of the "Results" grid section of "Rating".
 * @description Contains all the elements of the "Results" layout.
 */
export default function Results() {
    /**
     * @type {React.RefObject<null | HTMLDivElement>} Initially is null.
     * @description A useRef() hook reference to the results section in "Rating".
     * This reference is used to handle results opacity as users scroll down or up.
     */
    const resultsRef = useRef(null);

    /**
     * @function handleOpacity
     * @description Handles dynamic opacity changes of results while users scroll them. Used in an event listener.
     */
    function handleOpacity() { 
        const resultsChildren = resultsRef.current.children;
        const scrollTop = resultsRef.current.scrollTop;
        const resultsHeight = resultsRef.current.clientHeight;
        for(let child of resultsChildren) {
            const childTop = child.offsetTop - resultsRef.current.offsetTop;
            const childBottom = childTop + child.offsetHeight;
            if(childTop < scrollTop + resultsHeight && childBottom > scrollTop) {
                const position = (childTop - scrollTop)/resultsHeight;
                const opacity = 1 - position;
                child.style.backgroundColor = `rgba(49, 41, 78, ${Math.max(opacity, 0.1)})`;
            }
        }
    }

    /**
     * @description a React hook that creates an event listener for scrolling results and invokes the
     * handleOpactity() function (runs only on mount). Removes this event listener in a clean-up function.
     */
    useEffect(() => {
        resultsRef.current.addEventListener('scroll', handleOpacity);
        handleOpacity();
        return () => {
            resultsRef.current.removeEventListener('scroll', handleOpacity);
        };
    }, []);
    return(
        <div className="results" ref={resultsRef}>
            <div className="results__4th">
                <div className="results__place">4</div>
                <div className="results__avatar">
                    <img src={userAvatar} title="4th user avatar" alt="4th user avatar"/>
                </div>
                <div className="results__name">DoubleWide</div>
                <div className="results__total">530</div>
            </div>
            <div className="results__5th">
                <div className="results__place">5</div>
                <div className="results__avatar">
                    <img src={userAvatar} title="5th user avatar" alt="5th user avatar"/>
                </div>
                <div className="results__name">pJohnson_1992</div>
                <div className="results__total">420</div>
            </div>
            <div className="results__6th">
            <div className="results__place">6</div>
                <div className="results__avatar">
                    <img src={userAvatar} title="6th user avatar" alt="6th user avatar"/>
                </div>
                <div className="results__name">x_Ghost_x</div>
                <div className="results__total">415</div>
            </div>
            <div className="results__7th">
            <div className="results__place">7</div>
                <div className="results__avatar">
                    <img src={userAvatar} title="7th user avatar" alt="7th user avatar"/>
                </div>
                <div className="results__name">DoubleWide</div>
                <div className="results__total">320</div>
            </div>
            <div className="results__8th">
            <div className="results__place">8</div>
                <div className="results__avatar">
                    <img src={userAvatar} title="8th user avatar" alt="8th user avatar"/>
                </div>
                <div className="results__name">88__88</div>
                <div className="results__total">200</div>
            </div>
        </div>
    );
};