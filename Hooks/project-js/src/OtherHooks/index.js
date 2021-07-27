import React from 'react';
import axios from 'axios';
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
        .catch((error) => {
          setAlbums([]);
        })
        .finally(() => setLoading(false));
    } else {
      setAlbums([]);
    }
  }, [selectedUser]);

  return (
    <React.Fragment>
      <div className="container">
        <div className="row mb-3">
          <div className="col-12">
            <h1>Other Hook</h1>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-12">
            <Users showAlbum={handleShowAlbum} />
          </div>
        </div>

        {loading ? (
          <div className="row">
            <div className="col-12">Loading Albums ....</div>
          </div>
        ) : null}

        <div className="row mb-5" style={{ display: albums.length > 0 ? 'block' : 'none' }}>
          <div className="col-12">
            <Albums albums={albums} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
