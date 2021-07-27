import React from 'react';
import { Accordion } from 'react-bootstrap';

function Album({ album }) {
  return (
    <Accordion.Item eventKey={`album-${album.id}`}>
      <Accordion.Header>{album.title}</Accordion.Header>
      <Accordion.Body>Sample Body for Album - {album.id}</Accordion.Body>
    </Accordion.Item>
  );
}

export default React.memo(Album);
