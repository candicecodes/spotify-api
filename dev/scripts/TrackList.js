import React from 'react';
import Track from './Track';

class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                {/* Add a map method that renders a set of Track components */}
                {
                    this.props.tracks.map(track => {
                        return <Track key={track.id} />;
                    })
                }
            </div>
        );
    }
}

export default TrackList;