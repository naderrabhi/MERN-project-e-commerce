import React from 'react';
import PropTypes from 'prop-types' // impt

const Rating = ({ value, text,color }) => {
  return (
    <div className='rating'>
    {/* FIVE STARS */}
      <span>
        <i style={{color}}
          className={
            value >= 1
              ? 'fas fa-star'
              : value >= 0.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
      <i style={{color}}
          className={
            value >= 2
              ? 'fas fa-star'
              : value >= 1.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
      <i style={{color}}
          className={
            value >= 3
              ? 'fas fa-star'
              : value >= 2.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
      <i style={{color}}
          className={
            value >= 4
              ? 'fas fa-star'
              : value >= 3.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
      <i style={{color}}
          className={
            value >= 5
              ? 'fas fa-star'
              : value >= 4.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      {/* END OF FIVE STARS */}
      <span>{text && text }</span>
    </div>
  );
};

// set default props value
// rating star color set to yellow
Rating.defaultProps={
  color:'#f8e825'
}

// set prop types , type check
Rating.prototype={
  value:PropTypes.number.isRequired,
  text:PropTypes.string.isRequired,
  color:PropTypes.string,
}

export default Rating;
