import React from 'react';
import Album from './Album';

function Albums({ albums }) {
  const count = React.useMemo(() => albums.length, [albums]);

  return (
    <React.Fragment>
      <h3>
        Albums <span className="badge bg-primary">{count}</span>
      </h3>
      <div className="accordion" id="userAlbums">
        {albums.map((album) => (
          <Album album={album} key={album.id} parentId="userAlbums" />
        ))}
      </div>
    </React.Fragment>
  );
}

export default React.memo(Albums);
