import React from 'react';
import SmallPicture from './SmallPicture'

export default class PictureRow extends React.Component {
  render() {
    const pictures = [
      {"name": "anttila", "path": "http://127.0.0.1:9000/static/media/uploads/anttila.png", "owner": 1},
      {"name": "anttila", "path": "http://127.0.0.1:9000/static/media/uploads/anttila.png", "owner": 1},
      {"name": "anttila", "path": "http://127.0.0.1:9000/static/media/uploads/anttila.png", "owner": 1},
      {"name": "anttila", "path": "http://127.0.0.1:9000/static/media/uploads/anttila.png", "owner": 1},
      {"name": "anttila", "path": "http://127.0.0.1:9000/static/media/uploads/anttila.png", "owner": 1},
    ]
    return (
      <div className="pictureRow">
        {pictures.map((picture, index) => (
          <SmallPicture key={index} picture={picture} />
        ))}
      </div>
    );
  }
}
