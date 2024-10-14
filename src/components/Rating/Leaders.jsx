import userAvatar from '../../assets/bird.jpg';
/**
 * @component
 * @function Leaders
 * @returns {JSX.Element} All the elements of the "Leaders" grid section of "Rating".
 * @description Contains all the elements of the "Leaders" layout.
 */
export default function Leaders() {
    return(
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
    );
};