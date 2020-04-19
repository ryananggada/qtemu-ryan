import React, { useState, useEffect } from 'react';

import List from '../components/List';

const AboutPage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                let getAPI = await fetch('https://pokeapi.co/api/v2/pokemon', {method: 'GET'});
                let respondAPI = await getAPI.json();
                setData(respondAPI.results);
                setLoading(false);
            }

            catch(error) {
                console.warn('Error, cannot fetch API!');
            }
        }

        getData();
    }, []);
 
    return (
        <div>
            {loading ? <div>Loading...</div> : <List data={data} />}
        </div>
    );
}

export default AboutPage;