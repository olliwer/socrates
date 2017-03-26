import React from 'react';


export default class LargePicture extends React.Component {
  render() {
    return (
      <div className="largePicture">
        {this.props.picture.loading &&
          <p>Loading...</p>
        }
        {!this.props.picture.loading &&
          <img alt={this.props.picture.name} src={this.props.picture.path}/>
        }
      </div>
    );
  }
}
