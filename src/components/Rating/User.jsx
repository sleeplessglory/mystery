import userAvatar from '../../assets/bird.jpg';
/**
 * @component
 * @function User
 * @returns {JSX.Element} All the elements of the "User" grid section of "Rating".
 * @description Contains all the elements of the "User" layout.
 */
export default function User() {
    return(
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
    );
};