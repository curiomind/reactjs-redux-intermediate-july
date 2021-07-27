import React from 'react';

function Album({ album, parentId }) {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`flush-heading-${album.id}`}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#flush-collapse-${album.id}`}
          aria-expanded="false"
          aria-controls={`flush-collapse-${album.id}`}>
          {album.title}
        </button>
      </h2>
      <div
        id={`flush-collapse-${album.id}`}
        className="accordion-collapse collapse"
        aria-labelledby={`flush-heading-${album.id}`}
        data-bs-parent={`#${parentId}`}>
        <div className="accordion-body">Sample Body</div>
      </div>
    </div>
  );
}

export default React.memo(Album);
