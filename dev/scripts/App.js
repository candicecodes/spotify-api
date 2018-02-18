import React from 'react';
import ReactDOM from 'react-dom';
import Playlist from './Playlist';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: [
                { 
                    name1: "name1", 
                    artist1: "artist1", 
                    album1: "album1"
                },
                { 
                    name2: "name2", 
                    artist2: "artist2", 
                    album2: "album2" 
                }, 
                { 
                    name3: "name3", 
                    artist3: "artist3", 
                    album3: "album3" 
                }
            ],
            playlistName: "Playlist Name",
            playlistTracks: [
                {
                    name: "name",
                    artist: "artist",
                    album: "album"
                }
            ]
        };
    }
    render() {
        return (
            <div>
                <h1>Gr<span className="highlight">ooo</span>vin'</h1>
                <div className="App">
                    <SearchBar />
                    <div className="App-playlist">
                        <SearchResults searchResults={this.state.searchResults} />
                        <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));