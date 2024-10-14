/**
 * @component
 * @function Head
 * @returns {JSX.Element} All the elements of the "Head" grid section of "Rating".
 * @description Contains all the elements of the "Head" layout.
 */
export default function Head() {
    return(
        <div className="head">
            <div className="head__name">Rating</div>
            <button className="head__info">i</button>
        </div>
    );
};