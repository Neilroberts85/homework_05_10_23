import React from "react";
import ItemDetail from "./ItemDetail";

const ListItem = ({ song, index }) => {
    return (
        <>
            <ItemDetail song={song} index={index} />
            
            
        </>
    );
}

export default ListItem;