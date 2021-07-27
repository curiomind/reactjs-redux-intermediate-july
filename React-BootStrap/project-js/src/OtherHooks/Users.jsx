import React from 'react';
import { Col, Button } from 'react-bootstrap';
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
        <Col xs={selectedUser.id ? 12 : 4} key={item.username}>
          {selectedUser.id ? (
            <Button variant="info" size="sm" onClick={handleBackClick}>
              Back
            </Button>
          ) : null}
          <User userDetails={item} onAlbumClick={handleAlbumCLick} />
        </Col>
      );
    });

  return <div className="row">{userCards}</div>;
}

export default React.memo(Users);
