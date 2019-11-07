import React, {useEffect, useState} from 'react';

const List = ({setInfo}) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
      fetch(`${process.env.REACT_APP_REQUEST_BASE}users.json`)
        .then(res => res.json())
        .then(res => setUsers(res));
  }, []);

  function handleClick(id, name) {
    setInfo({id, name})
  }

  return (
    <div className="list btn-group-vertical" role="group" aria-label="Users">
      {
        users.map(user => {
          return (
              <button 
              key={user.id} 
              type="button" 
              className="btn btn-secondary"
              onClick={() => handleClick(user.id, user.name)}
              >
                {user.name}
              </button>
          )
        })
      }
    </div>
  );
};

export default List;