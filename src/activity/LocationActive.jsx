import React, { useState, useEffect } from 'react';

const LocationActive = () => {
  const [location, setLocation] = useState('Ahmedabad 380002');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`)
        .then(response => response.json())
        .then(data => setLocation(data.display_name));
    });
  }, []);

  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center justify-between w-1/2">
        <span className="text-gray-600">Delivering to:</span>
        <strong className="text-lg">{location}</strong>
        <button className="text-sm text-blue-600 hover:underline">Update location</button>
      </div>
    </div>
  );
};

export default LocationActive;