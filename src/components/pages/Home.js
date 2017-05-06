import React, {Component} from 'react';
import api from '../../api';
import BoardCard from '../elements/BoardCard';
import './Home.css';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: []
    };
  }
  
  componentDidMount() {
    api.getListOfBoards()
    .then(res => {
      this.setState({ boards: res.body.boards })
    })
  }

  render() {
    let { boards } = this.state
    return (
      <div className="home">
        { boards.map(b =>
          <BoardCard key={b.id}
            title={b.title}
            description={b.description}
            updatedAt={b.updatedAt}
          />
        )}
      </div>
    );
  }

}
