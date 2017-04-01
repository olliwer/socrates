import React from 'react';
import voteService from '../services';

export default class SmallPicture extends React.Component {

  vote(score) {
  	const vote = {"score:": score, "token": "58329bde6c5016c5cd2b92729705dfe9921c5066", "picture": this.props.picture}

  	voteService(vote)
  }

  render() {
    return (
      <div className="thumbnail">
        <img alt={this.props.picture.name} src={"http://127.0.0.1:9000" + this.props.picture.path}/>
        <button onClick={() => this.vote(1)} className="icon-vote">&uarr;</button>
        <button onClick={() => this.vote(-1)} className="icon-vote">&darr;</button>
      </div>
    );
  }
}
