import React, { useState, useEffect } from 'react';
import ChartList from '../components/ChartList';

const ChartsContainer = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        getSongs();
    }, [])

    const getSongs = function () {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
            .then(res => res.json())
            .then(data => setSongs(data.feed.entry))
            .catch(error => console.error('Error fetching data:', error));
    }

    return (
        <>
            <h2>Charts Container</h2>
            <ChartList songs={songs} />
        </>
    )
}

export default ChartsContainer;
