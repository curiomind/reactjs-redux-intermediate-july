import React from 'react';
import User from './User';

function Users({ showAlbum }) {
  const [users, setUsers] = React.useState([]);
  const [selectedUser, setSelectedUser] = React.useState({});

  React.useLayoutEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  React.useEffect(() => {
    showAlbum(selectedUser);
  });

  const handleAlbumCLick = React.useCallback((userDetails) => setSelectedUser(userDetails), []);
  const handleBackClick = React.useCallback((event) => {
    event.preventDefault();
    setSelectedUser({});
  }, []);

  const userCards = users
    .filter((item) => (selectedUser && selectedUser.id ? selectedUser.id === item.id : true))
    .map((item) => {
      return (
        <div className={selectedUser.id ? 'col-12' : 'col-4'} key={item.username}>
          {selectedUser.id ? (
            <button className="btn btn-info btn-sm" onClick={handleBackClick}>
              Back
            </button>
          ) : null}
          <User userDetails={item} onAlbumClick={handleAlbumCLick} />
        </div>
      );
    });

  return <div className="row">{userCards}</div>;
}

export default React.memo(Users);
