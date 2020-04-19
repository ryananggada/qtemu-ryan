import React from 'react';

const CurrentMeetup = () => {
    const paddingStyle = {
        padding: 20
    }

    const backgroundStyle = {
        backgroundColor: '#cccccc',
        padding: 20
    }

    const h3Style = {
        paddingBottom: 10
    }

    const h5Style = {
        color: '#777777',
        paddingBottom: 20
    }

    return (
        <div style={paddingStyle}>
            <h3 style={h3Style}>Current Meetup</h3>
            <div style={backgroundStyle}>
                <h4>Awesome Meetup</h4>
                <h5 style={h5Style}>25 January 2020</h5>
                <p>
                    Hello Javascript developers!<br/>
                    Get ready to join our interesting seminar this Friday!<br/>
                    In this seminar, you will learn how to use React for web development.
                </p>
            </div>
        </div>
        
    );
}

export default CurrentMeetup;