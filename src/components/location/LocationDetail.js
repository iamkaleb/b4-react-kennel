import React, { useState, useEffect } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css'

const LocationDetail = props => {
    const [location, setLocation] = useState({ name: "" });

    useEffect(() => {
    LocationManager.get(props.locationId)
        .then(location => {
            setLocation({
                name: location.name,
            });
        });
}, [props.locationId]);

return (
    <div className="card">
        <div className="card-content">
            <picture>
                <img src={require('./kennel.jpg')} alt="Kennel" />
            </picture>
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{location.name}</span></h3>
        </div>
    </div>
    );
}

export default LocationDetail;