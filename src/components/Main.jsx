import React, {useRef} from 'react';
import Blocks from './Blocks.jsx';
import Coins from './Coins.jsx';
import Invites from './Invites.jsx';
export default function Main() {
    const hourRef = useRef(null);
    const dayRef = useRef(null);
    const weekRef = useRef(null);

    function handleInfoClick(event) {
        if(blocksRef.current.classList.contains("active")) {
            blocksRef.current.classList.remove("active");
        }
        else if(coinsRef.current.classList.contains("active")) {
            coinsRef.current.classList.remove("active");
        }
        else if(invitesRef.current.classList.contains("active")) {
            invitesRef.current.classList.remove("active");
        }
        event.target.current.classList.add("active");
    }
    function handleTimeClick(event) {
        if(hourRef.current.classList.contains("active")) {
            hourRef.current.classList.remove("active");
        }
        else if(dayRef.current.classList.contains("active")) {
            dayRef.current.classList.remove("active");
        }
        else if(weekRef.current.classList.contains("active")) {
            weekRef.current.classList.remove("active");
        }
        event.target.current.classList.add("active");
    }
    return(
        <div className="grid">
            <div className="grid__name">Rating</div>
            <div className="grid__leaders">

            </div>
            <div className="grid__info">
                <Blocks />
                <Coins />
                <Invites />
            </div>
            <div className="grid__time">
                <button className="grid__time hour active" ref={hourRef}  onClick={handleTimeClick}>Hour</button>
                <button className="grid__time day"         ref={dayRef}   onClick={handleTimeClick}>Day</button>
                <button className="grid__time week"        ref={weekRef}  onClick={handleTimeClick}>Week</button>
            </div>
            <div className="grid__results">

            </div>
            <div className="grid__user-result">

            </div>
        </div>
    );
};