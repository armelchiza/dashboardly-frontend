import React, {Component} from 'react';
import './BoardCard.css';

export default class BoardCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { title, description, updatedAt } = this.props
    return (
      <div className="board-card">
        <h1>{ title }</h1>
        <p>{ description }</p>
      </div>
    );
  }

}
