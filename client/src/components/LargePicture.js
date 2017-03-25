import React from 'react';

export default class LargePicture extends React.Component {
  render() {
    return (
      <div>
        <img alt={this.props.picture.name} src={this.props.picture.path}/>
      </div>
    );
  }
}
