
// Barks component
import React from 'react';
import './Bark.css';
var Bark = React.createClass({

    render() {
        return(
            <p className="barkWrapper" onClick={this.props.handleClick}>
                <span className="author">{this.props.data.author}</span>
                <span className="content">{this.props.data.text}</span>
                <span className="likes">Likes:{this.props.data.likes}</span>
            </p>
        )
    }
});

export default Bark;
