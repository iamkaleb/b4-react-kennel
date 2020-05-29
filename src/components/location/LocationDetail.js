import React, { useState, useEffect } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css'

const LocationDetail = props => {
    const [location, setLocation] = useState({ name: "" });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    LocationManager.get(props.locationId)
        .then(location => {
            setLocation({
                name: location.name,
            });
            setIsLoading(false);
        });
}, [props.locationId]);

const handleDelete = () => {
    //invoke the delete function in LocationManger and re-direct to the location list.
    setIsLoading(true);
    LocationManager.delete(props.locationId).then(() =>
      props.history.push("/locations")
    );
  };

return (
    <div className="card">
        <div className="card-content">
            <picture>
                <img src={require('./kennel.jpg')} alt="Kennel" />
            </picture>
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{location.name}</span></h3>
            <button type="button" disabled={isLoading} onClick={handleDelete}>
                Discharge
            </button>
        </div>
    </div>
    );
}

export default LocationDetail;