import React from 'react';

function User({ userDetails, onAlbumClick }) {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">{userDetails.name}</h5>
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
        <button className="btn btn-primary" onClick={onAlbumClick.bind(null, userDetails)}>
          Albums
        </button>
      </div>
    </div>
  );
}

export default React.memo(User);
