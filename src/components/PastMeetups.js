import React from 'react';
import { Button, Card, CardDeck } from 'react-bootstrap';

const PastMeetups = () => {
    const paddingStyle = {
        padding: 20
    }

    const h3Style = {
        paddingBottom: 10
    }

    return (
        <div style={paddingStyle}>
            <h3 style={h3Style}>Past Meetups</h3>
            <CardDeck>
                <Card bg='light'>
                    <Card.Header>18 January 2020</Card.Header>
                    <Card.Body>
                        <h5>Angular Framework</h5>
                        <p>Visits: 120</p>
                        <Button variant='secondary' size='lg'>View</Button>
                    </Card.Body>
                </Card>
                <Card bg='light'>
                    <Card.Header>11 January 2020</Card.Header>
                    <Card.Body>
                        <h5>BrainFuck Coding</h5>
                        <p>Visits: 150</p>
                        <Button variant='secondary' size='lg'>View</Button>
                    </Card.Body>
                </Card>
                <Card bg='light'>
                    <Card.Header>4 January 2020</Card.Header>
                    <Card.Body>
                        <h5>CSS Styling</h5>
                        <p>Visits: 100</p>
                        <Button variant='secondary' size='lg'>View</Button>
                    </Card.Body>
                </Card>
            </CardDeck>
        </div>
    );
}

export default PastMeetups;