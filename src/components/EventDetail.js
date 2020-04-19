import React from 'react';
import { CustomPlaceholder } from 'react-placeholder-image';
import { Button } from 'react-bootstrap';

const EventDetail = (props) => {
    const { eventName, location, members, organizers } = props;

    const backgroundStyle = {
        backgroundColor: '#cccccc',
        padding: 20
    }

    const containerStyle = {
        display: 'inline-block',
        verticalAlign: 'top',
        paddingLeft: 40
    }

    const h3Style = {
        paddingBottom: 5
    }

    const tableStyle = {
        width: '100%'
    }

    const tdStyle = {
        paddingTop: 20
    }

    const bottomPadding = {
        paddingBottom: 20
    }

    return (
        <div style={backgroundStyle}>
            <CustomPlaceholder 
                width={250} 
                height={250} 
                backgroundColor='#888888' 
                text=' ' 
            />
            <div style={containerStyle}>
                <h3 style={h3Style}>{eventName}</h3>
                <table style={tableStyle}>
                    <tr>
                        <td style={tdStyle}><b>Location</b></td>
                        <td style={tdStyle}>{location}</td>
                    </tr>
                    <tr>
                        <td style={tdStyle}><b>Members</b></td>
                        <td style={tdStyle}>{members}</td>
                    </tr>
                    <tr>
                        <td style={tdStyle}><b>Organizers</b></td>
                        <td style={tdStyle}>{organizers}</td>
                    </tr>
                </table>
                <div style={bottomPadding}/>
                <Button variant='light' size='lg'>Join us</Button>
            </div> 
        </div>
    );
}

export default EventDetail;