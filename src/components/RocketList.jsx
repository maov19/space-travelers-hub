import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reserveRocket } from '../redux/rockets/rocketsSlice';

const RocketList = ({ item }) => {
  const dispatch = useDispatch();
  const {
    id, rocket_name: rocketName, description, flickr_images: rocketImage,
  } = item;
  const [firstImage] = rocketImage;

  const btnBookStyle = {
    backgroundColor: '#007bff',
    border: 0,
    borderRadius: 4,
    color: '#fff',
    padding: 10,
  };

  const reservedStyle = {
    color: '#fff',
    padding: 2,
    backgroundColor: '#18a2b8',
    borderRadius: 5,
    fontSize: 10,
    marginRight: 5,
  };

  const btnCancelStyle = {
    backgroundColor: '#fff',
    border: '1px solid #000',
    borderRadius: 4,
    color: '#989ea3',
    padding: 10,
  };

  const handleClick = (id) => {
    dispatch(reserveRocket(id));
  };

  return (
    <li className="rocket-container">
      <div><img src={firstImage} alt={rocketName} style={{ width: 200, height: 150 }} /></div>
      <div>
        <h4>{rocketName}</h4>
        <p>
          { item.reserved ? (
            <span style={reservedStyle}>
              Reserved
            </span>
          ) : null }
          {description}
        </p>
        {
        item.reserved
          ? (
            <button type="button" style={btnCancelStyle}>
              Cancel Reservation
            </button>
          )
          : (
            <button type="button" onClick={() => handleClick(id)} style={btnBookStyle}>
              Reserve Rocket
            </button>
          )
        }
      </div>
    </li>
  );
};

RocketList.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    rocket_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default RocketList;
