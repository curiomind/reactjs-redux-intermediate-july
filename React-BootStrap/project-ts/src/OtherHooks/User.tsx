import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { UserDetails } from '../Models';

interface ComponentProps {
  userDetails: UserDetails;
  onAlbumClick: (user: UserDetails) => void;
}

function User({ userDetails, onAlbumClick }: ComponentProps): JSX.Element {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{userDetails.name}</Card.Title>
        <Card.Text as="div">
          <dl className="row">
            <dt className="col-sm-3">Username</dt>
            <dd className="col-sm-9">{userDetails.username}</dd>

            <dt className="col-sm-3">Email</dt>
            <dd className="col-sm-9">{userDetails.email}</dd>

            <dt className="col-sm-3">Phone</dt>
            <dd className="col-sm-9">{userDetails.phone}</dd>

            <dt className="col-sm-3">Website</dt>
            <dd className="col-sm-9">{userDetails.website}</dd>

            <dt className="col-sm-3">Company</dt>
            <dd className="col-sm-9">
              <dl className="row">
                <dt className="col-sm-4">Name</dt>
                <dd className="col-sm-8">{userDetails.company.name}</dd>
                <dt className="col-sm-4">Catch Phrase</dt>
                <dd className="col-sm-8">{userDetails.company.catchPhrase}</dd>
                <dt className="col-sm-4">Slogan</dt>
                <dd className="col-sm-8">{userDetails.company.bs}</dd>
              </dl>
            </dd>
          </dl>
          <Button variant="primary" onClick={() => onAlbumClick(userDetails)}>
            Albums
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default React.memo(User);
