import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reserveRocket } from '../redux/rockets/rocketsSlice';
import { btnBookStyle, reservedStyle, btnCancelStyle } from './RocketBtnStyles';

const RocketList = ({ item }) => {
  const dispatch = useDispatch();
  const {
    id, rocket_name: rocketName, description, flickr_images: rocketImage,
  } = item;
  const [firstImage] = rocketImage;

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
