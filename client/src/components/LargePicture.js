import React from 'react';

export default class LargePicture extends React.Component {
  render() {
    return (
      <div className="largePicture">
        <img alt={this.props.picture.name} src={this.props.picture.path}/>
      </div>
    );
  }
}
