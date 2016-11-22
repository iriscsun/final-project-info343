// Barks component
import React from 'react';
var BarkBox = React.createClass({

    render() {
        return(
            <form onSubmit = {this.props.handleSubmit}>
                <div className="input-field col s12">
                    <input id="message" type="text" className="validate" />
                    <label htmlFor="message">Your message...</label>
                </div>
                <button type="submit" className="btn">Bark</button>
            </form>
        )
    }
});

export default BarkBox;
