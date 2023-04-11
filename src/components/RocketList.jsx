import React from 'react';
import PropTypes from 'prop-types';

const RocketList = ({ item }) => {
  const {
    rocket_name: rocketName, description, flickr_images: rocketImage,
  } = item;
  const [firstImage] = rocketImage;
  return (
    <li className="rocket-container">
      <div><img src={firstImage} alt={rocketName} style={{ width: 200, height: 150 }} /></div>
      <div>
        <h4>{rocketName}</h4>
        <p>{description}</p>
        <button
          type="submit"
          style={{
            backgroundColor: '#007bff',
            border: 0,
            borderRadius: 2,
            color: '#fff',
            padding: 10,
          }}
        >
          Reserve Rocket
        </button>
      </div>
    </li>
  );
};

RocketList.propTypes = {
  item: PropTypes.shape({
    rocket_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default RocketList;
