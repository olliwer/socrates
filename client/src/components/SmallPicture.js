import React from 'react';
import {voteService} from '../services';

export default class SmallPicture extends React.Component {

  vote = (value) => {
  	const vote = {"value": value, "token": this.props.token, "picture": this.props.picture.id}

  	voteService(vote)
  }

  render() {
    return (
      <div className="thumbnail">
        <img alt={this.props.picture.name} src={"http://127.0.0.1:9000" + this.props.picture.path}/>
        <button onClick={() => this.vote(1)} className="icon-vote">&uarr;</button>
        <button onClick={() => this.vote(-1)} className="icon-vote">&darr;</button>
        <span>{this.props.picture.score}</span>
      </div>
    );
  }
}
