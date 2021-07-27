import React from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import Users from './Users';
import Albums from './Albums';

export default function OtherHooks() {
  const [selectedUser, setSelectedUser] = React.useState({});
  const [albums, setAlbums] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const handleShowAlbum = (userDetails) => {
    setSelectedUser(userDetails);
  };

  React.useEffect(() => {
    if (selectedUser && selectedUser.id) {
      setLoading(true);
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${selectedUser.id}/albums`)
        .then((res) => {
          if (res) {
            setAlbums(res.data);
          } else {
            setAlbums([]);
          }
        })
        .catch(() => {
          setAlbums([]);
        })
        .finally(() => setLoading(false));
    } else {
      setAlbums([]);
    }
  }, [selectedUser]);

  return (
    <Container>
      <Row className="mb-3">
        <Col xs={12}>
          <h1>Other Hook</h1>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col xs={12}>
          <Users showAlbum={handleShowAlbum} />
        </Col>
      </Row>

      {loading ? (
        <Row>
          <Col xs={12}>Loading Albums ....</Col>
        </Row>
      ) : null}

      <Row className="mb-5" style={{ display: albums.length > 0 ? 'block' : 'none' }}>
        <Col xs={12}>
          <Albums albums={albums} />
        </Col>
      </Row>
    </Container>
  );
}
