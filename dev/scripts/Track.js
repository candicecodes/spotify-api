import React from 'react';

class Track extends React.Component {
    constructor(props) {
        super(props);
        this.renderAction = this.renderAction.bind(this);
    }
    render() {
        return (
            <div class="Track">
                <div class="Track-information">
                    <h3>{/* track name will go here */}</h3>
                    <p>{/* track artist will go here */} | {/* track album will go here */}</p>
                    {this.renderAction()}
                </div>
                
            </div>
        );
    }
    renderAction() {
        return (
            <div>
                {/* <a class="Track-action">+ or - will go here</a> */}
                <a class="Track-action">{isRemoval ? '-' : '+'}</a>
            </div>
        );
    }
}

export default Track;