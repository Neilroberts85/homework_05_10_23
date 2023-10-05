import React from 'react';
import ListItem from "./ListItem";

const ChartList = ({ songs }) => {
    const songItems = songs.map((song, index) => (
        <ListItem song={song} key={index} index={index +1} />
    ));

    return (
        <>
            <p>Top 20</p>
            <ul>
                {songItems}
            </ul>
        </>
    );
}

export default ChartList;