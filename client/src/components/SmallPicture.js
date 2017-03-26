import React from 'react';

export default class SmallPicture extends React.Component {
  render() {
    return (
      <div className="thumbnail">
        <img alt={this.props.picture.name} src={this.props.picture.path}/>
        <button className="icon-upvote">&uarr;</button>
        <button className="icon-upvote">&darr;</button>
      </div>
    );
  }
}
