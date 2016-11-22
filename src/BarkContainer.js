// Barks component
import React from 'react';
import firebase from 'firebase';
import Bark from './Bark';
import BarkBox from './BarkBox';

var BarkContainer = React.createClass({
    getInitialState() {
        return {barks:[]}
    },
    componentDidMount(){
        // Create a reference to a point called 'tweeets'


        // Set a listener so that, when a value changes, state is set

    },

    // Function to create a neew bark
    createBark(event) {
        event.preventDefault();

        // Get form info
        let bark = {
            author:this.props.user,
            text:event.target.elements['message'].value,
            likes:0,
            time:firebase.database.ServerValue.TIMESTAMP // firebase service
        };

        // Push your bark into your bark reference

        event.target.reset();
    },

    // Function to like a bark
    likeBark(barkId) {
        let ref = this.barkRef.child(barkId);
        ref.once('value').then(function(snapshot) {
            var newLikes = parseInt(snapshot.val().likes) + 1;

            // Update the number of likes on firebase

        });
    },
    render() {

        // Sort keys by likes
        let barkKeys = Object.keys(this.state.barks).sort((a,b) => {
            return this.state.barks[b].likes - this.state.barks[a].likes
        });
        return(
            <section className="container">
                <BarkBox handleSubmit={this.createBark}/>
                {barkKeys.map((d) => {
                    return <div>hello</div>
                })}
            </section>
        )
    }
});

export default BarkContainer;
