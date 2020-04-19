import React from 'react';

import NavigationBar from './components/NavigationBar';
import EventDetail from './components/EventDetail';
import CurrentMeetup from './components/CurrentMeetup';
import PastMeetups from './components/PastMeetups';

function App() {
  return (
    <div>
      <NavigationBar />
      <EventDetail eventName={'Binomo, $1000 per hari'} location={'Jakarta, Indonesia'} members={1337} organizers={'Budi Setiawan'} />
      <CurrentMeetup />
      <PastMeetups />
    </div>
  );
}

export default App;
