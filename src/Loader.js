import React from 'react';
import PropTypes from 'prop-types';

const Loader = ({top}) => {
  const loaderTop = top ? `${top}%` : '25%';
  
  return (
      <div 
      className="loader spinner-grow text-secondary" 
      role="status" 
      style={{top: loaderTop}}>
        <span className="sr-only">Загрузка...</span>
      </div>
  );
};

Loader.propTypes = {
  top: PropTypes.number,
}

export default Loader;