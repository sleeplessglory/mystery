import React, {useRef} from 'react';
export default function Blocks() {
    const blocksRef = useRef(null);
    function handleBlocks() {
        
    }
    return(
        <button className="grid__info blocks active" ref={blocksRef} onClick={handleBlocks()}>Blocks</button>
    );
};