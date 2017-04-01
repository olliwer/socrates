import React from 'react';
import SmallPicture from './SmallPicture'

export default class PictureRow extends React.Component {
  render() {
    return (
      <div className="pictureRow">
        {this.props.pictures.map((picture, index) => (
          <SmallPicture key={index} picture={picture} token={this.props.token} />
        ))}
      </div>
    );
  }
}
