import React from 'react';

import EventDetail from '../components/EventDetail';
import CurrentMeetup from '../components/CurrentMeetup';
import PastMeetups from '../components/PastMeetups';

const HomePage = () => {
    return (
        <div>    
            <EventDetail eventName={'Binomo, $1000 per hari'} location={'Jakarta, Indonesia'} members={1337} organizers={'Budi Setiawan'} />
            <CurrentMeetup />
            <PastMeetups />
        </div>
    );
}

export default HomePage;