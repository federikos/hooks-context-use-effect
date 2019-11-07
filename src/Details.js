import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Details = ({info}) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  
  useEffect(() => {
    if(Object.keys(info).length ) {
      setLoading(true);
      fetch(`${process.env.REACT_APP_REQUEST_BASE}${info.id}.json`)
        .then(res => res.json())
        .then(res => setUser(res))
        .finally(() => setLoading(false))
    }
  }, [info.id]);

  return (
    <div className="details">
      <Card user={user} loading={loading} />
    </div>
  )
};

Details.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })
};

export default Details;