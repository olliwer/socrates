import React from 'react';

export default class PictureRow extends React.Component {
  render() {
    const pictures = [
      {"name": "anttila", "path": "/static/media/uploads/anttila.png", "owner": 1},
      {"name": "anttila", "path": "/static/media/uploads/anttila.png", "owner": 1},
      {"name": "anttila", "path": "/static/media/uploads/anttila.png", "owner": 1},
      {"name": "anttila", "path": "/static/media/uploads/anttila.png", "owner": 1},
      {"name": "anttila", "path": "/static/media/uploads/anttila.png", "owner": 1}
    ]
    return (
      <div>
        {pictures.map((picture, index) => (
          <div key={index}>{picture.name}</div>
        ))}
      </div>
    );
  }
}
