import React from 'react';

class Playlist extends React.Component {
    render() {
        return (
            <div className="Playlist">
                <input defaultValue={'New Playlist'} />
                {/* <TrackList /> */}
                <a className="Playlist--save">Save to Spotify</a>
            </div>
        );
    }
}

export default Playlist;