import React from "react";

const ItemDetail = ({ song, index }) => {
    return (
        <>
            <h1 className="song-number">{index}
            <img src={song["im:image"][0].label} alt="sutin"/>
            </h1>
            <li>{song['im:name'].label}</li>
            <p>{song['im:artist'].label}</p>
            
            
        </>
    );
}

export default ItemDetail;