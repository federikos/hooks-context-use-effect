import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Loader from './Loader';

const Card = ({user, loading}) => {
  const [imgLoading, setImgLoading] = useState(true);

  //почему установка в зависимостях user.avatar вместо user не работает, как ожидается?
  //(в этом случае лоадер для картинки появляется только при первом клике на кнопку с имененм пользователя)
  useEffect(() => {
    setImgLoading(true);
  }, [user]);

  function handleImgLoad() {
    setImgLoading(false);
  }

  function handleImgError(e) {
    e.target.onerror = null; 
    e.target.src='https://via.placeholder.com/90x90.png?text=Картинка не загрузилась';
    setImgLoading(false); 
  }

  if (loading) {
    return <Loader />
  }

  if (Object.keys(user).length) {
    return (
      <div className="card">
        {
          imgLoading && <Loader top={10} />
        }
        
        <img 
        src={user.avatar} 
        className="card-img-top" 
        alt={user.name} 
        onLoad={handleImgLoad}  
        onError={handleImgError}
        />
        
        <div className="card-body">
          <h3 className="card-title">{user.name}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">City: {user.details.city}</li>
            <li className="list-group-item">Company: {user.details.company}</li>
            <li className="list-group-item">Position: {user.details.position}</li>
          </ul>
        </div>
      </div>
    );
  }

  return null;
};

Card.propTypes = {
  loading: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    details: PropTypes.shape({
      city: PropTypes.string,
      company: PropTypes.string,
      position: PropTypes.string,
    })
  })
};

export default Card;