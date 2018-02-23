import React from 'react';

class Track extends React.Component {
    constructor(props) {
        super(props);
        this.renderAction = this.renderAction.bind(this);
    }
    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                    {this.renderAction()}
                </div>
                
            </div>
        );
    }
    renderAction() { 
        let isRemoval = true;
        if(isRemoval) {
            return <a className="Track-action">+</a>;
        } else {
            return <a className="Track-action">-</a>;
        }

    }
}

export default Track;