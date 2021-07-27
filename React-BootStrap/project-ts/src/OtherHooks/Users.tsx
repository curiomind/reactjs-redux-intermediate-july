import React from 'react';
import { Col, Button } from 'react-bootstrap';
import User from './User';
import { UserDetails } from '../Models';

interface ComponentProps {
  showAlbum: (user?: UserDetails) => void;
}

function Users({ showAlbum }: ComponentProps): JSX.Element {
  const [users, setUsers] = React.useState<UserDetails[]>([]);
  const [selectedUser, setSelectedUser] = React.useState<UserDetails>();

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
    setSelectedUser(undefined);
  }, []);

  const userCards = users
    .filter((item) => (selectedUser && selectedUser.id ? selectedUser.id === item.id : true))
    .map((item) => {
      return (
        <Col xs={selectedUser && selectedUser.id ? 12 : 4} key={item.username}>
          {selectedUser && selectedUser.id ? (
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
