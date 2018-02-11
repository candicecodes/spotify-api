import React from 'react';

class SearchBar extends React.Component {
    render() {
        return (
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" />
                <a>Search</a>
            </div>
        );
    }
}

export default SearchBar;
