import React, {useRef} from 'react';
export default function Coins({handle}) {
    const coinsRef = useRef(null);
    return(
        <button className="grid__info coins" ref={coinsRef} onClick={handle}>Coins</button>
    );
};