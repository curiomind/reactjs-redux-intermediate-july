import React from 'react';
import { Accordion, Badge } from 'react-bootstrap';
import Album from './Album';

import { UserAlbum } from '../Models';

interface ComponentProps {
  albums: UserAlbum[];
}

function Albums({ albums }: ComponentProps): JSX.Element {
  const count = React.useMemo(() => albums.length, [albums]);

  return (
    <>
      <h3>
        Albums <Badge bg="primary">{count}</Badge>
      </h3>
      <Accordion>
        {albums.map((album) => (
          <Album album={album} key={album.id} />
        ))}
      </Accordion>
    </>
  );
}

export default React.memo(Albums);
