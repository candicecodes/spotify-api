import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Gr<span className="highlight">ooo</span>vin'</h1>
                <div className="App">
                    <SearchBar />
                    <div className="App-playlist">
                        <SearchResults />
                        <Playlist />
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));