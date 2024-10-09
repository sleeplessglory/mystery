import React, {useRef} from 'react';
export default function Invites({handle}) {
    const invitesRef = useRef(null);
    return(
        <button className="grid__info invites" ref={invitesRef} onClick={handle}>Invites</button>
    );
};