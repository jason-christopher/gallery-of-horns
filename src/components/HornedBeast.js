import React from 'react';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0,
    };
  }

  handleVote = () => {
    this.setState({
      votes: this.state.votes + 1
    });
  };

  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        <p class="votes">{this.state.votes === 0 ? '' : `${this.state.votes} ${this.state.votes === 1 ? 'Vote' : 'Votes'}`}</p>
        <img 
          src={this.props.imageUrl} 
          alt={this.props.description} 
          class="beastPic"
          onClick={this.handleVote}
        />
        <p>{this.props.description}</p>
      </article>
    );
  }
}

export default HornedBeast;
